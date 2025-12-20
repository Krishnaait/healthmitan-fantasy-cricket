import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Users, Lightbulb, Trophy, Shield, Heart, Zap, Globe, Rocket, BookOpen, Scale, Award, CheckCircle2, BarChart2, BrainCircuit } from "lucide-react";

export default function About() {
  return (
    <Layout>
      <div className="min-h-screen bg-background pt-20 pb-12">
        {/* Hero Section */}
        <div className="container mb-24">
          <div className="text-center max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Badge variant="outline" className="mb-6 border-primary text-primary px-4 py-1.5 text-sm tracking-widest uppercase">
              Established 2025
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold font-rajdhani text-white mb-8 leading-tight">
              REDEFINING <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-purple-500">FANTASY CRICKET</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              HEALTHMITAN is India's premier free-to-play educational fantasy platform. We are built by cricket lovers, for cricket lovers, with a singular mission: to transform every fan into a master strategist through data, analytics, and pure skill.
            </p>
          </div>
        </div>

        {/* Our Story - Deep Dive */}
        <div className="container mb-32">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="relative sticky top-24">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-2xl blur-xl opacity-50"></div>
              <img 
                src="/images/hero-realistic.jpg" 
                alt="Our Journey" 
                className="relative rounded-2xl border border-white/10 shadow-2xl w-full object-cover h-[600px]"
              />
              <div className="absolute bottom-8 left-8 right-8 bg-black/80 backdrop-blur-md p-8 rounded-xl border border-white/10">
                <p className="text-primary font-rajdhani font-bold text-xl mb-2">FROM PASSION TO PLATFORM</p>
                <p className="text-white/90 text-base leading-relaxed">"We realized that cricket isn't just a game of luck—it's a game of glorious uncertainties mastered by strategy."</p>
              </div>
            </div>
            
            <div className="space-y-10">
              <div>
                <h2 className="text-4xl font-bold font-rajdhani text-white mb-6">OUR ORIGIN STORY</h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    The genesis of HEALTHMITAN wasn't in a corporate boardroom, but in a living room filled with the nervous energy of a World Cup final. As we—a group of friends and die-hard cricket tragic—debated the nuances of a field placement and the impact of dew on spin, we had a realization.
                  </p>
                  <p>
                    <span className="text-white font-bold">Cricket fans are arguably the most knowledgeable sports fans in the world.</span> They understand strike rates, economy, pitch deterioration, and match-ups. Yet, the existing fantasy landscape didn't honor this intellect.
                  </p>
                  <p>
                    Most platforms had reduced the beautiful complexity of cricket to a mere game of chance, often blurring the lines with gambling. They focused on "winning money" rather than "mastering the game." We felt this was a disservice to the sport we loved.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold font-rajdhani text-white mb-6">THE TURNING POINT</h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    We decided to build the anti-thesis to the "luck-based" apps. We envisioned a platform where your understanding of the game was the only currency that mattered. A place where you could test your cricketing hypothesis without the anxiety of financial loss.
                  </p>
                  <p>
                    After two years of rigorous development, analyzing thousands of match data points, and refining our scoring algorithms to reward true cricketing logic, HEALTHMITAN was born.
                  </p>
                  <div className="p-6 bg-white/5 border-l-4 border-primary rounded-r-xl">
                    <p className="text-white italic text-xl">
                      "Our goal was simple: Create a sanctuary for the true cricket tactician. A place where knowledge reigns supreme."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision - Detailed Cards */}
        <div className="container mb-32">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-white/5 to-transparent border-white/10 backdrop-blur-sm overflow-hidden group hover:border-primary/50 transition-all duration-500 h-full">
              <CardContent className="p-12 relative h-full flex flex-col">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                  <Rocket className="w-64 h-64 text-primary" />
                </div>
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500">
                  <Target className="w-10 h-10 text-primary" />
                </div>
                <h2 className="text-4xl font-bold font-rajdhani text-white mb-6">Our Mission</h2>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  To democratize cricket analytics and strategy. We are on a mission to create a safe, educational, and deeply engaging ecosystem where fans of all ages can test, refine, and prove their cricketing acumen without any financial barriers.
                </p>
                <ul className="space-y-4 mt-auto">
                  {[
                    "Eliminate the 'gambling' stigma from fantasy sports.",
                    "Provide professional-grade analytics to every fan.",
                    "Foster a community of learning and strategic debate."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/80">
                      <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-white/5 to-transparent border-white/10 backdrop-blur-sm overflow-hidden group hover:border-primary/50 transition-all duration-500 h-full">
              <CardContent className="p-12 relative h-full flex flex-col">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                  <Globe className="w-64 h-64 text-primary" />
                </div>
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500">
                  <Lightbulb className="w-10 h-10 text-primary" />
                </div>
                <h2 className="text-4xl font-bold font-rajdhani text-white mb-6">Our Vision</h2>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  To become the global standard for educational fantasy sports. We envision a future where HEALTHMITAN is the primary training ground for the next generation of cricket analysts, commentators, coaches, and informed fans.
                </p>
                <ul className="space-y-4 mt-auto">
                  {[
                    "A world where sports literacy is celebrated.",
                    "Connecting millions of fans through shared passion.",
                    "Setting the benchmark for ethical, skill-based gaming."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/80">
                      <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Core Values - Deep Dive */}
        <div className="bg-black/40 border-y border-white/5 py-32 mb-32">
          <div className="container">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-bold font-rajdhani text-white mb-6">OUR CORE VALUES</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                These principles are the bedrock of our existence. They guide every feature we build, every policy we write, and every interaction we have with our community.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              {[
                {
                  icon: <Zap className="w-10 h-10 text-yellow-400" />,
                  title: "Innovation First",
                  subtitle: "Pushing Boundaries",
                  desc: "We refuse to settle for the status quo. From our proprietary 'Impact Points' system to our real-time match simulation engine, we are constantly pushing the technological boundaries of what a fantasy platform can deliver."
                },
                {
                  icon: <Heart className="w-10 h-10 text-red-400" />,
                  title: "Fan Obsession",
                  subtitle: "Users at the Heart",
                  desc: "We are fans first, developers second. Every feature, every button, and every pixel is crafted with the user's joy in mind. If a feature doesn't genuinely enhance the fan experience, it doesn't make it to our platform."
                },
                {
                  icon: <Users className="w-10 h-10 text-blue-400" />,
                  title: "Community Power",
                  subtitle: "Stronger Together",
                  desc: "We believe in the collective wisdom of the crowd. Our platform is designed to foster connection, debate, and friendly competition. We are building a global tribe of cricket intellectuals."
                },
                {
                  icon: <Shield className="w-10 h-10 text-green-400" />,
                  title: "Radical Integrity",
                  subtitle: "Trust is Everything",
                  desc: "In an industry often clouded by doubt, we stand for absolute transparency. We operate with 100% fairness, ensuring data privacy, clear rules, and an even playing field for every single user, regardless of their experience level."
                }
              ].map((value, index) => (
                <div key={index} className="flex gap-6 p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
                  <div className="shrink-0">
                    <div className="w-20 h-20 rounded-2xl bg-black/50 border border-white/10 flex items-center justify-center shadow-lg">
                      {value.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{value.title}</h3>
                    <p className="text-sm font-bold text-primary uppercase tracking-wider mb-4">{value.subtitle}</p>
                    <p className="text-muted-foreground leading-relaxed text-lg">{value.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why HEALTHMITAN - Detailed Comparison */}
        <div className="container mb-32">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 sticky top-24">
              <h2 className="text-4xl md:text-6xl font-bold font-rajdhani text-white mb-8 leading-tight">
                WHY CHOOSE <br/>
                <span className="text-primary">HEALTHMITAN?</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                In a crowded market of fantasy apps, we stand apart by focusing on what truly matters: The Game. Here is what makes the HEALTHMITAN experience truly unique and superior.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-white/5 rounded-xl border border-white/10 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider font-bold">Skill Based</div>
                </div>
                <div className="p-6 bg-white/5 rounded-xl border border-white/10 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">0%</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider font-bold">Financial Risk</div>
                </div>
                <div className="p-6 bg-white/5 rounded-xl border border-white/10 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider font-bold">Live Support</div>
                </div>
                <div className="p-6 bg-white/5 rounded-xl border border-white/10 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">AI</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider font-bold">Powered Analytics</div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-7 space-y-8">
              {[
                {
                  icon: <BrainCircuit className="w-8 h-8 text-purple-400" />,
                  title: "Deep Strategic Depth",
                  desc: "We go beyond simple batting and bowling points. Our scoring system accounts for strike rate pressure, dot ball pressure, fielding impact, and captaincy decisions, mirroring the real-world value of a player."
                },
                {
                  icon: <BarChart2 className="w-8 h-8 text-blue-400" />,
                  title: "Advanced Analytics Suite",
                  desc: "Don't just guess—know. We provide every user with professional-grade tools: player form heatmaps, venue history, head-to-head records, and predictive match simulations to inform your decisions."
                },
                {
                  icon: <Scale className="w-8 h-8 text-yellow-400" />,
                  title: "Fair Play Guarantee",
                  desc: "Our advanced anti-fraud algorithms ensure that you are competing against real humans, not bots. We maintain a strict one-account policy to ensure a level playing field for everyone."
                },
                {
                  icon: <BookOpen className="w-8 h-8 text-green-400" />,
                  title: "Learn While You Play",
                  desc: "Our platform features integrated tutorials, expert blogs, and strategy guides. We don't just want you to play; we want you to understand the game better with every match you participate in."
                }
              ].map((feature, index) => (
                <Card key={index} className="bg-white/5 border-white/10 hover:border-primary/50 transition-colors">
                  <CardContent className="p-8 flex gap-6">
                    <div className="shrink-0">
                      <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center">
                        {feature.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold font-rajdhani text-white mb-3">{feature.title}</h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">{feature.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Company Details Section - Updated */}
        <div className="container">
          <div className="bg-gradient-to-r from-white/5 to-transparent border border-white/10 rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 border-b border-white/10 pb-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold font-rajdhani text-white mb-2">CORPORATE IDENTITY</h2>
                  <p className="text-muted-foreground">Official registration details of our operating entity.</p>
                </div>
                <div className="mt-6 md:mt-0 flex gap-4">
                  <Badge variant="outline" className="border-primary/50 text-primary px-4 py-2">
                    CIN: U86909CT2023PTC014998
                  </Badge>
                  <Badge variant="outline" className="border-white/20 text-white px-4 py-2">
                    PAN: AAGCH9149C
                  </Badge>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div>
                    <h4 className="text-primary font-bold text-sm uppercase tracking-wider mb-3">Registered Entity Name</h4>
                    <p className="text-2xl text-white font-rajdhani font-bold">HEALTH MITAN PRIVATE LIMITED</p>
                  </div>
                  
                  <div>
                    <h4 className="text-primary font-bold text-sm uppercase tracking-wider mb-3">Head Office</h4>
                    <div className="flex items-start gap-3">
                      <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0"></div>
                      <p className="text-lg text-white/90 leading-relaxed">
                        C/O MURIT LAL KARSH, vill KOT, KASDOL,<br/>
                        Kasdol, Raipur, Chattisgarh,<br/>
                        493335-India, India
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <div>
                    <h4 className="text-primary font-bold text-sm uppercase tracking-wider mb-3">Platform Nature</h4>
                    <p className="text-2xl text-white font-rajdhani font-bold">Skill-Based Educational Fantasy Sports</p>
                  </div>

                  <div>
                    <h4 className="text-primary font-bold text-sm uppercase tracking-wider mb-3">Regional Office</h4>
                    <div className="flex items-start gap-3">
                      <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0"></div>
                      <p className="text-lg text-white/90 leading-relaxed">
                        915, First Floor, Dhanush Plaza, Near Gopalan Arch,<br/>
                        Mysore Road, Opp. Indian Oil, Above SBI Bank,<br/>
                        Ideal Homes, Rajarajeshwari Nagar,<br/>
                        Bengaluru, Karnataka 560098, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
