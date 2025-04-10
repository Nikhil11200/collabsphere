
import { Check, ArrowRight } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Create Your Profile",
      description: "Set up your brand or influencer profile with your niche, audience demographics, and portfolio.",
      icon: Check,
    },
    {
      number: "02",
      title: "Get Matched",
      description: "Our AI algorithm will match brands with relevant influencers based on compatibility.",
      icon: Check,
    },
    {
      number: "03",
      title: "Collaborate",
      description: "Connect, discuss campaign details, and finalize partnerships through our platform.",
      icon: Check,
    },
    {
      number: "04",
      title: "Track Results",
      description: "Monitor campaign performance with real-time analytics and reporting tools.",
      icon: Check,
    },
  ];

  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How CollabSphere Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <div className="bg-background rounded-xl p-6 border border-muted card-hover h-full">
                <span className="text-4xl font-bold text-primary/20">{step.number}</span>
                <h3 className="text-xl font-semibold mt-4 mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
              {parseInt(step.number) < steps.length && (
                <ArrowRight className="hidden lg:block absolute top-1/2 -right-4 text-muted-foreground transform -translate-y-1/2" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
