import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Calendar, MapPin, ArrowRight, Trophy, Loader2 } from "lucide-react";
import { Link } from "wouter";
import { useState, useEffect } from "react";

interface Match {
  id: string;
  name: string;
  matchType: string;
  status: string;
  venue?: string;
  dateTimeIST?: string;
  teams?: string[];
}

export default function MatchesSection() {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await fetch("/api/matches");
        const result = await response.json();
        if (result.success) {
          // Show only live and upcoming matches on homepage, limited to 4
          const combined = [...result.data.live, ...result.data.upcoming].slice(0, 4);
          setMatches(combined);
        }
      } catch (err) {
        console.error("Error fetching matches for homepage:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMatches();
    const interval = setInterval(fetchMatches, 15000);
    return () => clearInterval(interval);
  }, []);

  if (loading && matches.length === 0) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="w-6 h-6 text-primary animate-spin" />
      </div>
    );
  }

  if (matches.length === 0) return null;

  return (
    <section className="py-12 bg-black/20">
      <div className="container">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold font-rajdhani text-white">
            FEATURED <span className="text-primary">MATCHES</span>
          </h2>
          <Link href="/matches">
            <Button variant="ghost" className="text-primary hover:text-primary/80">
              View All <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {matches.map((match) => (
            <Card key={match.id} className="bg-white/5 border-white/10 hover:border-primary/30 transition-all">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <Badge variant="secondary" className="bg-primary/20 text-primary border-none">
                    {match.matchType || "T20"}
                  </Badge>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    {match.dateTimeIST ? new Date(match.dateTimeIST).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true }) : "TBD"}
                  </div>
                </div>

                <div className="flex items-center justify-between mb-6">
                  <div className="text-center flex-1">
                    <div className="w-12 h-12 rounded-full bg-blue-600 mx-auto mb-2 flex items-center justify-center text-white font-bold">
                      {match.teams?.[0]?.[0] || "T"}
                    </div>
                    <div className="text-sm font-bold text-white truncate">{match.teams?.[0] || "Team 1"}</div>
                  </div>
                  <div className="px-4 text-xs font-bold text-muted-foreground">VS</div>
                  <div className="text-center flex-1">
                    <div className="w-12 h-12 rounded-full bg-yellow-500 mx-auto mb-2 flex items-center justify-center text-white font-bold">
                      {match.teams?.[1]?.[0] || "T"}
                    </div>
                    <div className="text-sm font-bold text-white truncate">{match.teams?.[1] || "Team 2"}</div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
                    <MapPin className="w-3 h-3" />
                    <span className="truncate max-w-[120px]">{match.venue || "Venue TBD"}</span>
                  </div>
                  <Link href={`/team-builder?matchId=${match.id}`}>
                    <Button size="sm" className="bg-primary text-primary-foreground h-8 text-xs font-bold">
                      CREATE TEAM
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
