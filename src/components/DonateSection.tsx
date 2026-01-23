import { Heart, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function DonateSection() {
  const [copied, setCopied] = useState(false);
  const accountNumber = "1017249970";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="donate" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Main Donate Card */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-hero p-8 md:p-12 lg:p-16">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-foreground/5 rounded-full translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-foreground/10 rounded-2xl mb-6 animate-float">
                <Heart className="w-8 h-8 text-primary-foreground" />
              </div>
              
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
                Support Our Mission
              </h2>
              <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-10">
                Your donation helps us empower vulnerable women and children across Nigeria. 
                Every contribution, no matter the size, makes a real difference in someone's life.
              </p>

              {/* Bank Details Card */}
              <div className="bg-primary-foreground rounded-2xl p-6 md:p-8 max-w-md mx-auto shadow-elevated">
                <h3 className="font-display text-xl font-bold text-foreground mb-6">
                  Bank Transfer Details
                </h3>
                
                <div className="space-y-4 text-left">
                  <div className="p-4 bg-secondary rounded-xl">
                    <p className="text-sm text-muted-foreground mb-1">Account Name</p>
                    <p className="font-semibold text-foreground">
                      WOMEN OF VALOUR INI FOR DEV AND EMP
                    </p>
                  </div>
                  
                  <div className="p-4 bg-secondary rounded-xl">
                    <p className="text-sm text-muted-foreground mb-1">Bank Name</p>
                    <p className="font-semibold text-foreground">Zenith Bank PLC</p>
                  </div>
                  
                  <div className="p-4 bg-secondary rounded-xl">
                    <p className="text-sm text-muted-foreground mb-1">Account Number</p>
                    <div className="flex items-center justify-between">
                      <p className="font-semibold text-foreground text-lg">{accountNumber}</p>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={copyToClipboard}
                        className="text-primary hover:text-primary/80"
                      >
                        {copied ? (
                          <Check className="w-4 h-4" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                        <span className="ml-1">{copied ? "Copied!" : "Copy"}</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-primary-foreground/60 text-sm mt-8">
                For international donations or other inquiries, please contact us directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
