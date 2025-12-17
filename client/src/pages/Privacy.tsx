import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Privacy() {
  return (
    <Layout>
      <div className="container py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold font-rajdhani text-white mb-8">PRIVACY <span className="text-primary">POLICY</span></h1>
          
          <Card className="bg-white/5 border-white/10 backdrop-blur-md">
            <CardHeader>
              <CardTitle className="text-white">Last Updated: December 17, 2025</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-6 leading-relaxed">
              <ScrollArea className="h-[600px] pr-4">
                <section className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-3">1. Information We Collect</h3>
                  <p>We collect information you provide directly to us, such as when you create an account, update your profile, or communicate with us. This may include your name, email address, phone number, and date of birth. We also automatically collect certain information about your device and usage of our platform.</p>
                </section>

                <section className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-3">2. How We Use Your Information</h3>
                  <p>We use the information we collect to:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Provide, maintain, and improve our services.</li>
                    <li>Process transactions and send related information.</li>
                    <li>Send you technical notices, updates, security alerts, and support messages.</li>
                    <li>Respond to your comments, questions, and requests.</li>
                    <li>Monitor and analyze trends, usage, and activities in connection with our services.</li>
                  </ul>
                </section>

                <section className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-3">3. Information Sharing</h3>
                  <p>We do not share your personal information with third parties except as described in this policy. We may share your information with:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Service providers who perform services on our behalf.</li>
                    <li>In response to a request for information if we believe disclosure is in accordance with any applicable law, regulation, or legal process.</li>
                    <li>If we believe your actions are inconsistent with our user agreements or policies, or to protect the rights, property, and safety of CricketIQ or others.</li>
                  </ul>
                </section>

                <section className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-3">4. Data Security</h3>
                  <p>We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction. However, no internet transmission is completely secure, and we cannot guarantee the security of your data.</p>
                </section>

                <section className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-3">5. Cookies</h3>
                  <p>We use cookies and similar tracking technologies to track the activity on our service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.</p>
                </section>

                <section className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-3">6. Changes to This Policy</h3>
                  <p>We may update this privacy policy from time to time. If we make changes, we will notify you by revising the date at the top of the policy and, in some cases, we may provide you with additional notice.</p>
                </section>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
