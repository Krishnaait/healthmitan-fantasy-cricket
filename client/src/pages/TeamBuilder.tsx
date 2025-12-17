import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Info, Plus, Minus, User, Shield, AlertCircle, Trophy, Zap, Target } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

// Mock Data
const players = [
  { id: 1, name: "Rohit Sharma", role: "BAT", credits: 9.5, team: "IND", points: 145, sel: 84, form: [10, 45, 120, 5, 32] },
  { id: 2, name: "Virat Kohli", role: "BAT", credits: 10.0, team: "IND", points: 182, sel: 92, form: [50, 82, 12, 100, 45] },
  { id: 3, name: "Jasprit Bumrah", role: "BOWL", credits: 9.0, team: "IND", points: 130, sel: 78, form: [25, 50, 0, 75, 25] },
  { id: 4, name: "Hardik Pandya", role: "AR", credits: 9.0, team: "IND", points: 110, sel: 65, form: [30, 20, 60, 40, 10] },
  { id: 5, name: "KL Rahul", role: "WK", credits: 9.0, team: "IND", points: 95, sel: 45, form: [15, 30, 45, 10, 20] },
  { id: 6, name: "David Warner", role: "BAT", credits: 9.5, team: "AUS", points: 140, sel: 80, form: [60, 20, 10, 80, 40] },
  { id: 7, name: "Steve Smith", role: "BAT", credits: 9.0, team: "AUS", points: 125, sel: 70, form: [40, 50, 30, 20, 60] },
  { id: 8, name: "Pat Cummins", role: "BOWL", credits: 9.0, team: "AUS", points: 135, sel: 75, form: [50, 25, 50, 25, 50] },
  { id: 9, name: "Glenn Maxwell", role: "AR", credits: 9.0, team: "AUS", points: 115, sel: 60, form: [20, 80, 10, 40, 30] },
  { id: 10, name: "Alex Carey", role: "WK", credits: 8.5, team: "AUS", points: 85, sel: 30, form: [10, 20, 30, 10, 15] },
  { id: 11, name: "Ravindra Jadeja", role: "AR", credits: 9.0, team: "IND", points: 120, sel: 72, form: [40, 30, 50, 20, 40] },
  { id: 12, name: "Mohammed Shami", role: "BOWL", credits: 8.5, team: "IND", points: 105, sel: 55, form: [25, 25, 50, 0, 25] },
  { id: 13, name: "Mitchell Starc", role: "BOWL", credits: 9.0, team: "AUS", points: 125, sel: 68, form: [50, 0, 25, 50, 25] },
  { id: 14, name: "Suryakumar Yadav", role: "BAT", credits: 9.0, team: "IND", points: 150, sel: 88, form: [80, 10, 60, 40, 20] },
];

