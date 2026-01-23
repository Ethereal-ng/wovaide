import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import samImg from "@/assets/team/sam-david-kuritsi.jpg";

const SamDavidKuritsi = () => {
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
                      src={samImg}
                      alt="Mr. Sam David Kuritsi"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="md:w-2/3 p-8">
                    <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                      Trustee
                    </span>
                    <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                      Mr. Sam David Kuritsi
                    </h1>
                    <div className="prose prose-lg text-muted-foreground space-y-4">
                      <p>
                        Mr. Sam D. Kurutsi holds a National Diploma in Science Laboratory Technology and a Higher National Diploma in Chemistry/Biochemistry from the Federal Polytechnic Mubi. He also holds a Postgraduate Diploma in Education and a Master of Education (M.ed) in Measurement and Evaluation from Taraba State University Jalingo.
                      </p>
                      <p>
                        His experience includes working as HIV/AID Peer Educator under the UNICEF/NYSC Peer Education program in 2006. In 2009, he worked as a volunteer at the Taraba State Chapter of Women Trafficking and Child Labour Eradication Foundation and has participated in several advocacy and capacity building trainings organized by UNICEF.
                      </p>
                      <p>
                        He is also a management staff member of Safe Environment and Community Health Initiative (SECHI) in charge with Research, Monitoring and Evaluation. He assisted his team in collaboration with The Ministry of Health and The Ministry of Environment, Taraba State, to organize various Community Health sensitization campaigns.
                      </p>
                      <p>
                        Mr. Sam D. Kurutsi is a Fellow of the Strategic Institute for Natural Resources and Human Development, and also a Licensed Laboratory Technologist and an Associate Member of the Nigerian Institute of Science Laboratory Technologists and currently a Principal Academic Technologist with the Taraba State University Jalingo where he worked for more than ten years.
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

export default SamDavidKuritsi;
