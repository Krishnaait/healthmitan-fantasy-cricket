import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Shield, FileText, Scale, HeartHandshake, AlertTriangle, Lock, Gavel } from "lucide-react";

export default function Legal() {
  return (
    <Layout>
      <div className="min-h-screen bg-background pt-20 pb-12">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h1 className="text-4xl md:text-6xl font-bold font-rajdhani text-white mb-4">
              LEGAL & <span className="text-primary">COMPLIANCE</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Transparency, trust, and integrity are the pillars of CricketIQ. Please review our comprehensive policies below.
            </p>
          </div>

          <Card className="bg-white/5 border-white/10 backdrop-blur-sm max-w-6xl mx-auto overflow-hidden shadow-2xl">
            <CardContent className="p-0">
              <Tabs defaultValue="terms" className="flex flex-col lg:flex-row min-h-[800px]">
                <div className="lg:w-72 bg-black/40 border-r border-white/5 p-4">
                  <TabsList className="flex-col h-auto w-full bg-transparent space-y-2">
                    <TabsTrigger value="terms" className="w-full justify-start font-rajdhani font-bold text-lg px-4 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all">
                      <FileText className="w-4 h-4 mr-2" /> Terms & Conditions
                    </TabsTrigger>
                    <TabsTrigger value="privacy" className="w-full justify-start font-rajdhani font-bold text-lg px-4 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all">
                      <Lock className="w-4 h-4 mr-2" /> Privacy Policy
                    </TabsTrigger>
                    <TabsTrigger value="fairplay" className="w-full justify-start font-rajdhani font-bold text-lg px-4 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all">
                      <Scale className="w-4 h-4 mr-2" /> Fair Play Policy
                    </TabsTrigger>
                    <TabsTrigger value="responsible" className="w-full justify-start font-rajdhani font-bold text-lg px-4 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all">
                      <HeartHandshake className="w-4 h-4 mr-2" /> Responsible Play
                    </TabsTrigger>
                    <TabsTrigger value="disclaimer" className="w-full justify-start font-rajdhani font-bold text-lg px-4 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all">
                      <AlertTriangle className="w-4 h-4 mr-2" /> Disclaimer
                    </TabsTrigger>
                    <TabsTrigger value="legality" className="w-full justify-start font-rajdhani font-bold text-lg px-4 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all">
                      <Gavel className="w-4 h-4 mr-2" /> Legality of Fantasy
                    </TabsTrigger>
                  </TabsList>
                </div>

                <div className="flex-1 bg-black/20 p-6 lg:p-10">
                  <ScrollArea className="h-[750px] pr-6">
                    <TabsContent value="terms" className="mt-0 space-y-6 text-muted-foreground leading-relaxed">
                      <div className="border-b border-white/10 pb-6 mb-6">
                        <h2 className="text-3xl font-bold font-rajdhani text-white mb-2">Terms and Conditions</h2>
                        <p className="text-sm font-mono text-primary">Last updated: December 18, 2025</p>
                      </div>
                      
                      <section>
                        <h3 className="text-xl font-bold text-white mb-3">1. Introduction & Acceptance</h3>
                        <p>Welcome to CricketIQ ("Platform"), owned and operated by HEALTH MITAN PRIVATE LIMITED. By accessing, registering, or using our Platform, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions ("Terms"). If you do not agree, you must immediately discontinue use of the Platform.</p>
                      </section>
                      
                      <section>
                        <h3 className="text-xl font-bold text-white mb-3">2. Eligibility Criteria</h3>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>You must be a natural person and at least 18 years of age.</li>
                          <li>You must be a resident of India.</li>
                          <li>Residents of Andhra Pradesh, Assam, Odisha, Telangana, Nagaland, and Sikkim are strictly prohibited from participating in any pay-to-play contests due to state gaming laws.</li>
                          <li>You must possess a valid email address and mobile number.</li>
                        </ul>
                      </section>
                      
                      <section>
                        <h3 className="text-xl font-bold text-white mb-3">3. User Account & Security</h3>
                        <p>You are responsible for maintaining the confidentiality of your login credentials. Any activity occurring under your account is your sole responsibility. You agree to notify us immediately of any unauthorized access. CricketIQ reserves the right to suspend or terminate accounts found to be in violation of these Terms.</p>
                      </section>

                      <section>
                        <h3 className="text-xl font-bold text-white mb-3">4. Intellectual Property Rights</h3>
                        <p>All content, including but not limited to software, text, graphics, logos, and trademarks, is the exclusive property of CricketIQ. Unauthorized use, reproduction, or distribution is strictly prohibited and may result in legal action.</p>
                      </section>

                      <section>
                        <h3 className="text-xl font-bold text-white mb-3">5. Contest Rules & Scoring</h3>
                        <p>Participation in contests is subject to specific rules regarding team selection, points calculation, and winner determination. These rules are available on the "How to Play" page. CricketIQ reserves the right to modify scoring rules or cancel contests in the event of technical failures or match abandonments.</p>
                      </section>
                    </TabsContent>

                    <TabsContent value="privacy" className="mt-0 space-y-6 text-muted-foreground leading-relaxed">
                      <div className="border-b border-white/10 pb-6 mb-6">
                        <h2 className="text-3xl font-bold font-rajdhani text-white mb-2">Privacy Policy</h2>
                        <p className="text-sm font-mono text-primary">Your privacy is our priority.</p>
                      </div>
                      
                      <section>
                        <h3 className="text-xl font-bold text-white mb-3">1. Information Collection</h3>
                        <p>We collect personal information necessary to provide our services, including:</p>
                        <ul className="list-disc pl-5 space-y-2 mt-2">
                          <li><strong>Identity Data:</strong> Name, Date of Birth, Gender.</li>
                          <li><strong>Contact Data:</strong> Email address, Mobile number, Residential address.</li>
                          <li><strong>Technical Data:</strong> IP address, Device ID, Browser type, and Operating System.</li>
                        </ul>
                      </section>
                      
                      <section>
                        <h3 className="text-xl font-bold text-white mb-3">2. Use of Information</h3>
                        <p>Your data is utilized for:</p>
                        <ul className="list-disc pl-5 space-y-2 mt-2">
                          <li>Verifying identity and eligibility.</li>
                          <li>Processing contest entries and declaring winners.</li>
                          <li>Improving platform functionality and user experience.</li>
                          <li>Sending service updates, security alerts, and promotional communications (opt-out available).</li>
                        </ul>
                      </section>
                      
                      <section>
                        <h3 className="text-xl font-bold text-white mb-3">3. Data Security & Retention</h3>
                        <p>We implement robust security measures, including encryption and secure server infrastructure, to protect your data. We retain personal information only as long as necessary to fulfill the purposes outlined in this policy or as required by law.</p>
                      </section>

                      <section>
                        <h3 className="text-xl font-bold text-white mb-3">4. Third-Party Disclosure</h3>
                        <p>We do not sell or rent your personal data. We may share data with trusted third-party service providers (e.g., payment processors, verification services) solely for operational purposes, under strict confidentiality agreements.</p>
                      </section>
                    </TabsContent>

                    <TabsContent value="fairplay" className="mt-0 space-y-6 text-muted-foreground leading-relaxed">
                      <div className="border-b border-white/10 pb-6 mb-6">
                        <h2 className="text-3xl font-bold font-rajdhani text-white mb-2">Fair Play Policy</h2>
                        <p className="text-sm font-mono text-primary">Ensuring a level playing field for all.</p>
                      </div>
                      
                      <section>
                        <h3 className="text-xl font-bold text-white mb-3">1. Equal Conditions</h3>
                        <p>All users compete under identical rules. Every participant receives the same 100 Credit budget to select their team. Player prices and point systems are fixed and transparent for everyone.</p>
                      </section>
                      
                      <section>
                        <h3 className="text-xl font-bold text-white mb-3">2. Zero Tolerance for Cheating</h3>
                        <p>The following actions are strictly prohibited:</p>
                        <ul className="list-disc pl-5 space-y-2 mt-2">
                          <li><strong>Multi-Accounting:</strong> Creating multiple accounts to bypass entry limits or manipulate contest outcomes.</li>
                          <li><strong>Collusion:</strong> Users working together to pool entries or share strategies to gain an unfair advantage.</li>
                          <li><strong>Automation:</strong> Using bots, scripts, or unauthorized software to automate team selection or contest joining.</li>
                        </ul>
                        <p className="mt-2 text-red-400">Violation of these rules will result in immediate permanent suspension and forfeiture of all winnings.</p>
                      </section>
                      
                      <section>
                        <h3 className="text-xl font-bold text-white mb-3">3. Deadline Integrity</h3>
                        <p>To prevent unfair advantages based on live match information, all team edits are locked strictly at the official match start time. No changes are permitted after the deadline.</p>
                      </section>
                    </TabsContent>

                    <TabsContent value="responsible" className="mt-0 space-y-6 text-muted-foreground leading-relaxed">
                      <div className="border-b border-white/10 pb-6 mb-6">
                        <h2 className="text-3xl font-bold font-rajdhani text-white mb-2">Responsible Play</h2>
                        <p className="text-sm font-mono text-primary">Play smart. Play safe.</p>
                      </div>
                      
                      <section>
                        <h3 className="text-xl font-bold text-white mb-3">1. Our Philosophy</h3>
                        <p>Fantasy sports is a form of entertainment. We are committed to preventing gaming addiction and ensuring our users play within their means. We encourage you to treat CricketIQ as a recreational activity, not a source of income.</p>
                      </section>
                      
                      <section>
                        <h3 className="text-xl font-bold text-white mb-3">2. User Protection Tools</h3>
                        <ul className="list-disc pl-5 space-y-2">
                          <li><strong>Self-Exclusion:</strong> Users can request to temporarily lock their account for 24 hours, 7 days, or 30 days.</li>
                          <li><strong>Deposit Limits:</strong> (If applicable) Users can set daily or monthly limits on their spending.</li>
                          <li><strong>Activity Alerts:</strong> Notifications to remind users of extended play sessions.</li>
                        </ul>
                      </section>
                      
                      <section>
                        <h3 className="text-xl font-bold text-white mb-3">3. Underage Gaming</h3>
                        <p>We strictly enforce an 18+ age restriction. We utilize third-party verification services to prevent minors from accessing the platform.</p>
                      </section>
                    </TabsContent>

                    <TabsContent value="disclaimer" className="mt-0 space-y-6 text-muted-foreground leading-relaxed">
                      <div className="border-b border-white/10 pb-6 mb-6">
                        <h2 className="text-3xl font-bold font-rajdhani text-white mb-2">Legal Disclaimer</h2>
                        <p className="text-sm font-mono text-primary">Important legal information.</p>
                      </div>
                      
                      <div className="p-6 bg-red-500/10 border border-red-500/20 rounded-xl mb-6">
                        <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                          <AlertTriangle className="w-5 h-5 text-red-500" /> Restricted States
                        </h3>
                        <p className="text-white/80">
                          This platform is NOT available to residents of Andhra Pradesh, Assam, Odisha, Telangana, Nagaland, and Sikkim. Users from these states are prohibited from participating in pay-to-play contests.
                        </p>
                      </div>
                      
                      <p>CricketIQ is a skill-based platform. The game involves an element of financial risk and may be addictive. Please play responsibly and at your own risk.</p>
                      
                      <p>CricketIQ is operated by HEALTH MITAN PRIVATE LIMITED. We are not affiliated with any official cricket board, league, or team. All player names and team names are used for identification purposes only.</p>
                    </TabsContent>

                    <TabsContent value="legality" className="mt-0 space-y-6 text-muted-foreground leading-relaxed">
                      <div className="border-b border-white/10 pb-6 mb-6">
                        <h2 className="text-3xl font-bold font-rajdhani text-white mb-2">Legality of Fantasy Sports</h2>
                        <p className="text-sm font-mono text-primary">Understanding the legal landscape in India.</p>
                      </div>
                      
                      <section>
                        <h3 className="text-xl font-bold text-white mb-3">1. Game of Skill</h3>
                        <p>Fantasy cricket is considered a "Game of Skill" under Indian law. The Supreme Court of India has recognized that success in fantasy sports depends on a user's superior knowledge, training, attention, and experience, rather than mere chance.</p>
                      </section>
                      
                      <section>
                        <h3 className="text-xl font-bold text-white mb-3">2. Legal Precedents</h3>
                        <p>Several High Courts (including Punjab & Haryana, Bombay, and Rajasthan) have upheld the legality of fantasy sports formats similar to CricketIQ, ruling that they do not amount to gambling or betting.</p>
                      </section>
                      
                      <section>
                        <h3 className="text-xl font-bold text-white mb-3">3. Compliance</h3>
                        <p>CricketIQ operates in full compliance with all applicable central and state laws. We continuously monitor legal developments to ensure our platform remains safe, secure, and lawful for all users.</p>
                      </section>
                    </TabsContent>
                  </ScrollArea>
                </div>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
