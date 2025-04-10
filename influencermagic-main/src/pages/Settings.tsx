
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MainNav } from "@/components/MainNav";
import { Bell, Lock, Palette, CreditCard } from "lucide-react";

const Settings = () => {
  const sections = [
    {
      id: "notifications",
      title: "Notifications",
      icon: Bell,
      description: "Manage how you receive notifications about activity and updates",
    },
    {
      id: "security",
      title: "Security",
      icon: Lock,
      description: "Update your password and secure your account",
    },
    {
      id: "appearance",
      title: "Appearance",
      icon: Palette,
      description: "Customize how CollabSphere looks on your device",
    },
    {
      id: "billing",
      title: "Billing",
      icon: CreditCard,
      description: "Manage your subscription and payment methods",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <h1 className="text-xl font-bold text-primary">CollabSphere</h1>
            <MainNav isInfluencer />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
          <p className="text-muted-foreground">
            Manage your account preferences and settings
          </p>
        </div>

        <div className="grid gap-6">
          {sections.map((section) => (
            <Card key={section.id} className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-md bg-primary/10">
                  <section.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-1">{section.title}</h3>
                  <p className="text-muted-foreground mb-4">
                    {section.description}
                  </p>
                  <Button variant="outline">Manage</Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Settings;
