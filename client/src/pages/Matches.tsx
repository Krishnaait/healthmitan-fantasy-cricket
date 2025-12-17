import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, ArrowRight, Filter, Trophy, Timer } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

export default function Matches() {
  const [filter, setFilter] = useState("All");

  const matches = [
    {
      id: 1,
      series: "Indian T20 League",
      team1: { name: "Mumbai Indians", short: "MI", color: "bg-blue-600", logo: "/images/mi-logo.png" },
      team2: { name: "Chennai Super Kings", short: "CSK", color: "bg-yellow-500", logo: "/images/csk-logo.png" },
      date: "Today",
      time: "7:30 PM IST",
      venue: "Wankhede Stadium, Mumbai",
      type: "T20",
      timeLeft: "02h 15m",
      prizePool: "Mega Contest"
    },
    {
      id: 2,
      series: "International ODI Series",
      team1: { name: "India", short: "IND", color: "bg-blue-500", logo: "/images/ind-logo.png" },
      team2: { name: "Australia", short: "AUS", color: "bg-yellow-400", logo: "/images/aus-logo.png" },
      date: "Tomorrow",
      time: "1:30 PM IST",
      venue: "Eden Gardens, Kolkata",
      type: "ODI",
      timeLeft: "18h 45m",
      prizePool: "Head-to-Head"
    },
    {
      id: 3,
      series: "English T20 Blast",
      team1: { name: "Surrey", short: "SUR", color: "bg-amber-800", logo: "/images/sur-logo.png" },
      team2: { name: "Middlesex", short: "MID", color: "bg-pink-600", logo: "/images/mid-logo.png" },
      date: "19 Dec",
      time: "11:00 PM IST",
      venue: "The Oval, London",
      type: "T20",
      timeLeft: "1d 05h",
      prizePool: "Practice Match"
    },
    {
      id: 4,
      series: "Women's Premier League",
      team1: { name: "Delhi Capitals", short: "DEL", color: "bg-blue-700", logo: "/images/del-logo.png" },
      team2: { name: "UP Warriorz", short: "UPW", color: "bg-purple-600", logo: "/images/upw-logo.png" },
      date: "20 Dec",
      time: "7:30 PM IST",
      venue: "Arun Jaitley Stadium, Delhi",
      type: "T20",
      timeLeft: "2d 01h",
      prizePool: "Mega Contest"
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
                          <span className="text-xs text-muted-foreground hidden md:block">{match.team1.name}</span>
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
                          <span className="text-xs text-muted-foreground hidden md:block">{match.team2.name}</span>
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
