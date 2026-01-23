import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import euodiasImg from "@/assets/team/euodias-david-luther.jpeg";

const EuodiasDavidLuther = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="py-16 md:py-24 bg-gradient-soft">
          <div className="container mx-auto px-4">
            <Link to="/team">
              <Button variant="ghost" className="mb-8">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Team
              </Button>
            </Link>

            <div className="max-w-4xl mx-auto">
              <div className="bg-card rounded-2xl shadow-soft overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={euodiasImg}
                      alt="Barr. Euodias David Luther"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="md:w-2/3 p-8">
                    <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                      Secretary
                    </span>
                    <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                      Barr. Euodias David Luther
                    </h1>
                    <div className="prose prose-lg text-muted-foreground space-y-4">
                      <p>
                        Barr. Euodias David Luther is a legal practitioner dedicated to advocating for human rights and access to justice. With expertise in legal matters affecting vulnerable populations, she brings valuable legal counsel to WOVAIDE's mission.
                      </p>
                      <p>
                        Her commitment to social justice and community development makes her an invaluable member of the Board of Trustees, where she helps ensure that the organization's activities align with legal standards while maximizing impact for the communities served.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EuodiasDavidLuther;
