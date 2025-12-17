import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Link, useLocation } from "wouter";

export default function Register() {
  const [, setLocation] = useLocation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate registration success
    setLocation("/dashboard");
  };

  return (
    <Layout>
      <div className="container flex items-center justify-center min-h-[80vh] py-16">
        <Card className="w-full max-w-md bg-white/5 border-white/10 backdrop-blur-md shadow-2xl">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-3xl font-bold font-rajdhani text-white">
              CREATE <span className="text-primary">ACCOUNT</span>
            </CardTitle>
            <p className="text-muted-foreground">Join India's premier fantasy cricket platform</p>
          </CardHeader>
          <CardContent className="space-y-6">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First name</Label>
                  <Input id="firstName" placeholder="John" className="bg-black/20 border-white/10 text-white" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last name</Label>
                  <Input id="lastName" placeholder="Doe" className="bg-black/20 border-white/10 text-white" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="name@example.com" type="email" className="bg-black/20 border-white/10 text-white" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" className="bg-black/20 border-white/10 text-white" required />
              </div>
              
              <div className="flex items-start space-x-2 pt-2">
                <Checkbox id="terms" className="border-white/50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground" required />
                <div className="grid gap-1.5 leading-none">
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-muted-foreground"
                  >
                    I confirm I am 18+ years old and agree to the{" "}
                    <Link href="/terms"><span className="text-primary hover:underline cursor-pointer">Terms of Service</span></Link>
                    {" "}and{" "}
                    <Link href="/privacy"><span className="text-primary hover:underline cursor-pointer">Privacy Policy</span></Link>.
                  </label>
                </div>
              </div>

              <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-rajdhani font-bold text-lg h-12">
                REGISTER
              </Button>
            </form>
            
            <div className="text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link href="/login">
                <span className="text-primary hover:underline font-bold cursor-pointer">Login</span>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
