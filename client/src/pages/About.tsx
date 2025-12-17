import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Users, Lightbulb, Trophy, Shield, Heart, Zap, Globe } from "lucide-react";

export default function About() {
  return (
    <Layout>
      <div className="min-h-screen bg-background pt-20 pb-12">
        {/* Hero Section */}
        <div className="container mb-16">
          <div className="text-center max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Badge variant="outline" className="mb-4 border-primary text-primary px-4 py-1">
              ESTABLISHED 2025
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold font-rajdhani text-white mb-6">
              REDEFINING <span className="text-primary">FANTASY CRICKET</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              CricketIQ is India's premier free-to-play educational fantasy platform. We are built by cricket lovers, for cricket lovers, with a mission to turn every fan into a master strategist.
            </p>
          </div>
        </div>

        {/* Mission & Vision Grid */}
        <div className="container mb-20">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm overflow-hidden group hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-8 relative">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Target className="w-32 h-32 text-primary" />
                </div>
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold font-rajdhani text-white mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To create a safe, educational, and entertaining environment where cricket fans can test their strategic skills, learn about team management, and compete with fellow enthusiasts without any financial risk. We believe fantasy sports should be accessible to everyone.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm overflow-hidden group hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-8 relative">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Lightbulb className="w-32 h-32 text-primary" />
                </div>
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                  <Lightbulb className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold font-rajdhani text-white mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To become the world's leading educational fantasy sports platform, fostering a vibrant community of "Cricket Strategists" who understand the nuances of the game deeper than ever before. We aim to be the training ground for the next generation of cricket analysts.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Core Values */}
        <div className="bg-white/5 py-20 mb-20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-rajdhani text-white mb-4">OUR CORE VALUES</h2>
              <p className="text-muted-foreground">The principles that guide every feature we build.</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  icon: <Zap className="w-6 h-6 text-yellow-400" />,
                  title: "Innovation",
                  desc: "Pioneering new ways to visualize data and gameplay."
                },
                {
                  icon: <Heart className="w-6 h-6 text-red-400" />,
                  title: "Passion",
                  desc: "Celebrating the love of cricket in every pixel."
                },
                {
                  icon: <Users className="w-6 h-6 text-blue-400" />,
                  title: "Community",
                  desc: "Building a space for fans to connect and compete."
                },
                {
                  icon: <Shield className="w-6 h-6 text-green-400" />,
                  title: "Integrity",
                  desc: "Ensuring fair play and transparency above all."
                }
              ].map((value, index) => (
                <div key={index} className="text-center p-6 rounded-lg bg-black/20 border border-white/5 hover:bg-black/40 transition-colors">
                  <div className="w-12 h-12 mx-auto rounded-full bg-white/5 flex items-center justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why We Are Different */}
        <div className="container mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold font-rajdhani text-white">
                WHY <span className="text-primary">CRICKETIQ?</span>
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Trophy className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">100% Free Forever</h3>
                    <p className="text-muted-foreground">No hidden charges, no premium tiers. We are committed to keeping the platform accessible to everyone, regardless of financial means.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Globe className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Educational Focus</h3>
                    <p className="text-muted-foreground">We don't just host games; we teach strategy. Our platform is designed to improve your understanding of player form, pitch conditions, and match dynamics.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Safe & Secure</h3>
                    <p className="text-muted-foreground">We operate with strict data privacy standards and a zero-tolerance policy for bots or cheating. Your experience is our top priority.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 blur-3xl rounded-full" />
              <Card className="relative bg-black/40 border-white/10 backdrop-blur-xl p-8">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-4 bg-white/5 rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-1">50K+</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">Active Users</div>
                  </div>
                  <div className="p-4 bg-white/5 rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-1">1M+</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">Contests Joined</div>
                  </div>
                  <div className="p-4 bg-white/5 rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-1">100%</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">Free to Play</div>
                  </div>
                  <div className="p-4 bg-white/5 rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-1">24/7</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">Support</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Company Details */}
        <section className="py-20 container">
          <div className="bg-black/20 border border-white/5 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold font-rajdhani text-white mb-8">COMPANY DETAILS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-muted-foreground">
              <div>
                <h4 className="text-white font-bold mb-2">Registered Name</h4>
                <p>HEALTH MITAN PRIVATE LIMITED</p>
              </div>
              <div>
                <h4 className="text-white font-bold mb-2">Registered Address</h4>
                <p>Ward No - 15, Village Kot, KASDOL, Near Bajrang Chowk, Raipur, Baigandabari, Balodabazar Bhatapara, Chhattisgarh, 493335</p>
              </div>
              <div>
                <h4 className="text-white font-bold mb-2">Contact Email</h4>
                <p>support@cricketiq.in</p>
              </div>
              <div>
                <h4 className="text-white font-bold mb-2">Platform Type</h4>
                <p>Free-to-play, Skill-based Fantasy Sports</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <div className="container">
          <Card className="bg-gradient-to-r from-primary/20 to-purple-500/20 border-primary/20">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold font-rajdhani text-white mb-4">Ready to Master the Game?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of cricket enthusiasts who are already building their dream teams and climbing the leaderboards.
              </p>
              <a href="/register" className="inline-flex items-center justify-center h-12 px-8 rounded-md bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-colors">
                Start Your Journey
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
