
import { 
  Users, 
  MessageSquare, 
  Target, 
  Shield 
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Smart Matching",
    description: "AI-powered algorithm connects you with the perfect partners based on your needs and goals.",
  },
  {
    icon: MessageSquare,
    title: "Seamless Communication",
    description: "Built-in messaging system for direct, efficient collaboration between brands and influencers.",
  },
  {
    icon: Target,
    title: "Campaign Management",
    description: "Create, track, and manage campaigns with ease using our intuitive dashboard.",
  },
  {
    icon: Shield,
    title: "Secure Payments",
    description: "Safe and reliable payment processing for hassle-free transactions.",
  },
];

export const Features = () => {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose CollabSphere?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-background rounded-xl p-6 card-hover"
            >
              <feature.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
