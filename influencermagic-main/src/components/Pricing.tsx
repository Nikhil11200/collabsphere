
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const pricingPlans = [
  {
    name: "Free",
    price: "$0",
    description: "For individuals just getting started",
    features: [
      "Basic profile creation",
      "Limited matches per month",
      "Standard analytics",
      "Community support"
    ],
    buttonText: "Get Started",
    buttonVariant: "outline" as const,
    popular: false,
    path: "/register"
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    description: "For growing influencers & brands",
    features: [
      "Advanced profile customization",
      "Unlimited matches",
      "Priority in search results",
      "Detailed analytics dashboard",
      "Direct messaging",
      "24/7 priority support"
    ],
    buttonText: "Start Free Trial",
    buttonVariant: "default" as const,
    popular: true,
    path: "/register"
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large brands & agencies",
    features: [
      "Everything in Pro",
      "Multi-user accounts",
      "Campaign management tools",
      "Custom API integration",
      "Dedicated account manager",
      "White-label options"
    ],
    buttonText: "Contact Sales",
    buttonVariant: "outline" as const,
    popular: false,
    path: "/register"
  }
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Simple, Transparent Pricing</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Choose the plan that's right for your needs, whether you're just starting out or scaling your collaboration efforts.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <div 
              key={plan.name} 
              className={`relative bg-background rounded-xl p-8 border ${plan.popular ? 'border-primary shadow-lg' : 'border-border'}`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary px-3 py-1 rounded-full text-xs text-white font-medium">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-bold">{plan.name}</h3>
              <div className="flex items-baseline mt-4 mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.period && <span className="text-muted-foreground ml-1">{plan.period}</span>}
              </div>
              <p className="text-muted-foreground mb-6">{plan.description}</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button variant={plan.buttonVariant} className="w-full" size="lg" asChild>
                <Link to={plan.path}>{plan.buttonText}</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
