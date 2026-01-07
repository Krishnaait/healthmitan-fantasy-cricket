import { useState, useEffect } from "react";

export interface Match {
  id: string;
  name: string;
  matchType: string;
  status: string;
  venue?: string;
  date?: string;
  dateTimeGMT?: string;
  dateTimeIST?: string;
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

export interface MatchesData {
  live: Match[];
  upcoming: Match[];
  completed: Match[];
}

export function useMatches(autoRefresh: boolean = true, refreshInterval: number = 15000) {
  const [data, setData] = useState<MatchesData>({
    live: [],
    upcoming: [],
    completed: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchMatches = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/matches");
      
      if (!response.ok) {
        throw new Error("Failed to fetch matches");
      }

      const result = await response.json();
      
      if (result.success && result.data) {
        setData(result.data);
        setError(null);
      } else {
        throw new Error("Invalid response format");
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Unknown error";
      setError(errorMessage);
      console.error("Error fetching matches:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Fetch immediately on mount
    fetchMatches();

    // Set up interval for auto-refresh only if enabled
    if (autoRefresh) {
      const interval = setInterval(fetchMatches, refreshInterval);
      return () => clearInterval(interval);
    }
  }, [autoRefresh, refreshInterval]);

  return { data, loading, error, refetch: fetchMatches };
}

export function useLiveMatches(autoRefresh: boolean = true, refreshInterval: number = 15000) {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchMatches = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/matches/live");
      
      if (!response.ok) {
        throw new Error("Failed to fetch live matches");
      }

      const result = await response.json();
      
      if (result.success && result.data) {
        setMatches(result.data);
        setError(null);
      } else {
        throw new Error("Invalid response format");
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Unknown error";
      setError(errorMessage);
      console.error("Error fetching live matches:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMatches();

    if (autoRefresh) {
      const interval = setInterval(fetchMatches, refreshInterval);
      return () => clearInterval(interval);
    }
  }, [autoRefresh, refreshInterval]);

  return { matches, loading, error, refetch: fetchMatches };
}

export function useUpcomingMatches(autoRefresh: boolean = true, refreshInterval: number = 30000) {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchMatches = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/matches/upcoming");
      
      if (!response.ok) {
        throw new Error("Failed to fetch upcoming matches");
      }

      const result = await response.json();
      
      if (result.success && result.data) {
        setMatches(result.data);
        setError(null);
      } else {
        throw new Error("Invalid response format");
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Unknown error";
      setError(errorMessage);
      console.error("Error fetching upcoming matches:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMatches();

    if (autoRefresh) {
      const interval = setInterval(fetchMatches, refreshInterval);
      return () => clearInterval(interval);
    }
  }, [autoRefresh, refreshInterval]);

  return { matches, loading, error, refetch: fetchMatches };
}

export function useCompletedMatches(autoRefresh: boolean = false, refreshInterval: number = 60000) {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchMatches = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/matches/completed");
      
      if (!response.ok) {
        throw new Error("Failed to fetch completed matches");
      }

      const result = await response.json();
      
      if (result.success && result.data) {
        setMatches(result.data);
        setError(null);
      } else {
        throw new Error("Invalid response format");
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Unknown error";
      setError(errorMessage);
      console.error("Error fetching completed matches:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMatches();

    if (autoRefresh) {
      const interval = setInterval(fetchMatches, refreshInterval);
      return () => clearInterval(interval);
    }
  }, [autoRefresh, refreshInterval]);

  return { matches, loading, error, refetch: fetchMatches };
}

export async function fetchMatchSquad(matchId: string) {
  try {
    const response = await fetch(`/api/matches/${matchId}/squad`);
    
    if (!response.ok) {
      throw new Error("Failed to fetch squad");
    }

    const data = await response.json();

    if (data.success) {
      return data.data;
    } else {
      throw new Error(data.error || "Failed to fetch squad");
    }
  } catch (err) {
    throw err instanceof Error ? err : new Error("Failed to fetch squad");
  }
}

export async function fetchMatchScore(matchId: string) {
  try {
    const response = await fetch(`/api/matches/${matchId}/score`);
    
    if (!response.ok) {
      throw new Error("Failed to fetch score");
    }

    const data = await response.json();

    if (data.success) {
      return data.data;
    } else {
      throw new Error(data.error || "Failed to fetch score");
    }
  } catch (err) {
    throw err instanceof Error ? err : new Error("Failed to fetch score");
  }
}
