import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Activity, Trophy, Users } from "lucide-react";

export default function Scoreboard() {
  return (
    <Layout>
      <div className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className="bg-red-500/10 text-red-500 border-red-500/50 animate-pulse">LIVE</Badge>
              <span className="text-muted-foreground text-sm">Indian T20 League • Match 24</span>
            </div>
            <h1 className="text-3xl font-bold font-rajdhani text-white">
              MUMBAI <span className="text-muted-foreground text-xl mx-2">VS</span> CHENNAI
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Live Score Card */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-gradient-to-br from-blue-900/40 to-black/40 border-white/10 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex justify-between items-center mb-8">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg border-4 border-white/10 mx-auto mb-2">M</div>
                    <h2 className="text-2xl font-bold font-rajdhani text-white">MUM</h2>
                    <p className="text-4xl font-mono font-bold text-white mt-2">186/4</p>
                    <p className="text-sm text-muted-foreground">20.0 Overs</p>
                  </div>
                  
                  <div className="text-center px-8">
                    <div className="text-sm text-muted-foreground uppercase tracking-widest mb-2">Target: 187</div>
                    <div className="text-xs font-mono text-primary">CHE needs 42 runs in 24 balls</div>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold text-2xl shadow-lg border-4 border-white/10 mx-auto mb-2">C</div>
                    <h2 className="text-2xl font-bold font-rajdhani text-white">CHE</h2>
                    <p className="text-4xl font-mono font-bold text-white mt-2">145/3</p>
                    <p className="text-sm text-muted-foreground">16.0 Overs</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg border border-white/5">
                    <div className="flex items-center gap-3">
                      <div className="w-1 h-8 bg-primary rounded-full"></div>
                      <div>
                        <div className="text-white font-bold">Ruturaj Gaikwad *</div>
                        <div className="text-xs text-muted-foreground">58 (42) • 4x4, 2x6</div>
                      </div>
                    </div>
                    <div className="font-mono font-bold text-secondary text-xl">85 pts</div>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg border border-white/5">
                    <div className="flex items-center gap-3">
                      <div className="w-1 h-8 bg-white/20 rounded-full"></div>
                      <div>
                        <div className="text-white font-bold">Shivam Dube</div>
                        <div className="text-xs text-muted-foreground">24 (15) • 1x4, 2x6</div>
                      </div>
                    </div>
                    <div className="font-mono font-bold text-secondary text-xl">35 pts</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Tabs defaultValue="commentary">
              <TabsList className="w-full bg-white/5 border border-white/10">
                <TabsTrigger value="commentary" className="flex-1 font-rajdhani font-bold">Commentary</TabsTrigger>
                <TabsTrigger value="scorecard" className="flex-1 font-rajdhani font-bold">Scorecard</TabsTrigger>
                <TabsTrigger value="stats" className="flex-1 font-rajdhani font-bold">Match Stats</TabsTrigger>
              </TabsList>
              
              <TabsContent value="commentary" className="mt-4 space-y-2">
                {[
                  { over: "16.1", text: "Bumrah to Dube, FOUR! Short ball, pulled away to deep mid-wicket.", runs: 4 },
                  { over: "16.2", text: "Bumrah to Dube, no run. Yorker length, dug out back to bowler.", runs: 0 },
                  { over: "16.3", text: "Bumrah to Dube, 1 run. Length ball, pushed to long on.", runs: 1 },
                  { over: "16.4", text: "Bumrah to Gaikwad, 2 runs. Driven through covers, good running.", runs: 2 },
                ].map((comm, i) => (
                  <div key={i} className="flex gap-4 p-3 bg-black/20 border-b border-white/5">
                    <div className="font-mono font-bold text-primary w-12">{comm.over}</div>
                    <div className="flex-1 text-sm text-muted-foreground">{comm.text}</div>
                    <div className={`font-mono font-bold w-8 text-center ${comm.runs === 4 || comm.runs === 6 ? "text-secondary" : "text-white"}`}>
                      {comm.runs}
                    </div>
                  </div>
                ))}
              </TabsContent>
            </Tabs>
          </div>

          {/* Leaderboard & My Team */}
          <div className="space-y-6">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="font-rajdhani text-white flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-yellow-500" /> Live Leaderboard
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-white/5">
                  {[
                    { rank: 1, user: "CricketMaster99", points: 458, change: "up" },
                    { rank: 2, user: "DhoniFan7", points: 442, change: "down" },
                    { rank: 3, user: "ProGamer_Ind", points: 435, change: "same" },
                    { rank: 4, user: "You", points: 412, change: "up", highlight: true },
                    { rank: 5, user: "FantasyKing", points: 405, change: "down" },
                  ].map((user, i) => (
                    <div key={i} className={`flex items-center justify-between p-4 ${user.highlight ? "bg-primary/10 border-l-2 border-primary" : ""}`}>
                      <div className="flex items-center gap-3">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${user.rank <= 3 ? "bg-yellow-500/20 text-yellow-500" : "bg-white/10 text-muted-foreground"}`}>
                          {user.rank}
                        </div>
                        <span className={`text-sm font-medium ${user.highlight ? "text-primary" : "text-white"}`}>{user.user}</span>
                      </div>
                      <div className="font-mono font-bold text-white">{user.points}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="font-rajdhani text-white flex items-center gap-2">
                  <Activity className="w-5 h-5 text-primary" /> My Top Performers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold">R</div>
                      <div>
                        <div className="text-sm font-bold text-white">R. Sharma (C)</div>
                        <div className="text-xs text-muted-foreground">2x Points</div>
                      </div>
                    </div>
                    <div className="font-mono font-bold text-secondary">124 pts</div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center text-white text-xs font-bold">R</div>
                      <div>
                        <div className="text-sm font-bold text-white">R. Jadeja</div>
                        <div className="text-xs text-muted-foreground">All-Rounder</div>
                      </div>
                    </div>
                    <div className="font-mono font-bold text-secondary">88 pts</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
