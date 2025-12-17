import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, BarChart2, Brain, Shield, Trophy, Users, Zap } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-realistic.jpg" 
            alt="Realistic Cricket Stadium Night Match" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--background)_100%)]"></div>
        </div>

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left animate-in slide-in-from-left-10 duration-700 fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-primary text-sm font-bold tracking-wider font-rajdhani">NEXT GEN FANTASY CRICKET</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold font-rajdhani leading-tight text-white">
              MASTER THE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-secondary">STRATEGY</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 font-space leading-relaxed">
              Experience India's most advanced skill-based fantasy platform. Analyze data, build tactical squads, and compete in a 100% free-to-play environment.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/register">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-rajdhani font-bold text-lg px-8 h-14 shadow-[0_0_20px_rgba(6,182,212,0.4)]">
                  START PLAYING FREE <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/how-it-works">
                <Button variant="outline" size="lg" className="border-primary/30 text-white hover:bg-primary/10 hover:text-primary font-rajdhani font-bold text-lg px-8 h-14 backdrop-blur-sm">
                  HOW IT WORKS
                </Button>
              </Link>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-8 pt-4 text-sm text-muted-foreground font-mono">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-secondary" /> 100% Secure
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-primary" /> 18+ Only
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="w-4 h-4 text-purple-400" /> Skill Based
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block animate-in slide-in-from-right-10 duration-1000 fade-in">
            <div className="relative z-10 rounded-2xl overflow-hidden border border-primary/20 shadow-[0_0_50px_rgba(6,182,212,0.15)] bg-background/40 backdrop-blur-md p-2">
              <img 
                src="/images/tactical-pitch.jpg" 
                alt="Tactical Pitch Interface" 
                className="rounded-xl w-full h-auto"
              />
              
              {/* Floating UI Elements */}
              <div className="absolute top-8 right-8 bg-black/60 backdrop-blur-xl border border-primary/30 p-4 rounded-lg shadow-lg animate-in fade-in zoom-in duration-1000 delay-500">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-2 rounded-full bg-secondary"></div>
                  <span className="text-xs font-mono text-primary uppercase">Win Probability</span>
                </div>
                <div className="text-2xl font-rajdhani font-bold text-white">68%</div>
                <div className="h-1 w-32 bg-white/10 rounded-full mt-2 overflow-hidden">
                  <div className="h-full bg-secondary w-[68%]"></div>
                </div>
              </div>

              <div className="absolute bottom-8 left-8 bg-black/60 backdrop-blur-xl border border-primary/30 p-4 rounded-lg shadow-lg animate-in fade-in zoom-in duration-1000 delay-700">
                <div className="flex items-center gap-3 mb-2">
                  <BarChart2 className="w-4 h-4 text-primary" />
                  <span className="text-xs font-mono text-primary uppercase">Player Form</span>
                </div>
                <div className="flex gap-1">
                  {[1,2,3,4,5].map(i => (
                    <div key={i} className="w-2 bg-primary/50 rounded-sm" style={{height: `${Math.random() * 20 + 10}px`}}></div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-secondary/10 rounded-full blur-[100px] -z-10"></div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-b from-background to-background/50 border-b border-white/5">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <h3 className="text-4xl font-bold font-rajdhani text-primary mb-2">10M+</h3>
              <p className="text-muted-foreground">Registered Users</p>
            </div>
            <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <h3 className="text-4xl font-bold font-rajdhani text-secondary mb-2">₹50Cr+</h3>
              <p className="text-muted-foreground">Winnings Distributed</p>
            </div>
            <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <h3 className="text-4xl font-bold font-rajdhani text-purple-400 mb-2">24/7</h3>
              <p className="text-muted-foreground">Customer Support</p>
            </div>
            <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <h3 className="text-4xl font-bold font-rajdhani text-green-400 mb-2">100%</h3>
              <p className="text-muted-foreground">Secure & Legal</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 relative">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-rajdhani text-white mb-6">BUILT FOR <span className="text-primary">TACTICIANS</span></h2>
            <p className="text-muted-foreground text-lg">
              CricketIQ isn't about luck. It's about deep analysis, understanding match conditions, and making calculated decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="w-8 h-8 text-primary" />,
                title: "Pure Skill Gaming",
                desc: "Success depends entirely on your knowledge of cricket statistics, player form, and match conditions."
              },
              {
                icon: <Zap className="w-8 h-8 text-secondary" />,
                title: "Real-Time Analytics",
                desc: "Access professional-grade data visualization and live match insights to make informed decisions."
              },
              {
                icon: <Shield className="w-8 h-8 text-purple-400" />,
                title: "Zero Risk Platform",
                desc: "100% free to play with absolutely no real money involvement. Focus on the game, not the gamble."
              }
            ].map((feature, i) => (
              <Card key={i} className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors group">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-2xl bg-background/50 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold font-rajdhani text-white mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-black/20 border-y border-white/5">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img src="/images/analytics-bg.jpg" alt="Analytics Dashboard" className="w-full" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-12 w-12 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center text-primary font-bold font-mono text-xl">1</div>
                    <div className="h-0.5 flex-1 bg-white/10"></div>
                    <div className="h-12 w-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground font-bold font-mono text-xl">2</div>
                    <div className="h-0.5 flex-1 bg-white/10"></div>
                    <div className="h-12 w-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground font-bold font-mono text-xl">3</div>
                  </div>
                  <h3 className="text-2xl font-bold font-rajdhani text-white">Select Your Match</h3>
                  <p className="text-muted-foreground mt-2">Choose from upcoming domestic and international fixtures.</p>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold font-rajdhani text-white">
                STRATEGIZE IN <br />
                <span className="text-secondary">3 SIMPLE STEPS</span>
              </h2>
              
              <div className="space-y-6">
                {[
                  {
                    step: "01",
                    title: "Analyze & Select",
                    desc: "Review pitch reports and player stats. Select a match from the upcoming fixtures list."
                  },
                  {
                    step: "02",
                    title: "Build Your Squad",
                    desc: "Use your 100 credit budget wisely. Pick 11 players balancing batsmen, bowlers, and all-rounders."
                  },
                  {
                    step: "03",
                    title: "Compete & Learn",
                    desc: "Track live performance points. Climb the leaderboard and refine your cricket strategy."
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="text-4xl font-bold font-rajdhani text-white/10 group-hover:text-primary/50 transition-colors">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-rajdhani font-bold px-8 mt-4">
                VIEW FULL GUIDE
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5"></div>
        <div className="container relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold font-rajdhani text-white mb-6">
            READY TO TEST YOUR <span className="text-primary">CRICKET IQ?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Join thousands of Indian cricket fans on the most advanced free-to-play fantasy platform. No money involved, just pure strategy.
          </p>
          <Link href="/register">
            <Button size="lg" className="bg-white text-background hover:bg-white/90 font-rajdhani font-bold text-lg px-10 h-16 shadow-xl">
              CREATE FREE ACCOUNT
            </Button>
          </Link>
          <p className="mt-6 text-sm text-muted-foreground">
            By registering, you confirm you are 18+ and not from a restricted state.
          </p>
        </div>
      </section>
    </Layout>
  );
}
