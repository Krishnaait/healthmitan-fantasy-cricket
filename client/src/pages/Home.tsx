import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, BarChart2, Brain, Shield, Trophy, Users, Zap, Smartphone, Globe, Award, Target, Clock, CheckCircle2 } from "lucide-react";
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
              <Link href="/how-to-play">
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

      {/* Why Choose Us - High Density Grid */}
      <section className="py-24 bg-black/40 border-y border-white/5">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-rajdhani text-white mb-4">
              WHY CHOOSE <span className="text-primary">CRICKETIQ</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We combine cutting-edge technology with deep cricket analytics to provide the most immersive fantasy experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card className="bg-white/5 border-white/10 hover:border-primary/50 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Brain className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Skill-First Gameplay</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Success on CricketIQ depends on your knowledge of the game, not luck. Analyze pitch reports, player form, and match conditions to build winning teams.
                </p>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="bg-white/5 border-white/10 hover:border-secondary/50 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                  <Zap className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Real-Time Updates</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Get instant score updates, player stats, and leaderboard changes. Our ultra-low latency system ensures you never miss a moment of the action.
                </p>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="bg-white/5 border-white/10 hover:border-purple-500/50 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors">
                  <Shield className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">100% Secure & Fair</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We use advanced algorithms to detect fair play violations. Your data is encrypted, and our platform is certified for security and transparency.
                </p>
              </CardContent>
            </Card>

            {/* Feature 4 */}
            <Card className="bg-white/5 border-white/10 hover:border-green-500/50 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center mb-6 group-hover:bg-green-500/20 transition-colors">
                  <Users className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Vibrant Community</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Join thousands of cricket fans. Create private leagues, challenge friends, and discuss strategies in our active community forums.
                </p>
              </CardContent>
            </Card>

            {/* Feature 5 */}
            <Card className="bg-white/5 border-white/10 hover:border-yellow-500/50 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-yellow-500/10 flex items-center justify-center mb-6 group-hover:bg-yellow-500/20 transition-colors">
                  <Trophy className="w-8 h-8 text-yellow-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Daily Rewards</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Earn rewards just for playing. Complete daily challenges, climb the seasonal leaderboard, and unlock exclusive badges and profile customizations.
                </p>
              </CardContent>
            </Card>

            {/* Feature 6 */}
            <Card className="bg-white/5 border-white/10 hover:border-cyan-500/50 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition-colors">
                  <Smartphone className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Seamless Experience</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Whether on desktop or mobile, enjoy a buttery-smooth interface designed for speed and ease of use. Play anywhere, anytime.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works - Step by Step */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -z-10"></div>
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-rajdhani text-white mb-4">
              HOW TO <span className="text-primary">PLAY</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get started in minutes. Follow these simple steps to build your dream team.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent -z-10"></div>

            {[
              { icon: Target, title: "Select Match", desc: "Choose an upcoming match from the lobby." },
              { icon: Users, title: "Create Team", desc: "Pick 11 players within 100 credits budget." },
              { icon: Award, title: "Join Contest", desc: "Enter free contests to compete with others." },
              { icon: Trophy, title: "Win & Learn", desc: "Track points live and climb the leaderboard." }
            ].map((step, index) => (
              <div key={index} className="relative text-center group">
                <div className="w-24 h-24 mx-auto bg-black border-2 border-primary/30 rounded-full flex items-center justify-center mb-6 group-hover:border-primary group-hover:scale-110 transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                  <step.icon className="w-10 h-10 text-primary" />
                </div>
                <div className="absolute top-0 right-0 bg-primary text-black font-bold w-8 h-8 rounded-full flex items-center justify-center transform translate-x-1/2 -translate-y-1/2">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground px-4">{step.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/how-to-play">
              <Button variant="outline" className="border-primary/30 text-primary hover:bg-primary/10">
                Read Detailed Rules
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary/20 to-secondary/20 border-y border-white/10">
        <div className="container text-center">
          <h2 className="text-4xl md:text-6xl font-bold font-rajdhani text-white mb-6">
            READY TO <span className="text-primary">DOMINATE?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Join the fastest-growing fantasy cricket community today. It's free, fun, and competitive.
          </p>
          <Link href="/register">
            <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-rajdhani font-bold text-xl px-12 h-16 shadow-2xl transform hover:scale-105 transition-transform">
              CREATE FREE ACCOUNT
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
