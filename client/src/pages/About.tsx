import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Target, Users, Flag } from "lucide-react";

export default function About() {
  return (
    <Layout>
      <div className="container py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold font-rajdhani text-white mb-6">
              ABOUT <span className="text-primary">US</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              CricketIQ is India's premier skill-based fantasy cricket platform, built by cricket lovers for cricket lovers. We are on a mission to elevate the fantasy sports experience through data, transparency, and pure strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="p-8">
                <Target className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-2xl font-bold font-rajdhani text-white mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide a safe, transparent, and educational platform where cricket fans can test their knowledge and strategic skills without financial risk. We believe fantasy sports should be about skill, not gambling.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="p-8">
                <Flag className="w-12 h-12 text-secondary mb-6" />
                <h3 className="text-2xl font-bold font-rajdhani text-white mb-4">Indian Roots</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Proudly made in India for the Indian cricket community. We understand the passion that drives cricket in our country and have built a platform that respects and celebrates that spirit.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-12">
            <div className="bg-black/20 border border-white/5 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold font-rajdhani text-white mb-8">Company Details</h2>
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

            <div className="text-center space-y-6">
              <h2 className="text-3xl font-bold font-rajdhani text-white">Our Core Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Transparency</h3>
                  <p className="text-muted-foreground text-sm">Clear rules, open scoring systems, and no hidden mechanics.</p>
                </div>
                <div className="p-6">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Community</h3>
                  <p className="text-muted-foreground text-sm">Building a respectful and engaging community of cricket strategists.</p>
                </div>
                <div className="p-6">
                  <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Fair Play</h3>
                  <p className="text-muted-foreground text-sm">Strict policies against cheating and unfair advantages.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
