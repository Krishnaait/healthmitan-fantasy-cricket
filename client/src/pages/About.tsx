import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Flag, ThumbsUp, ThumbsDown, Shield, Users, Zap, Award } from "lucide-react";

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -z-10"></div>
        <div className="container text-center">
          <h1 className="text-5xl md:text-7xl font-bold font-rajdhani text-white mb-6">
            ABOUT <span className="text-primary">CRICKETIQ</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-space leading-relaxed">
            We are India's premier skill-based fantasy cricket platform, built by fans for fans. Our goal is to elevate the fantasy sports experience through data, strategy, and fair play.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <Card className="bg-white/5 border-white/10 backdrop-blur-md">
            <CardContent className="p-8">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold font-rajdhani text-white mb-4">OUR VISION</h2>
              <p className="text-muted-foreground leading-relaxed">
                To become the world's most trusted and engaging fantasy sports platform, where every cricket fan can showcase their knowledge and strategic skills in a transparent and competitive environment.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white/5 border-white/10 backdrop-blur-md">
            <CardContent className="p-8">
              <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mb-6">
                <Flag className="w-8 h-8 text-secondary" />
              </div>
              <h2 className="text-3xl font-bold font-rajdhani text-white mb-4">OUR MISSION</h2>
              <p className="text-muted-foreground leading-relaxed">
                To provide a seamless, data-driven, and fair platform that empowers users to make informed decisions, compete responsibly, and enjoy the thrill of cricket like never before.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-black/20">
        <div className="container">
          <h2 className="text-4xl font-bold font-rajdhani text-white text-center mb-16">OUR CORE <span className="text-primary">VALUES</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: <Shield className="w-8 h-8 text-primary" />, title: "Integrity", desc: "We uphold the highest standards of fairness and transparency in every contest." },
              { icon: <Users className="w-8 h-8 text-secondary" />, title: "Community", desc: "We build features that foster connection and healthy competition among fans." },
              { icon: <Zap className="w-8 h-8 text-purple-400" />, title: "Innovation", desc: "We constantly evolve our platform with cutting-edge tech and analytics." },
              { icon: <Award className="w-8 h-8 text-green-400" />, title: "Excellence", desc: "We strive for perfection in user experience, support, and reliability." }
            ].map((item, i) => (
              <div key={i} className="text-center p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-16 h-16 mx-auto rounded-full bg-background border border-white/10 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold font-rajdhani text-white mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Do's and Don'ts */}
      <section className="py-20 container">
        <h2 className="text-4xl font-bold font-rajdhani text-white text-center mb-16">PLATFORM <span className="text-primary">GUIDELINES</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold font-rajdhani text-green-400 flex items-center gap-3">
              <ThumbsUp className="w-6 h-6" /> DO'S
            </h3>
            <ul className="space-y-4">
              {[
                "Research player stats and pitch conditions before creating teams.",
                "Play responsibly and set personal limits on time and budget.",
                "Verify your account details to ensure smooth withdrawals.",
                "Respect other players and the community guidelines.",
                "Keep your login credentials secure and private."
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-muted-foreground bg-green-500/5 p-4 rounded-lg border border-green-500/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 flex-shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold font-rajdhani text-red-400 flex items-center gap-3">
              <ThumbsDown className="w-6 h-6" /> DON'TS
            </h3>
            <ul className="space-y-4">
              {[
                "Do not create multiple accounts to gain unfair advantages.",
                "Do not share your account password or OTP with anyone.",
                "Do not use bots or automated scripts to participate in contests.",
                "Do not engage in collusion or match-fixing activities.",
                "Do not use abusive language in community chats or support tickets."
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-muted-foreground bg-red-500/5 p-4 rounded-lg border border-red-500/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Why We're Different */}
      <section className="py-20 bg-gradient-to-b from-background to-primary/5 border-t border-white/5">
        <div className="container text-center">
          <h2 className="text-4xl font-bold font-rajdhani text-white mb-12">WHY WE'RE <span className="text-primary">DIFFERENT</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-8 rounded-2xl bg-background border border-white/10 shadow-xl">
              <h3 className="text-2xl font-bold font-rajdhani text-white mb-4">Data-First Approach</h3>
              <p className="text-muted-foreground">We provide pro-level analytics and insights directly in the app, helping you make smarter decisions than on any other platform.</p>
            </div>
            <div className="p-8 rounded-2xl bg-background border border-white/10 shadow-xl">
              <h3 className="text-2xl font-bold font-rajdhani text-white mb-4">Zero Commission Leagues</h3>
              <p className="text-muted-foreground">We host special zero-commission contests where 100% of the entry fees go into the prize pool.</p>
            </div>
            <div className="p-8 rounded-2xl bg-background border border-white/10 shadow-xl">
              <h3 className="text-2xl font-bold font-rajdhani text-white mb-4">Instant Withdrawals</h3>
              <p className="text-muted-foreground">Our automated payment system ensures your winnings are transferred to your bank account instantly, 24/7.</p>
            </div>
          </div>
        </div>
      </section>

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
    </Layout>
  );
}
