import axios from 'axios';

const CRICAPI_KEY = process.env.CRICAPI_KEY || '1a822521-d7e0-46ff-98d3-3e51020863f3';
const CRICAPI_BASE_URL = 'https://api.cricapi.com/v1';

interface Match {
  id: string;
  name: string;
  matchType: string;
  status: string;
  venue?: string;
  date?: string;
  dateTimeGMT?: string;
  teams?: string[];
  teamInfo?: Array<{ name: string; shortname: string }>;
  score?: Array<{ inning: string; runs: number; wickets: number; overs: string }>;
  currentInning?: string;
  runRate?: number;
  target?: number;
}

interface Squad {
  teamId: string;
  teamName: string;
  players: Array<{
    id: string;
    name: string;
    role: string;
    country?: string;
  }>;
}

interface MatchScore {
  matchId: string;
  status: string;
  score: Array<{
    inning: string;
    runs: number;
    wickets: number;
    overs: string;
  }>;
  currentInning?: string;
  runRate?: number;
  target?: number;
}

// Cache to store data temporarily
const cache: Record<string, { data: any; timestamp: number }> = {};
const CACHE_DURATION = 30000; // 30 seconds

function isCacheValid(key: string): boolean {
  const cached = cache[key];
  if (!cached) return false;
  return Date.now() - cached.timestamp < CACHE_DURATION;
}

export async function getMatches(): Promise<Match[]> {
  try {
    const cacheKey = 'matches_list';
    if (isCacheValid(cacheKey)) {
      return cache[cacheKey].data;
    }

    const response = await axios.get(`${CRICAPI_BASE_URL}/matches`, {
      params: {
        apikey: CRICAPI_KEY,
      },
    });

    if (response.data.status === 'success') {
      const matches = response.data.data || [];
      
      // Sort by date (most recent first)
      matches.sort((a: any, b: any) => {
        const dateA = new Date(a.dateTimeGMT || a.date || 0);
        const dateB = new Date(b.dateTimeGMT || b.date || 0);
        return dateB.getTime() - dateA.getTime(); // Descending order
      });

      const formattedMatches: Match[] = matches.map((match: any) => ({
        id: match.id,
        name: match.name,
        matchType: match.matchType || 'T20',
        status: match.status || 'scheduled',
        venue: match.venue,
        date: match.date,
        dateTimeGMT: match.dateTimeGMT,
        teams: match.teams || [],
        teamInfo: match.teamInfo || [],
        score: match.score || [],
        currentInning: match.currentInning,
        runRate: match.runRate,
        target: match.target,
        matchStarted: match.matchStarted || false,
        matchEnded: match.matchEnded || false,
      }));

      cache[cacheKey] = { data: formattedMatches, timestamp: Date.now() };
      return formattedMatches;
    }

    return [];
  } catch (error) {
    console.error('Error fetching matches:', error);
    return [];
  }
}

export async function getMatchInfo(matchId: string): Promise<Match | null> {
  try {
    const cacheKey = `match_${matchId}`;
    if (isCacheValid(cacheKey)) {
      return cache[cacheKey].data;
    }

    const response = await axios.get(`${CRICAPI_BASE_URL}/match_info`, {
      params: {
        apikey: CRICAPI_KEY,
        id: matchId,
      },
    });

    if (response.data.status === 'success') {
      const match = response.data.data;
      const formattedMatch: Match = {
        id: match.id,
        name: match.name,
        matchType: match.matchType || 'T20',
        status: match.status || 'scheduled',
        venue: match.venue,
        date: match.date,
        dateTimeGMT: match.dateTimeGMT,
        teams: match.teams || [],
        teamInfo: match.teamInfo || [],
        score: match.score || [],
        currentInning: match.currentInning,
        runRate: match.runRate,
        target: match.target,
      };

      cache[cacheKey] = { data: formattedMatch, timestamp: Date.now() };
      return formattedMatch;
    }

    return null;
  } catch (error) {
    console.error('Error fetching match info:', error);
    return null;
  }
}

export async function getMatchSquad(matchId: string): Promise<Squad[]> {
  try {
    const cacheKey = `squad_${matchId}`;
    if (isCacheValid(cacheKey)) {
      return cache[cacheKey].data;
    }

    const response = await axios.get(`${CRICAPI_BASE_URL}/match_squad`, {
      params: {
        apikey: CRICAPI_KEY,
        id: matchId,
      },
    });

    if (response.data.status === 'success') {
      const data = response.data.data;
      const squads: Squad[] = [];

      // Process each team's squad
      for (const [teamId, teamData] of Object.entries(data)) {
        if (typeof teamData === 'object' && teamData.players) {
          squads.push({
            teamId,
            teamName: teamData.name || teamId,
            players: Array.isArray(teamData.players)
              ? teamData.players.map((player: any) => ({
                  id: player.id || player.name,
                  name: player.name,
                  role: player.role || 'Unknown',
                  country: player.country,
                }))
              : [],
          });
        }
      }

      cache[cacheKey] = { data: squads, timestamp: Date.now() };
      return squads;
    }

    return [];
  } catch (error) {
    console.error('Error fetching match squad:', error);
    return [];
  }
}

export async function getMatchScore(matchId: string): Promise<MatchScore | null> {
  try {
    const cacheKey = `score_${matchId}`;
    if (isCacheValid(cacheKey)) {
      return cache[cacheKey].data;
    }

    const response = await axios.get(`${CRICAPI_BASE_URL}/match_info`, {
      params: {
        apikey: CRICAPI_KEY,
        id: matchId,
      },
    });

    if (response.data.status === 'success') {
      const match = response.data.data;
      const score: MatchScore = {
        matchId: match.id,
        status: match.status || 'scheduled',
        score: match.score || [],
        currentInning: match.currentInning,
        runRate: match.runRate,
        target: match.target,
      };

      cache[cacheKey] = { data: score, timestamp: Date.now() };
      return score;
    }

    return null;
  } catch (error) {
    console.error('Error fetching match score:', error);
    return null;
  }
}

export async function getMatchesByStatus(status: 'live' | 'upcoming' | 'completed'): Promise<Match[]> {
  try {
    const allMatches = await getMatches();
    const now = new Date();

    return allMatches.filter((match) => {
      const matchDate = new Date(match.dateTimeGMT || match.date || 0);
      
      if (status === 'live') {
        return match.status === 'live' || match.status === 'inprogress';
      } else if (status === 'upcoming') {
        return matchDate > now && (match.status === 'scheduled' || match.status === 'upcoming');
      } else if (status === 'completed') {
        return match.status === 'completed' || match.status === 'result';
      }

      return false;
    });
  } catch (error) {
    console.error(`Error fetching ${status} matches:`, error);
    return [];
  }
}

export function convertToIST(dateString: string): string {
  try {
    const date = new Date(dateString);
    const istDate = new Date(date.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
    return istDate.toLocaleString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
  } catch {
    return dateString;
  }
}
