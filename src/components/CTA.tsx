import { Button } from "@/components/ui/button";

export const CTA = () => {
  return (
    <div className="py-24 px-4 bg-primary text-primary-foreground">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
          Join thousands of users who are already building amazing things with our platform.
        </p>
        <Button
          variant="secondary"
          size="lg"
          className="bg-white text-primary hover:bg-white/90"
        >
          Start Building Now
        </Button>
      </div>
    </div>
  );
};