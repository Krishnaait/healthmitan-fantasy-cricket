import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Legal() {
  return (
    <Layout>
      <div className="container py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-bold font-rajdhani text-white mb-4">
            LEGAL & <span className="text-primary">COMPLIANCE</span>
          </h1>
          <p className="text-muted-foreground">
            Transparency and trust are our core values. Please review our policies below.
          </p>
        </div>

        <Card className="bg-white/5 border-white/10 backdrop-blur-sm max-w-5xl mx-auto">
          <CardContent className="p-6">
            <Tabs defaultValue="terms" className="flex flex-col md:flex-row gap-6">
              <TabsList className="flex-col h-auto w-full md:w-64 bg-black/20 space-y-1 p-2">
                <TabsTrigger value="terms" className="w-full justify-start font-rajdhani font-bold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Terms & Conditions</TabsTrigger>
                <TabsTrigger value="privacy" className="w-full justify-start font-rajdhani font-bold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Privacy Policy</TabsTrigger>
                <TabsTrigger value="fairplay" className="w-full justify-start font-rajdhani font-bold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Fair Play Policy</TabsTrigger>
                <TabsTrigger value="responsible" className="w-full justify-start font-rajdhani font-bold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Responsible Play</TabsTrigger>
                <TabsTrigger value="disclaimer" className="w-full justify-start font-rajdhani font-bold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Disclaimer</TabsTrigger>
              </TabsList>

              <div className="flex-1 bg-black/20 rounded-lg border border-white/5 p-6">
                <ScrollArea className="h-[600px] pr-4">
                  <TabsContent value="terms" className="mt-0 space-y-4 text-muted-foreground">
                    <h2 className="text-2xl font-bold text-white mb-4">Terms and Conditions</h2>
                    <p>Last updated: December 17, 2025</p>
                    
                    <h3 className="text-lg font-bold text-white mt-6">1. Introduction</h3>
                    <p>Welcome to CricketIQ, operated by HEALTH MITAN PRIVATE LIMITED. By accessing or using our platform, you agree to be bound by these Terms and Conditions.</p>
                    
                    <h3 className="text-lg font-bold text-white mt-6">2. Eligibility</h3>
                    <p>You must be at least 18 years of age to use this platform. This platform is NOT available to residents of Andhra Pradesh, Assam, Odisha, Telangana, Nagaland, and Sikkim.</p>
                    
                    <h3 className="text-lg font-bold text-white mt-6">3. Skill-Based Platform</h3>
                    <p>CricketIQ is a game of skill where success depends on your knowledge of cricket statistics, player form, and match conditions. It is not a game of chance.</p>
                    
                    <h3 className="text-lg font-bold text-white mt-6">4. No Real Money</h3>
                    <p>This is a free-to-play platform. There is no real money involvement, no deposits, and no cash withdrawals. Points and credits have no monetary value.</p>
                  </TabsContent>

                  <TabsContent value="privacy" className="mt-0 space-y-4 text-muted-foreground">
                    <h2 className="text-2xl font-bold text-white mb-4">Privacy Policy</h2>
                    
                    <h3 className="text-lg font-bold text-white mt-6">1. Data Collection</h3>
                    <p>We collect basic information such as your name, email address, and state of residence to verify eligibility and create your account.</p>
                    
                    <h3 className="text-lg font-bold text-white mt-6">2. Data Usage</h3>
                    <p>Your data is used to improve your experience, manage your account, and ensure compliance with Indian laws. We do not sell your data to third parties.</p>
                    
                    <h3 className="text-lg font-bold text-white mt-6">3. Security</h3>
                    <p>We employ industry-standard security measures to protect your personal information from unauthorized access.</p>
                  </TabsContent>

                  <TabsContent value="fairplay" className="mt-0 space-y-4 text-muted-foreground">
                    <h2 className="text-2xl font-bold text-white mb-4">Fair Play Policy</h2>
                    
                    <h3 className="text-lg font-bold text-white mt-6">1. Equal Opportunity</h3>
                    <p>Every user has the same budget (100 credits) and access to the same player pool. Success is determined solely by your selection strategy.</p>
                    
                    <h3 className="text-lg font-bold text-white mt-6">2. Anti-Cheating</h3>
                    <p>The use of automated scripts, bots, or multiple accounts to gain an unfair advantage is strictly prohibited and will result in immediate account suspension.</p>
                    
                    <h3 className="text-lg font-bold text-white mt-6">3. Transparency</h3>
                    <p>Our points system is clearly defined and applied consistently to all users. Live scores are updated based on official match data.</p>
                  </TabsContent>

                  <TabsContent value="responsible" className="mt-0 space-y-4 text-muted-foreground">
                    <h2 className="text-2xl font-bold text-white mb-4">Responsible Play</h2>
                    
                    <h3 className="text-lg font-bold text-white mt-6">1. Play for Fun</h3>
                    <p>Fantasy sports should be entertaining. While our platform is free, we encourage users to maintain a healthy balance between gaming and other life activities.</p>
                    
                    <h3 className="text-lg font-bold text-white mt-6">2. Age Restriction</h3>
                    <p>We strictly enforce the 18+ age requirement to ensure our platform is used by responsible adults.</p>
                    
                    <h3 className="text-lg font-bold text-white mt-6">3. Self-Exclusion</h3>
                    <p>If you feel you are spending too much time on the platform, you can request a temporary or permanent account suspension by contacting support.</p>
                  </TabsContent>

                  <TabsContent value="disclaimer" className="mt-0 space-y-4 text-muted-foreground">
                    <h2 className="text-2xl font-bold text-white mb-4">Legal Disclaimer</h2>
                    
                    <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg text-white">
                      <p className="font-bold">This platform is NOT available in Andhra Pradesh, Assam, Odisha, Telangana, Nagaland, and Sikkim.</p>
                    </div>
                    
                    <p className="mt-4">Only users 18 years and older are permitted. This is a skill-based, free-to-play platform with no real money involved.</p>
                    
                    <p>CricketIQ is operated by HEALTH MITAN PRIVATE LIMITED for educational and entertainment purposes only. We do not promote betting, gambling, or wagering of any kind.</p>
                    
                    <p>The game involves an element of financial risk and may be addictive. Please play responsibly and at your own risk.</p>
                  </TabsContent>
                </ScrollArea>
              </div>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
