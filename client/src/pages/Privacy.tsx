import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Lock, Eye, ShieldCheck, Server } from "lucide-react";

export default function Privacy() {
  return (
    <Layout>
      <div className="min-h-screen bg-background pt-20 pb-12">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <h1 className="text-4xl md:text-5xl font-bold font-rajdhani text-white mb-4">
                PRIVACY <span className="text-primary">POLICY</span>
              </h1>
              <p className="text-muted-foreground text-lg">
                We are committed to protecting your personal data and privacy.
              </p>
            </div>
            
            <Card className="bg-white/5 border-white/10 backdrop-blur-md overflow-hidden">
              <CardHeader className="bg-black/20 border-b border-white/5 p-6">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white flex items-center gap-2">
                    <Lock className="w-5 h-5 text-primary" /> Data Protection
                  </CardTitle>
                  <span className="text-sm text-muted-foreground font-mono">Last Updated: December 18, 2025</span>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <ScrollArea className="h-[70vh] p-6 md:p-8">
                  <div className="space-y-8 text-muted-foreground leading-relaxed">
                    <section>
                      <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <Eye className="w-5 h-5 text-secondary" />
                        1. Information We Collect
                      </h3>
                      <p className="mb-4">
                        We collect information you provide directly to us, such as when you create an account, update your profile, participate in contests, or communicate with us. This information may include:
                      </p>
                      <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li><strong>Personal Identity:</strong> Name, email address, mobile number, and date of birth.</li>
                        <li><strong>Account Data:</strong> Username, password, and profile preferences.</li>
                        <li><strong>Usage Data:</strong> Information about how you access and use our Platform, including device type, IP address, and browser type.</li>
                      </ul>
                    </section>

                    <section>
                      <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <Server className="w-5 h-5 text-purple-400" />
                        2. How We Use Your Information
                      </h3>
                      <p className="mb-4">
                        We use the information we collect for various purposes, including to:
                      </p>
                      <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li>Provide, maintain, and improve our services.</li>
                        <li>Process your registration and manage your account.</li>
                        <li>Send you technical notices, updates, security alerts, and support messages.</li>
                        <li>Respond to your comments, questions, and requests.</li>
                        <li>Monitor and analyze trends, usage, and activities in connection with our services.</li>
                        <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities.</li>
                      </ul>
                    </section>

                    <section>
                      <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <ShieldCheck className="w-5 h-5 text-green-400" />
                        3. Information Sharing
                      </h3>
                      <p className="mb-4">
                        We do not share your personal information with third parties except as described in this policy:
                      </p>
                      <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li><strong>Service Providers:</strong> We may share your information with third-party vendors, consultants, and other service providers who need access to such information to carry out work on our behalf.</li>
                        <li><strong>Legal Requirements:</strong> We may disclose your information if we believe disclosure is in accordance with any applicable law, regulation, or legal process.</li>
                        <li><strong>Protection of Rights:</strong> We may disclose information if we believe your actions are inconsistent with our user agreements or policies, or to protect the rights, property, and safety of HEALTHMITAN or others.</li>
                      </ul>
                    </section>

                    <section>
                      <h3 className="text-xl font-bold text-white mb-4">4. Data Security</h3>
                      <p className="mb-4">
                        We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction. We use industry-standard encryption technologies to secure your data during transmission and storage.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-xl font-bold text-white mb-4">5. Cookies and Tracking</h3>
                      <p className="mb-4">
                        We use cookies and similar tracking technologies to track the activity on our service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-xl font-bold text-white mb-4">6. Your Rights</h3>
                      <p className="mb-4">
                        You have the right to access, correct, or delete your personal information. You may also have the right to restrict or object to certain processing of your data. To exercise these rights, please contact us at privacy@healthmitan.in.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-xl font-bold text-white mb-4">7. Changes to This Policy</h3>
                      <p>
                        We may update this privacy policy from time to time. If we make changes, we will notify you by revising the date at the top of the policy and, in some cases, we may provide you with additional notice (such as adding a statement to our homepage or sending you a notification).
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
