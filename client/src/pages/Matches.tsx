import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Matches() {
  const matches = [
    {
      id: 1,
      series: "Indian T20 League",
      team1: { name: "Mumbai", short: "MUM", color: "bg-blue-600" },
      team2: { name: "Chennai", short: "CHE", color: "bg-yellow-500" },
      date: "Today",
      time: "7:30 PM IST",
      venue: "Wankhede Stadium, Mumbai",
      type: "T20"
    },
    {
      id: 2,
      series: "International ODI Series",
      team1: { name: "India", short: "IND", color: "bg-blue-500" },
      team2: { name: "Australia", short: "AUS", color: "bg-yellow-400" },
      date: "Tomorrow",
      time: "1:30 PM IST",
      venue: "Eden Gardens, Kolkata",
      type: "ODI"
    },
    {
      id: 3,
      series: "English T20 Blast",
      team1: { name: "Surrey", short: "SUR", color: "bg-amber-800" },
      team2: { name: "Middlesex", short: "MID", color: "bg-pink-600" },
      date: "19 Dec",
      time: "11:00 PM IST",
      venue: "The Oval, London",
      type: "T20"
    }
  ];

  return (
    <Layout>
      <div className="container py-16">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h1 className="text-4xl font-bold font-rajdhani text-white mb-2">
              UPCOMING <span className="text-primary">MATCHES</span>
            </h1>
            <p className="text-muted-foreground">Select a match to build your fantasy team.</p>
          </div>
          
          <div className="flex gap-2">
            <Button variant="outline" className="border-primary/50 text-primary bg-primary/10">All</Button>
            <Button variant="ghost" className="text-muted-foreground hover:text-white">T20</Button>
            <Button variant="ghost" className="text-muted-foreground hover:text-white">ODI</Button>
            <Button variant="ghost" className="text-muted-foreground hover:text-white">Test</Button>
          </div>
        </div>

        <div className="grid gap-6">
          {matches.map((match) => (
            <Card key={match.id} className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group overflow-hidden relative">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                  {/* Match Info */}
                  <div className="md:col-span-3 p-6 border-b md:border-b-0 md:border-r border-white/5 flex flex-col justify-center bg-black/20">
                    <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">{match.series}</span>
                    <div className="flex items-center gap-2 text-white mb-1">
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="font-mono font-bold">{match.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{match.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mt-1">
                      <MapPin className="w-4 h-4" />
                      <span className="truncate">{match.venue}</span>
                    </div>
                  </div>

                  {/* Teams */}
                  <div className="md:col-span-6 p-6 flex items-center justify-between relative">
                    <div className="flex flex-col items-center gap-3 w-1/3">
                      <div className={`w-16 h-16 rounded-full ${match.team1.color} flex items-center justify-center text-white font-bold text-xl shadow-lg border-4 border-white/10`}>
                        {match.team1.short[0]}
                      </div>
                      <span className="font-bold text-white font-rajdhani text-lg">{match.team1.name}</span>
                    </div>

                    <div className="flex flex-col items-center justify-center w-1/3">
                      <span className="text-2xl font-bold text-muted-foreground/50 font-rajdhani">VS</span>
                      <Badge variant="outline" className="mt-2 border-white/20 text-muted-foreground text-xs">{match.type}</Badge>
                    </div>

                    <div className="flex flex-col items-center gap-3 w-1/3">
                      <div className={`w-16 h-16 rounded-full ${match.team2.color} flex items-center justify-center text-white font-bold text-xl shadow-lg border-4 border-white/10`}>
                        {match.team2.short[0]}
                      </div>
                      <span className="font-bold text-white font-rajdhani text-lg">{match.team2.name}</span>
                    </div>
                  </div>

                  {/* Action */}
                  <div className="md:col-span-3 p-6 flex items-center justify-center md:justify-end bg-white/5">
                    <Link href="/team-builder">
                      <Button className="w-full md:w-auto bg-primary text-primary-foreground hover:bg-primary/90 font-rajdhani font-bold shadow-[0_0_15px_rgba(6,182,212,0.3)] group-hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] transition-all">
                        CREATE TEAM <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
}
