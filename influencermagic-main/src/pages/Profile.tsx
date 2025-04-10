
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MainNav } from "@/components/MainNav";
import {
  User,
  MapPin,
  Link as LinkIcon,
  Star,
  Instagram,
  Youtube,
  Twitter,
} from "lucide-react";

const Profile = () => {
  const profile = {
    name: "Sarah Johnson",
    location: "Los Angeles, CA",
    bio: "Lifestyle & Fashion Content Creator | 500K+ Following | Helping brands tell their story through authentic content",
    stats: {
      followers: "523.4K",
      engagement: "4.8%",
      completedCampaigns: 45,
      rating: "4.9",
    },
    socialMedia: {
      instagram: "@sarahjstyle",
      youtube: "SarahJLifestyle",
      twitter: "@sarahjohnson",
    },
  };

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
        <Card className="overflow-hidden">
          <div className="h-32 bg-gradient-to-r from-primary/20 to-accent/20" />
          <div className="relative px-6 pb-6">
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div className="relative -mt-12">
                <div className="rounded-full bg-background p-1">
                  <div className="h-24 w-24 rounded-full bg-primary/20 flex items-center justify-center">
                    <User className="h-12 w-12 text-primary" />
                  </div>
                </div>
              </div>
              <div className="flex-1 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-bold">{profile.name}</h2>
                    <div className="flex items-center text-muted-foreground mt-1">
                      <MapPin className="h-4 w-4 mr-1" />
                      {profile.location}
                    </div>
                  </div>
                  <Button>Edit Profile</Button>
                </div>
                <p className="text-muted-foreground">{profile.bio}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
              <Card className="p-4">
                <p className="text-sm text-muted-foreground">Total Followers</p>
                <p className="text-2xl font-bold">{profile.stats.followers}</p>
              </Card>
              <Card className="p-4">
                <p className="text-sm text-muted-foreground">Engagement Rate</p>
                <p className="text-2xl font-bold">{profile.stats.engagement}</p>
              </Card>
              <Card className="p-4">
                <p className="text-sm text-muted-foreground">Campaigns</p>
                <p className="text-2xl font-bold">{profile.stats.completedCampaigns}</p>
              </Card>
              <Card className="p-4">
                <p className="text-sm text-muted-foreground">Rating</p>
                <div className="flex items-center">
                  <p className="text-2xl font-bold">{profile.stats.rating}</p>
                  <Star className="h-5 w-5 text-yellow-400 ml-1" fill="currentColor" />
                </div>
              </Card>
            </div>

            <div className="mt-6 space-y-2">
              <div className="flex items-center gap-2">
                <Instagram className="h-5 w-5 text-muted-foreground" />
                <span className="text-muted-foreground">{profile.socialMedia.instagram}</span>
              </div>
              <div className="flex items-center gap-2">
                <Youtube className="h-5 w-5 text-muted-foreground" />
                <span className="text-muted-foreground">{profile.socialMedia.youtube}</span>
              </div>
              <div className="flex items-center gap-2">
                <Twitter className="h-5 w-5 text-muted-foreground" />
                <span className="text-muted-foreground">{profile.socialMedia.twitter}</span>
              </div>
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default Profile;
