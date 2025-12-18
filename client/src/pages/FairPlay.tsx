import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Shield, Users, AlertTriangle, CheckCircle, Scale, Gavel, Lock } from "lucide-react";

export default function FairPlay() {
  return (
    <Layout>
      <div className="min-h-screen bg-background pt-20 pb-12">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <h1 className="text-4xl md:text-5xl font-bold font-rajdhani text-white mb-4">
                FAIR PLAY <span className="text-primary">POLICY</span>
              </h1>
              <p className="text-muted-foreground text-lg">
                We are dedicated to maintaining a fair, secure, and transparent gaming environment.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="bg-primary/10 border-primary/20 backdrop-blur-sm">
                <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2 font-rajdhani">Equal Opportunity</h3>
                    <p className="text-sm text-muted-foreground">Every user competes with the same budget, rules, and deadlines. No special advantages.</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-secondary/10 border-secondary/20 backdrop-blur-sm">
                <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                    <Users className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2 font-rajdhani">Real Users Only</h3>
                    <p className="text-sm text-muted-foreground">Strict identity verification to prevent bots, fake accounts, and multiple entries.</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-purple-500/10 border-purple-500/20 backdrop-blur-sm">
                <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <Scale className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2 font-rajdhani">Transparent Scoring</h3>
                    <p className="text-sm text-muted-foreground">Points are calculated automatically based on official match data feeds.</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-white/5 border-white/10 backdrop-blur-md overflow-hidden">
              <CardHeader className="bg-black/20 border-b border-white/5 p-6">
                <CardTitle className="text-white flex items-center gap-2">
                  <Gavel className="w-5 h-5 text-primary" /> Code of Conduct
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <ScrollArea className="h-[600px] p-6 md:p-8">
                  <div className="space-y-8 text-muted-foreground leading-relaxed">
                    <section>
                      <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500" /> 
                        1. Transparency & Integrity
                      </h3>
                      <p className="mb-4">
                        We ensure that all contest rules, scoring systems, and winner declarations are transparent and accessible to all users. The points system is clearly defined and applied consistently across all contests.
                      </p>
                      <p>
                        Our platform uses certified random number generators (RNG) where applicable and relies on official third-party data providers for live match scores to ensure accuracy and impartiality.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5 text-red-500" /> 
                        2. Prohibited Activities
                      </h3>
                      <p className="mb-4">
                        To maintain a fair environment, the following activities are strictly prohibited and will result in immediate account suspension and forfeiture of any winnings:
                      </p>
                      <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li><strong>Multiple Accounts:</strong> Creating or operating multiple accounts by a single user to bypass entry limits or gain an unfair advantage.</li>
                        <li><strong>Collusion:</strong> Users working together to manipulate contest results or pool entries.</li>
                        <li><strong>Automation:</strong> Using scripts, bots, spiders, or any third-party software to automate gameplay, team selection, or data scraping.</li>
                        <li><strong>Bonus Abuse:</strong> Exploiting promotional offers or referral systems in a manner inconsistent with their intended purpose.</li>
                      </ul>
                    </section>

                    <section>
                      <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <Lock className="w-5 h-5 text-secondary" /> 
                        3. Deadline Integrity
                      </h3>
                      <p className="mb-4">
                        All team edits and contest entries are locked strictly at the official match start time. No changes are permitted after the deadline under any circumstances. This ensures that no user can make changes based on live match events.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-xl font-bold text-white mb-4">4. Verification Process</h3>
                      <p className="mb-4">
                        Winners of major contests may be required to undergo a verification process, which includes providing proof of identity and address. This ensures that prizes are awarded to legitimate users who meet our eligibility criteria.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-xl font-bold text-white mb-4">5. Employee Restrictions</h3>
                      <p className="mb-4">
                        Employees of HEALTHMITAN, its affiliates, and their immediate family members are strictly prohibited from participating in any public pay-to-play contests on the platform. They may only participate in private, employee-only contests which do not involve real money prizes.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-xl font-bold text-white mb-4">6. Reporting Violations</h3>
                      <p>
                        If you suspect any user of violating our Fair Play Policy, please report it immediately to our support team at fairplay@healthmitan.in. All reports are investigated thoroughly and kept confidential.
                      </p>
                    </section>
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
