import axios from "axios";

const CRIC_API_KEY = "1a822521-d7e0-46ff-98d3-3e51020863f3";
const BASE_URL = "https://api.cricapi.com/v1";

export interface Match {
  id: string;
  name: string;
  matchType: string;
  status: string;
  venue?: string;
  date?: string;
  dateTimeGMT?: string;
  teams?: string[];
  teamInfo?: Array<{
    name: string;
    shortname: string;
  }>;
  score?: Array<{
    inning: string;
    runs: number;
    wickets: number;
    overs: number;
  }>;
  series?: string;
  tossWonBy?: string;
  tossDecision?: string;
}

export interface MatchesResponse {
  status: string;
  info: string;
  data: Match[];
}

/**
 * Fetch all matches from CricAPI
 */
export async function getAllMatches(): Promise<Match[]> {
  try {
    const response = await axios.get<MatchesResponse>(
      `${BASE_URL}/matches`,
      {
        params: {
          apikey: CRIC_API_KEY,
        },
        timeout: 10000,
      }
    );

    if (response.data.status === "success" && response.data.data) {
      return response.data.data;
    }
    return [];
  } catch (error) {
    console.error("Error fetching matches from CricAPI:", error);
    return [];
  }
}

/**
 * Get live matches
 */
export async function getLiveMatches(): Promise<Match[]> {
  const allMatches = await getAllMatches();
  return allMatches.filter((match) => match.status === "live");
}

/**
 * Get upcoming matches
 */
export async function getUpcomingMatches(): Promise<Match[]> {
  const allMatches = await getAllMatches();
  return allMatches.filter((match) => match.status === "upcoming");
}

/**
 * Get completed matches
 */
export async function getCompletedMatches(): Promise<Match[]> {
  const allMatches = await getAllMatches();
  return allMatches.filter((match) => match.status === "completed");
}

/**
 * Get match details by ID
 */
export async function getMatchDetails(matchId: string): Promise<Match | null> {
  try {
    const response = await axios.get<{ status: string; info: string; data: Match }>(
      `${BASE_URL}/match_info`,
      {
        params: {
          apikey: CRIC_API_KEY,
          id: matchId,
        },
        timeout: 10000,
      }
    );

    if (response.data.status === "success" && response.data.data) {
      return response.data.data;
    }
    return null;
  } catch (error) {
    console.error(`Error fetching match details for ID ${matchId}:`, error);
    return null;
  }
}

/**
 * Get match squad by ID
 */
export async function getMatchSquad(matchId: string): Promise<any> {
  try {
    const response = await axios.get(
      `${BASE_URL}/match_squad`,
      {
        params: {
          apikey: CRIC_API_KEY,
          id: matchId,
        },
        timeout: 10000,
      }
    );

    if (response.data.status === "success" && response.data.data) {
      return response.data.data;
    }
    return null;
  } catch (error) {
    console.error(`Error fetching squad for match ID ${matchId}:`, error);
    return null;
  }
}

/**
 * Get series list
 */
export async function getSeries(): Promise<any[]> {
  try {
    const response = await axios.get(
      `${BASE_URL}/series`,
      {
        params: {
          apikey: CRIC_API_KEY,
        },
        timeout: 10000,
      }
    );

    if (response.data.status === "success" && response.data.data) {
      return response.data.data;
    }
    return [];
  } catch (error) {
    console.error("Error fetching series from CricAPI:", error);
    return [];
  }
}
