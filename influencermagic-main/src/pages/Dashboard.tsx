
import { Card } from "@/components/ui/card";
import { MainNav } from "@/components/MainNav";
import {
  BarChart,
  Users,
  Target,
  MessageSquare,
} from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "Active Campaigns",
      value: "12",
      icon: Target,
      trend: "+2.5%",
    },
    {
      title: "Total Connections",
      value: "48",
      icon: Users,
      trend: "+12.3%",
    },
    {
      title: "Unread Messages",
      value: "5",
      icon: MessageSquare,
      trend: "3 new",
    },
    {
      title: "Engagement Rate",
      value: "4.6%",
      icon: BarChart,
      trend: "+0.7%",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <h1 className="text-xl font-bold text-primary">CollabSphere</h1>
            <MainNav />
          </div>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight">Welcome back!</h2>
          <p className="text-muted-foreground">
            Here's what's happening with your campaigns today.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.title} className="p-6">
              <div className="flex items-center justify-between space-x-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
                <div>
                  <stat.icon className="h-8 w-8 text-muted-foreground/50" />
                </div>
              </div>
              <div className="mt-4 text-sm font-medium text-primary">
                {stat.trend}
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
