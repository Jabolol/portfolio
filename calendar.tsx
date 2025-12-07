import { Resvg } from "resvg-wasm";
import { render } from "preact-render-to-string";
import { Activity, default as Calendar, ThemeInput } from "activity-calendar";
import { ApiResponse, Year } from "~/types.ts";
import { CALENDAR_THEME } from "~/constants/index.ts";
import {
  fetchFromAPI,
  getCachedContributions,
  setCachedContributions,
} from "~/utils/contributions-cache.ts";

export const selectLastHalfYear = (contributions: Activity[]) => {
  const cutoff = new Date();
  cutoff.setHours(0, 0, 0, 0);
  cutoff.setMonth(cutoff.getMonth() - 6);

  return contributions.filter((activity) => new Date(activity.date) >= cutoff);
};

export const totalCountFor = (contributions: Activity[]) =>
  contributions.reduce((sum, { count }) => sum + count, 0);

export const fetchCalendarData = async (
  username: string,
  year: Year,
): Promise<ApiResponse> => {
  const cached = await getCachedContributions(username);
  if (cached) {
    console.log(`[cache] Using cached data for ${username}`);
    return cached;
  }

  console.log(`[cache] Cache miss for ${username}, fetching from API...`);
  const data = await fetchFromAPI(username, year);

  await setCachedContributions(username, data);

  return data;
};

export async function getData(
  username: string,
  year: Year,
  mode: "light" | "dark" = "dark",
  half = false,
): Promise<Uint8Array> {
  const { contributions, total } = await fetchCalendarData(username, year);
  const filtered = half ? selectLastHalfYear(contributions) : contributions;
  const totalCount = half
    ? totalCountFor(filtered)
    : year === "last"
    ? total["lastYear"]
    : total[year];
  const theme = CALENDAR_THEME as ThemeInput;

  const CalendarWrapper = () => (
    // @ts-expect-error React component used in Preact via compat layer
    <Calendar
      data={filtered}
      theme={theme}
      labels={{ totalCount: "{{count}} contributions" }}
      totalCount={totalCount}
    />
  );

  const str = render(<CalendarWrapper />);

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
