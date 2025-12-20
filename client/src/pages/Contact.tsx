import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, MessageSquare, Clock, Send, HelpCircle, Shield } from "lucide-react";

export default function Contact() {
  return (
    <Layout>
      <div className="min-h-screen bg-background pt-20 pb-12">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h1 className="text-4xl md:text-6xl font-bold font-rajdhani text-white mb-6">
              GET IN <span className="text-primary">TOUCH</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Have questions, feedback, or need assistance? Our dedicated support team is here to help you 24/7.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Contact Info Column */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm overflow-hidden">
                <div className="h-2 bg-primary w-full"></div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold font-rajdhani text-white mb-6 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" /> Corporate Office
                  </h3>
                  <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                    <p className="font-bold text-white">HEALTH MITAN PRIVATE LIMITED</p>
                    <div className="space-y-1">
                      <p className="text-xs text-muted-foreground">CIN: U86909CT2023PTC014998</p>
                      <p className="text-xs text-muted-foreground">PAN: AAGCH9149C</p>
                    </div>
                    
                    <div className="pt-2">
                      <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">Head Office</p>
                      <p>
                        C/O MURIT LAL KARSH, vill KOT, KASDOL,<br />
                        Kasdol, Raipur, Chattisgarh,<br />
                        493335-India, India
                      </p>
                    </div>

                    <div className="pt-2 border-t border-white/10">
                      <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">Regional Office</p>
                      <p>
                        915, First Floor, Dhanush Plaza,<br />
                        Near Gopalan Arch, Mysore Road,<br />
                        Opp. Indian Oil, Above SBI Bank,<br />
                        Ideal Homes, Rajarajeshwari Nagar,<br />
                        Bengaluru, Karnataka 560098, India
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-sm overflow-hidden">
                <div className="h-2 bg-secondary w-full"></div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold font-rajdhani text-white mb-6 flex items-center gap-2">
                    <Mail className="w-5 h-5 text-secondary" /> Support Channels
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 bg-black/20 rounded-lg border border-white/5">
                      <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center">
                        <HelpCircle className="w-4 h-4 text-secondary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">General Queries</p>
                        <p className="text-sm font-bold text-white">support@healthmitan.in</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-black/20 rounded-lg border border-white/5">
                      <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center">
                        <Shield className="w-4 h-4 text-red-400" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Grievance Officer</p>
                        <p className="text-sm font-bold text-white">grievance@healthmitan.in</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-black/20 rounded-lg border border-white/5">
                      <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center">
                        <MessageSquare className="w-4 h-4 text-purple-400" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Live Chat</p>
                        <p className="text-sm font-bold text-white">In-App Support</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-sm overflow-hidden">
                <div className="h-2 bg-green-500 w-full"></div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold font-rajdhani text-white mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-green-500" /> Operating Hours
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Monday - Friday</span>
                      <span className="text-white font-bold">9:00 AM - 8:00 PM IST</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Weekends</span>
                      <span className="text-white font-bold">10:00 AM - 6:00 PM IST</span>
                    </div>
                    <div className="mt-4 pt-4 border-t border-white/10 text-xs text-muted-foreground text-center">
                      *Critical match-day support available until match end.
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form Column */}
            <div className="lg:col-span-2">
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm h-full">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold font-rajdhani text-white mb-2">Send us a Message</h2>
                  <p className="text-muted-foreground mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>
                  
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-muted-foreground">First Name</label>
                        <Input placeholder="Enter your first name" className="bg-black/20 border-white/10 text-white h-12 focus:border-primary/50 transition-colors" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-muted-foreground">Last Name</label>
                        <Input placeholder="Enter your last name" className="bg-black/20 border-white/10 text-white h-12 focus:border-primary/50 transition-colors" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-muted-foreground">Email Address</label>
                        <Input type="email" placeholder="name@example.com" className="bg-black/20 border-white/10 text-white h-12 focus:border-primary/50 transition-colors" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-muted-foreground">Phone Number (Optional)</label>
                        <Input placeholder="+91 XXXXX XXXXX" className="bg-black/20 border-white/10 text-white h-12 focus:border-primary/50 transition-colors" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-muted-foreground">Subject</label>
                      <Input placeholder="What is this regarding?" className="bg-black/20 border-white/10 text-white h-12 focus:border-primary/50 transition-colors" />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-muted-foreground">Message</label>
                      <Textarea placeholder="Type your message here..." className="min-h-[200px] bg-black/20 border-white/10 text-white resize-none focus:border-primary/50 transition-colors" />
                    </div>

                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-rajdhani font-bold h-14 text-lg shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all hover:scale-[1.01]">
                      SEND MESSAGE <Send className="ml-2 w-5 h-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}


