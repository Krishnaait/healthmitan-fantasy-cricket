import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Trophy, Users, Shield, Target, Award, Zap, HelpCircle } from "lucide-react";

export default function HowItWorks() {
  return (
    <Layout>
      <div className="min-h-screen bg-background pt-20 pb-12">
        <div className="container">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h1 className="text-4xl md:text-6xl font-bold font-rajdhani text-white mb-6">
              HOW TO <span className="text-primary">PLAY & WIN</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Master the art of fantasy cricket in 4 simple steps. Build your strategy, compete with the best, and climb the global leaderboards.
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {[
              {
                icon: Target,
                title: "Select A Match",
                desc: "Choose any upcoming match from the current cricket season. We cover all major leagues including IPL, BBL, and International fixtures.",
                step: "01"
              },
              {
                icon: Users,
                title: "Create Your Team",
                desc: "Use your 100 Credit budget to pick 11 players. Balance your squad with Batsmen, Bowlers, All-Rounders, and a Wicket Keeper.",
                step: "02"
              },
              {
                icon: Trophy,
                title: "Join Contests",
                desc: "Enter a variety of free contests. From Head-to-Head duels to Mega Leagues with thousands of players, there's a challenge for everyone.",
                step: "03"
              },
              {
                icon: Award,
                title: "Track & Win",
                desc: "Watch the live match and track your fantasy score in real-time. The better your players perform on the field, the higher you rank.",
                step: "04"
              }
            ].map((item, i) => (
              <Card key={i} className="bg-white/5 border-white/10 backdrop-blur-sm relative overflow-hidden group hover:border-primary/50 transition-colors">
                <div className="absolute -right-4 -top-4 text-8xl font-bold text-white/5 font-rajdhani group-hover:text-primary/10 transition-colors">
                  {item.step}
                </div>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold font-rajdhani text-white">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Scoring System */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold font-rajdhani text-white mb-8 text-center">FANTASY SCORING SYSTEM</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Batting Points */}
              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <CardTitle className="text-primary font-rajdhani flex items-center gap-2">
                    <Zap className="w-5 h-5" /> Batting Points
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between text-sm border-b border-white/5 pb-2">
                    <span className="text-muted-foreground">Run Scored</span>
                    <span className="text-white font-mono">+1 pt</span>
                  </div>
                  <div className="flex justify-between text-sm border-b border-white/5 pb-2">
                    <span className="text-muted-foreground">Boundary Bonus</span>
                    <span className="text-white font-mono">+1 pt</span>
                  </div>
                  <div className="flex justify-between text-sm border-b border-white/5 pb-2">
                    <span className="text-muted-foreground">Six Bonus</span>
                    <span className="text-white font-mono">+2 pts</span>
                  </div>
                  <div className="flex justify-between text-sm border-b border-white/5 pb-2">
                    <span className="text-muted-foreground">Half Century</span>
                    <span className="text-white font-mono">+8 pts</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Century</span>
                    <span className="text-white font-mono">+16 pts</span>
                  </div>
                </CardContent>
              </Card>

              {/* Bowling Points */}
              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <CardTitle className="text-secondary font-rajdhani flex items-center gap-2">
                    <Target className="w-5 h-5" /> Bowling Points
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between text-sm border-b border-white/5 pb-2">
                    <span className="text-muted-foreground">Wicket (Excl. Run Out)</span>
                    <span className="text-white font-mono">+25 pts</span>
                  </div>
                  <div className="flex justify-between text-sm border-b border-white/5 pb-2">
                    <span className="text-muted-foreground">Maiden Over</span>
                    <span className="text-white font-mono">+12 pts</span>
                  </div>
                  <div className="flex justify-between text-sm border-b border-white/5 pb-2">
                    <span className="text-muted-foreground">LBW / Bowled Bonus</span>
                    <span className="text-white font-mono">+8 pts</span>
                  </div>
                  <div className="flex justify-between text-sm border-b border-white/5 pb-2">
                    <span className="text-muted-foreground">3 Wicket Haul</span>
                    <span className="text-white font-mono">+4 pts</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">5 Wicket Haul</span>
                    <span className="text-white font-mono">+16 pts</span>
                  </div>
                </CardContent>
              </Card>

              {/* Fielding & Other */}
              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <CardTitle className="text-purple-400 font-rajdhani flex items-center gap-2">
                    <Shield className="w-5 h-5" /> Fielding & Economy
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between text-sm border-b border-white/5 pb-2">
                    <span className="text-muted-foreground">Catch</span>
                    <span className="text-white font-mono">+8 pts</span>
                  </div>
                  <div className="flex justify-between text-sm border-b border-white/5 pb-2">
                    <span className="text-muted-foreground">Stumping / Run Out</span>
                    <span className="text-white font-mono">+12 pts</span>
                  </div>
                  <div className="flex justify-between text-sm border-b border-white/5 pb-2">
                    <span className="text-muted-foreground">Economy &lt; 5.0</span>
                    <span className="text-white font-mono">+6 pts</span>
                  </div>
                  <div className="flex justify-between text-sm border-b border-white/5 pb-2">
                    <span className="text-muted-foreground">Economy &gt; 12.0</span>
                    <span className="text-red-400 font-mono">-6 pts</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Duck (Batsman)</span>
                    <span className="text-red-400 font-mono">-2 pts</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold font-rajdhani text-white mb-8 text-center flex items-center justify-center gap-3">
              <HelpCircle className="w-8 h-8 text-primary" /> FREQUENTLY ASKED QUESTIONS
            </h2>
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="border border-white/10 rounded-lg bg-white/5 px-4">
                <AccordionTrigger className="text-white hover:text-primary font-rajdhani font-bold text-lg">
                  Is CricketIQ free to play?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes! CricketIQ is a 100% free-to-play platform designed for skill development and entertainment. There are no entry fees, and no real money is involved. You compete for Global Rank, XP, and bragging rights.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border border-white/10 rounded-lg bg-white/5 px-4">
                <AccordionTrigger className="text-white hover:text-primary font-rajdhani font-bold text-lg">
                  Can I edit my team after the toss?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Absolutely. You can make unlimited changes to your team up until the official match start time. Once the first ball is bowled, teams are locked.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border border-white/10 rounded-lg bg-white/5 px-4">
                <AccordionTrigger className="text-white hover:text-primary font-rajdhani font-bold text-lg">
                  How are points calculated?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Points are updated in real-time based on the live match feed. Our scoring system rewards batting, bowling, and fielding performance. See the "Fantasy Scoring System" section above for a detailed breakdown.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="border border-white/10 rounded-lg bg-white/5 px-4">
                <AccordionTrigger className="text-white hover:text-primary font-rajdhani font-bold text-lg">
                  What happens if a match is abandoned?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  If a match is abandoned without a result, the contest is declared void. No points are awarded, and your rank remains unaffected.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </Layout>
  );
}
