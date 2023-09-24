import { Resvg } from "resvg-wasm";
import { renderToString } from "preact-render-to-string";
import Calendar, { Activity, ThemeInput } from "activity-calendar";
import { ApiErrorResponse, ApiResponse, Year } from "~/types.ts";

const API_URL = "https://github-contributions-api.jogruber.de/v4/";

const selectLastHalfYear = (contributions: Activity[]) =>
  contributions.filter(
    (activity) => (new Date(activity.date).getFullYear() ===
        new Date().getFullYear() &&
      new Date(activity.date).getMonth() > new Date().getMonth() - 6 &&
      new Date(activity.date).getMonth() <= new Date().getMonth()),
  );

const isError = (
  data: ApiResponse | ApiErrorResponse,
): data is ApiErrorResponse => (data as ApiErrorResponse).error !== undefined;

export const fetchCalendarData = async (
  username: string,
  year: Year,
): Promise<ApiResponse> => {
  const response = await fetch(`${API_URL}${username}?y=${year}`);
  const data: ApiResponse | ApiErrorResponse = await response.json();

  if (isError(data)) {
    throw new Error((data as ApiErrorResponse).error);
  }

  return data;
};

export async function getData(
  username: string,
  year: Year,
  mode: "light" | "dark" = "dark",
  half = false,
): Promise<Uint8Array> {
  const { contributions, total } = await fetchCalendarData(username, year);
  const totalCount = year === "last" ? total["lastYear"] : total[year];
  const theme = {
    light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
    dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
  } as ThemeInput;

  const str = renderToString(
    <Calendar
      data={half ? selectLastHalfYear(contributions) : contributions}
      theme={theme}
      labels={{ totalCount: "{{count}} contributions" }}
      totalCount={totalCount}
    />,
  );

  const contents = str.slice(str.indexOf("<svg"), str.indexOf("<footer"))
    .replaceAll(/<svg/g, '<svg xmlns="http://www.w3.org/2000/svg"')
    .replaceAll(
      /data-level="(\d)"/g,
      (_match, level) => `fill="${theme[mode]![+level]}"`,
    );

  return new Resvg(contents, {
    dpi: 100,
    shapeRendering: 2,
    imageRendering: 0,
  }).render().asPng();
}
