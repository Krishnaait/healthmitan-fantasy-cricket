import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, ArrowRight, Filter, Trophy, Timer, BarChart2, CloudRain, Wind, Thermometer, Users, ChevronDown } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

export default function Matches() {
  const [filter, setFilter] = useState("All");
  const [openMatchId, setOpenMatchId] = useState<number | null>(null);

  const matches = [
    {
      id: 1,
      series: "Indian T20 League",
      team1: { name: "Mumbai Indians", short: "MI", color: "bg-blue-600", form: ["W", "L", "W", "W", "L"] },
      team2: { name: "Chennai Super Kings", short: "CSK", color: "bg-yellow-500", form: ["L", "W", "L", "W", "W"] },
      date: "Today",
      time: "7:30 PM IST",
      venue: "Wankhede Stadium, Mumbai",
      type: "T20",
      timeLeft: "02h 15m",
      prizePool: "Mega Contest",
      pitchReport: "Batting paradise with short boundaries. Dew likely to play a role in the second innings.",
      weather: { temp: "28°C", condition: "Clear Sky", humidity: "75%" },
      avgScore: "185",
      winProb: { team1: 55, team2: 45 }
    },
    {
      id: 2,
      series: "International ODI Series",
      team1: { name: "India", short: "IND", color: "bg-blue-500", form: ["W", "W", "W", "L", "W"] },
      team2: { name: "Australia", short: "AUS", color: "bg-yellow-400", form: ["L", "L", "W", "W", "L"] },
      date: "Tomorrow",
      time: "1:30 PM IST",
      venue: "Eden Gardens, Kolkata",
      type: "ODI",
      timeLeft: "18h 45m",
      prizePool: "Head-to-Head",
      pitchReport: "Balanced surface offering assistance to spinners in middle overs. Pacers get initial swing.",
      weather: { temp: "32°C", condition: "Sunny", humidity: "60%" },
      avgScore: "280",
      winProb: { team1: 60, team2: 40 }
    },
    {
      id: 3,
      series: "English T20 Blast",
      team1: { name: "Surrey", short: "SUR", color: "bg-amber-800", form: ["W", "W", "L", "L", "W"] },
      team2: { name: "Middlesex", short: "MID", color: "bg-pink-600", form: ["L", "L", "L", "W", "L"] },
      date: "19 Dec",
      time: "11:00 PM IST",
      venue: "The Oval, London",
      type: "T20",
      timeLeft: "1d 05h",
      prizePool: "Practice Match",
      pitchReport: "Green top expected to favor seamers. Batting will be difficult early on.",
      weather: { temp: "18°C", condition: "Overcast", humidity: "80%" },
      avgScore: "160",
      winProb: { team1: 70, team2: 30 }
    },
    {
      id: 4,
      series: "Women's Premier League",
      team1: { name: "Delhi Capitals", short: "DEL", color: "bg-blue-700", form: ["W", "L", "W", "W", "W"] },
      team2: { name: "UP Warriorz", short: "UPW", color: "bg-purple-600", form: ["L", "W", "L", "L", "W"] },
      date: "20 Dec",
      time: "7:30 PM IST",
      venue: "Arun Jaitley Stadium, Delhi",
      type: "T20",
      timeLeft: "2d 01h",
      prizePool: "Mega Contest",
      pitchReport: "Slow track, spinners will dominate. Low scoring thriller expected.",
      weather: { temp: "25°C", condition: "Haze", humidity: "55%" },
      avgScore: "145",
      winProb: { team1: 52, team2: 48 }
    }
  ];

  const filteredMatches = filter === "All" ? matches : matches.filter(m => m.type === filter);

  return (
    <Layout>
      <div className="min-h-screen bg-background pt-20 pb-12">
        <div className="container">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 animate-in slide-in-from-top-4 duration-700">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold font-rajdhani text-white mb-2">
                UPCOMING <span className="text-primary">MATCHES</span>
              </h1>
              <p className="text-muted-foreground text-lg">Select a match to build your fantasy team and compete.</p>
            </div>
            
            <div className="flex items-center gap-2 bg-white/5 p-1 rounded-lg border border-white/10 backdrop-blur-sm">
              <Filter className="w-4 h-4 text-muted-foreground ml-2 mr-1" />
              {["All", "T20", "ODI", "Test"].map((type) => (
                <Button 
                  key={type}
                  variant={filter === type ? "secondary" : "ghost"} 
                  size="sm"
                  onClick={() => setFilter(type)}
                  className={`font-rajdhani font-bold ${filter === type ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-white"}`}
                >
                  {type}
                </Button>
              ))}
            </div>
          </div>

          {/* Matches Grid */}
          <div className="grid gap-6">
            {filteredMatches.map((match, index) => (
              <Card key={match.id} className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group overflow-hidden relative animate-in slide-in-from-bottom-4 fade-in" style={{animationDelay: `${index * 100}ms`}}>
                <div className="absolute top-0 left-0 w-1 h-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                    {/* Match Info Column */}
                    <div className="lg:col-span-3 p-6 border-b lg:border-b-0 lg:border-r border-white/5 flex flex-col justify-center bg-black/20">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="outline" className="border-primary/30 text-primary bg-primary/5 text-xs font-bold px-2 py-0.5 rounded-sm">
                          {match.series}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2 text-white mb-1">
                        <Clock className="w-4 h-4 text-primary" />
                        <span className="font-mono font-bold text-lg">{match.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{match.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm mt-3 pt-3 border-t border-white/5">
                        <MapPin className="w-4 h-4 text-secondary" />
                        <span className="truncate">{match.venue}</span>
                      </div>
                    </div>

                    {/* Teams Column */}
                    <div className="lg:col-span-6 p-6 flex items-center justify-between relative bg-gradient-to-r from-transparent via-white/5 to-transparent">
                      {/* Team 1 */}
                      <div className="flex flex-col items-center gap-3 w-1/3 group-hover:transform group-hover:-translate-x-2 transition-transform duration-300">
                        <div className={`w-20 h-20 rounded-full ${match.team1.color} flex items-center justify-center text-white font-bold text-2xl shadow-[0_0_20px_rgba(0,0,0,0.5)] border-4 border-white/10 relative overflow-hidden`}>
                          <span className="relative z-10">{match.team1.short[0]}</span>
                          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                        </div>
                        <div className="text-center">
                          <span className="font-bold text-white font-rajdhani text-xl block">{match.team1.short}</span>
                          <div className="flex gap-0.5 mt-1 justify-center">
                            {match.team1.form.map((res, i) => (
                              <span key={i} className={`w-1.5 h-1.5 rounded-full ${res === 'W' ? 'bg-green-500' : 'bg-red-500'}`}></span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* VS Badge */}
                      <div className="flex flex-col items-center justify-center w-1/3 z-10">
                        <div className="w-12 h-12 rounded-full bg-black/50 border border-white/10 flex items-center justify-center backdrop-blur-md mb-2">
                          <span className="text-lg font-bold text-white font-rajdhani">VS</span>
                        </div>
                        <div className="flex items-center gap-1.5 bg-red-500/10 border border-red-500/20 px-3 py-1 rounded-full">
                          <Timer className="w-3 h-3 text-red-400" />
                          <span className="text-xs font-mono text-red-400 font-bold">{match.timeLeft}</span>
                        </div>
                      </div>

                      {/* Team 2 */}
                      <div className="flex flex-col items-center gap-3 w-1/3 group-hover:transform group-hover:translate-x-2 transition-transform duration-300">
                        <div className={`w-20 h-20 rounded-full ${match.team2.color} flex items-center justify-center text-white font-bold text-2xl shadow-[0_0_20px_rgba(0,0,0,0.5)] border-4 border-white/10 relative overflow-hidden`}>
                          <span className="relative z-10">{match.team2.short[0]}</span>
                          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                        </div>
                        <div className="text-center">
                          <span className="font-bold text-white font-rajdhani text-xl block">{match.team2.short}</span>
                          <div className="flex gap-0.5 mt-1 justify-center">
                            {match.team2.form.map((res, i) => (
                              <span key={i} className={`w-1.5 h-1.5 rounded-full ${res === 'W' ? 'bg-green-500' : 'bg-red-500'}`}></span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Action Column */}
                    <div className="lg:col-span-3 p-6 flex flex-col items-center justify-center gap-4 bg-white/5 border-t lg:border-t-0 lg:border-l border-white/5">
                      <div className="flex items-center gap-4 w-full justify-between lg:justify-center text-sm px-2">
                        <div className="flex flex-col items-start lg:items-center">
                          <span className="text-muted-foreground text-xs uppercase tracking-wider">Contest Type</span>
                          <div className="flex items-center gap-1.5 text-white font-bold">
                            <Trophy className="w-3 h-3 text-yellow-400" />
                            {match.prizePool}
                          </div>
                        </div>
                        <div className="h-8 w-px bg-white/10 hidden lg:block"></div>
                        <div className="flex flex-col items-end lg:items-center">
                          <span className="text-muted-foreground text-xs uppercase tracking-wider">Entry Fee</span>
                          <span className="text-green-400 font-bold">FREE</span>
                        </div>
                      </div>
                      
                      <Link href="/team-builder" className="w-full">
                        <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-rajdhani font-bold text-lg h-12 shadow-[0_0_15px_rgba(6,182,212,0.2)] group-hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all">
                          CREATE TEAM <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                      </Link>
                      
                      <Collapsible open={openMatchId === match.id} onOpenChange={() => setOpenMatchId(openMatchId === match.id ? null : match.id)} className="w-full lg:hidden">
                        <CollapsibleTrigger asChild>
                          <Button variant="ghost" size="sm" className="w-full text-xs text-muted-foreground hover:text-white">
                            Match Insights <ChevronDown className={`w-3 h-3 ml-1 transition-transform ${openMatchId === match.id ? 'rotate-180' : ''}`} />
                          </Button>
                        </CollapsibleTrigger>
                      </Collapsible>
                    </div>
                  </div>

                  {/* Expanded Insights Section (Always visible on desktop, collapsible on mobile) */}
                  <div className={`${openMatchId === match.id ? 'block' : 'hidden lg:block'} border-t border-white/5 bg-black/20 p-4`}>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      {/* Pitch Report */}
                      <div className="flex items-start gap-3 p-3 rounded-lg bg-white/5">
                        <BarChart2 className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <span className="text-xs text-muted-foreground uppercase tracking-wider font-bold block mb-1">Pitch Report</span>
                          <p className="text-white/80 leading-snug">{match.pitchReport}</p>
                        </div>
                      </div>

                      {/* Weather */}
                      <div className="flex items-start gap-3 p-3 rounded-lg bg-white/5">
                        <CloudRain className="w-5 h-5 text-secondary mt-0.5" />
                        <div className="w-full">
                          <span className="text-xs text-muted-foreground uppercase tracking-wider font-bold block mb-1">Weather</span>
                          <div className="flex justify-between items-center">
                            <span className="text-white font-bold">{match.weather.temp}</span>
                            <span className="text-white/60">{match.weather.condition}</span>
                            <span className="text-xs bg-white/10 px-2 py-0.5 rounded text-white/80">Hum: {match.weather.humidity}</span>
                          </div>
                        </div>
                      </div>

                      {/* Win Probability */}
                      <div className="flex items-start gap-3 p-3 rounded-lg bg-white/5">
                        <Users className="w-5 h-5 text-purple-400 mt-0.5" />
                        <div className="w-full">
                          <span className="text-xs text-muted-foreground uppercase tracking-wider font-bold block mb-1">Win Probability</span>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-xs font-bold text-white">{match.team1.short} {match.winProb.team1}%</span>
                            <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden flex">
                              <div className={`h-full ${match.team1.color}`} style={{width: `${match.winProb.team1}%`}}></div>
                              <div className={`h-full ${match.team2.color}`} style={{width: `${match.winProb.team2}%`}}></div>
                            </div>
                            <span className="text-xs font-bold text-white">{match.winProb.team2}% {match.team2.short}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
