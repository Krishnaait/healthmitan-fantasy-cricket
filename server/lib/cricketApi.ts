import axios from "axios";

const CRIC_API_KEY = "1a822521-d7e0-46ff-98d3-3e51020863f3";
const BASE_URL = "https://api.cricapi.com/v1";

/**
 * Fetch all matches from CricAPI
 * This is the primary endpoint for getting match data
 */
export async function getAllMatches() {
  try {
    const response = await axios.get(`${BASE_URL}/matches`, {
      params: { apikey: CRIC_API_KEY },
      timeout: 10000,
    });

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
 * Get match details by ID
 * Used for fetching detailed information about a specific match
 */
export async function getMatchDetails(matchId: string) {
  try {
    const response = await axios.get(`${BASE_URL}/match_info`, {
      params: { apikey: CRIC_API_KEY, id: matchId },
      timeout: 10000,
    });

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
 * Used for fetching the list of players in a match for team building
 */
export async function getMatchSquad(matchId: string) {
  try {
    const response = await axios.get(`${BASE_URL}/match_squad`, {
      params: { apikey: CRIC_API_KEY, id: matchId },
      timeout: 10000,
    });

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
 * Get live score for a match
 * Used for real-time score updates
 */
export async function getLiveScore(matchId: string) {
  try {
    const response = await axios.get(`${BASE_URL}/cricscore`, {
      params: { apikey: CRIC_API_KEY, id: matchId },
      timeout: 10000,
    });

    if (response.data.status === "success" && response.data.data) {
      return response.data.data;
    }
    return null;
  } catch (error) {
    console.error(`Error fetching live score for match ID ${matchId}:`, error);
    return null;
  }
}

/**
 * Get series list
 * Used for filtering matches by series
 */
export async function getSeries() {
  try {
    const response = await axios.get(`${BASE_URL}/series`, {
      params: { apikey: CRIC_API_KEY },
      timeout: 10000,
    });

    if (response.data.status === "success" && response.data.data) {
      return response.data.data;
    }
    return [];
  } catch (error) {
    console.error("Error fetching series from CricAPI:", error);
    return [];
  }
}

/**
 * Convert GMT time to IST (Indian Standard Time)
 * Required for displaying times in IST as per PDF
 */
export function convertToIST(dateString: string): string {
  try {
    const date = new Date(dateString);
    const istDate = new Date(
      date.toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
    );
    return istDate.toISOString();
  } catch {
    return dateString;
  }
}

/**
 * Filter matches by status
 * Handles the complex status filtering from CricAPI
 */
export function filterMatchesByStatus(
  matches: any[],
  status: "live" | "upcoming" | "completed"
) {
  const now = new Date();

  return matches.filter((match) => {
    const matchDate = new Date(match.dateTimeGMT || match.date || 0);
    const matchStatus = match.status?.toLowerCase() || "";

    switch (status) {
      case "live":
        return (
          matchStatus.includes("live") ||
          matchStatus.includes("inprogress") ||
          matchStatus.includes("batting") ||
          matchStatus.includes("bowling")
        );
      case "upcoming":
        return (
          matchDate >= now &&
          (matchStatus.includes("upcoming") ||
            matchStatus.includes("scheduled") ||
            matchStatus === "")
        );
      case "completed":
        return (
          matchStatus.includes("won by") ||
          matchStatus.includes("result") ||
          matchStatus.includes("draw") ||
          matchStatus.includes("tied") ||
          matchStatus.includes("abandoned") ||
          matchStatus.includes("no result")
        );
      default:
        return false;
    }
  });
}
