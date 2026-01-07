import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, ArrowRight, Loader2, AlertCircle } from "lucide-react";
import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";

interface Match {
  id: string;
  name: string;
  matchType: string;
  status: string;
  venue?: string;
  dateTimeIST?: string;
  dateTimeGMT?: string;
  teams?: string[];
}

interface MatchesSectionProps {
  category: "live" | "upcoming" | "completed";
  title: string;
  limit?: number;
}

export default function MatchesSection({ category, title, limit = 4 }: MatchesSectionProps) {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);
  const { isAuthenticated } = useAuth();
  const [, setLocation] = useLocation();

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await fetch("/api/matches");
        const result = await response.json();
        if (result.success) {
          const categoryMatches = result.data[category] || [];
          setMatches(categoryMatches.slice(0, limit));
        }
      } catch (err) {
        console.error(`Error fetching ${category} matches:`, err);
      } finally {
        setLoading(false);
      }
    };

    fetchMatches();
    const interval = setInterval(fetchMatches, 15000);
    return () => clearInterval(interval);
  }, [category, limit]);

  const handleCreateTeam = (matchId: string) => {
    if (!isAuthenticated) {
      setLocation("/login");
      return;
    }
    setLocation(`/team-builder?matchId=${matchId}`);
  };

  const formatTime = (dateString?: string) => {
    if (!dateString) return "TBD";
    try {
      const date = new Date(dateString);
      return date.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
    } catch {
      return "TBD";
    }
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return "TBD";
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      });
    } catch {
      return "TBD";
    }
  };

  const getTeamAbbr = (teamName: string) => {
    return teamName.split(" ").pop()?.substring(0, 3).toUpperCase() || "T";
  };

  if (loading && matches.length === 0) {
    return (
      <div className="flex items-center justify-center py-8">
        <Loader2 className="w-5 h-5 text-primary animate-spin" />
      </div>
    );
  }

  if (matches.length === 0) {
    return (
      <div className="flex items-center justify-center py-8 text-muted-foreground">
        <AlertCircle className="w-4 h-4 mr-2" />
        No {category} matches available
      </div>
    );
  }

  return (
    <section className="py-12">
      <div className="container">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold font-rajdhani text-white">
            {title} <span className="text-primary">MATCHES</span>
          </h2>
          <Link href="/matches">
            <Button variant="ghost" className="text-primary hover:text-primary/80">
              View All <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {matches.map((match) => {
            const team1 = match.teams?.[0] || "Team 1";
            const team2 = match.teams?.[1] || "Team 2";
            const team1Abbr = getTeamAbbr(team1);
            const team2Abbr = getTeamAbbr(team2);

            return (
              <Card
                key={match.id}
                className="bg-white/5 border-white/10 hover:border-primary/30 transition-all overflow-hidden"
              >
                <CardContent className="p-4">
                  {/* Header */}
                  <div className="flex justify-between items-center mb-3">
                    <Badge variant="secondary" className="bg-primary/20 text-primary border-none text-[10px]">
                      {match.matchType || "T20"}
                    </Badge>
                    <div className="text-[10px] text-muted-foreground">
                      {formatDate(match.dateTimeIST || match.dateTimeGMT)}
                    </div>
                  </div>

                  {/* Teams */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-center flex-1">
                      <div className="w-10 h-10 rounded-full bg-blue-600 mx-auto mb-1 flex items-center justify-center text-white font-bold text-xs">
                        {team1Abbr[0]}
                      </div>
                      <div className="text-xs font-bold text-white truncate">{team1Abbr}</div>
                    </div>
                    <div className="px-2 text-[10px] font-bold text-muted-foreground">VS</div>
                    <div className="text-center flex-1">
                      <div className="w-10 h-10 rounded-full bg-yellow-500 mx-auto mb-1 flex items-center justify-center text-white font-bold text-xs">
                        {team2Abbr[0]}
                      </div>
                      <div className="text-xs font-bold text-white truncate">{team2Abbr}</div>
                    </div>
                  </div>

                  {/* Time */}
                  <div className="flex items-center gap-1 text-[10px] text-muted-foreground mb-3 px-2">
                    <Clock className="w-3 h-3" />
                    {formatTime(match.dateTimeIST || match.dateTimeGMT)}
                  </div>

                  {/* Venue */}
                  <div className="flex items-center gap-1 text-[10px] text-muted-foreground mb-3 px-2">
                    <MapPin className="w-3 h-3" />
                    <span className="truncate">{match.venue || "Venue TBD"}</span>
                  </div>

                  {/* Button */}
                  <Button
                    onClick={() => handleCreateTeam(match.id)}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-8 text-xs font-bold"
                  >
                    {isAuthenticated ? "CREATE TEAM" : "LOGIN TO PLAY"}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
