import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import estherImg from "@/assets/team/esther-yakubu-sule.jpeg";

const EstherYakubuSule = () => {
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
                      src={estherImg}
                      alt="Mrs. Esther Yakubu Sule"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="md:w-2/3 p-8">
                    <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                      Chairperson
                    </span>
                    <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                      Mrs. Esther Yakubu Sule
                    </h1>
                    <div className="prose prose-lg text-muted-foreground space-y-4">
                      <p>
                        Mrs. Esther Yakubu Sule is a seasoned educationist and administrator with over forty years of teaching experience. She is the founder and proprietress of Nati Academy, Takum. A one-time teacher with the National Teachers Institute, Kaduna. She has gone through a number of schools to acquire professional training culminating in a Master's Degree in Educational Management (M. Ed. Mgt) in 2012 from the Benue State University, Makurdi.
                      </p>
                      <p>
                        As an advocate on children, youths and women's rights, she has been involved in peace building, mediation and conflict resolution since 1991 to date; working with the Peace Justice and Reconciliation Committee set up by RECON and CRWRC of North America to mediate between the Tiv/Jukun crisis in Wukari and the Jukun/Chamba and Kuteb conflict in Takum.
                      </p>
                      <p>
                        In recognition of her efforts in advocacy and peace building, the Rotary International through the Rotary Foundation granted her scholarship to study Peace and Conflict Resolution at the Peace Center in the Chulalangkorn University, Bangkok, Thailand in 2014.
                      </p>
                      <p>
                        She is a registered member of the Rotary International Fellows, member Nigerian Association of Educational Administrators and Planners. Licensed teacher with the Teachers Council. A one-time Vice Chairperson of the Board of Governors of Partners for Christian Empowerment Network (PCEN), an affiliate of Partners World Wide; a non-governmental organization which is involved with training, mentoring, advocacy and raising capital for the vulnerable and less privileged in Nigeria. Mrs. Sule currently lives in Takum, running her schools.
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

export default EstherYakubuSule;
