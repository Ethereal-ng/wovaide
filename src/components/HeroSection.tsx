import { Heart, Users, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="WOVAIDE community empowerment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-darkest/95 via-purple-dark/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-purple-darkest/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-6 animate-fade-up">
            <Heart className="w-4 h-4 text-purple-light" />
            <span className="text-sm font-medium text-primary-foreground/90">
              The Advocate for the Vulnerable
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Women of Valour Initiative for{" "}
            <span className="text-purple-light">Development</span> and{" "}
            <span className="text-purple-light">Empowerment</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Empowering vulnerable communities in Nigeria through capacity building, 
            advocacy, and sustainable development programs. Together, we're building 
            a future where every woman and child thrives.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl" asChild>
              <a href="#donate">Make a Donation</a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#about">Learn More</a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-primary-foreground/20 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                <Users className="w-5 h-5 text-purple-light" />
                <span className="text-2xl md:text-3xl font-bold text-primary-foreground">2M+</span>
              </div>
              <p className="text-sm text-primary-foreground/70">People Displaced</p>
            </div>
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                <Heart className="w-5 h-5 text-purple-light" />
                <span className="text-2xl md:text-3xl font-bold text-primary-foreground">98M</span>
              </div>
              <p className="text-sm text-primary-foreground/70">Living in Poverty</p>
            </div>
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                <Shield className="w-5 h-5 text-purple-light" />
                <span className="text-2xl md:text-3xl font-bold text-primary-foreground">20+</span>
              </div>
              <p className="text-sm text-primary-foreground/70">Years Experience</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary-foreground/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
