import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Activity, Trophy, Users, TrendingUp, BarChart2, Target, Wind } from "lucide-react";

export default function Scoreboard() {
  return (
    <Layout>
      <div className="min-h-screen bg-background pt-20 pb-12">
        <div className="container">
          {/* Match Header */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-6 animate-in slide-in-from-top-4 duration-700">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="outline" className="bg-red-500/10 text-red-500 border-red-500/50 animate-pulse flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span> LIVE
                </Badge>
                <span className="text-muted-foreground text-sm font-mono">Indian T20 League • Match 24 • Wankhede Stadium</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold font-rajdhani text-white flex items-center gap-3">
                MUMBAI <span className="text-muted-foreground text-xl">VS</span> CHENNAI
              </h1>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground bg-white/5 px-4 py-2 rounded-lg border border-white/5">
              <div className="flex items-center gap-2">
                <Wind className="w-4 h-4" /> 24°C, Clear
              </div>
              <div className="w-px h-4 bg-white/10"></div>
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4" /> Pitch: Batting
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Live Score Card */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="bg-gradient-to-br from-blue-900/40 to-black/40 border-white/10 backdrop-blur-sm overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-white to-yellow-500"></div>
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-8">
                    <div className="text-center md:text-left flex flex-col md:flex-row items-center gap-4">
                      <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-3xl shadow-[0_0_20px_rgba(37,99,235,0.5)] border-4 border-white/10">M</div>
                      <div>
                        <h2 className="text-2xl font-bold font-rajdhani text-white">MUMBAI</h2>
                        <p className="text-5xl font-mono font-bold text-white mt-1 tracking-tight">186/4</p>
                        <p className="text-sm text-muted-foreground font-mono mt-1">20.0 Overs • RR: 9.30</p>
                      </div>
                    </div>
                    
                    <div className="text-center px-8 py-4 bg-black/20 rounded-xl border border-white/5 backdrop-blur-md">
                      <div className="text-xs text-muted-foreground uppercase tracking-widest mb-2 font-bold">Target: 187</div>
                      <div className="text-sm font-mono text-primary font-bold animate-pulse">CHE needs 42 runs in 24 balls</div>
                      <div className="text-xs text-muted-foreground mt-1">Req RR: 10.50</div>
                    </div>

                    <div className="text-center md:text-right flex flex-col md:flex-row-reverse items-center gap-4">
                      <div className="w-20 h-20 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold text-3xl shadow-[0_0_20px_rgba(234,179,8,0.5)] border-4 border-white/10">C</div>
                      <div>
                        <h2 className="text-2xl font-bold font-rajdhani text-white">CHENNAI</h2>
                        <p className="text-5xl font-mono font-bold text-white mt-1 tracking-tight">145/3</p>
                        <p className="text-sm text-muted-foreground font-mono mt-1">16.0 Overs • RR: 9.06</p>
                      </div>
                    </div>
                  </div>

                  {/* Current Batsmen */}
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-xs text-muted-foreground uppercase tracking-wider px-3">
                      <span>Batter</span>
                      <span>R (B) 4s 6s SR</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg border border-white/5 hover:bg-white/10 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-1 h-8 bg-primary rounded-full shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
                        <div>
                          <div className="text-white font-bold flex items-center gap-2">
                            Ruturaj Gaikwad <span className="text-[10px] bg-primary/20 text-primary px-1.5 rounded">STR</span>
                          </div>
                          <div className="text-xs text-secondary font-bold mt-0.5">Fantasy Pts: 85</div>
                        </div>
                      </div>
                      <div className="font-mono font-bold text-white text-right">
                        58 <span className="text-muted-foreground text-sm">(42)</span> <span className="text-muted-foreground text-xs mx-1">4 2</span> <span className="text-green-400 text-xs">138.1</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg border border-white/5 hover:bg-white/10 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-1 h-8 bg-white/10 rounded-full"></div>
                        <div>
                          <div className="text-white font-bold">Shivam Dube</div>
                          <div className="text-xs text-secondary font-bold mt-0.5">Fantasy Pts: 35</div>
                        </div>
                      </div>
                      <div className="font-mono font-bold text-white text-right">
                        24 <span className="text-muted-foreground text-sm">(15)</span> <span className="text-muted-foreground text-xs mx-1">1 2</span> <span className="text-green-400 text-xs">160.0</span>
                      </div>
                    </div>
                  </div>

                  {/* Current Bowler */}
                  <div className="space-y-3">
                    <div className="flex justify-between text-xs text-muted-foreground uppercase tracking-wider px-3">
                      <span>Bowler</span>
                      <span>O M R W Eco</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg border border-white/5 hover:bg-white/10 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold">JB</div>
                        <div>
                          <div className="text-white font-bold">Jasprit Bumrah</div>
                          <div className="text-xs text-secondary font-bold mt-0.5">Fantasy Pts: 50</div>
                        </div>
                      </div>
                      <div className="font-mono font-bold text-white text-right tracking-wider">
                        3.0 <span className="text-muted-foreground mx-1">0</span> 24 <span className="text-primary mx-1">1</span> <span className="text-green-400 text-xs">8.0</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Tabs defaultValue="commentary">
                <TabsList className="w-full bg-white/5 border border-white/10 p-1 h-12">
                  <TabsTrigger value="commentary" className="flex-1 font-rajdhani font-bold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground h-10">Commentary</TabsTrigger>
                  <TabsTrigger value="scorecard" className="flex-1 font-rajdhani font-bold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground h-10">Scorecard</TabsTrigger>
                  <TabsTrigger value="stats" className="flex-1 font-rajdhani font-bold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground h-10">Match Stats</TabsTrigger>
                </TabsList>
                
                <TabsContent value="commentary" className="mt-4 space-y-2">
                  {[
                    { over: "16.1", text: "Bumrah to Dube, FOUR! Short ball, pulled away to deep mid-wicket. That sat up nicely for him.", runs: 4, type: "boundary" },
                    { over: "16.2", text: "Bumrah to Dube, no run. Yorker length, dug out back to bowler. Classic Bumrah execution.", runs: 0, type: "dot" },
                    { over: "16.3", text: "Bumrah to Dube, 1 run. Length ball, pushed to long on for a single.", runs: 1, type: "normal" },
                    { over: "16.4", text: "Bumrah to Gaikwad, 2 runs. Driven through covers, good running between the wickets.", runs: 2, type: "normal" },
                    { over: "16.5", text: "Bumrah to Gaikwad, SIX! What a shot! Lofted over long-off with pure timing.", runs: 6, type: "six" },
                  ].map((comm, i) => (
                    <div key={i} className={`flex gap-4 p-4 rounded-lg border border-white/5 transition-colors ${comm.type === 'boundary' || comm.type === 'six' ? 'bg-primary/5 border-primary/20' : 'bg-black/20'}`}>
                      <div className="font-mono font-bold text-primary w-12 flex flex-col items-center justify-center border-r border-white/10 pr-4">
                        {comm.over}
                      </div>
                      <div className="flex-1 text-sm text-muted-foreground flex items-center">{comm.text}</div>
                      <div className={`font-mono font-bold w-10 h-10 rounded-full flex items-center justify-center text-sm ${
                        comm.runs === 4 ? "bg-blue-500 text-white" : 
                        comm.runs === 6 ? "bg-purple-500 text-white" : 
                        comm.runs === 0 ? "bg-white/10 text-muted-foreground" : "bg-white/5 text-white"
                      }`}>
                        {comm.runs}
                      </div>
                    </div>
                  ))}
                </TabsContent>

                <TabsContent value="stats" className="mt-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Card className="bg-white/5 border-white/10">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Run Rate Comparison</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="h-32 flex items-end gap-2">
                          {[4, 6, 8, 5, 9, 12, 7, 8, 10, 11, 6, 8, 9, 12, 14, 8].map((h, i) => (
                            <div key={i} className="flex-1 bg-primary/50 rounded-t-sm hover:bg-primary transition-colors" style={{height: `${h * 5}%`}}></div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="bg-white/5 border-white/10">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Partnership</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-center py-4">
                          <div className="text-3xl font-bold text-white font-mono">58 <span className="text-sm text-muted-foreground">(32)</span></div>
                          <div className="text-xs text-muted-foreground mt-2">Gaikwad & Dube</div>
                          <div className="w-full h-2 bg-white/10 rounded-full mt-3 overflow-hidden flex">
                            <div className="w-[65%] bg-blue-500"></div>
                            <div className="w-[35%] bg-yellow-500"></div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Leaderboard & My Team */}
            <div className="space-y-6">
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardHeader className="border-b border-white/5">
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
                      <div key={i} className={`flex items-center justify-between p-4 ${user.highlight ? "bg-primary/10 border-l-2 border-primary" : "hover:bg-white/5 transition-colors"}`}>
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${user.rank <= 3 ? "bg-yellow-500/20 text-yellow-500 border border-yellow-500/30" : "bg-white/10 text-muted-foreground"}`}>
                            {user.rank}
                          </div>
                          <div>
                            <span className={`text-sm font-bold block ${user.highlight ? "text-primary" : "text-white"}`}>{user.user}</span>
                            {user.highlight && <span className="text-[10px] text-primary/70 uppercase tracking-wider">Your Rank</span>}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-mono font-bold text-white">{user.points}</div>
                          <div className="text-[10px] text-muted-foreground">Pts</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="p-4 border-t border-white/5 text-center">
                    <a href="#" className="text-xs text-primary hover:text-primary/80 font-bold uppercase tracking-wider">View Full Leaderboard</a>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardHeader className="border-b border-white/5">
                  <CardTitle className="font-rajdhani text-white flex items-center gap-2">
                    <Activity className="w-5 h-5 text-primary" /> My Top Performers
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-black/20 rounded-lg border border-white/5">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-bold border-2 border-white/10">R</div>
                        <div>
                          <div className="text-sm font-bold text-white">R. Sharma <span className="text-[10px] bg-yellow-500 text-black px-1 rounded font-bold ml-1">2X</span></div>
                          <div className="text-xs text-muted-foreground">Captain</div>
                        </div>
                      </div>
                      <div className="font-mono font-bold text-secondary text-lg">124</div>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-black/20 rounded-lg border border-white/5">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-white text-sm font-bold border-2 border-white/10">R</div>
                        <div>
                          <div className="text-sm font-bold text-white">R. Jadeja <span className="text-[10px] bg-gray-400 text-black px-1 rounded font-bold ml-1">1.5X</span></div>
                          <div className="text-xs text-muted-foreground">Vice Captain</div>
                        </div>
                      </div>
                      <div className="font-mono font-bold text-secondary text-lg">88</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
