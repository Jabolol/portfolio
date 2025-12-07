import { ApiErrorResponse, ApiResponse, Year } from "~/types.ts";

const API_URL = "https://github-contributions-api.jogruber.de/v4/";
const CACHE_KEY = ["github_contributions"];
const CACHE_TTL_MS = 10 * 60 * 1000;

const isError = (
  data: ApiResponse | ApiErrorResponse,
): data is ApiErrorResponse => (data as ApiErrorResponse).error !== undefined;

export interface CachedContributions {
  data: ApiResponse;
  timestamp: number;
}

export async function fetchFromAPI(
  username: string,
  year: Year,
): Promise<ApiResponse> {
  const response = await fetch(`${API_URL}${username}?y=${year}`);
  const data: ApiResponse | ApiErrorResponse = await response.json();

  if (isError(data)) {
    throw new Error(data.error);
  }

  return data;
}

export async function getCachedContributions(
  username: string,
): Promise<ApiResponse | null> {
  const kv = await Deno.openKv();
  const result = await kv.get<CachedContributions>([...CACHE_KEY, username]);
  kv.close();

  if (!result.value) {
    return null;
  }

  const now = Date.now();
  const age = now - result.value.timestamp;

  if (age < CACHE_TTL_MS) {
    return result.value.data;
  }

  return null;
}

export async function setCachedContributions(
  username: string,
  data: ApiResponse,
): Promise<void> {
  const kv = await Deno.openKv();
  const cached: CachedContributions = {
    data,
    timestamp: Date.now(),
  };
  await kv.set([...CACHE_KEY, username], cached);
  kv.close();
}

export async function refreshContributionsCache(
  username: string,
): Promise<void> {
  try {
    console.log(`[cache] Refreshing contributions cache for ${username}...`);
    const data = await fetchFromAPI(username, "last");
    await setCachedContributions(username, data);
    console.log(`[cache] Successfully refreshed cache for ${username}`);
  } catch (error) {
    console.error(`[cache] Error refreshing cache for ${username}:`, error);
  }
}
