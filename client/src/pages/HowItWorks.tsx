import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Trophy, Users, Zap, Shield } from "lucide-react";
import { Link } from "wouter";

export default function HowItWorks() {
  return (
    <Layout>
      <div className="container py-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-bold font-rajdhani text-white mb-6">
            HOW TO <span className="text-primary">PLAY</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Master the art of fantasy cricket in a few simple steps. CricketIQ is designed to test your knowledge and strategy.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <div className="space-y-12">
            {[
              {
                step: 1,
                title: "Select A Match",
                desc: "Choose any upcoming match from the current cricket schedule. We cover all major domestic and international leagues.",
                icon: <Zap className="w-6 h-6 text-primary" />
              },
              {
                step: 2,
                title: "Create Your Team",
                desc: "Use your 100 credit budget to pick 11 players. You need a balanced squad: 1-4 Wicket Keepers, 3-6 Batsmen, 1-4 All-Rounders, and 3-6 Bowlers.",
                icon: <Users className="w-6 h-6 text-secondary" />
              },
              {
                step: 3,
                title: "Choose Captain & Vice-Captain",
                desc: "This is crucial. Your Captain gets 2x points, and Vice-Captain gets 1.5x points. Choose players you expect to perform best.",
                icon: <Trophy className="w-6 h-6 text-purple-400" />
              },
              {
                step: 4,
                title: "Join Contests",
                desc: "Join free practice contests to compete with other users. Track your rank on the live leaderboard as the match progresses.",
                icon: <CheckCircle2 className="w-6 h-6 text-green-400" />
              }
            ].map((item) => (
              <div key={item.step} className="flex gap-6 relative">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xl font-bold font-rajdhani text-white z-10">
                  {item.step}
                </div>
                {item.step !== 4 && (
                  <div className="absolute left-6 top-12 bottom-[-48px] w-0.5 bg-white/10 -z-0"></div>
                )}
                <div>
                  <h3 className="text-2xl font-bold font-rajdhani text-white mb-2 flex items-center gap-3">
                    {item.title}
                    {item.icon}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
            <div className="sticky top-24">
              <Card className="bg-white/5 border-white/10 backdrop-blur-md overflow-hidden">
                <CardHeader className="bg-white/5 border-b border-white/5">
                  <CardTitle className="font-rajdhani text-white">Points System</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="divide-y divide-white/5">
                    {[
                      { action: "Run Scored", points: "+1" },
                      { action: "Wicket Taken", points: "+25" },
                      { action: "Catch", points: "+8" },
                      { action: "Stumping/Run Out", points: "+12" },
                      { action: "Captain", points: "2x Points" },
                      { action: "Vice-Captain", points: "1.5x Points" },
                      { action: "Duck (Batsman)", points: "-2" },
                    ].map((rule, i) => (
                      <div key={i} className="flex justify-between p-4 hover:bg-white/5 transition-colors">
                        <span className="text-muted-foreground">{rule.action}</span>
                        <span className="font-bold text-primary font-mono">{rule.points}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="mt-8 p-6 rounded-xl bg-primary/10 border border-primary/20">
                <h4 className="font-bold text-primary mb-2 flex items-center gap-2">
                  <Shield className="w-4 h-4" /> Skill-Based Gaming
                </h4>
                <p className="text-sm text-muted-foreground">
                  Success on CricketIQ requires deep knowledge of the sport. Analyzing pitch conditions, player form, and match-ups is essential for building a winning team.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link href="/">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-rajdhani font-bold text-lg px-10 h-14">
              START PLAYING NOW
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
