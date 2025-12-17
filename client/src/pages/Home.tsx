import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, BarChart2, Brain, Shield, Trophy, Users, Zap } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <Layout>
      {/* Live Match Ticker */}
      <div className="bg-black/80 border-b border-white/10 py-2 overflow-hidden whitespace-nowrap">
        <div className="inline-block animate-marquee">
          <span className="mx-8 text-sm font-mono text-primary">LIVE: IND vs AUS - IND 145/3 (18.2)</span>
          <span className="mx-8 text-sm font-mono text-white">UPCOMING: ENG vs SA - Starts in 2h 30m</span>
          <span className="mx-8 text-sm font-mono text-secondary">RESULT: NZ vs PAK - NZ won by 15 runs</span>
          <span className="mx-8 text-sm font-mono text-primary">LIVE: MI vs CSK - MI 45/0 (5.1)</span>
          <span className="mx-8 text-sm font-mono text-white">UPCOMING: KKR vs RCB - Starts in 5h 15m</span>
        </div>
      </div>

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
                  VIEW FULL GUIDE
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
              <div className="absolute top-8 right-8 bg-black/60 backdrop-blur-xl border border-primary/30 p-4 rounded-lg shadow-lg animate-in fade-in zoom-in duration-1000 delay-500" style={{display: 'none'}}>
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

      {/* Download App Section */}
      <section className="py-24 relative overflow-hidden" style={{display: 'none'}}>
        <div className="absolute inset-0 bg-primary/5 -z-10"></div>
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-4xl md:text-6xl font-bold font-rajdhani text-white mb-6">
                PLAY ANYWHERE, <span className="text-primary">ANYTIME</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-xl">
                Join the official CricketIQ community for the ultimate fantasy experience. Compete with friends, track live stats, and climb the global leaderboards.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button className="h-14 px-8 bg-white text-black hover:bg-gray-200 font-bold text-lg flex items-center gap-3">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current"><path d="M17.5,12.5c-0.6-3,2.2-4.4,2.3-4.5c-1.3-1.8-3.2-2-3.9-2.1c-1.6-0.2-3.2,1-4,1c-0.9,0-2.1-1-3.5-1c-1.8,0-3.5,1-4.4,2.6c-1.9,3.3-0.5,8.2,1.3,10.9c0.9,1.3,2,2.8,3.4,2.7c1.4-0.1,1.9-0.9,3.6-0.9c1.7,0,2.1,0.9,3.6,0.9c1.5,0,2.4-1.3,3.3-2.7c1-1.5,1.4-2.9,1.4-3C20.5,15.5,17.9,14.5,17.5,12.5z M13,5.1C13.7,4.2,14.2,3,14,1.7c-1.1,0-2.5,0.8-3.3,1.7c-0.7,0.8-1.3,2-1.1,3.3C10.8,6.8,12.1,6,13,5.1z"/></svg>
                  App Store
                </Button>
                <Button className="h-14 px-8 bg-transparent border border-white/20 text-white hover:bg-white/5 font-bold text-lg flex items-center gap-3">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current"><path d="M3,20.5V3.5C3,2.9,3.3,2.6,3.7,2.4L19.9,11.8c0.2,0.1,0.2,0.4,0,0.5L3.7,21.6C3.3,21.4,3,21.1,3,20.5z M16.8,11.3L5.2,4.6l6.3,6.3L16.8,11.3z M4.4,17.1l6.4-6.4l-6.4-6.4V17.1z M12.2,13.1l-0.7,0.7l5.4,3.1L12.2,13.1z"/></svg>
                  Google Play
                </Button>
              </div>
              <div className="mt-8 flex items-center gap-4 justify-center md:justify-start text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-green-400" /> 100% Secure
                </div>
                <div className="w-1 h-1 rounded-full bg-white/20"></div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-yellow-400" /> Instant Access
                  </div>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="relative z-10 bg-black/40 border border-white/10 rounded-3xl p-4 backdrop-blur-xl max-w-xs mx-auto transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="aspect-[9/19] bg-gradient-to-b from-gray-900 to-black rounded-2xl overflow-hidden border border-white/5 relative">
                  {/* Mock App UI */}
                  <div className="absolute top-0 left-0 right-0 h-14 bg-primary/10 flex items-center justify-between px-4 border-b border-white/5">
                    <div className="w-6 h-6 rounded-full bg-white/10"></div>
                    <div className="font-rajdhani font-bold text-white">CRICKETIQ</div>
                    <div className="w-6 h-6 rounded-full bg-white/10"></div>
                  </div>
                  <div className="p-4 mt-14 space-y-4">
                    <div className="h-32 rounded-xl bg-gradient-to-r from-primary/20 to-secondary/20 border border-white/5"></div>
                    <div className="h-20 rounded-xl bg-white/5 border border-white/5"></div>
                    <div className="h-20 rounded-xl bg-white/5 border border-white/5"></div>
                    <div className="h-20 rounded-xl bg-white/5 border border-white/5"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-black/60 backdrop-blur-md border-t border-white/5 flex justify-around items-center">
                    <div className="w-8 h-8 rounded-full bg-primary/20"></div>
                    <div className="w-8 h-8 rounded-full bg-white/5"></div>
                    <div className="w-8 h-8 rounded-full bg-white/5"></div>
                    <div className="w-8 h-8 rounded-full bg-white/5"></div>
                  </div>
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/20 blur-[100px] -z-10 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tournaments Section */}
      <section className="py-20 bg-black/40 border-y border-white/5">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-rajdhani text-white mb-4">
              FEATURED <span className="text-primary">TOURNAMENTS</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Participate in the world's biggest cricket leagues. From international showdowns to domestic T20 leagues, we cover it all.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 hover:border-primary/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 z-10"></div>
              <div className="h-48 bg-gradient-to-br from-blue-900 to-black relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Trophy className="w-16 h-16 text-white/20 group-hover:text-primary/50 transition-colors duration-300" />
                </div>
              </div>
              <div className="relative z-20 p-6 -mt-12">
                <div className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold mb-3 border border-primary/20">
                  LIVE NOW
                </div>
                <h3 className="text-2xl font-bold font-rajdhani text-white mb-2">Indian T20 League</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  The biggest T20 carnival is here. Create your dream team and compete with millions.
                </p>
                <Link href="/matches">
                  <Button className="w-full bg-white/10 hover:bg-primary hover:text-primary-foreground text-white border border-white/10">
                    View Matches <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 hover:border-primary/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 z-10"></div>
              <div className="h-48 bg-gradient-to-br from-green-900 to-black relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Shield className="w-16 h-16 text-white/20 group-hover:text-green-400/50 transition-colors duration-300" />
                </div>
              </div>
              <div className="relative z-20 p-6 -mt-12">
                <div className="inline-block px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-bold mb-3 border border-green-500/20">
                  UPCOMING
                </div>
                <h3 className="text-2xl font-bold font-rajdhani text-white mb-2">World Cup 2025</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  The ultimate glory awaits. Predict the champions and win exclusive rewards.
                </p>
                <Link href="/matches">
                  <Button className="w-full bg-white/10 hover:bg-primary hover:text-primary-foreground text-white border border-white/10">
                    View Schedule <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 hover:border-primary/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 z-10"></div>
              <div className="h-48 bg-gradient-to-br from-purple-900 to-black relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Zap className="w-16 h-16 text-white/20 group-hover:text-purple-400/50 transition-colors duration-300" />
                </div>
              </div>
              <div className="relative z-20 p-6 -mt-12">
                <div className="inline-block px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-xs font-bold mb-3 border border-purple-500/20">
                  POPULAR
                </div>
                <h3 className="text-2xl font-bold font-rajdhani text-white mb-2">Big Bash League</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Experience the thrill of Australian T20 cricket. High scoring matches guaranteed.
                </p>
                <Link href="/matches">
                  <Button className="w-full bg-white/10 hover:bg-primary hover:text-primary-foreground text-white border border-white/10">
                    Join Contest <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-b from-background to-background/50 border-b border-white/5" style={{display: 'none'}}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <h3 className="text-4xl font-bold font-rajdhani text-primary mb-2">49+</h3>
              <p className="text-muted-foreground">Registered Users</p>
            </div>
            <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm" style={{display: 'none'}}>
              <h3 className="text-4xl font-bold font-rajdhani text-secondary mb-2">#1</h3>
              <p className="text-muted-foreground">Fantasy Community</p>
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
