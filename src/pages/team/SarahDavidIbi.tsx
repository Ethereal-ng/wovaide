import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import sarahImg from "@/assets/team/sarah-david-ibi.jpeg";

const SarahDavidIbi = () => {
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
                      src={sarahImg}
                      alt="Mrs. Sarah David Ibi"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="md:w-2/3 p-8">
                    <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                      Vice Chairperson
                    </span>
                    <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                      Mrs. Sarah David Ibi
                    </h1>
                    <div className="prose prose-lg text-muted-foreground space-y-4">
                      <p>
                        Sarah David Ibi is a seasoned programmes oriented individual with over 15 years of experience in programme planning, implementation, monitoring and evaluation of programs. Sarah has served in both private and public service as a health personnel as a nurse, supervisor, planning and coordination officer for the past 28 years.
                      </p>
                      <p>
                        She has been engaged with ad-hoc responsibilities such as Gender Desk Officer HIV/AIDs programmes, Assistant Monitor and Evaluation officer (AMEO) HIV/AIDs programmes, the State Focal person, Prevention from Mother to Child Transmission (PMTCT) and State HIV Testing Services focal point all these responsibilities carried out under the State Ministry of Health (SMOH) and Taraba AIDS Control Agency (TACA). Her passion for humanitarian services lead to engagement as a Volunteer Taraba State Coordinator of Women Trafficking and Child Labour Eradication Foundation (WOTCLEF).
                      </p>
                      <p>
                        For the past 14 years, she has provided technical support to key staff of the of WOTCLEF; and successfully got grants for implementation of community development services: "Mitigating Maternal Infant Mortality in collaboration with community Volunteers, Traditional Birth Attendants and Primary Health Care Development Agency at State and Local Government level with great impact on the communities targeted.
                      </p>
                      <p>
                        Presently Sarah is the Executive Director Women of Valour Initiative for Development and Empowerment (WOVAIDE) where she is passionate about the girl child, women and vulnerable groups. Sarah is an Author, she has put her experiences of working with the vulnerable children in the book authored by her "Child Abuse: Pains and freedom". For Sarah, it is joy working with the organization where her dream she hope, will be amplified with other team members and host of volunteers who may wish to join us.
                      </p>
                      <p>
                        Sarah is a Nigerian Registered Nurse/Midwife. She has had capacity development in programming through Global e-learning, workshops and seminars. She is a facilitator and consultant in programmes related field. Served as a leader of different women group which has endeared her to many fans. A media show presenter and conference speaker, she believes in creating awareness at any slightest opportunity, because knowledge is power.
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

export default SarahDavidIbi;
