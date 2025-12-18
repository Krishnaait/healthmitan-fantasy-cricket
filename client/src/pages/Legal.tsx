import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Shield, FileText, Scale, HeartHandshake, AlertTriangle, Lock, Gavel, Clock, Brain, Users, AlertCircle, Wrench, Phone } from "lucide-react";

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
              Transparency, trust, and integrity are the pillars of HEALTHMITAN. Please review our comprehensive policies below.
            </p>
          </div>

          <Card className="bg-white/5 border-white/10 backdrop-blur-sm max-w-6xl mx-auto overflow-hidden shadow-2xl">
            <CardContent className="p-0">
              <Tabs defaultValue="responsible" className="flex flex-col lg:flex-row min-h-[800px]">
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
                    {/* Terms & Conditions */}
                    <TabsContent value="terms" className="mt-0 space-y-6 text-muted-foreground leading-relaxed">
                      <div className="border-b border-white/10 pb-6 mb-6">
                        <h2 className="text-3xl font-bold font-rajdhani text-white mb-2">Terms and Conditions</h2>
                        <p className="text-sm font-mono text-primary">Last updated: December 18, 2025</p>
                      </div>
                      
                      <section>
                        <h3 className="text-xl font-bold text-white mb-3">1. Introduction & Acceptance</h3>
                        <p>Welcome to HEALTHMITAN ("Platform"), owned and operated by HEALTH MITAN PRIVATE LIMITED. By accessing, registering, or using our Platform, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions ("Terms"). If you do not agree, you must immediately discontinue use of the Platform.</p>
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
                        <p>You are responsible for maintaining the confidentiality of your login credentials. Any activity occurring under your account is your sole responsibility. You agree to notify us immediately of any unauthorized access. HEALTHMITAN reserves the right to suspend or terminate accounts found to be in violation of these Terms.</p>
                      </section>

                      <section>
                        <h3 className="text-xl font-bold text-white mb-3">4. Intellectual Property Rights</h3>
                        <p>All content, including but not limited to software, text, graphics, logos, and trademarks, is the exclusive property of HEALTHMITAN. Unauthorized use, reproduction, or distribution is strictly prohibited and may result in legal action.</p>
                      </section>

                      <section>
                        <h3 className="text-xl font-bold text-white mb-3">5. Contest Rules & Scoring</h3>
                        <p>Participation in contests is subject to specific rules regarding team selection, points calculation, and winner determination. These rules are available on the "How to Play" page. HEALTHMITAN reserves the right to modify scoring rules or cancel contests in the event of technical failures or match abandonments.</p>
                      </section>
                    </TabsContent>

                    {/* Privacy Policy */}
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

                    {/* Fair Play Policy */}
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

                    {/* Responsible Play - Refactored to Card Layout */}
                    <TabsContent value="responsible" className="mt-0 space-y-8">
                      <div className="border-b border-white/10 pb-6 mb-6">
                        <h2 className="text-3xl font-bold font-rajdhani text-white mb-2">Responsible Play</h2>
                        <p className="text-sm font-mono text-primary">Play Smart, Play Safe</p>
                      </div>

                      {/* 1. Age Restrictions */}
                      <Card className="bg-white/5 border-white/10">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-red-500/20 text-red-400">
                              <Shield className="w-6 h-6" />
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-white mb-3">1. Age Restrictions (18+)</h3>
                              <p className="text-muted-foreground mb-4">HEALTHMITAN is strictly for users 18 years of age and above.</p>
                              <ul className="space-y-2 text-sm text-muted-foreground">
                                <li className="flex items-center gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                  <strong>Age Verification:</strong> All users must verify they are 18+ during registration.
                                </li>
                                <li className="flex items-center gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                  <strong>Active Monitoring:</strong> We actively monitor and remove underage accounts.
                                </li>
                                <li className="flex items-center gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                  <strong>Parental Responsibility:</strong> Parents and guardians should monitor children's internet usage.
                                </li>
                              </ul>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      {/* 2. Time Management */}
                      <Card className="bg-white/5 border-white/10">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-blue-500/20 text-blue-400">
                              <Clock className="w-6 h-6" />
                            </div>
                            <div className="w-full">
                              <h3 className="text-xl font-bold text-white mb-3">2. Time Management</h3>
                              <p className="text-muted-foreground mb-4">Maintain a healthy balance between fantasy cricket and other aspects of your life.</p>
                              <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-black/20 p-4 rounded-lg">
                                  <h4 className="font-bold text-white mb-2">Set Time Limits</h4>
                                  <p className="text-sm text-muted-foreground">Decide how much time you'll spend on the platform each day and stick to it.</p>
                                </div>
                                <div className="bg-black/20 p-4 rounded-lg">
                                  <h4 className="font-bold text-white mb-2">Take Regular Breaks</h4>
                                  <p className="text-sm text-muted-foreground">Step away from the screen every hour, especially during extended sessions.</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      {/* 3. Emotional Well-being */}
                      <Card className="bg-white/5 border-white/10">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-green-500/20 text-green-400">
                              <Brain className="w-6 h-6" />
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-white mb-3">3. Emotional Well-being</h3>
                              <p className="text-muted-foreground mb-4">Keep gaming fun, positive, and stress-free.</p>
                              <ul className="space-y-2 text-sm text-muted-foreground">
                                <li className="flex items-center gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                  <strong>Don't Take Losses Personally:</strong> Outcomes involve luck and unpredictability. Don't let poor performance affect your mood.
                                </li>
                                <li className="flex items-center gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                  <strong>Manage Frustration:</strong> If you feel frustrated or stressed, take a break. Come back when you're in a better mindset.
                                </li>
                                <li className="flex items-center gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                  <strong>Celebrate Learning:</strong> Focus on improving your cricket knowledge and strategic thinking, not just winning.
                                </li>
                              </ul>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      {/* 4. Social Responsibility */}
                      <Card className="bg-white/5 border-white/10">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-purple-500/20 text-purple-400">
                              <Users className="w-6 h-6" />
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-white mb-3">4. Social Responsibility</h3>
                              <p className="text-muted-foreground mb-4">Be a positive member of the HEALTHMITAN community.</p>
                              <ul className="space-y-2 text-sm text-muted-foreground">
                                <li className="flex items-center gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                  <strong>Respect Other Users:</strong> Treat fellow players with respect and sportsmanship.
                                </li>
                                <li className="flex items-center gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                  <strong>Avoid Toxic Behavior:</strong> Don't engage in harassment, bullying, or negative interactions.
                                </li>
                              </ul>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      {/* 5. Warning Signs */}
                      <Card className="bg-yellow-500/10 border-yellow-500/20">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-yellow-500/20 text-yellow-400">
                              <AlertCircle className="w-6 h-6" />
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-white mb-3">5. Warning Signs</h3>
                              <p className="text-muted-foreground mb-4">Watch for these signs that your gaming habits may be becoming unhealthy:</p>
                              <ul className="grid md:grid-cols-2 gap-3 text-sm text-muted-foreground">
                                <li className="flex items-center gap-2">
                                  <AlertTriangle className="w-4 h-4 text-yellow-500" /> Spending excessive time on the platform at the expense of other responsibilities.
                                </li>
                                <li className="flex items-center gap-2">
                                  <AlertTriangle className="w-4 h-4 text-yellow-500" /> Feeling anxious, irritable, or restless when not playing.
                                </li>
                                <li className="flex items-center gap-2">
                                  <AlertTriangle className="w-4 h-4 text-yellow-500" /> Neglecting work, studies, family, or social activities.
                                </li>
                                <li className="flex items-center gap-2">
                                  <AlertTriangle className="w-4 h-4 text-yellow-500" /> Using the platform to escape from problems or negative feelings.
                                </li>
                              </ul>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      {/* 6. Self-Help Tools */}
                      <Card className="bg-white/5 border-white/10">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-cyan-500/20 text-cyan-400">
                              <Wrench className="w-6 h-6" />
                            </div>
                            <div className="w-full">
                              <h3 className="text-xl font-bold text-white mb-3">6. Self-Help Tools</h3>
                              <p className="text-muted-foreground mb-4">We provide tools to help you maintain control.</p>
                              <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-black/20 p-4 rounded-lg border-l-4 border-primary">
                                  <h4 className="font-bold text-white mb-1">Account Deletion</h4>
                                  <p className="text-xs text-muted-foreground">You can permanently delete your account at any time by contacting support.</p>
                                </div>
                                <div className="bg-black/20 p-4 rounded-lg border-l-4 border-primary">
                                  <h4 className="font-bold text-white mb-1">Take a Break</h4>
                                  <p className="text-xs text-muted-foreground">Request a temporary account suspension (cooling-off period) of 24h, 7 days, or 30 days.</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      {/* 7. Support Resources */}
                      <Card className="bg-primary/10 border-primary/20">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/20 text-primary">
                              <Phone className="w-6 h-6" />
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-white mb-3">7. Support Resources</h3>
                              <p className="text-muted-foreground mb-4">If you or someone you know needs help with gaming-related issues, these resources can provide support:</p>
                              <div className="space-y-3">
                                <div className="bg-black/20 p-3 rounded flex justify-between items-center">
                                  <span className="text-white font-medium">National Mental Health Helpline (India)</span>
                                  <span className="text-primary font-mono">1800-599-0019</span>
                                </div>
                                <div className="bg-black/20 p-3 rounded flex justify-between items-center">
                                  <span className="text-white font-medium">HEALTHMITAN Support</span>
                                  <span className="text-primary font-mono">support@healthmitan.in</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>

                    {/* Disclaimer */}
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
                          This platform is NOT available to residents of Andhra Pradesh, Assam, Odisha, Telangana, Nagaland, and Sikkim. Users from these states are prohibited from participating in any pay-to-play contests.
                        </p>
                      </div>
                      
                      <p>HEALTHMITAN is a skill-based platform. The game involves an element of financial risk and may be addictive. Please play responsibly and at your own risk.</p>
                      
                      <p>HEALTHMITAN is operated by HEALTH MITAN PRIVATE LIMITED. We are not affiliated with any official cricket board, league, or team. All player names and team names are used for identification purposes only.</p>
                    </TabsContent>

                    {/* Legality */}
                    <TabsContent value="legality" className="mt-0 space-y-6 text-muted-foreground leading-relaxed">
                      <div className="border-b border-white/10 pb-6 mb-6">
                        <h2 className="text-3xl font-bold font-rajdhani text-white mb-2">Legality of Fantasy Sports</h2>
                        <p className="text-sm font-mono text-primary">Understanding the legal landscape in India.</p>
                      </div>
                      
                      <section>
                        <h3 className="text-xl font-bold text-white mb-3">1. Game of Skill</h3>
                        <p>Fantasy cricket is legally recognized as a "Game of Skill" in India. The Supreme Court of India and various High Courts have ruled that fantasy sports involve a significant amount of skill, knowledge, and judgment, distinguishing them from gambling or betting.</p>
                      </section>
                      
                      <section>
                        <h3 className="text-xl font-bold text-white mb-3">2. Excluded States</h3>
                        <p>Due to specific state laws, we do not offer our services to residents of Andhra Pradesh, Assam, Nagaland, Odisha, Sikkim, and Telangana. Users from these states are prohibited from participating in any contests on the Platform.</p>
                      </section>
                      
                      <section>
                        <h3 className="text-xl font-bold text-white mb-3">3. Compliance</h3>
                        <p>HEALTHMITAN complies with all applicable central and state laws. We are committed to maintaining a legal and ethical platform for all our users.</p>
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
