import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const performanceData = [
  { match: 'M1', points: 45 },
  { match: 'M2', points: 88 },
  { match: 'M3', points: 12 },
  { match: 'M4', points: 65 },
  { match: 'M5', points: 102 },
];

const comparisonData = [
  { name: 'Batting', player: 85, avg: 65 },
  { name: 'Bowling', player: 45, avg: 40 },
  { name: 'Fielding', player: 70, avg: 55 },
  { name: 'Consistency', player: 90, avg: 60 },
];

export default function Stats() {
  return (
    <Layout>
      <div className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-6">
          <div>
            <h1 className="text-3xl font-bold font-rajdhani text-white mb-2">
              PLAYER <span className="text-primary">INTELLIGENCE</span>
            </h1>
            <p className="text-muted-foreground">Deep dive into player performance metrics.</p>
          </div>
          
          <div className="flex gap-4 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Search player..." className="pl-9 bg-white/5 border-white/10 text-white" />
            </div>
            <Select defaultValue="t20">
              <SelectTrigger className="w-[120px] bg-white/5 border-white/10 text-white">
                <SelectValue placeholder="Format" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="t20">T20</SelectItem>
                <SelectItem value="odi">ODI</SelectItem>
                <SelectItem value="test">Test</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Player Profile Card */}
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center mb-6">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 border-2 border-primary/50 mb-4 flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">VK</span>
                </div>
                <h2 className="text-2xl font-bold font-rajdhani text-white">Virat Kohli</h2>
                <p className="text-primary font-mono">BATSMAN • INDIA</p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-black/20 p-3 rounded-lg text-center">
                  <div className="text-xs text-muted-foreground uppercase">Matches</div>
                  <div className="text-xl font-bold text-white font-mono">115</div>
                </div>
                <div className="bg-black/20 p-3 rounded-lg text-center">
                  <div className="text-xs text-muted-foreground uppercase">Avg Points</div>
                  <div className="text-xl font-bold text-secondary font-mono">68.5</div>
                </div>
                <div className="bg-black/20 p-3 rounded-lg text-center">
                  <div className="text-xs text-muted-foreground uppercase">Credits</div>
                  <div className="text-xl font-bold text-white font-mono">10.0</div>
                </div>
                <div className="bg-black/20 p-3 rounded-lg text-center">
                  <div className="text-xs text-muted-foreground uppercase">Selection</div>
                  <div className="text-xl font-bold text-white font-mono">88%</div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-muted-foreground">Form Rating</span>
                    <span className="text-primary font-bold">9.2/10</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[92%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-muted-foreground">Consistency</span>
                    <span className="text-secondary font-bold">8.5/10</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-secondary w-[85%]"></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Charts */}
          <div className="lg:col-span-2 space-y-8">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="font-rajdhani text-white">Recent Performance (Fantasy Points)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={performanceData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                      <XAxis dataKey="match" stroke="#ffffff50" />
                      <YAxis stroke="#ffffff50" />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#0f172a', borderColor: '#ffffff20', color: '#fff' }}
                        itemStyle={{ color: '#06b6d4' }}
                      />
                      <Line type="monotone" dataKey="points" stroke="#06b6d4" strokeWidth={3} dot={{ r: 6, fill: "#06b6d4" }} activeDot={{ r: 8 }} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="font-rajdhani text-white">Vs League Average</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={comparisonData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                      <XAxis dataKey="name" stroke="#ffffff50" />
                      <YAxis stroke="#ffffff50" />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#0f172a', borderColor: '#ffffff20', color: '#fff' }}
                        cursor={{fill: '#ffffff05'}}
                      />
                      <Bar dataKey="player" name="Player" fill="#06b6d4" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="avg" name="League Avg" fill="#ffffff20" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
