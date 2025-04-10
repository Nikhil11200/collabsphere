
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MainNav } from "@/components/MainNav";
import { Search } from "lucide-react";

const Messages = () => {
  const conversations = [
    {
      id: 1,
      name: "StyleCo",
      lastMessage: "Thanks for your interest in our campaign!",
      time: "2h ago",
      unread: true,
    },
    {
      id: 2,
      name: "EcoBeauty",
      lastMessage: "When can you start with the content creation?",
      time: "1d ago",
      unread: false,
    },
    // Add more conversations as needed
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
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Messages</h2>
            <p className="text-muted-foreground">
              Stay in touch with your collaborators
            </p>
          </div>
          <div className="relative w-72">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search messages..."
              className="pl-9"
            />
          </div>
        </div>

        <div className="grid gap-4">
          {conversations.map((conversation) => (
            <Card
              key={conversation.id}
              className={`p-4 cursor-pointer transition-colors hover:bg-accent/5 ${
                conversation.unread ? "border-primary" : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">{conversation.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {conversation.lastMessage}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">
                    {conversation.time}
                  </p>
                  {conversation.unread && (
                    <div className="h-2 w-2 rounded-full bg-primary mt-1 ml-auto" />
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Messages;
