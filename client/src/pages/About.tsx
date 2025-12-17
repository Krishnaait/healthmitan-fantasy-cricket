import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Users, Lightbulb, Trophy, Shield, Heart, Zap, Globe, Rocket, BookOpen, Scale, Award } from "lucide-react";

export default function About() {
  return (
    <Layout>
      <div className="min-h-screen bg-background pt-20 pb-12">
        {/* Hero Section */}
        <div className="container mb-24">
          <div className="text-center max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Badge variant="outline" className="mb-6 border-primary text-primary px-4 py-1.5 text-sm tracking-widest">
              ESTABLISHED 2025
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold font-rajdhani text-white mb-8 leading-tight">
              REDEFINING <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-purple-500">FANTASY CRICKET</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              CricketIQ is India's premier free-to-play educational fantasy platform. We are built by cricket lovers, for cricket lovers, with a mission to turn every fan into a master strategist.
            </p>
          </div>
        </div>

        {/* Our Story - Elaborated */}
        <div className="container mb-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-2xl blur-xl opacity-50"></div>
              <img 
                src="/images/hero-realistic.jpg" 
                alt="Our Journey" 
                className="relative rounded-2xl border border-white/10 shadow-2xl w-full object-cover h-[500px]"
              />
              <div className="absolute bottom-8 left-8 right-8 bg-black/80 backdrop-blur-md p-6 rounded-xl border border-white/10">
                <p className="text-primary font-rajdhani font-bold text-lg mb-1">FROM PASSION TO PLATFORM</p>
                <p className="text-white/80 text-sm">Born from a shared love for the gentleman's game.</p>
              </div>
            </div>
            
            <div className="space-y-8">
              <h2 className="text-4xl font-bold font-rajdhani text-white">OUR STORY</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  The idea for CricketIQ was born in a small living room during the nail-biting final of the 2023 World Cup. As we debated captaincy decisions and field placements, we realized something crucial: <span className="text-white font-bold">Cricket fans are the smartest sports fans in the world.</span>
                </p>
                <p>
                  Yet, most fantasy platforms were purely transactional—focused on money rather than the mind. They reduced the beautiful complexity of cricket to mere gambling. We wanted to change that.
                </p>
                <p>
                  We set out to build a platform that honors the intellect of the fan. A place where your knowledge of pitch reports, player form, and match-ups is the only currency that matters. After two years of development, rigorous testing, and countless cups of chai, CricketIQ was launched with a singular promise: <span className="text-primary font-bold">Skill First, Always Free.</span>
                </p>
                <p>
                  Today, we are a growing community of strategists, analysts, and die-hard fans who come together not just to play, but to learn and master the art of cricket strategy.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision Grid */}
        <div className="container mb-24">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-white/5 to-transparent border-white/10 backdrop-blur-sm overflow-hidden group hover:border-primary/50 transition-all duration-500">
              <CardContent className="p-10 relative h-full flex flex-col">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                  <Rocket className="w-48 h-48 text-primary" />
                </div>
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold font-rajdhani text-white mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed flex-grow">
                  To democratize cricket analytics and strategy. We aim to create a safe, educational, and entertaining ecosystem where fans of all ages can test their cricketing acumen without financial barriers. We strive to elevate the conversation around cricket from passive viewing to active analysis.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-white/5 to-transparent border-white/10 backdrop-blur-sm overflow-hidden group hover:border-primary/50 transition-all duration-500">
              <CardContent className="p-10 relative h-full flex flex-col">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                  <Globe className="w-48 h-48 text-primary" />
                </div>
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  <Lightbulb className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold font-rajdhani text-white mb-6">Our Vision</h2>
                <p className="text-lg text-muted-foreground leading-relaxed flex-grow">
                  To become the global standard for educational fantasy sports. We envision a world where CricketIQ is the training ground for the next generation of cricket analysts, commentators, and coaches. A community where knowledge is celebrated, and every match is an opportunity to learn.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Core Values - Elaborated */}
        <div className="bg-black/40 border-y border-white/5 py-24 mb-24">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-rajdhani text-white mb-6">OUR CORE VALUES</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                These aren't just words on a wall. They are the DNA of our platform and the compass for every decision we make.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Zap className="w-8 h-8 text-yellow-400" />,
                  title: "Innovation First",
                  desc: "We don't settle for the status quo. From our proprietary scoring algorithms to our real-time analytics dashboard, we constantly push the boundaries of what a fantasy platform can be."
                },
                {
                  icon: <Heart className="w-8 h-8 text-red-400" />,
                  title: "Fan Obsession",
                  desc: "We are fans first, developers second. Every feature, every button, and every pixel is crafted with the user's joy in mind. If it doesn't delight the fan, we don't build it."
                },
                {
                  icon: <Users className="w-8 h-8 text-blue-400" />,
                  title: "Community Power",
                  desc: "We believe in the collective wisdom of the crowd. Our platform is built to foster connection, debate, and friendly competition among a diverse global community."
                },
                {
                  icon: <Shield className="w-8 h-8 text-green-400" />,
                  title: "Radical Integrity",
                  desc: "Trust is our most valuable asset. We operate with 100% transparency, ensuring fair play, data privacy, and an even playing field for every single user."
                }
              ].map((value, index) => (
                <div key={index} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 rounded-2xl bg-black/50 border border-white/10 flex items-center justify-center mb-6 shadow-lg">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why CricketIQ - Elaborated */}
        <div className="container mb-24">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 sticky top-24">
              <h2 className="text-4xl md:text-6xl font-bold font-rajdhani text-white mb-8 leading-tight">
                WHY CHOOSE <br/>
                <span className="text-primary">CRICKETIQ?</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                In a sea of fantasy apps, we stand apart. Here is what makes the CricketIQ experience truly unique.
              </p>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 blur-3xl rounded-full" />
                <Card className="relative bg-black/60 border-white/10 backdrop-blur-xl p-8">
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                      <div className="text-4xl font-bold text-primary mb-1">50+</div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wider font-bold">Active Users</div>
                    </div>
                    <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                      <div className="text-4xl font-bold text-primary mb-1">20+</div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wider font-bold">Contests Joined</div>
                    </div>
                    <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                      <div className="text-4xl font-bold text-primary mb-1">100%</div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wider font-bold">Free to Play</div>
                    </div>
                    <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                      <div className="text-4xl font-bold text-primary mb-1">24/7</div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wider font-bold">Support</div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
            
            <div className="lg:col-span-7 space-y-8">
              {[
                {
                  icon: <Scale className="w-6 h-6 text-primary" />,
                  title: "The Only True Skill-Based Platform",
                  desc: "Other platforms rely on luck. We rely on logic. Our scoring system rewards deep cricket knowledge—awarding points for strike rates, economy, and fielding impact, not just runs and wickets."
                },
                {
                  icon: <BookOpen className="w-6 h-6 text-primary" />,
                  title: "Learn While You Play",
                  desc: "We provide detailed post-match analysis and performance insights. Every contest is a lesson, helping you understand the game better and improve your strategy for the next match."
                },
                {
                  icon: <Shield className="w-6 h-6 text-primary" />,
                  title: "Zero Financial Risk",
                  desc: "We are strictly a free-to-play platform. There are no entry fees, no deposits, and no risk of losing money. It's pure, unadulterated fun where the only thing at stake is bragging rights."
                },
                {
                  icon: <Award className="w-6 h-6 text-primary" />,
                  title: "Fair Play Certified",
                  desc: "Our algorithms constantly monitor for collusion and bot activity. We guarantee a level playing field where every user has an equal shot at glory based solely on their skill."
                },
                {
                  icon: <Globe className="w-6 h-6 text-primary" />,
                  title: "Global Community",
                  desc: "Connect with fans from Mumbai to Melbourne, London to Lahore. Share tips, discuss strategies, and make friends in our vibrant, moderated community forums."
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-6 p-6 rounded-xl bg-white/5 border border-white/5 hover:border-primary/30 transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Company Details */}
        <section className="py-20 container">
          <div className="bg-gradient-to-br from-black/40 to-black/20 border border-white/10 rounded-3xl p-10 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl font-bold font-rajdhani text-white mb-10 flex items-center gap-3">
                <span className="w-2 h-8 bg-primary rounded-full"></span>
                COMPANY DETAILS
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 text-muted-foreground">
                <div className="space-y-2">
                  <h4 className="text-white font-bold text-sm uppercase tracking-wider opacity-70">Registered Name</h4>
                  <p className="text-lg text-white border-b border-white/10 pb-4">HEALTH MITAN PRIVATE LIMITED</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-bold text-sm uppercase tracking-wider opacity-70">Platform Type</h4>
                  <p className="text-lg text-white border-b border-white/10 pb-4">Free-to-play, Skill-based Fantasy Sports</p>
                </div>
                <div className="space-y-2 md:col-span-2">
                  <h4 className="text-white font-bold text-sm uppercase tracking-wider opacity-70">Registered Address</h4>
                  <p className="text-lg text-white border-b border-white/10 pb-4">Ward No - 15, Village Kot, KASDOL, Near Bajrang Chowk, Raipur, Baigandabari, Balodabazar Bhatapara, Chhattisgarh, 493335</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-bold text-sm uppercase tracking-wider opacity-70">Contact Email</h4>
                  <p className="text-lg text-white">support@cricketiq.in</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <div className="container">
          <Card className="bg-gradient-to-r from-primary/20 to-purple-500/20 border-primary/20 overflow-hidden relative">
            <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10"></div>
            <CardContent className="p-16 text-center relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold font-rajdhani text-white mb-6">Ready to Master the Game?</h2>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                Join thousands of cricket enthusiasts who are already building their dream teams and climbing the leaderboards.
              </p>
              <a href="/register" className="inline-flex items-center justify-center h-14 px-10 rounded-full bg-primary text-black font-bold text-lg hover:bg-white transition-all duration-300 shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_50px_rgba(255,255,255,0.4)] transform hover:-translate-y-1">
                Start Your Journey Now
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
