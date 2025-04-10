
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { 
  Home,
  Users,
  MessageSquare,
  Target,
  User,
  Settings
} from "lucide-react";

interface NavProps extends React.HTMLAttributes<HTMLElement> {
  isInfluencer?: boolean;
}

export function MainNav({ className, isInfluencer, ...props }: NavProps) {
  const routes = [
    {
      href: "/dashboard",
      label: "Dashboard",
      icon: Home,
    },
    {
      href: isInfluencer ? "/campaigns" : "/influencers",
      label: isInfluencer ? "Browse Campaigns" : "Find Influencers",
      icon: isInfluencer ? Target : Users,
    },
    {
      href: "/messages",
      label: "Messages",
      icon: MessageSquare,
    },
    {
      href: "/profile",
      label: "Profile",
      icon: User,
    },
    {
      href: "/settings",
      label: "Settings",
      icon: Settings,
    },
  ];

  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      {routes.map((route) => (
        <Link
          key={route.href}
          to={route.href}
          className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-muted-foreground hover:text-primary hover:bg-accent/10 transition-colors"
        >
          <route.icon className="h-4 w-4 mr-2" />
          {route.label}
        </Link>
      ))}
    </nav>
  );
}
