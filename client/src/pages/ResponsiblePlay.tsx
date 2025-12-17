import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HeartHandshake, Clock, Ban, PhoneCall } from "lucide-react";

export default function ResponsiblePlay() {
  return (
    <Layout>
      <div className="container py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold font-rajdhani text-white mb-8">RESPONSIBLE <span className="text-primary">PLAY</span></h1>
          
          <div className="bg-primary/10 border border-primary/20 rounded-xl p-8 mb-12 text-center">
            <HeartHandshake className="w-16 h-16 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-4">We Care About Your Well-being</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Fantasy cricket is a game of skill and entertainment. We are committed to ensuring that our users play responsibly and within their limits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-white/5 border-white/10">
              <CardContent className="p-6 text-center">
                <Clock className="w-10 h-10 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Set Limits</h3>
                <p className="text-sm text-muted-foreground">Monitor the time and money you spend on fantasy sports.</p>
              </CardContent>
            </Card>
            <Card className="bg-white/5 border-white/10">
              <CardContent className="p-6 text-center">
                <Ban className="w-10 h-10 text-red-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Self-Exclusion</h3>
                <p className="text-sm text-muted-foreground">Take a break by temporarily suspending your account.</p>
              </CardContent>
            </Card>
            <Card className="bg-white/5 border-white/10">
              <CardContent className="p-6 text-center">
                <PhoneCall className="w-10 h-10 text-green-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Get Help</h3>
                <p className="text-sm text-muted-foreground">Reach out to support organizations if you need assistance.</p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-white/5 border-white/10 backdrop-blur-md">
            <CardHeader>
              <CardTitle className="text-white">Our Responsible Play Policy</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-6 leading-relaxed">
              <section>
                <h3 className="text-xl font-bold text-white mb-3">Age Verification</h3>
                <p>We strictly enforce an 18+ age limit. We use third-party verification services to ensure that no minors can access our pay-to-play contests.</p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-white mb-3">Playing Responsibly</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Play for entertainment, not as a way to make money.</li>
                  <li>Never chase your losses.</li>
                  <li>Only play with money you can afford to lose.</li>
                  <li>Balance your gaming with other activities.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-bold text-white mb-3">Self-Exclusion Options</h3>
                <p className="mb-4">If you feel you are spending too much time or money, you can request a self-exclusion period:</p>
                <div className="flex gap-4">
                  <Button variant="outline" className="border-white/20 text-white">24 Hours</Button>
                  <Button variant="outline" className="border-white/20 text-white">7 Days</Button>
                  <Button variant="outline" className="border-white/20 text-white">30 Days</Button>
                </div>
              </section>

              <section className="pt-6 border-t border-white/10">
                <h3 className="text-xl font-bold text-white mb-3">Need Help?</h3>
                <p>If you or someone you know is struggling with gaming addiction, please contact:</p>
                <p className="mt-2 font-bold text-primary">National Problem Gambling Helpline: 1800-XXX-XXXX</p>
              </section>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
