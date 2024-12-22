import { Code, Palette, Zap } from "lucide-react";

const features = [
  {
    icon: <Zap className="h-10 w-10 text-primary" />,
    title: "Lightning Fast",
    description: "Optimized performance for the best user experience",
  },
  {
    icon: <Palette className="h-10 w-10 text-primary" />,
    title: "Beautiful Design",
    description: "Modern and clean interface that looks great on any device",
  },
  {
    icon: <Code className="h-10 w-10 text-primary" />,
    title: "Developer Friendly",
    description: "Built with the latest technologies and best practices",
  },
];

export const Features = () => {
  return (
    <div className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex flex-col items-center text-center">
                {feature.icon}
                <h3 className="text-xl font-semibold mt-4 mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};