import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Terms() {
  return (
    <Layout>
      <div className="container py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold font-rajdhani text-white mb-8">TERMS & <span className="text-primary">CONDITIONS</span></h1>
          
          <Card className="bg-white/5 border-white/10 backdrop-blur-md">
            <CardHeader>
              <CardTitle className="text-white">Last Updated: December 17, 2025</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-6 leading-relaxed">
              <ScrollArea className="h-[600px] pr-4">
                <section className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-3">1. Introduction</h3>
                  <p>Welcome to CricketIQ. By accessing or using our platform, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our services.</p>
                </section>

                <section className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-3">2. Eligibility</h3>
                  <p>To use CricketIQ, you must be at least 18 years of age. By registering, you certify that you are 18 years or older. Residents of the states of Assam, Odisha, Telangana, Nagaland, Sikkim, and Andhra Pradesh are not permitted to participate in pay-to-play contests due to local state laws. Free-to-play contests are open to all residents of India.</p>
                </section>

                <section className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-3">3. User Accounts</h3>
                  <p>You are responsible for maintaining the confidentiality of your account credentials. You agree to notify us immediately of any unauthorized use of your account. We reserve the right to suspend or terminate accounts that violate our policies.</p>
                </section>

                <section className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-3">4. Intellectual Property</h3>
                  <p>All content, features, and functionality of the CricketIQ platform, including but not limited to text, graphics, logos, and software, are the exclusive property of CricketIQ and are protected by Indian and international copyright laws.</p>
                </section>

                <section className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-3">5. Contest Rules</h3>
                  <p>Each contest on CricketIQ is governed by specific rules regarding scoring, team selection, and winner determination. These rules are available on the "How It Works" page and within each contest's details. By joining a contest, you agree to these specific rules.</p>
                </section>

                <section className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-3">6. Limitation of Liability</h3>
                  <p>CricketIQ shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service.</p>
                </section>

                <section className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-3">7. Governing Law</h3>
                  <p>These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts located in India.</p>
                </section>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
