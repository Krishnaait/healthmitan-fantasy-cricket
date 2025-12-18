import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Shield, Trophy, Users, BarChart2, Menu, X, LogOut, User } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isAuthenticated, logout, user } = useAuth();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "How to Play", path: "/how-to-play" },
    { label: "Matches", path: "/matches" },
    { label: "Team Builder", path: "/team-builder" },
    { label: "About", path: "/about" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background font-space text-foreground overflow-x-hidden selection:bg-primary selection:text-primary-foreground">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-rajdhani font-bold text-2xl tracking-wider hover:opacity-90 transition-opacity">
            <div className="relative w-8 h-8 flex items-center justify-center bg-primary/20 rounded-full border border-primary/50">
              <BarChart2 className="w-5 h-5 text-primary" />
            </div>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
              CRICKET<span className="text-primary">IQ</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link 
                key={item.path} 
                href={item.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary uppercase tracking-wide font-rajdhani",
                  location === item.path
                    ? "text-primary drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]"
                    : "text-muted-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
            {isAuthenticated ? (
              <>
                <Link href="/dashboard">
                  <Button variant="ghost" className="ml-4 text-white hover:text-primary hover:bg-white/5 font-rajdhani font-bold flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {user?.name || 'DASHBOARD'}
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  className="ml-2 border-red-500/50 text-red-400 hover:bg-red-500/10 hover:text-red-300 font-rajdhani font-bold"
                  onClick={logout}
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  LOGOUT
                </Button>
              </>
            ) : (
              <>
                <Link href="/login">
                  <Button variant="outline" className="ml-4 border-primary/50 text-primary hover:bg-primary/10 hover:text-primary font-rajdhani font-bold tracking-wider">
                    LOGIN
                  </Button>
                </Link>
                <Link href="/register">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-rajdhani font-bold tracking-wider shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                    REGISTER
                  </Button>
                </Link>
              </>
            )}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-border/40 bg-background/95 backdrop-blur-xl p-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
            {navItems.map((item) => (
              <Link 
                key={item.path} 
                href={item.path}
                className={cn(
                  "text-base font-medium transition-colors hover:text-primary p-2 rounded-md hover:bg-white/5",
                  location === item.path ? "text-primary bg-white/5" : "text-muted-foreground"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex gap-4 mt-2">
              {isAuthenticated ? (
                <>
                  <Link href="/dashboard" className="flex-1" onClick={() => setMobileMenuOpen(false)}>
                    <Button variant="outline" className="w-full border-primary/50 text-primary">DASHBOARD</Button>
                  </Link>
                  <Button 
                    variant="ghost" 
                    className="flex-1 text-red-400 hover:bg-red-500/10"
                    onClick={() => {
                      logout();
                      setMobileMenuOpen(false);
                    }}
                  >
                    LOGOUT
                  </Button>
                </>
              ) : (
                <>
                  <Link href="/login" className="flex-1" onClick={() => setMobileMenuOpen(false)}>
                    <Button variant="outline" className="w-full border-primary/50 text-primary">LOGIN</Button>
                  </Link>
                  <Link href="/register" className="flex-1" onClick={() => setMobileMenuOpen(false)}>
                    <Button className="w-full bg-primary text-primary-foreground">REGISTER</Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 relative">
        {/* Background Grid Effect */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-0"></div>
        <div className="relative z-10">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-background/50 backdrop-blur-sm pt-12 pb-6">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-rajdhani font-bold text-2xl">
                <div className="w-8 h-8 flex items-center justify-center bg-primary/20 rounded-full border border-primary/50">
                  <BarChart2 className="w-5 h-5 text-primary" />
                </div>
                <span>CRICKET<span className="text-primary">IQ</span></span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                India's premier skill-based fantasy cricket platform. Built for strategy, powered by data, and designed for the true cricket tactician.
              </p>
              <div className="flex gap-4 pt-2">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors cursor-pointer">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors cursor-pointer">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors cursor-pointer">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.468 2.373c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-rajdhani font-bold text-lg mb-4 text-white">Platform</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/how-to-play" className="hover:text-primary transition-colors">How to Play</Link></li>
                <li><Link href="/matches" className="hover:text-primary transition-colors">Matches</Link></li>
                <li><Link href="/team-builder" className="hover:text-primary transition-colors">Team Builder</Link></li>
                <li><Link href="/scoreboard" className="hover:text-primary transition-colors">Live Scoreboard</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-rajdhani font-bold text-lg mb-4 text-white">Legal & Support</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link></li>
                <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                <li><Link href="/fair-play" className="hover:text-primary transition-colors">Fair Play Policy</Link></li>
                <li><Link href="/responsible-play" className="hover:text-primary transition-colors">Responsible Play</Link></li>
                <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-rajdhani font-bold text-lg mb-4 text-white">Contact</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p className="font-bold text-white">HEALTH MITAN PRIVATE LIMITED</p>
                <div className="space-y-2">
                  <div>
                    <span className="text-xs font-bold text-primary uppercase tracking-wider">Head Office</span>
                    <p>915, First Floor, Dhanush Plaza, Near Gopalan Arch, Mysore Road, Opp. Indian Oil, Above SBI Bank, Ideal Homes, Rajarajeshwari Nagar, Bengaluru, Karnataka 560098, India</p>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-primary uppercase tracking-wider">Regional Office</span>
                    <p>Ward No - 15, Village Kot, KASDOL, Near Bajrang Chowk, Raipur, Baigandabari, Balodabazar Bhatapara, Chhattisgarh, 493335</p>
                  </div>
                </div>
                <p className="pt-2">support@cricketiq.in</p>
              </div>
            </div>
          </div>

          <div className="border-t border-border/40 pt-8 pb-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                  <Shield className="w-4 h-4 text-primary" />
                  <span className="text-xs font-medium text-white">100% Secure</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                  <Trophy className="w-4 h-4 text-secondary" />
                  <span className="text-xs font-medium text-white">Skill Based</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                  <Users className="w-4 h-4 text-blue-400" />
                  <span className="text-xs font-medium text-white">18+ Only</span>
                </div>
              </div>
              
              <div className="text-center md:text-right text-xs text-muted-foreground">
                <p>&copy; {new Date().getFullYear()} HEALTH MITAN PRIVATE LIMITED. All rights reserved.</p>
              </div>
            </div>

            <div className="mt-8 p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
              <p className="text-xs text-muted-foreground text-center leading-relaxed">
                <span className="font-bold text-destructive block mb-1">LEGAL DISCLAIMER</span>
                This platform is NOT available in Andhra Pradesh, Assam, Odisha, Telangana, Nagaland, and Sikkim. Only users 18 years and older are permitted. This is a skill-based, free-to-play platform with no real money involved. We do not promote betting or gambling.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
