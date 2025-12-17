import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HeartHandshake, Clock, Ban, PhoneCall, AlertTriangle, CheckCircle2, ShieldAlert } from "lucide-react";

export default function ResponsiblePlay() {
  return (
    <Layout>
      <div className="min-h-screen bg-background pt-20 pb-12">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <h1 className="text-4xl md:text-5xl font-bold font-rajdhani text-white mb-4">
                RESPONSIBLE <span className="text-primary">PLAY</span>
              </h1>
              <p className="text-muted-foreground text-lg">
                Your well-being is our top priority. Play smart, play safe.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20 rounded-2xl p-8 mb-12 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-white to-primary opacity-50"></div>
              <HeartHandshake className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-white mb-4 font-rajdhani">Our Commitment</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
                Fantasy cricket is a game of skill, strategy, and entertainment. We are deeply committed to ensuring that our users play responsibly, within their limits, and maintain a healthy balance between gaming and daily life.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors group">
                <CardContent className="p-8 text-center">
                  <div className="w-14 h-14 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <Clock className="w-7 h-7 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 font-rajdhani">Set Limits</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">Monitor the time and money you spend on fantasy sports. Set personal boundaries before you start playing.</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors group">
                <CardContent className="p-8 text-center">
                  <div className="w-14 h-14 rounded-full bg-red-500/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <Ban className="w-7 h-7 text-red-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 font-rajdhani">Self-Exclusion</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">Take a break by temporarily suspending your account. We offer options ranging from 24 hours to permanent deletion.</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors group">
                <CardContent className="p-8 text-center">
                  <div className="w-14 h-14 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <PhoneCall className="w-7 h-7 text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 font-rajdhani">Get Help</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">If you feel your gaming is becoming a problem, reach out to professional support organizations immediately.</p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-white/5 border-white/10 backdrop-blur-md overflow-hidden">
              <CardHeader className="bg-black/20 border-b border-white/5 p-6">
                <CardTitle className="text-white flex items-center gap-2">
                  <ShieldAlert className="w-5 h-5 text-primary" /> Responsible Gaming Policy
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 text-muted-foreground space-y-8 leading-relaxed">
                <section>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary" />
                    1. Age Verification
                  </h3>
                  <p>
                    We strictly enforce an 18+ age limit for all users. We use advanced third-party verification services to ensure that no minors can access our pay-to-play contests. Any account found to be operated by a minor will be immediately banned and reported.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-yellow-500" />
                    2. Guidelines for Responsible Play
                  </h3>
                  <div className="bg-white/5 p-6 rounded-xl border border-white/5">
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                        <span>Play for entertainment, not as a primary source of income.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                        <span>Never chase your losses. Accept that losing is part of the game.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                        <span>Only play with money you can afford to lose without impacting your daily life.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                        <span>Balance your gaming with other activities, work, and family time.</span>
                      </li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h3 className="text-xl font-bold text-white mb-4">3. Self-Exclusion Options</h3>
                  <p className="mb-6">
                    If you feel you are spending too much time or money, you can request a self-exclusion period. During this time, you will not be able to log in, deposit funds, or participate in contests.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 hover:text-primary font-rajdhani font-bold">24 Hours</Button>
                    <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 hover:text-primary font-rajdhani font-bold">7 Days</Button>
                    <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 hover:text-primary font-rajdhani font-bold">30 Days</Button>
                    <Button variant="outline" className="border-red-500/30 text-red-400 hover:bg-red-500/10 hover:text-red-500 font-rajdhani font-bold">Permanent Ban</Button>
                  </div>
                </section>

                <section className="pt-8 border-t border-white/10">
                  <h3 className="text-xl font-bold text-white mb-4">Need Professional Help?</h3>
                  <p className="mb-4">
                    If you or someone you know is struggling with gaming addiction, please do not hesitate to seek help. There are organizations dedicated to providing support and counseling.
                  </p>
                  <div className="bg-primary/10 border border-primary/20 p-4 rounded-lg inline-block">
                    <p className="font-bold text-primary flex items-center gap-2">
                      <PhoneCall className="w-4 h-4" /> National Problem Gambling Helpline: 1800-266-0058
                    </p>
                  </div>
                </section>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
