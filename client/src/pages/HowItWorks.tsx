import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Trophy, Users, Shield, Target, Award, Zap, HelpCircle, Crown, Star, AlertCircle, CheckCircle2, Calculator, Info, Lightbulb } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function HowItWorks() {
  // Calculator State
  const [runs, setRuns] = useState(0);
  const [wickets, setWickets] = useState(0);
  const [catches, setCatches] = useState(0);
  const [calcResult, setCalcResult] = useState(0);

  const calculatePoints = () => {
    const points = (runs * 1) + (wickets * 25) + (catches * 8);
    setCalcResult(points);
  };

  // Quiz State
  const [quizStep, setQuizStep] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);

  const quizQuestions = [
    {
      q: "How many points does a Captain earn?",
      options: ["1x Points", "1.5x Points", "2x Points", "3x Points"],
      correct: 2
    },
    {
      q: "What is the maximum number of players from one team?",
      options: ["5 Players", "6 Players", "7 Players", "8 Players"],
      correct: 2
    },
    {
      q: "How many points for a direct wicket (excluding run-out)?",
      options: ["10 pts", "20 pts", "25 pts", "50 pts"],
      correct: 2
    }
  ];

  const handleQuizAnswer = (optionIndex: number) => {
    if (optionIndex === quizQuestions[quizStep].correct) {
      setQuizScore(prev => prev + 1);
    }
    
    if (quizStep < quizQuestions.length - 1) {
      setQuizStep(prev => prev + 1);
    } else {
      setQuizComplete(true);
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-background pt-20 pb-12">
        <div className="container">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h1 className="text-4xl md:text-6xl font-bold font-rajdhani text-white mb-6">
              MASTER THE <span className="text-primary">GAME</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              HEALTHMITAN is a strategy-first platform. Learn the rules, analyze the data, and build your legacy. Follow this comprehensive guide to start your journey.
            </p>
          </div>

          {/* Step-by-Step Guide */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold font-rajdhani text-white mb-12 text-center">HOW TO PLAY</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {/* Connecting Line (Desktop only) */}
              <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 z-0"></div>
              
              {[
                {
                  icon: Target,
                  title: "1. Select A Match",
                  desc: "Browse upcoming fixtures from major leagues (IPL, BBL, International). Analyze pitch reports and squad announcements before making your choice.",
                  color: "text-blue-400",
                  bg: "bg-blue-400/10"
                },
                {
                  icon: Users,
                  title: "2. Create Your Team",
                  desc: "You have 100 Credits to pick 11 players. Your squad must be a balanced mix of batsmen, bowlers, and all-rounders. Strategy is key.",
                  color: "text-green-400",
                  bg: "bg-green-400/10"
                },
                {
                  icon: Crown,
                  title: "3. Choose Leaders",
                  desc: "Assign a Captain (2x Points) and Vice-Captain (1.5x Points). These two players can make or break your contest ranking.",
                  color: "text-yellow-400",
                  bg: "bg-yellow-400/10"
                },
                {
                  icon: Trophy,
                  title: "4. Join & Win",
                  desc: "Enter free contests to test your skills. Track live scores, climb the global leaderboard, and earn recognition as a top strategist.",
                  color: "text-purple-400",
                  bg: "bg-purple-400/10"
                }
              ].map((item, i) => (
                <Card key={i} className="bg-white/5 border-white/10 backdrop-blur-sm relative z-10 hover:border-primary/50 transition-all hover:-translate-y-1 duration-300">
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 rounded-full ${item.bg} flex items-center justify-center mx-auto mb-4 ring-4 ring-black/40`}>
                      <item.icon className={`w-8 h-8 ${item.color}`} />
                    </div>
                    <CardTitle className="text-xl font-bold font-rajdhani text-white">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Team Composition Rules */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold font-rajdhani text-white mb-8 text-center">TEAM COMPOSITION RULES</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white font-rajdhani flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" /> Squad Requirements
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-black/20 border border-white/5">
                      <div className="text-sm text-muted-foreground mb-1">Wicket Keepers (WK)</div>
                      <div className="text-xl font-bold text-white">1 - 4</div>
                    </div>
                    <div className="p-4 rounded-lg bg-black/20 border border-white/5">
                      <div className="text-sm text-muted-foreground mb-1">Batsmen (BAT)</div>
                      <div className="text-xl font-bold text-white">3 - 6</div>
                    </div>
                    <div className="p-4 rounded-lg bg-black/20 border border-white/5">
                      <div className="text-sm text-muted-foreground mb-1">All-Rounders (AR)</div>
                      <div className="text-xl font-bold text-white">1 - 4</div>
                    </div>
                    <div className="p-4 rounded-lg bg-black/20 border border-white/5">
                      <div className="text-sm text-muted-foreground mb-1">Bowlers (BOWL)</div>
                      <div className="text-xl font-bold text-white">3 - 6</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                    <AlertCircle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-yellow-200">
                      <strong>Max 7 players</strong> from a single team. You must select players from both competing squads to create a valid fantasy team.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white font-rajdhani flex items-center gap-2">
                    <Crown className="w-5 h-5 text-yellow-400" /> Captain & Vice-Captain
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">
                    After selecting your 11 players, you must assign a Captain and Vice-Captain. These choices are critical for a high score.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-6 rounded-lg bg-gradient-to-br from-yellow-500/20 to-transparent border border-yellow-500/20 relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-2 opacity-20">
                        <Crown className="w-12 h-12 text-yellow-500" />
                      </div>
                      <div className="text-yellow-400 font-bold text-lg mb-1">CAPTAIN</div>
                      <div className="text-3xl font-bold text-white mb-2">2x <span className="text-sm font-normal text-muted-foreground">Points</span></div>
                      <p className="text-xs text-yellow-200/70">Gets double points for every action.</p>
                    </div>
                    <div className="p-6 rounded-lg bg-gradient-to-br from-gray-500/20 to-transparent border border-gray-500/20 relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-2 opacity-20">
                        <Star className="w-12 h-12 text-gray-400" />
                      </div>
                      <div className="text-gray-300 font-bold text-lg mb-1">VICE-CAPTAIN</div>
                      <div className="text-3xl font-bold text-white mb-2">1.5x <span className="text-sm font-normal text-muted-foreground">Points</span></div>
                      <p className="text-xs text-gray-400">Gets 1.5 times points for every action.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Detailed Scoring System with Tooltips */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold font-rajdhani text-white mb-8 text-center">DETAILED SCORING SYSTEM</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Batting */}
              <Card className="bg-white/5 border-white/10 overflow-hidden">
                <div className="h-1 bg-blue-500 w-full"></div>
                <CardHeader>
                  <CardTitle className="text-blue-400 font-rajdhani flex items-center gap-2">
                    <Zap className="w-5 h-5" /> Batting
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    { label: "Run Scored", pts: "+1", tip: "Every single run counts towards your total." },
                    { label: "Boundary Bonus", pts: "+1", tip: "Additional point for hitting a 4." },
                    { label: "Six Bonus", pts: "+2", tip: "Additional 2 points for hitting a 6." },
                    { label: "30 Run Bonus", pts: "+4", tip: "Bonus for crossing the 30-run mark." },
                    { label: "Half Century", pts: "+8", tip: "Major bonus for scoring 50 runs." },
                    { label: "Century", pts: "+16", tip: "Massive bonus for scoring 100 runs." },
                    { label: "Duck (Batsman/WK/AR)", pts: "-2", color: "text-red-400", tip: "Penalty for getting out on 0 runs." }
                  ].map((row: { label: string; pts: string; color?: string; tip: string }, i) => (
                    <div key={i} className="flex justify-between text-sm border-b border-white/5 pb-2 last:border-0 group cursor-help">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <span className="text-muted-foreground flex items-center gap-1 group-hover:text-white transition-colors">
                              {row.label} <Info className="w-3 h-3 opacity-0 group-hover:opacity-50" />
                            </span>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{row.tip}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      <span className={`font-mono font-bold ${row.color || "text-white"}`}>{row.pts}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Bowling */}
              <Card className="bg-white/5 border-white/10 overflow-hidden">
                <div className="h-1 bg-green-500 w-full"></div>
                <CardHeader>
                  <CardTitle className="text-green-400 font-rajdhani flex items-center gap-2">
                    <Target className="w-5 h-5" /> Bowling
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    { label: "Wicket (Excl. Run Out)", pts: "+25", tip: "Points for taking a wicket (Bowled, Catch, LBW, Stumped)." },
                    { label: "Bonus (LBW / Bowled)", pts: "+8", tip: "Extra points for clean bowled or LBW dismissals." },
                    { label: "3 Wicket Haul", pts: "+4", tip: "Bonus for taking 3 wickets in a match." },
                    { label: "4 Wicket Haul", pts: "+8", tip: "Bonus for taking 4 wickets in a match." },
                    { label: "5 Wicket Haul", pts: "+16", tip: "Major bonus for taking 5 wickets." },
                    { label: "Maiden Over", pts: "+12", tip: "Points for bowling an over with 0 runs conceded." }
                  ].map((row: { label: string; pts: string; color?: string; tip: string }, i) => (
                    <div key={i} className="flex justify-between text-sm border-b border-white/5 pb-2 last:border-0 group cursor-help">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <span className="text-muted-foreground flex items-center gap-1 group-hover:text-white transition-colors">
                              {row.label} <Info className="w-3 h-3 opacity-0 group-hover:opacity-50" />
                            </span>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{row.tip}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      <span className={`font-mono font-bold ${row.color || "text-white"}`}>{row.pts}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Fielding & Economy */}
              <Card className="bg-white/5 border-white/10 overflow-hidden">
                <div className="h-1 bg-purple-500 w-full"></div>
                <CardHeader>
                  <CardTitle className="text-purple-400 font-rajdhani flex items-center gap-2">
                    <Shield className="w-5 h-5" /> Fielding & Economy
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    { label: "Catch", pts: "+8", tip: "Points for every catch taken." },
                    { label: "3 Catch Bonus", pts: "+4", tip: "Bonus for taking 3 catches in a match." },
                    { label: "Stumping", pts: "+12", tip: "Points for a wicketkeeper stumping." },
                    { label: "Run Out (Direct)", pts: "+12", tip: "Points for a direct hit run out." },
                    { label: "Run Out (Thrower/Catcher)", pts: "+6/6", tip: "Points split between thrower and catcher." },
                    { label: "Economy < 5.0", pts: "+6", tip: "Bonus for maintaining a low economy rate." },
                    { label: "Economy 5.0 - 5.99", pts: "+4", tip: "Bonus for a good economy rate." },
                    { label: "Economy > 12.0", pts: "-6", color: "text-red-400", tip: "Penalty for an expensive bowling spell." }
                  ].map((row: { label: string; pts: string; color?: string; tip: string }, i) => (
                    <div key={i} className="flex justify-between text-sm border-b border-white/5 pb-2 last:border-0 group cursor-help">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <span className="text-muted-foreground flex items-center gap-1 group-hover:text-white transition-colors">
                              {row.label} <Info className="w-3 h-3 opacity-0 group-hover:opacity-50" />
                            </span>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{row.tip}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      <span className={`font-mono font-bold ${row.color || "text-white"}`}>{row.pts}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Interactive Tools Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
            {/* Points Calculator */}
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white font-rajdhani flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-primary" /> Points Calculator
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs text-muted-foreground">Runs</label>
                      <Input 
                        type="number" 
                        min="0"
                        value={runs} 
                        onChange={(e) => setRuns(Number(e.target.value))}
                        className="bg-black/20 border-white/10 text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs text-muted-foreground">Wickets</label>
                      <Input 
                        type="number" 
                        min="0"
                        value={wickets} 
                        onChange={(e) => setWickets(Number(e.target.value))}
                        className="bg-black/20 border-white/10 text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs text-muted-foreground">Catches</label>
                      <Input 
                        type="number" 
                        min="0"
                        value={catches} 
                        onChange={(e) => setCatches(Number(e.target.value))}
                        className="bg-black/20 border-white/10 text-white"
                      />
                    </div>
                  </div>
                  <Button onClick={calculatePoints} className="w-full bg-primary text-primary-foreground font-bold">
                    CALCULATE POINTS
                  </Button>
                  <div className="p-4 bg-black/40 rounded-lg text-center">
                    <div className="text-sm text-muted-foreground mb-1">Total Fantasy Points</div>
                    <div className="text-3xl font-bold text-white">{calcResult}</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Rules Quiz */}
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white font-rajdhani flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-yellow-400" /> Rules Quiz
                </CardTitle>
              </CardHeader>
              <CardContent>
                {!quizComplete ? (
                  <div className="space-y-6">
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>Question {quizStep + 1}/{quizQuestions.length}</span>
                      <span>Score: {quizScore}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white">{quizQuestions[quizStep].q}</h3>
                    <div className="grid grid-cols-1 gap-3">
                      {quizQuestions[quizStep].options.map((opt, i) => (
                        <Button 
                          key={i} 
                          variant="outline" 
                          className="justify-start border-white/10 text-white hover:bg-primary/20 hover:text-primary hover:border-primary/50"
                          onClick={() => handleQuizAnswer(i)}
                        >
                          {opt}
                        </Button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8 space-y-4">
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Quiz Complete!</h3>
                    <p className="text-muted-foreground">You scored {quizScore} out of {quizQuestions.length}</p>
                    <Button 
                      onClick={() => {
                        setQuizStep(0);
                        setQuizScore(0);
                        setQuizComplete(false);
                      }}
                      variant="outline"
                      className="border-primary/50 text-primary hover:bg-primary/10"
                    >
                      Try Again
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold font-rajdhani text-white mb-8 text-center flex items-center justify-center gap-3">
              <HelpCircle className="w-8 h-8 text-primary" /> FREQUENTLY ASKED QUESTIONS
            </h2>
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="border border-white/10 rounded-lg bg-white/5 px-4">
                <AccordionTrigger className="text-white hover:text-primary font-rajdhani font-bold text-lg">
                  Is HEALTHMITAN free to play?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Yes! HEALTHMITAN is a 100% free-to-play educational platform designed for skill development. There are no entry fees, and no real money is involved. You compete for Global Rank, XP, and bragging rights.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border border-white/10 rounded-lg bg-white/5 px-4">
                <AccordionTrigger className="text-white hover:text-primary font-rajdhani font-bold text-lg">
                  Can I edit my team after the toss?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Absolutely. You can make unlimited changes to your team up until the official match start time. Once the first ball is bowled, teams are locked to ensure fair play.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border border-white/10 rounded-lg bg-white/5 px-4">
                <AccordionTrigger className="text-white hover:text-primary font-rajdhani font-bold text-lg">
                  What happens if a match is abandoned?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  If a match is abandoned without a result, the contest is declared void. No points are awarded, and your rank remains unaffected. If the match has a result (even via D/L method), points are awarded as usual.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="border border-white/10 rounded-lg bg-white/5 px-4">
                <AccordionTrigger className="text-white hover:text-primary font-rajdhani font-bold text-lg">
                  How do I improve my ranking?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Your ranking is based on the total points accumulated across all contests. Consistent performance, smart captaincy choices, and regular participation are key to climbing the leaderboard.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </Layout>
  );
}
