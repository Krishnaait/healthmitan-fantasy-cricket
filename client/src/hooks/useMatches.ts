import { useState, useEffect } from "react";

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

export interface MatchesData {
  live: Match[];
  upcoming: Match[];
  completed: Match[];
}

export function useMatches(refreshInterval: number = 60000) {
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

    // Set up interval for auto-refresh
    const interval = setInterval(fetchMatches, refreshInterval);

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, [refreshInterval]);

  return { data, loading, error, refetch: fetchMatches };
}