export default function TeamBuilder() {
  const [selectedPlayers, setSelectedPlayers] = useState<number[]>([]);
  const [creditsLeft, setCreditsLeft] = useState(100);
  
  const togglePlayer = (player: any) => {
    if (selectedPlayers.includes(player.id)) {
      setSelectedPlayers(prev => prev.filter(id => id !== player.id));
      setCreditsLeft(prev => prev + player.credits);
    } else {
      if (selectedPlayers.length >= 11) return;
      if (creditsLeft - player.credits < 0) return;
      setSelectedPlayers(prev => [...prev, player.id]);
      setCreditsLeft(prev => prev - player.credits);
    }
  };

  const getRoleCount = (role: string) => {
    return selectedPlayers.filter(id => players.find(p => p.id === id)?.role === role).length;
  };

  return (
    <Layout>
      <div className="container py-8 h-[calc(100vh-64px)] flex flex-col">
        {/* Header Stats */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-6 backdrop-blur-md">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <h2 className="text-lg font-bold font-rajdhani text-white">India vs Australia</h2>
              <p className="text-xs text-muted-foreground">Starts in 2h 30m</p>
            </div>
            
            <div className="flex gap-8">
              <div className="text-center">
                <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Players</div>
                <div className="text-2xl font-mono font-bold text-white">
                  <span className={selectedPlayers.length === 11 ? "text-primary" : ""}>{selectedPlayers.length}</span>
                  <span className="text-muted-foreground text-lg">/11</span>
                </div>
              </div>
              <div className="text-center">
                <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Credits Left</div>
                <div className="text-2xl font-mono font-bold text-white">
                  <span className={creditsLeft < 0 ? "text-destructive" : "text-secondary"}>{creditsLeft}</span>
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <div className="flex flex-col items-center px-3">
                <span className="text-[10px] text-muted-foreground">IND</span>
                <span className="font-bold text-white">{selectedPlayers.filter(id => players.find(p => p.id === id)?.team === "IND").length}</span>
              </div>
              <div className="flex flex-col items-center px-3 border-l border-white/10">
                <span className="text-[10px] text-muted-foreground">AUS</span>
                <span className="font-bold text-white">{selectedPlayers.filter(id => players.find(p => p.id === id)?.team === "AUS").length}</span>
              </div>
            </div>
          </div>
          
          <div className="mt-4 h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-300"
              style={{ width: `${(selectedPlayers.length / 11) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-8 overflow-hidden">
          {/* Player Selection List */}
          <div className="lg:col-span-2 flex flex-col h-full overflow-hidden bg-black/20 border border-white/5 rounded-xl">
            <Tabs defaultValue="WK" className="flex-1 flex flex-col">
              <div className="p-4 border-b border-white/5">
                <TabsList className="w-full grid grid-cols-4 bg-white/5">
                  <TabsTrigger value="WK" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-rajdhani font-bold">WK ({getRoleCount("WK")})</TabsTrigger>
                  <TabsTrigger value="BAT" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-rajdhani font-bold">BAT ({getRoleCount("BAT")})</TabsTrigger>
                  <TabsTrigger value="AR" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-rajdhani font-bold">AR ({getRoleCount("AR")})</TabsTrigger>
                  <TabsTrigger value="BOWL" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-rajdhani font-bold">BOWL ({getRoleCount("BOWL")})</TabsTrigger>
                </TabsList>
                <div className="flex justify-between text-xs text-muted-foreground mt-2 px-2">
                  <span>Pick 1-4 Wicket Keepers</span>
                  <span className="flex items-center gap-1"><Info className="w-3 h-3" /> Player Stats</span>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-2 custom-scrollbar">
                {["WK", "BAT", "AR", "BOWL"].map(role => (
                  <TabsContent key={role} value={role} className="mt-0 space-y-2">
                    {players.filter(p => p.role === role).map(player => {
                      const isSelected = selectedPlayers.includes(player.id);
                      return (
                        <div 
                          key={player.id}
                          onClick={() => togglePlayer(player)}
                          className={`
                            flex items-center justify-between p-3 rounded-lg border cursor-pointer transition-all
                            ${isSelected 
                              ? "bg-primary/10 border-primary/50 shadow-[0_0_10px_rgba(6,182,212,0.1)]" 
                              : "bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/20"}
                          `}
                        >
                          <div className="flex items-center gap-4">
                            <div className="relative">
                              <div className="w-12 h-12 rounded-full bg-white/10 overflow-hidden flex items-center justify-center">
                                <User className="w-6 h-6 text-muted-foreground" />
                              </div>
                              <div className={`absolute -bottom-1 -right-1 text-[10px] font-bold px-1.5 py-0.5 rounded ${player.team === "IND" ? "bg-blue-600" : "bg-yellow-500"} text-white`}>
                                {player.team}
                              </div>
                            </div>
                            <div>
                              <h3 className={`font-bold font-rajdhani ${isSelected ? "text-primary" : "text-white"}`}>{player.name}</h3>
                              <div className="flex items-center gap-3 text-xs text-muted-foreground mt-1">
                                <span>Sel: {player.sel}%</span>
                                <span className="w-1 h-1 rounded-full bg-white/20"></span>
                                <span>Pts: {player.points}</span>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-6">
                            <div className="hidden md:flex gap-0.5 items-end h-6">
                              {player.form.map((score, i) => (
                                <div key={i} className="w-1 bg-white/20 rounded-t-sm" style={{height: `${score/2}%`}}></div>
                              ))}
                            </div>
                            <div className="text-right">
                              <div className="font-mono font-bold text-white">{player.credits}</div>
                              <div className="text-[10px] text-muted-foreground">Cr</div>
                            </div>
                            <Button 
                              size="icon" 
                              variant="ghost" 
                              className={`rounded-full w-8 h-8 ${isSelected ? "bg-destructive/20 text-destructive hover:bg-destructive/30" : "bg-primary/20 text-primary hover:bg-primary/30"}`}
                            >
                              {isSelected ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                            </Button>
                          </div>
                        </div>
                      );
                    })}
                  </TabsContent>
                ))}
              </div>
            </Tabs>
          </div>

          {/* Pitch View Preview */}
          <div className="hidden lg:flex flex-col bg-black/40 border border-white/5 rounded-xl overflow-hidden relative">
            <div className="absolute inset-0 bg-[url('/images/tactical-pitch.jpg')] bg-cover bg-center opacity-30"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60"></div>
            
            <div className="relative z-10 flex-1 p-6 flex flex-col justify-between">
              <div className="text-center">
                <h3 className="text-white font-rajdhani font-bold tracking-widest text-sm opacity-70 mb-2">WICKET KEEPERS</h3>
                <div className="flex justify-center gap-4">
                  {selectedPlayers.filter(id => players.find(p => p.id === id)?.role === "WK").map(id => {
                    const p = players.find(player => player.id === id);
                    return (
                      <div key={id} className="flex flex-col items-center animate-in zoom-in duration-300">
                        <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xs border-2 border-white shadow-lg">
                          {p?.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <span className="text-[10px] bg-black/50 px-2 py-0.5 rounded mt-1 text-white truncate max-w-[60px]">{p?.name.split(' ').pop()}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-white font-rajdhani font-bold tracking-widest text-sm opacity-70 mb-2">BATSMEN</h3>
                <div className="flex justify-center gap-4 flex-wrap">
                  {selectedPlayers.filter(id => players.find(p => p.id === id)?.role === "BAT").map(id => {
                    const p = players.find(player => player.id === id);
                    return (
                      <div key={id} className="flex flex-col items-center animate-in zoom-in duration-300">
                        <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-xs border-2 border-white shadow-lg">
                          {p?.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <span className="text-[10px] bg-black/50 px-2 py-0.5 rounded mt-1 text-white truncate max-w-[60px]">{p?.name.split(' ').pop()}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-white font-rajdhani font-bold tracking-widest text-sm opacity-70 mb-2">ALL ROUNDERS</h3>
                <div className="flex justify-center gap-4 flex-wrap">
                  {selectedPlayers.filter(id => players.find(p => p.id === id)?.role === "AR").map(id => {
                    const p = players.find(player => player.id === id);
                    return (
                      <div key={id} className="flex flex-col items-center animate-in zoom-in duration-300">
                        <div className="w-10 h-10 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold text-xs border-2 border-white shadow-lg">
                          {p?.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <span className="text-[10px] bg-black/50 px-2 py-0.5 rounded mt-1 text-white truncate max-w-[60px]">{p?.name.split(' ').pop()}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-white font-rajdhani font-bold tracking-widest text-sm opacity-70 mb-2">BOWLERS</h3>
                <div className="flex justify-center gap-4 flex-wrap">
                  {selectedPlayers.filter(id => players.find(p => p.id === id)?.role === "BOWL").map(id => {
                    const p = players.find(player => player.id === id);
                    return (
                      <div key={id} className="flex flex-col items-center animate-in zoom-in duration-300">
                        <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-xs border-2 border-white shadow-lg">
                          {p?.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <span className="text-[10px] bg-black/50 px-2 py-0.5 rounded mt-1 text-white truncate max-w-[60px]">{p?.name.split(' ').pop()}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="p-4 bg-black/60 backdrop-blur-md border-t border-white/10">
              <div className="flex justify-between items-center mb-4">
                <div className="text-xs text-muted-foreground">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div> WK
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div> BAT
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-purple-500"></div> AR
                    <div className="w-2 h-2 rounded-full bg-green-500"></div> BOWL
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-muted-foreground">Total Credits</div>
                  <div className="font-mono font-bold text-white">{100 - creditsLeft}/100</div>
                </div>
              </div>
              <Button 
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-rajdhani font-bold"
                disabled={selectedPlayers.length !== 11}
              >
                SAVE TEAM
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
