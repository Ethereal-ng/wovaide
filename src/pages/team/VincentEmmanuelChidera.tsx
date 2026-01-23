import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import vincentImg from "@/assets/team/vincent-emmanuel-chidera.jpg";

const VincentEmmanuelChidera = () => {
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
                      src={vincentImg}
                      alt="Dr. Vincent Emmanuel Chidera"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="md:w-2/3 p-8">
                    <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                      Trustee
                    </span>
                    <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                      Dr. Vincent Emmanuel Chidera
                    </h1>
                    <div className="prose prose-lg text-muted-foreground space-y-4">
                      <p>
                        Dr. Vincent Emmanuel Chidera is a young and highly enthusiastic medical doctor, a native of Asaga in Arochukwu, Abia State. An alumnus of the University of Calabar, where he studied Medicine and Surgery, and has gained certification from the University of Washington on Epidemiology for Global Health. He also holds a certificate on Health Cluster Coordination from the WHO online certificate program.
                      </p>
                      <p>
                        He is a seasoned youth leader who is passionate about credible leadership and good governance. This informs his many mentorship engagements with hundreds of young people who have grown under his tutelage to become great leaders at different spheres of their life.
                      </p>
                      <p>
                        He has been recklessly involved in different humanitarian projects as a Volunteer owing to his unrivalled affection for the indigent masses and hunger for impact. He is the founder of Soul Meal Initiative, a campus based organization which was involved in providing basic health education and relief materials for orphans and the less privileged in Calabar South, Cross River State, Nigeria.
                      </p>
                      <p>
                        He is passionate about his work, ambitious and driven, highly organized, result oriented and very creative. He is a true definition of a 'people-person', a true leader, who likes to help people.
                      </p>
                      <p>
                        He is currently building an Exclusive Breastfeeding Advocacy project termed Breast is Best Campaign Africa, which he believes would help to mitigate the rising incidence of infant morbidity and mortality in Nigeria and Africa as a whole.
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

export default VincentEmmanuelChidera;
