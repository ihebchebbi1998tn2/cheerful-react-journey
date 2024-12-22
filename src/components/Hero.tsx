import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 fade-in">
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
        Welcome to Your Next Project
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground text-center max-w-2xl mb-8">
        Build something amazing with modern tools and technologies. Start your journey today
        with our powerful platform.
      </p>
      <Button className="group" size="lg">
        Get Started
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Button>
    </div>
  );
};