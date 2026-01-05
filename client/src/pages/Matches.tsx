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
  const { data, loading, error } = useMatches(30000); // Refresh every 30 seconds

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
      return date.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
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

    return (
      <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group overflow-hidden relative">
        <div className="absolute top-0 left-0 w-1 h-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        <CardContent className="p-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Match Info Column */}
            <div className="lg:col-span-3 p-6 border-b lg:border-b-0 lg:border-r border-white/5 flex flex-col justify-center bg-black/20">
              <div className="flex items-center gap-2 mb-3">
                <Badge
                  variant="outline"
                  className={`${getStatusColor(match.status)} border text-xs font-bold px-2 py-0.5 rounded-sm`}
                >
                  {getStatusText(match.status)}
                </Badge>
              </div>
              <div className="flex items-center gap-2 text-white mb-1">
                <Clock className="w-4 h-4 text-primary" />
                <span className="font-mono font-bold text-lg">
                  {formatTime(match.dateTimeGMT || match.date)}
                </span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(match.dateTimeGMT || match.date)}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground text-sm mt-3 pt-3 border-t border-white/5">
                <MapPin className="w-4 h-4 text-secondary" />
                <span className="truncate">{match.venue || "Venue TBD"}</span>
              </div>
            </div>

            {/* Teams Column */}
            <div className="lg:col-span-6 p-6 flex items-center justify-between relative bg-gradient-to-r from-transparent via-white/5 to-transparent">
              {/* Team 1 */}
              <div className="flex flex-col items-center gap-3 w-1/3 group-hover:transform group-hover:-translate-x-2 transition-transform duration-300">
                <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-2xl shadow-[0_0_20px_rgba(0,0,0,0.5)] border-4 border-white/10 relative overflow-hidden">
                  <span className="relative z-10">{shortTeam1[0]}</span>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                </div>
                <div className="text-center">
                  <span className="font-bold text-white font-rajdhani text-xl block">
                    {shortTeam1}
                  </span>
                </div>
              </div>

              {/* VS Badge */}
              <div className="flex flex-col items-center justify-center w-1/3 z-10">
                <div className="w-12 h-12 rounded-full bg-black/50 border border-white/10 flex items-center justify-center backdrop-blur-md mb-2">
                  <span className="text-lg font-bold text-white font-rajdhani">VS</span>
                </div>
                <div className="flex items-center gap-1.5 bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
                  <Timer className="w-3 h-3 text-primary" />
                  <span className="text-xs font-mono text-primary font-bold">
                    {match.status === "live" ? "LIVE" : "UPCOMING"}
                  </span>
                </div>
              </div>

              {/* Team 2 */}
              <div className="flex flex-col items-center gap-3 w-1/3 group-hover:transform group-hover:translate-x-2 transition-transform duration-300">
                <div className="w-20 h-20 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold text-2xl shadow-[0_0_20px_rgba(0,0,0,0.5)] border-4 border-white/10 relative overflow-hidden">
                  <span className="relative z-10">{shortTeam2[0]}</span>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                </div>
                <div className="text-center">
                  <span className="font-bold text-white font-rajdhani text-xl block">
                    {shortTeam2}
                  </span>
                </div>
              </div>
            </div>

            {/* Action Column */}
            <div className="lg:col-span-3 p-6 flex flex-col items-center justify-center gap-4 bg-white/5 border-t lg:border-t-0 lg:border-l border-white/5">
              <div className="flex items-center gap-4 w-full justify-between lg:justify-center text-sm px-2">
                <div className="flex flex-col items-start lg:items-center">
                  <span className="text-muted-foreground text-xs uppercase tracking-wider">
                    Match Type
                  </span>
                  <div className="flex items-center gap-1.5 text-white font-bold">
                    <Trophy className="w-3 h-3 text-yellow-400" />
                    {match.matchType || "T20"}
                  </div>
                </div>
                <div className="h-8 w-px bg-white/10 hidden lg:block"></div>
                <div className="flex flex-col items-end lg:items-center">
                  <span className="text-muted-foreground text-xs uppercase tracking-wider">
                    Entry Fee
                  </span>
                  <span className="text-green-400 font-bold">FREE</span>
                </div>
              </div>

              <Link href="/team-builder" className="w-full">
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-rajdhani font-bold text-lg h-12 shadow-[0_0_15px_rgba(6,182,212,0.2)] group-hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all">
                  CREATE TEAM <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>

              <Collapsible
                open={openMatchId === match.id}
                onOpenChange={() =>
                  setOpenMatchId(openMatchId === match.id ? null : match.id)
                }
                className="w-full lg:hidden"
              >
                <CollapsibleTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full text-xs text-muted-foreground hover:text-white"
                  >
                    More Details <ChevronDown className="ml-2 w-3 h-3" />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {match.series && (
                    <div>
                      <span className="font-bold text-white">Series:</span> {match.series}
                    </div>
                  )}
                  {match.tossWonBy && (
                    <div>
                      <span className="font-bold text-white">Toss Won By:</span>{" "}
                      {match.tossWonBy}
                    </div>
                  )}
                </CollapsibleContent>
              </Collapsible>
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
