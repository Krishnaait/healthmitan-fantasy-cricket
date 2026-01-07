import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Star, Shield, ArrowRight, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { fetchMatchSquad } from "@/hooks/useMatches";
import { toast } from "sonner";

interface Player {
  id: string;
  name: string;
  role: string;
  team: string;
}

export default function TeamBuilder() {
  const [location] = useLocation();
  const params = new URLSearchParams(location.split("?")[1]);
  const matchId = params.get("matchId");

  const [players, setPlayers] = useState<Player[]>([]);
  const [selectedPlayers, setSelectedPlayers] = useState<string[]>([]);
  const [captain, setCaptain] = useState<string | null>(null);
  const [viceCaptain, setViceCaptain] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!matchId) return;

    const loadSquad = async () => {
      try {
        setLoading(true);
        const squadData = await fetchMatchSquad(matchId);
        
        const allPlayers: Player[] = [];
        if (squadData && Array.isArray(squadData)) {
          squadData.forEach((team: any) => {
            if (team.players && Array.isArray(team.players)) {
              team.players.forEach((p: any) => {
                allPlayers.push({
                  id: p.id,
                  name: p.name,
                  role: p.role || "Player",
                  team: team.teamName
                });
              });
            }
          });
        }
        setPlayers(allPlayers);
      } catch (error) {
        console.error("Error loading squad:", error);
        toast.error("Failed to load match squad");
      } finally {
        setLoading(false);
      }
    };

    loadSquad();
  }, [matchId]);

  const togglePlayer = (playerId: string) => {
    if (selectedPlayers.includes(playerId)) {
      setSelectedPlayers(selectedPlayers.filter(id => id !== playerId));
      if (captain === playerId) setCaptain(null);
      if (viceCaptain === playerId) setViceCaptain(null);
    } else {
      if (selectedPlayers.length >= 11) {
        toast.error("You can only select 11 players");
        return;
      }
      setSelectedPlayers([...selectedPlayers, playerId]);
    }
  };

  const handleSaveTeam = async () => {
    if (selectedPlayers.length !== 11) {
      toast.error("Please select exactly 11 players");
      return;
    }
    if (!captain || !viceCaptain) {
      toast.error("Please select a Captain and Vice-Captain");
      return;
    }

    try {
      setSaving(true);
      const teamData = {
        userId: 1, // Mock user ID for now
        matchId,
        teamName: `My Team ${Date.now()}`,
        captainId: captain,
        viceCaptainId: viceCaptain,
        players: players.filter(p => selectedPlayers.includes(p.id))
      };

      const response = await fetch("/api/teams", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(teamData)
      });

      const result = await response.json();
      if (result.success) {
        toast.success("Team saved successfully!");
      } else {
        throw new Error(result.error);
      }
    } catch (error) {
      toast.error("Failed to save team");
    } finally {
      setSaving(false);
    }
  };

  if (!matchId) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white">No Match Selected</h2>
            <p className="text-muted-foreground mt-2">Please select a match from the Matches page.</p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen bg-background pt-24 pb-12">
        <div className="container">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
            <div className="w-full lg:w-2/3">
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-white font-rajdhani">SELECT <span className="text-primary">YOUR 11</span></h1>
                <p className="text-muted-foreground">Choose players from both teams to build your ultimate squad.</p>
              </div>

              {loading ? (
                <div className="flex justify-center py-20">
                  <Loader2 className="w-10 h-10 text-primary animate-spin" />
                </div>
              ) : (
                <div className="grid gap-3">
                  {players.map(player => (
                    <Card 
                      key={player.id}
                      className={`bg-white/5 border-white/10 hover:bg-white/10 transition-all cursor-pointer ${selectedPlayers.includes(player.id) ? 'border-primary/50 bg-primary/5' : ''}`}
                      onClick={() => togglePlayer(player.id)}
                    >
                      <CardContent className="p-4 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${selectedPlayers.includes(player.id) ? 'bg-primary text-black' : 'bg-white/10 text-white'}`}>
                            {player.name[0]}
                          </div>
                          <div>
                            <div className="font-bold text-white">{player.name}</div>
                            <div className="text-xs text-muted-foreground uppercase tracking-wider">{player.team} • {player.role}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          {selectedPlayers.includes(player.id) && (
                            <>
                              <Button 
                                size="sm" 
                                variant={captain === player.id ? "default" : "outline"}
                                className="h-8 w-8 p-0 rounded-full"
                                onClick={(e) => { e.stopPropagation(); setCaptain(player.id); if(viceCaptain === player.id) setViceCaptain(null); }}
                              >
                                C
                              </Button>
                              <Button 
                                size="sm" 
                                variant={viceCaptain === player.id ? "secondary" : "outline"}
                                className="h-8 w-8 p-0 rounded-full"
                                onClick={(e) => { e.stopPropagation(); setViceCaptain(player.id); if(captain === player.id) setCaptain(null); }}
                              >
                                VC
                              </Button>
                            </>
                          )}
                          {selectedPlayers.includes(player.id) ? <CheckCircle2 className="text-primary w-6 h-6" /> : <div className="w-6 h-6 rounded-full border-2 border-white/10"></div>}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>

            <div className="w-full lg:w-1/3 sticky top-24">
              <Card className="bg-black/40 border-white/10 backdrop-blur-md">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-6 font-rajdhani border-b border-white/5 pb-4">TEAM SUMMARY</h3>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Players Selected</span>
                      <span className="text-white font-bold">{selectedPlayers.length} / 11</span>
                    </div>
                    <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                      <div className="bg-primary h-full transition-all duration-500" style={{ width: `${(selectedPlayers.length / 11) * 100}%` }}></div>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">C</div>
                      <div>
                        <div className="text-xs text-muted-foreground uppercase">Captain</div>
                        <div className="text-white font-bold">{captain ? players.find(p => p.id === captain)?.name : "Not Selected"}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold">VC</div>
                      <div>
                        <div className="text-xs text-muted-foreground uppercase">Vice-Captain</div>
                        <div className="text-white font-bold">{viceCaptain ? players.find(p => p.id === viceCaptain)?.name : "Not Selected"}</div>
                      </div>
                    </div>
                  </div>

                  <Button 
                    className="w-full bg-primary text-black font-bold h-12 text-lg hover:bg-primary/90"
                    disabled={selectedPlayers.length !== 11 || !captain || !viceCaptain || saving}
                    onClick={handleSaveTeam}
                  >
                    {saving ? <Loader2 className="animate-spin mr-2" /> : "SAVE TEAM"}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
