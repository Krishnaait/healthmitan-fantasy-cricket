import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Shield, Users, AlertTriangle, CheckCircle } from "lucide-react";

export default function FairPlay() {
  return (
    <Layout>
      <div className="container py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold font-rajdhani text-white mb-8">FAIR PLAY <span className="text-primary">POLICY</span></h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-primary/10 border-primary/20">
              <CardContent className="p-6 flex items-start gap-4">
                <Shield className="w-8 h-8 text-primary mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Equal Opportunity</h3>
                  <p className="text-sm text-muted-foreground">Every user has the same budget, rules, and deadlines. No special advantages.</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-secondary/10 border-secondary/20">
              <CardContent className="p-6 flex items-start gap-4">
                <Users className="w-8 h-8 text-secondary mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Real Users Only</h3>
                  <p className="text-sm text-muted-foreground">Strict verification to prevent bots and multiple accounts.</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-white/5 border-white/10 backdrop-blur-md">
            <CardHeader>
              <CardTitle className="text-white">Our Commitment to Fairness</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-6 leading-relaxed">
              <ScrollArea className="h-[500px] pr-4">
                <section className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" /> Transparency
                  </h3>
                  <p>We ensure that all contest rules, scoring systems, and winner declarations are transparent and accessible to all users. The points system is clearly defined and applied consistently across all contests.</p>
                </section>

                <section className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-yellow-500" /> Prohibited Activities
                  </h3>
                  <p>The following activities are strictly prohibited and will result in immediate account suspension:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>Creating multiple accounts to gain an unfair advantage.</li>
                    <li>Collusion between users to manipulate contest results.</li>
                    <li>Using automated scripts, bots, or third-party software to automate gameplay.</li>
                    <li>Exploiting bugs or glitches in the platform.</li>
                  </ul>
                </section>

                <section className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-3">Deadline Integrity</h3>
                  <p>All team edits and contest entries are locked strictly at the official match start time. No changes are permitted after the deadline under any circumstances to ensure a level playing field.</p>
                </section>

                <section className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-3">Data Integrity</h3>
                  <p>We use trusted third-party data providers for live match scores and statistics. In the event of a data discrepancy, we have a standardized review process to ensure accurate point calculations.</p>
                </section>

                <section className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-3">Employee Restrictions</h3>
                  <p>Employees of CricketIQ and their immediate family members are not eligible to participate in any public pay-to-play contests on the platform.</p>
                </section>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
