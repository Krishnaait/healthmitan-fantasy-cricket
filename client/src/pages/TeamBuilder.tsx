import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Users,
  Crown,
  Shield,
  Loader2,
  Check,
  AlertCircle,
} from "lucide-react";
import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";

interface Player {
  id: string;
  name: string;
  role: string;
  credits?: number;
}

interface Squad {
  teamId: string;
  teamName: string;
  players: Player[];
}

interface Match {
  id: string;
  name: string;
  teams?: string[];
}

const TOTAL_CREDITS = 100;
const MAX_PLAYERS = 11;

export default function TeamBuilder() {
  const [, setLocation] = useLocation();
  const [matchId, setMatchId] = useState<string | null>(null);
  const [match, setMatch] = useState<Match | null>(null);
  const [squads, setSquads] = useState<Squad[]>([]);
  const [selectedPlayers, setSelectedPlayers] = useState<Player[]>([]);
  const [captain, setCaptain] = useState<string | null>(null);
  const [viceCaptain, setViceCaptain] = useState<string | null>(null);
  const [teamName, setTeamName] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [step, setStep] = useState(1);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("matchId");
    if (id) {
      setMatchId(id);
    }
  }, []);

  useEffect(() => {
    if (!matchId) return;

    const fetchData = async () => {
      try {
        setLoading(true);

        const matchResponse = await fetch(`/api/matches/${matchId}`);
        const matchData = await matchResponse.json();
        if (matchData.success) {
          setMatch(matchData.data);
        }

        const squadResponse = await fetch(`/api/matches/${matchId}/squad`);
        const squadData = await squadResponse.json();
        if (squadData.success) {
          const squadsArray = Array.isArray(squadData.data)
            ? squadData.data
            : Object.values(squadData.data || {});
          setSquads(squadsArray as Squad[]);
        }

        setError(null);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to load match and squad data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [matchId]);

  const totalCreditsUsed = selectedPlayers.reduce(
    (sum, player) => sum + (player.credits || 0),
    0
  );
  const creditsRemaining = TOTAL_CREDITS - totalCreditsUsed;

  const togglePlayer = (player: Player) => {
    if (selectedPlayers.find((p) => p.id === player.id)) {
      setSelectedPlayers(selectedPlayers.filter((p) => p.id !== player.id));
      if (captain === player.id) setCaptain(null);
      if (viceCaptain === player.id) setViceCaptain(null);
    } else {
      if (selectedPlayers.length < MAX_PLAYERS) {
        setSelectedPlayers([...selectedPlayers, player]);
      }
    }
  };

  const saveTeam = async () => {
    if (!teamName.trim()) {
      alert("Please enter a team name");
      return;
    }

    if (!captain || !viceCaptain) {
      alert("Please select captain and vice-captain");
      return;
    }

    try {
      const response = await fetch("/api/teams", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          matchId,
          name: teamName,
          players: selectedPlayers.map((p) => p.id),
          captainId: captain,
          viceCaptainId: viceCaptain,
          totalCreditsUsed,
        }),
      });

      const result = await response.json();
      if (result.success) {
        alert("Team created successfully!");
        setLocation(`/dashboard/matches/${matchId}/contests`);
      } else {
        alert(result.error || "Failed to create team");
      }
    } catch (err) {
      console.error("Error saving team:", err);
      alert("Error saving team");
    }
  };

  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen bg-background pt-20 pb-12 flex items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <Loader2 className="w-8 h-8 text-primary animate-spin" />
            <p className="text-muted-foreground">Loading squad data...</p>
          </div>
        </div>
      </Layout>
    );
  }

  if (error || !match) {
    return (
      <Layout>
        <div className="min-h-screen bg-background pt-20 pb-12 flex items-center justify-center">
          <div className="flex flex-col items-center gap-4 text-center">
            <AlertCircle className="w-8 h-8 text-red-500" />
            <p className="text-muted-foreground">{error || "Match not found"}</p>
            <Link href="/matches">
              <Button className="mt-4">Back to Matches</Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen bg-background pt-20 pb-12">
        <div className="container">
          <div className="flex items-center gap-4 mb-8">
            <Link href="/matches">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="w-4 h-4" />
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold font-rajdhani text-white">
                Create Your <span className="text-primary">Team</span>
              </h1>
              <p className="text-muted-foreground">{match.name}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              {step === 1 && (
                <div className="space-y-6">
                  <Card className="bg-white/5 border-white/10">
                    <CardHeader>
                      <CardTitle className="text-white">Team Name</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <input
                        type="text"
                        placeholder="Enter your team name"
                        value={teamName}
                        onChange={(e) => setTeamName(e.target.value)}
                        className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-muted-foreground focus:outline-none focus:border-primary"
                      />
                    </CardContent>
                  </Card>

                  {squads.map((squad) => (
                    <Card key={squad.teamId} className="bg-white/5 border-white/10">
                      <CardHeader>
                        <CardTitle className="text-white">{squad.teamName}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {squad.players.map((player) => {
                            const isSelected = selectedPlayers.find(
                              (p) => p.id === player.id
                            );

                            return (
                              <button
                                key={player.id}
                                onClick={() => togglePlayer(player)}
                                className={`p-3 rounded-lg border-2 transition-all text-left ${
                                  isSelected
                                    ? "bg-primary/20 border-primary"
                                    : "bg-white/5 border-white/10 hover:border-white/20"
                                }`}
                              >
                                <div className="flex items-start justify-between">
                                  <div className="flex-1">
                                    <p className="font-semibold text-white">{player.name}</p>
                                    <p className="text-xs text-muted-foreground">
                                      {player.role}
                                    </p>
                                  </div>
                                  {isSelected && (
                                    <Check className="w-4 h-4 text-primary" />
                                  )}
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <Card className="bg-white/5 border-white/10">
                    <CardHeader>
                      <CardTitle className="text-white flex items-center gap-2">
                        <Crown className="w-5 h-5 text-yellow-500" /> Select Captain
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {selectedPlayers.map((player) => (
                          <button
                            key={player.id}
                            onClick={() => setCaptain(player.id)}
                            className={`p-3 rounded-lg border-2 transition-all text-left ${
                              captain === player.id
                                ? "bg-yellow-500/20 border-yellow-500"
                                : "bg-white/5 border-white/10 hover:border-white/20"
                            }`}
                          >
                            <p className="font-semibold text-white">{player.name}</p>
                            <p className="text-xs text-muted-foreground">{player.role}</p>
                          </button>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white/5 border-white/10">
                    <CardHeader>
                      <CardTitle className="text-white flex items-center gap-2">
                        <Shield className="w-5 h-5 text-blue-500" /> Select Vice-Captain
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {selectedPlayers.map((player) => (
                          <button
                            key={player.id}
                            onClick={() => setViceCaptain(player.id)}
                            disabled={captain === player.id}
                            className={`p-3 rounded-lg border-2 transition-all text-left ${
                              viceCaptain === player.id
                                ? "bg-blue-500/20 border-blue-500"
                                : captain === player.id
                                  ? "bg-white/5 border-white/10 opacity-50 cursor-not-allowed"
                                  : "bg-white/5 border-white/10 hover:border-white/20"
                            }`}
                          >
                            <p className="font-semibold text-white">{player.name}</p>
                            <p className="text-xs text-muted-foreground">{player.role}</p>
                          </button>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {step === 3 && (
                <Card className="bg-white/5 border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white">Team Preview</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-muted-foreground text-sm">Team Name</p>
                      <p className="text-white font-semibold">{teamName}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground text-sm">Players ({selectedPlayers.length}/11)</p>
                      <div className="space-y-2 mt-2">
                        {selectedPlayers.map((player) => (
                          <div
                            key={player.id}
                            className="flex items-center justify-between p-2 bg-white/5 rounded-lg"
                          >
                            <div>
                              <p className="text-white">{player.name}</p>
                              <p className="text-xs text-muted-foreground">{player.role}</p>
                            </div>
                            <div className="flex gap-2">
                              {captain === player.id && (
                                <Badge className="bg-yellow-500/20 text-yellow-400">
                                  C
                                </Badge>
                              )}
                              {viceCaptain === player.id && (
                                <Badge className="bg-blue-500/20 text-blue-400">VC</Badge>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            <div className="space-y-4">
              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Users className="w-4 h-4" /> Credits
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total</span>
                    <span className="text-white font-semibold">{TOTAL_CREDITS}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Used</span>
                    <span className="text-white font-semibold">{totalCreditsUsed}</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary transition-all"
                      style={{ width: `${(totalCreditsUsed / TOTAL_CREDITS) * 100}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Remaining</span>
                    <span
                      className={`font-semibold ${
                        creditsRemaining >= 0 ? "text-green-400" : "text-red-400"
                      }`}
                    >
                      {creditsRemaining}
                    </span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Players Selected</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-primary">
                    {selectedPlayers.length}/{MAX_PLAYERS}
                  </p>
                </CardContent>
              </Card>

              <div className="space-y-2">
                {step === 1 && (
                  <Button
                    onClick={() => setStep(2)}
                    disabled={selectedPlayers.length !== MAX_PLAYERS}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    Select Captain
                  </Button>
                )}
                {step === 2 && (
                  <>
                    <Button
                      onClick={() => setStep(1)}
                      variant="outline"
                      className="w-full"
                    >
                      Back
                    </Button>
                    <Button
                      onClick={() => setStep(3)}
                      disabled={!captain || !viceCaptain}
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      Preview
                    </Button>
                  </>
                )}
                {step === 3 && (
                  <>
                    <Button
                      onClick={() => setStep(2)}
                      variant="outline"
                      className="w-full"
                    >
                      Back
                    </Button>
                    <Button
                      onClick={saveTeam}
                      className="w-full bg-green-600 text-white hover:bg-green-700"
                    >
                      Save Team
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
