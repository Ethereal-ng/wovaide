import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import etemiImg from "@/assets/team/etemi-joshua-garba.jpg";

const EtemiJoshuaGarba = () => {
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
                      src={etemiImg}
                      alt="Dr. Etemi Joshua Garba"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="md:w-2/3 p-8">
                    <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                      Trustee
                    </span>
                    <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                      Dr. Etemi Joshua Garba
                    </h1>
                    <div className="prose prose-lg text-muted-foreground space-y-4">
                      <p>
                        Etemi Joshua Garba (PhD, MEng, BSc) is an expert and a consultant in Software Engineering, Digital Economy and Multimedia Technologies. He is the CEO and Co-Founder of Ethereal.ng (a tech startup).
                      </p>
                      <p>
                        He specializes in the design of algorithms and computational models, modeling and simulating software frameworks, analytics and processing of multimedia data (audio, video, images, and text), and Multimedia Data Science and Artificial Intelligence.
                      </p>
                      <p>
                        Etemi Joshua Garba is a Professor in the Department of Computer Science at the Modibbo Adama University, Yola, Adamawa State, Nigeria. He is the current Dean of the Faculty of Computing. He has 19 years of experience in teaching, research and community development.
                      </p>
                      <p>
                        He is a member of the Nigeria Computer Society (NCS), Computer Professionals (Registration Council of Nigeria) CPN and the Institute of Electrical and Electronics Engineers (IEEE).
                      </p>
                      <p>
                        He was a facilitator in software analysis and training at the Social Media and Mobile App Campaign Workshop in Ghana (funded by Media Response and the International Organization for Migration [IOM]). Consequently, he developed the software specification requirements document to design, develop and deploy the FMM West Africa Migrant App.
                      </p>
                      <p>
                        He is the chairman of the National Technical Committee on Communication Technologies and Digital Economy (Standards Organisation of Nigeria). He has published several peer reviewed articles in academic journals and has published books – among such books is "Digital Economy: The Principles, Policies, Practices and Prospects."
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

export default EtemiJoshuaGarba;
