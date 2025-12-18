import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Shield, FileText, AlertCircle, Scale } from "lucide-react";

export default function Terms() {
  return (
    <Layout>
      <div className="min-h-screen bg-background pt-20 pb-12">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <h1 className="text-4xl md:text-5xl font-bold font-rajdhani text-white mb-4">
                TERMS & <span className="text-primary">CONDITIONS</span>
              </h1>
              <p className="text-muted-foreground text-lg">
                Please read these terms carefully before using the HEALTHMITAN platform.
              </p>
            </div>
            
            <Card className="bg-white/5 border-white/10 backdrop-blur-md overflow-hidden">
              <CardHeader className="bg-black/20 border-b border-white/5 p-6">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white flex items-center gap-2">
                    <FileText className="w-5 h-5 text-primary" /> User Agreement
                  </CardTitle>
                  <span className="text-sm text-muted-foreground font-mono">Last Updated: December 18, 2025</span>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <ScrollArea className="h-[70vh] p-6 md:p-8">
                  <div className="space-y-8 text-muted-foreground leading-relaxed">
                    <section>
                      <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm">01</span>
                        Introduction
                      </h3>
                      <p className="mb-4">
                        Welcome to HEALTHMITAN ("we," "our," or "us"). By accessing or using our website, mobile application, or any other services (collectively, the "Platform"), you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree to these Terms, you must not access or use the Platform.
                      </p>
                      <p>
                        HEALTHMITAN is a skill-based fantasy sports platform designed for entertainment and educational purposes. We provide a simulated environment for users to test their cricket knowledge and strategy.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm">02</span>
                        Eligibility
                      </h3>
                      <div className="bg-white/5 p-4 rounded-lg border border-white/5 mb-4">
                        <ul className="list-disc pl-5 space-y-2">
                          <li>You must be at least 18 years of age to register and participate.</li>
                          <li>You must be a resident of India.</li>
                          <li>You must have a valid email address and mobile number.</li>
                        </ul>
                      </div>
                      <p>
                        Residents of Assam, Odisha, Telangana, Nagaland, Sikkim, and Andhra Pradesh are strictly prohibited from participating in any pay-to-play contests (if available) due to state legislations. However, our free-to-play contests are open to all residents of India.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm">03</span>
                        Account Security
                      </h3>
                      <p className="mb-4">
                        You are responsible for maintaining the confidentiality of your login credentials. You agree to notify us immediately of any unauthorized use of your account. HEALTHMITAN will not be liable for any loss or damage arising from your failure to comply with this security obligation.
                      </p>
                      <p>
                        We reserve the right to suspend or terminate your account if we suspect any fraudulent activity, violation of fair play rules, or breach of these Terms.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm">04</span>
                        Intellectual Property
                      </h3>
                      <p>
                        All content on the Platform, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, data compilations, and software, is the property of HEALTHMITAN or its content suppliers and is protected by Indian and international copyright laws.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm">05</span>
                        Platform Usage
                      </h3>
                      <p className="mb-4">
                        You agree not to use the Platform for any unlawful purpose or in any way that could damage, disable, overburden, or impair the Platform. Specifically, you agree not to:
                      </p>
                      <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li>Use any automated means (bots, scrapers, etc.) to access the Platform.</li>
                        <li>Attempt to gain unauthorized access to any portion of the Platform.</li>
                        <li>Interfere with or disrupt the integrity or performance of the Platform.</li>
                        <li>Create multiple accounts to manipulate contest results.</li>
                      </ul>
                    </section>

                    <section>
                      <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm">06</span>
                        Limitation of Liability
                      </h3>
                      <p>
                        To the maximum extent permitted by law, HEALTHMITAN shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Platform.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm">07</span>
                        Governing Law
                      </h3>
                      <p>
                        These Terms shall be governed by and construed in accordance with the laws of India. Any dispute arising out of or in connection with these Terms, including any question regarding its existence, validity, or termination, shall be referred to and finally resolved by the courts of India.
                      </p>
                    </section>

                    <div className="pt-8 border-t border-white/10 mt-8">
                      <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg border border-primary/10">
                        <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <p className="text-sm">
                          <strong>Contact Us:</strong> If you have any questions about these Terms, please contact us at support@healthmitan.in.
                        </p>
                      </div>
                    </div>
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
