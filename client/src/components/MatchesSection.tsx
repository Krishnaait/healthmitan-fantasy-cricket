import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, MapPin, Trophy, ArrowRight, Loader2 } from "lucide-react";
import { Link } from "wouter";
import { useMatches, Match } from "@/hooks/useMatches";

interface MatchesSectionProps {
  title?: string;
  description?: string;
  limit?: number;
}

function MatchCard({ match }: { match: Match }) {
  const teams = match.teams || [];
  const team1 = teams[0] || "Team 1";
  const team2 = teams[1] || "Team 2";
  const shortTeam1 = team1.split(" ").pop()?.substring(0, 3).toUpperCase() || "T1";
  const shortTeam2 = team2.split(" ").pop()?.substring(0, 3).toUpperCase() || "T2";

  const getStatusColor = (status: string) => {
    switch (status) {
      case "live":
        return "bg-red-500/20 border-red-500/50 text-red-400";
      case "upcoming":
        return "bg-blue-500/20 border-blue-500/50 text-blue-400";
      case "completed":
        return "bg-gray-500/20 border-gray-500/50 text-gray-400";
      default:
        return "bg-gray-500/20 border-gray-500/50 text-gray-400";
    }
  };

  const getStatusText = (status: string) => {
    return status.charAt(0).toUpperCase() + status.slice(1);
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return "Date TBD";
    try {
      const date = new Date(dateString);
      return date.toLocaleString("en-IN", {
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
    } catch {
      return dateString;
    }
  };

  return (
    <Card className="bg-white/5 border-white/10 hover:border-primary/50 transition-all duration-300 group overflow-hidden">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <Badge
            variant="outline"
            className={`${getStatusColor(match.status)} border`}
          >
            {getStatusText(match.status)}
          </Badge>
          <Badge variant="outline" className="border-primary/30 text-primary bg-primary/5">
            {match.matchType || "T20"}
          </Badge>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="text-center flex-1">
            <div className="text-2xl font-bold text-white font-rajdhani mb-1">
              {shortTeam1}
            </div>
            <p className="text-xs text-muted-foreground truncate">{team1}</p>
          </div>

          <div className="px-4 text-center">
            <div className="text-sm font-bold text-primary font-rajdhani">VS</div>
          </div>

          <div className="text-center flex-1">
            <div className="text-2xl font-bold text-white font-rajdhani mb-1">
              {shortTeam2}
            </div>
            <p className="text-xs text-muted-foreground truncate">{team2}</p>
          </div>
        </div>

        <div className="space-y-2 mb-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-primary" />
            <span>{formatDate(match.dateTimeIST || match.dateTimeGMT || match.date)}</span>
          </div>
          {match.venue && (
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-secondary" />
              <span className="truncate">{match.venue}</span>
            </div>
          )}
          {match.series && (
            <div className="flex items-center gap-2">
              <Trophy className="w-4 h-4 text-yellow-400" />
              <span className="truncate">{match.series}</span>
            </div>
          )}
        </div>

        <Link href="/team-builder" className="w-full">
          <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-rajdhani font-bold">
            CREATE TEAM <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}

export function MatchesSection({
  title = "UPCOMING MATCHES",
  description = "Join the action and create your fantasy team",
  limit = 4,
}: MatchesSectionProps) {
  const { data, loading, error } = useMatches(true, 15000); // Refresh every 15 seconds for live data

  // Combine and limit matches
  const allMatches = [
    ...data.live.slice(0, limit),
    ...data.upcoming.slice(0, Math.max(0, limit - data.live.length)),
  ];

  if (error && allMatches.length === 0) {
    return (
      <section className="py-24 bg-black/40 border-y border-white/5">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold font-rajdhani text-white mb-4">
              {title}
            </h2>
            <p className="text-muted-foreground mb-8">{error}</p>
            <p className="text-muted-foreground">
              Unable to load matches at the moment. Please try again later.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-black/40 border-y border-white/5">
      <div className="container">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold font-rajdhani text-white mb-2">
              {title}
            </h2>
            <p className="text-muted-foreground">{description}</p>
          </div>
          <Link href="/matches">
            <Button
              variant="outline"
              className="border-primary/30 text-primary hover:bg-primary/10"
            >
              View All Matches <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>

        {loading && allMatches.length === 0 ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="w-8 h-8 text-primary animate-spin" />
            <span className="ml-2 text-muted-foreground">Loading matches...</span>
          </div>
        ) : allMatches.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {allMatches.map((match) => (
              <MatchCard key={match.id} match={match} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No matches available at the moment. Check back soon!
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
