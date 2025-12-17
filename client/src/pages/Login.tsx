import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "wouter";

export default function Login() {
  return (
    <Layout>
      <div className="container flex items-center justify-center min-h-[80vh] py-16">
        <Card className="w-full max-w-md bg-white/5 border-white/10 backdrop-blur-md shadow-2xl">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-3xl font-bold font-rajdhani text-white">
              WELCOME <span className="text-primary">BACK</span>
            </CardTitle>
            <p className="text-muted-foreground">Enter your credentials to access your account</p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="name@example.com" type="email" className="bg-black/20 border-white/10 text-white" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Link href="/forgot-password">
                    <a className="text-xs text-primary hover:underline">Forgot password?</a>
                  </Link>
                </div>
                <Input id="password" type="password" className="bg-black/20 border-white/10 text-white" />
              </div>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-rajdhani font-bold text-lg h-12">
                LOGIN
              </Button>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-white/10" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground bg-opacity-0 backdrop-blur-md">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="border-white/10 hover:bg-white/5 text-white">
                Google
              </Button>
              <Button variant="outline" className="border-white/10 hover:bg-white/5 text-white">
                Facebook
              </Button>
            </div>

            <div className="text-center text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Link href="/register">
                <a className="text-primary hover:underline font-bold">Register</a>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
