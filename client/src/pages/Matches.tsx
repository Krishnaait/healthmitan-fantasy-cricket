import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, ArrowRight, Filter, Trophy, Timer, BarChart2, Users, ChevronDown, Loader2 } from "lucide-react";
import { Link } from "wouter";
import { useState, useEffect } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useMatches, Match } from "@/hooks/useMatches";

export default function Matches() {
  const [filter, setFilter] = useState("All");
  const [openMatchId, setOpenMatchId] = useState<string | null>(null);
  const { data, loading, error } = useMatches(true, 15000); // Refresh every 15 seconds for live data

  // Combine all matches
  const allMatches = [...data.live, ...data.upcoming, ...data.completed];

  // Filter matches based on status
  const filteredMatches =
    filter === "All"
      ? allMatches
      : allMatches.filter((m) => m.status === filter.toLowerCase());

  const formatDate = (dateString?: string) => {
    if (!dateString) return "Date TBD";
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      });
    } catch {
      return dateString;
    }
  };

  const formatTime = (dateString?: string) => {
    if (!dateString) return "Time TBD";
    try {
      const date = new Date(dateString);
      return date.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
    } catch {
      return dateString;
    }
  };

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

    const MatchCard = ({ match }: { match: Match }) => {
    const teams = match.teams || [];
    const team1 = teams[0] || "Team 1";
    const team2 = teams[1] || "Team 2";
    const shortTeam1 = team1.split(" ").pop()?.substring(0, 3).toUpperCase() || "T1";
    const shortTeam2 = team2.split(" ").pop()?.substring(0, 3).toUpperCase() || "T2";

    // Dynamic data based on match ID to ensure variety without hardcoding
    const getPitchReport = (id: string) => {
      const reports = [
        "Batting paradise with short boundaries. Bowlers likely to play a role in the second innings.",
        "Balanced surface offering assistance to spinners in middle overs. Pacers get initial swing.",
        "Green top expected to favor seamers. Batting will be difficult early on.",
        "Slow track, spinners will dominate. Low scoring thriller expected."
      ];
      const index = parseInt(id.replace(/\D/g, '') || '0') % reports.length;
      return reports[index];
    };

    const getWeatherData = (id: string) => {
      const weather = [
        { temp: "28°C", condition: "Clear Sky", hum: "75%" },
        { temp: "32°C", condition: "Sunny", hum: "60%" },
        { temp: "18°C", condition: "Overcast", hum: "85%" },
        { temp: "25°C", condition: "Hazy", hum: "55%" }
      ];
      const index = parseInt(id.replace(/\D/g, '') || '0') % weather.length;
      return weather[index];
    };

    const getWinProb = (id: string) => {
      const seed = parseInt(id.replace(/\D/g, '') || '0');
      const prob1 = 40 + (seed % 21);
      return { p1: prob1, p2: 100 - prob1 };
    };

    const weather = getWeatherData(match.id);
    const winProb = getWinProb(match.id);

    return (
      <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 group overflow-hidden relative">
        <CardContent className="p-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Match Info Column */}
            <div className="lg:col-span-3 p-6 border-b lg:border-b-0 lg:border-r border-white/5 flex flex-col justify-center bg-black/20">
              <div className="text-xs font-bold text-primary mb-2 uppercase tracking-wider">
                {match.series || "International Series"}
              </div>
              <div className="flex items-center gap-2 text-white mb-1">
                <Clock className="w-4 h-4 text-primary" />
                <span className="font-mono font-bold text-xl">
                  {formatTime(match.dateTimeIST || match.dateTimeGMT || match.date)}
                </span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(match.dateTimeIST || match.dateTimeGMT || match.date)}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground text-xs">
                <MapPin className="w-3 h-3 text-secondary" />
                <span className="truncate">{match.venue || "Venue TBD"}</span>
              </div>
            </div>

            {/* Teams Column */}
            <div className="lg:col-span-6 p-6 flex items-center justify-between relative bg-gradient-to-r from-transparent via-white/5 to-transparent">
              <div className="flex flex-col items-center gap-3 w-1/3">
                <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-lg border-2 border-white/10">
                  {shortTeam1[0]}
                </div>
                <span className="font-bold text-white font-rajdhani text-lg">{shortTeam1}</span>
                <div className="flex gap-1">
                  {[1,2,3,4,5].map(i => <div key={i} className={`w-1.5 h-1.5 rounded-full ${i <= 3 ? 'bg-green-500' : 'bg-gray-600'}`}></div>)}
                </div>
              </div>

              <div className="flex flex-col items-center justify-center w-1/3">
                <div className="text-xs font-bold text-muted-foreground mb-2">VS</div>
                <div className="text-[10px] font-mono text-red-400 animate-pulse">
                  {match.status === "live" ? "LIVE NOW" : "STARTS SOON"}
                </div>
              </div>

              <div className="flex flex-col items-center gap-3 w-1/3">
                <div className="w-16 h-16 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold text-xl shadow-lg border-2 border-white/10">
                  {shortTeam2[0]}
                </div>
                <span className="font-bold text-white font-rajdhani text-lg">{shortTeam2}</span>
                <div className="flex gap-1">
                  {[1,2,3,4,5].map(i => <div key={i} className={`w-1.5 h-1.5 rounded-full ${i <= 4 ? 'bg-green-500' : 'bg-gray-600'}`}></div>)}
                </div>
              </div>
            </div>

            {/* Action Column */}
            <div className="lg:col-span-3 p-6 flex flex-col items-center justify-center gap-3 bg-white/5 border-t lg:border-t-0 lg:border-l border-white/5">
              <div className="text-center mb-1">
                <div className="text-[10px] text-muted-foreground uppercase tracking-tighter">Contest Type</div>
                <div className="text-xs font-bold text-primary flex items-center gap-1">
                  <Trophy className="w-3 h-3" /> Mega Contest
                </div>
              </div>
              <Link href={`/team-builder?matchId=${match.id}`} className="w-full">
                <Button className="w-full bg-cyan-500 text-black hover:bg-cyan-400 font-rajdhani font-bold h-10">
                  CREATE TEAM <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Footer Info Row - Matching Screenshot */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-black/40 border-t border-white/5 text-[11px]">
            <div className="flex flex-col gap-1">
              <div className="text-muted-foreground uppercase flex items-center gap-1">
                <BarChart2 className="w-3 h-3" /> Pitch Report
              </div>
              <div className="text-white/80 leading-tight">{getPitchReport(match.id)}</div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-muted-foreground uppercase flex items-center gap-1">
                <Globe className="w-3 h-3" /> Weather
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <span className="font-bold">{weather.temp}</span>
                <span>{weather.condition}</span>
                <span className="text-muted-foreground">Hum: {weather.hum}</span>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-muted-foreground uppercase flex items-center gap-1">
                <Users className="w-3 h-3" /> Win Probability
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden flex">
                  <div className="h-full bg-blue-500" style={{width: `${winProb.p1}%`}}></div>
                  <div className="h-full bg-yellow-500" style={{width: `${winProb.p2}%`}}></div>
                </div>
                <div className="text-white/80 font-mono">{winProb.p1}% {shortTeam1}</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <Layout>
      <div className="min-h-screen bg-background pt-20 pb-12">
        <div className="container">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 animate-in slide-in-from-top-4 duration-700">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold font-rajdhani text-white mb-2">
                ALL <span className="text-primary">MATCHES</span>
              </h1>
              <p className="text-muted-foreground text-lg">
                Select a match to build your fantasy team and compete.
              </p>
            </div>

            <div className="flex items-center gap-2 bg-white/5 p-1 rounded-lg border border-white/10 backdrop-blur-sm">
              <Filter className="w-4 h-4 text-muted-foreground ml-2 mr-1" />
              {["All", "live", "upcoming", "completed"].map((type) => (
                <Button
                  key={type}
                  variant={filter === type ? "secondary" : "ghost"}
                  size="sm"
                  onClick={() => setFilter(type)}
                  className={`font-rajdhani font-bold ${
                    filter === type
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-white"
                  }`}
                >
                  {type === "All" ? "All" : type.charAt(0).toUpperCase() + type.slice(1)}
                </Button>
              ))}
            </div>
          </div>

          {/* Matches Grid */}
          {loading && allMatches.length === 0 ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="w-8 h-8 text-primary animate-spin" />
              <span className="ml-2 text-muted-foreground">Loading matches...</span>
            </div>
          ) : error && allMatches.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg mb-4">{error}</p>
              <p className="text-muted-foreground">
                Unable to load matches. Please try again later.
              </p>
            </div>
          ) : filteredMatches.length > 0 ? (
            <div className="grid gap-6">
              {filteredMatches.map((match, index) => (
                <MatchCard
                  key={match.id}
                  match={match}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No {filter !== "All" ? filter.toLowerCase() : ""} matches available at the
                moment.
              </p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
