import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, MessageSquare } from "lucide-react";

export default function Contact() {
  return (
    <Layout>
      <div className="container py-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-bold font-rajdhani text-white mb-6">
            GET IN <span className="text-primary">TOUCH</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Have questions or feedback? We're here to help. Reach out to our support team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold font-rajdhani text-white mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground">First Name</label>
                    <Input placeholder="John" className="bg-black/20 border-white/10 text-white" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground">Last Name</label>
                    <Input placeholder="Doe" className="bg-black/20 border-white/10 text-white" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">Email Address</label>
                  <Input type="email" placeholder="john@example.com" className="bg-black/20 border-white/10 text-white" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">Subject</label>
                  <Input placeholder="How can we help?" className="bg-black/20 border-white/10 text-white" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">Message</label>
                  <Textarea placeholder="Type your message here..." className="min-h-[150px] bg-black/20 border-white/10 text-white" />
                </div>

                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-rajdhani font-bold h-12 text-lg">
                  SEND MESSAGE
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-black/20 border border-white/5 rounded-xl p-8">
              <h3 className="text-xl font-bold font-rajdhani text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Office Address</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      HEALTH MITAN PRIVATE LIMITED<br />
                      Ward No - 15, Village Kot, KASDOL,<br />
                      Near Bajrang Chowk, Raipur, Baigandabari,<br />
                      Balodabazar Bhatapara, Chhattisgarh, 493335
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Email Support</h4>
                    <p className="text-muted-foreground text-sm">support@cricketiq.in</p>
                    <p className="text-muted-foreground text-sm">grievance@cricketiq.in</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Live Chat</h4>
                    <p className="text-muted-foreground text-sm">Available Mon-Fri, 9 AM - 6 PM IST</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-xl p-8">
              <h3 className="text-xl font-bold font-rajdhani text-white mb-4">Grievance Redressal</h3>
              <p className="text-muted-foreground text-sm mb-4">
                We are committed to resolving any issues you may face. If you have any complaints regarding our services, please contact our Grievance Officer.
              </p>
              <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary/10">
                VIEW GRIEVANCE POLICY
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
