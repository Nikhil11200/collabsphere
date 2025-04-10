
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MainNav } from "@/components/MainNav";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const campaigns = [
  {
    id: 1,
    title: "Summer Fashion Collection Launch",
    brand: "StyleCo",
    budget: "$1,000 - $2,000",
    requirements: "Fashion & Lifestyle influencers with 10k+ followers",
    deadline: "2024-06-15",
    type: "Instagram Post & Story",
  },
  {
    id: 2,
    title: "Healthy Living Campaign",
    brand: "VitaWell",
    budget: "$500 - $1,000",
    requirements: "Health & Wellness content creators",
    deadline: "2024-05-30",
    type: "YouTube Video",
  },
  // Add more campaign examples as needed
];

const Campaigns = () => {
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
            <h2 className="text-3xl font-bold tracking-tight">Browse Campaigns</h2>
            <p className="text-muted-foreground">
              Find the perfect collaboration opportunities
            </p>
          </div>
          <div className="relative w-72">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search campaigns..."
              className="pl-9"
            />
          </div>
        </div>

        <div className="grid gap-6">
          {campaigns.map((campaign) => (
            <Card key={campaign.id} className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{campaign.title}</h3>
                  <p className="text-muted-foreground mb-4">by {campaign.brand}</p>
                  <div className="space-y-2">
                    <p><strong>Budget:</strong> {campaign.budget}</p>
                    <p><strong>Requirements:</strong> {campaign.requirements}</p>
                    <p><strong>Content Type:</strong> {campaign.type}</p>
                    <p><strong>Deadline:</strong> {campaign.deadline}</p>
                  </div>
                </div>
                <Button>Apply Now</Button>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Campaigns;
