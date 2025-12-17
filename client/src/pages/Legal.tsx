import Layout from "@/components/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Shield, Lock, Scale, AlertTriangle, FileText, Gavel } from "lucide-react";

export default function Legal() {
  return (
    <Layout>
      <div className="min-h-screen bg-background pt-20 pb-12">
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-rajdhani text-white mb-4">
              LEGAL & <span className="text-primary">COMPLIANCE</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our commitment to transparency, fairness, and user protection. Please read these documents carefully as they govern your use of the CricketIQ platform.
            </p>
          </div>

          <Tabs defaultValue="terms" className="w-full">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="md:col-span-1">
                <TabsList className="flex flex-col h-auto bg-transparent space-y-2 p-0">
                  <TabsTrigger 
                    value="terms" 
                    className="w-full justify-start px-4 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border border-transparent data-[state=active]:border-primary/20"
                  >
                    <FileText className="w-4 h-4 mr-2" /> Terms & Conditions
                  </TabsTrigger>
                  <TabsTrigger 
                    value="privacy" 
                    className="w-full justify-start px-4 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border border-transparent data-[state=active]:border-primary/20"
                  >
                    <Lock className="w-4 h-4 mr-2" /> Privacy Policy
                  </TabsTrigger>
                  <TabsTrigger 
                    value="fairplay" 
                    className="w-full justify-start px-4 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border border-transparent data-[state=active]:border-primary/20"
                  >
                    <Scale className="w-4 h-4 mr-2" /> Fair Play Policy
                  </TabsTrigger>
                  <TabsTrigger 
                    value="responsible" 
                    className="w-full justify-start px-4 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border border-transparent data-[state=active]:border-primary/20"
                  >
                    <Shield className="w-4 h-4 mr-2" /> Responsible Play
                  </TabsTrigger>
                  <TabsTrigger 
                    value="legality" 
                    className="w-full justify-start px-4 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border border-transparent data-[state=active]:border-primary/20"
                  >
                    <Gavel className="w-4 h-4 mr-2" /> Legality
                  </TabsTrigger>
                </TabsList>
              </div>

              <div className="md:col-span-3">
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <ScrollArea className="h-[800px] pr-4">
                      
                      {/* Terms & Conditions */}
                      <TabsContent value="terms" className="mt-0 space-y-6">
                        <div className="border-b border-white/10 pb-4 mb-6">
                          <h2 className="text-2xl font-bold text-white mb-2">Terms and Conditions</h2>
                          <p className="text-sm text-muted-foreground">Last Updated: December 18, 2025</p>
                        </div>

                        <div className="space-y-6 text-muted-foreground">
                          <section>
                            <h3 className="text-lg font-bold text-white mb-2">1. Introduction and Acceptance</h3>
                            <p className="mb-2">
                              Welcome to CricketIQ ("Platform"), owned and operated by Health Mitan Private Limited ("Company"). By accessing, registering, or using our Platform, you ("User") agree to be bound by these Terms and Conditions ("Terms"). If you do not agree to these Terms, you must not use the Platform.
                            </p>
                            <p>
                              These Terms constitute a legally binding agreement between you and the Company. The Company reserves the right to modify these Terms at any time without prior notice. Continued use of the Platform following any changes signifies your acceptance of the modified Terms.
                            </p>
                          </section>

                          <section>
                            <h3 className="text-lg font-bold text-white mb-2">2. Definitions</h3>
                            <ul className="list-disc pl-5 space-y-2">
                              <li><strong>"Contest"</strong> refers to any skill-based fantasy cricket competition available on the Platform.</li>
                              <li><strong>"Virtual Currency"</strong> refers to the in-game points or credits used for gameplay, which have no real-world monetary value.</li>
                              <li><strong>"User Account"</strong> means the personal profile created by a User to access the Platform.</li>
                              <li><strong>"Restricted States"</strong> refers to Indian states where online fantasy sports may be regulated or prohibited, including but not limited to Andhra Pradesh, Assam, Nagaland, Odisha, Sikkim, and Telangana.</li>
                            </ul>
                          </section>

                          <section>
                            <h3 className="text-lg font-bold text-white mb-2">3. Eligibility</h3>
                            <p className="mb-2">To use the Platform, you must meet the following criteria:</p>
                            <ul className="list-disc pl-5 space-y-2">
                              <li>You must be at least 18 years of age.</li>
                              <li>You must be a resident of India.</li>
                              <li>You must not be a resident of any Restricted State.</li>
                              <li>You must possess a valid mobile number and email address.</li>
                            </ul>
                            <p className="mt-2">
                              The Company reserves the right to request proof of age and residency at any time. Failure to provide such proof may result in the suspension or termination of your User Account.
                            </p>
                          </section>

                          <section>
                            <h3 className="text-lg font-bold text-white mb-2">4. User Accounts and Security</h3>
                            <p className="mb-2">
                              Users are limited to one account per person. Creating multiple accounts to gain an unfair advantage is strictly prohibited. You are responsible for maintaining the confidentiality of your login credentials.
                            </p>
                            <p>
                              You agree to notify the Company immediately of any unauthorized use of your account. The Company shall not be liable for any loss or damage arising from your failure to comply with this section.
                            </p>
                          </section>

                          <section>
                            <h3 className="text-lg font-bold text-white mb-2">5. Intellectual Property Rights</h3>
                            <p>
                              All content, trademarks, logos, software, and data on the Platform are the property of the Company or its licensors. You are granted a limited, non-exclusive, non-transferable license to use the Platform for personal, non-commercial purposes. You may not copy, modify, distribute, or reverse engineer any part of the Platform without prior written consent.
                            </p>
                          </section>

                          <section>
                            <h3 className="text-lg font-bold text-white mb-2">6. Limitation of Liability</h3>
                            <p>
                              The Platform is provided on an "as-is" and "as-available" basis. The Company makes no warranties, express or implied, regarding the Platform's operation or availability. To the fullest extent permitted by law, the Company shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of the Platform.
                            </p>
                          </section>

                          <section>
                            <h3 className="text-lg font-bold text-white mb-2">7. Dispute Resolution</h3>
                            <p>
                              Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts in Raipur, Chhattisgarh, India. Before initiating legal proceedings, Users agree to attempt to resolve the dispute informally by contacting our support team.
                            </p>
                          </section>
                        </div>
                      </TabsContent>

                      {/* Privacy Policy */}
                      <TabsContent value="privacy" className="mt-0 space-y-6">
                        <div className="border-b border-white/10 pb-4 mb-6">
                          <h2 className="text-2xl font-bold text-white mb-2">Privacy Policy</h2>
                          <p className="text-sm text-muted-foreground">Effective Date: December 18, 2025</p>
                        </div>

                        <div className="space-y-6 text-muted-foreground">
                          <section>
                            <h3 className="text-lg font-bold text-white mb-2">1. Information Collection</h3>
                            <p className="mb-2">We collect the following types of information:</p>
                            <ul className="list-disc pl-5 space-y-2">
                              <li><strong>Personal Information:</strong> Name, email address, mobile number, date of birth, and state of residence.</li>
                              <li><strong>Technical Information:</strong> IP address, device type, operating system, and browser type.</li>
                              <li><strong>Usage Data:</strong> Pages visited, time spent on the Platform, and gameplay history.</li>
                            </ul>
                          </section>

                          <section>
                            <h3 className="text-lg font-bold text-white mb-2">2. Use of Information</h3>
                            <p className="mb-2">We use your information for the following purposes:</p>
                            <ul className="list-disc pl-5 space-y-2">
                              <li>To provide and maintain the Platform.</li>
                              <li>To verify your identity and eligibility.</li>
                              <li>To prevent fraud and ensure fair play.</li>
                              <li>To communicate with you regarding updates, promotions, and support.</li>
                              <li>To analyze user behavior and improve our services.</li>
                            </ul>
                          </section>

                          <section>
                            <h3 className="text-lg font-bold text-white mb-2">3. Data Sharing and Disclosure</h3>
                            <p>
                              We do not sell your personal information to third parties. We may share your data with trusted service providers who assist us in operating the Platform (e.g., hosting, analytics), subject to strict confidentiality agreements. We may also disclose information if required by law or to protect our rights.
                            </p>
                          </section>

                          <section>
                            <h3 className="text-lg font-bold text-white mb-2">4. Data Security</h3>
                            <p>
                              We implement industry-standard security measures, including encryption and secure socket layer (SSL) technology, to protect your data. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                            </p>
                          </section>

                          <section>
                            <h3 className="text-lg font-bold text-white mb-2">5. Cookies and Tracking Technologies</h3>
                            <p>
                              We use cookies to enhance your experience, remember your preferences, and analyze traffic. You can control cookie settings through your browser, but disabling cookies may limit certain features of the Platform.
                            </p>
                          </section>

                          <section>
                            <h3 className="text-lg font-bold text-white mb-2">6. User Rights</h3>
                            <p>
                              You have the right to access, correct, or delete your personal information. You may also opt-out of marketing communications at any time. To exercise these rights, please contact our Data Protection Officer at privacy@cricketiq.in.
                            </p>
                          </section>
                        </div>
                      </TabsContent>

                      {/* Fair Play Policy */}
                      <TabsContent value="fairplay" className="mt-0 space-y-6">
                        <div className="border-b border-white/10 pb-4 mb-6">
                          <h2 className="text-2xl font-bold text-white mb-2">Fair Play Policy</h2>
                          <p className="text-sm text-muted-foreground">Ensuring a Level Playing Field</p>
                        </div>

                        <div className="space-y-6 text-muted-foreground">
                          <section>
                            <h3 className="text-lg font-bold text-white mb-2">1. Zero Tolerance for Cheating</h3>
                            <p>
                              CricketIQ is committed to providing a fair and transparent gaming environment. We have a zero-tolerance policy towards any form of cheating, manipulation, or unfair advantage.
                            </p>
                          </section>

                          <section>
                            <h3 className="text-lg font-bold text-white mb-2">2. Prohibited Activities</h3>
                            <ul className="list-disc pl-5 space-y-2">
                              <li><strong>Multiple Accounts:</strong> Creating or operating more than one account per user is strictly forbidden.</li>
                              <li><strong>Collusion:</strong> Users working together to manipulate contest outcomes or share strategies to disadvantage others.</li>
                              <li><strong>Automated Scripts (Bots):</strong> Using software, bots, or scripts to automate gameplay or data scraping.</li>
                              <li><strong>Bonus Abuse:</strong> Exploiting promotional offers or referral systems in a manner inconsistent with their intended purpose.</li>
                            </ul>
                          </section>

                          <section>
                            <h3 className="text-lg font-bold text-white mb-2">3. Monitoring and Detection</h3>
                            <p>
                              We employ advanced algorithms and manual reviews to detect suspicious activity. This includes monitoring IP addresses, device IDs, and gameplay patterns.
                            </p>
                          </section>

                          <section>
                            <h3 className="text-lg font-bold text-white mb-2">4. Consequences of Violation</h3>
                            <p>
                              If a user is found to be violating this policy, the Company reserves the right to:
                            </p>
                            <ul className="list-disc pl-5 space-y-2">
                              <li>Immediately suspend or permanently ban the User Account.</li>
                              <li>Forfeit any winnings or virtual currency associated with the account.</li>
                              <li>Report the activity to relevant legal authorities if necessary.</li>
                            </ul>
                          </section>
                        </div>
                      </TabsContent>

                      {/* Responsible Play */}
                      <TabsContent value="responsible" className="mt-0 space-y-6">
                        <div className="border-b border-white/10 pb-4 mb-6">
                          <h2 className="text-2xl font-bold text-white mb-2">Responsible Play</h2>
                          <p className="text-sm text-muted-foreground">Play Smart, Play Safe</p>
                        </div>

                        <div className="space-y-6 text-muted-foreground">
                          <section>
                            <h3 className="text-lg font-bold text-white mb-2">1. Our Philosophy</h3>
                            <p>
                              Fantasy cricket is a game of skill and entertainment. It should never be seen as a source of income or a way to recover debts. We encourage all users to play responsibly and within their means.
                            </p>
                          </section>

                          <section>
                            <h3 className="text-lg font-bold text-white mb-2">2. Age Verification</h3>
                            <p>
                              We strictly enforce an 18+ age limit. Users may be required to submit government-issued ID to verify their age. Any account found to belong to a minor will be immediately terminated.
                            </p>
                          </section>

                          <section>
                            <h3 className="text-lg font-bold text-white mb-2">3. Self-Exclusion Tools</h3>
                            <p>
                              We provide tools to help you manage your gameplay:
                            </p>
                            <ul className="list-disc pl-5 space-y-2">
                              <li><strong>Time Limits:</strong> Set daily or weekly limits on the time spent on the Platform.</li>
                              <li><strong>Self-Exclusion:</strong> Temporarily or permanently lock your account if you feel you need a break.</li>
                            </ul>
                          </section>

                          <section>
                            <h3 className="text-lg font-bold text-white mb-2">4. Recognizing Problem Gaming</h3>
                            <p>
                              If you find yourself chasing losses, prioritizing gaming over daily responsibilities, or borrowing money to play, you may be developing a problem. We urge you to seek help from professional organizations.
                            </p>
                          </section>
                        </div>
                      </TabsContent>

                      {/* Legality */}
                      <TabsContent value="legality" className="mt-0 space-y-6">
                        <div className="border-b border-white/10 pb-4 mb-6">
                          <h2 className="text-2xl font-bold text-white mb-2">Legality of Fantasy Cricket</h2>
                          <p className="text-sm text-muted-foreground">Indian Legal Framework</p>
                        </div>

                        <div className="space-y-6 text-muted-foreground">
                          <section>
                            <h3 className="text-lg font-bold text-white mb-2">1. Game of Skill</h3>
                            <p>
                              Fantasy cricket is legally recognized as a "Game of Skill" in India. The Supreme Court of India and various High Courts have ruled that fantasy sports involve a significant amount of skill, knowledge, and judgment, distinguishing them from gambling or betting.
                            </p>
                          </section>

                          <section>
                            <h3 className="text-lg font-bold text-white mb-2">2. Excluded States</h3>
                            <p>
                              Due to specific state laws, we do not offer our services to residents of Andhra Pradesh, Assam, Nagaland, Odisha, Sikkim, and Telangana. Users from these states are prohibited from participating in any contests on the Platform.
                            </p>
                          </section>

                          <section>
                            <h3 className="text-lg font-bold text-white mb-2">3. Compliance</h3>
                            <p>
                              CricketIQ complies with all applicable central and state laws. We are committed to maintaining a legal and ethical platform for all our users.
                            </p>
                          </section>
                        </div>
                      </TabsContent>

                    </ScrollArea>
                  </CardContent>
                </Card>
              </div>
            </div>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
}
