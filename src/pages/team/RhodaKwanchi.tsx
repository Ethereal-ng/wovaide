import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import rhodaImg from "@/assets/team/rhoda-kwanchi.jpg";

const RhodaKwanchi = () => {
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
                      src={rhodaImg}
                      alt="Mrs. Rhoda Kwanchi"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="md:w-2/3 p-8">
                    <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                      Trustee
                    </span>
                    <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                      Mrs. Rhoda Kwanchi
                    </h1>
                    <div className="prose prose-lg text-muted-foreground space-y-4">
                      <p>
                        Rhoda Cephas Kwanchi holds a B.Sc in Business Management from the University of Maiduguri and a Diploma in Secretarial Studies with English from the Language Tuition Center, London.
                      </p>
                      <p>
                        Her extensive career includes roles at College of Preliminary Studies (1982), College of Education Jalingo now Zing where she currently serves as Deputy Registrar, Academic Office. She served as Director of Publicity & Extension at the Family Economic Advancement Program Office, Taraba State, and as Director of Planning Research & Statistics at the Ministry of Women Affairs & Child Development (1999-2008), where she was Desk Officer for UNICEF, UNDP, and Taraba State HIV/AIDS programs.
                      </p>
                      <p>
                        She has completed advanced courses including the Advanced Digital Appreciation Program (ADAPT) at Digital Institute, Kano Campus, and Advanced Human Resource Management Course at ASCON Topo Badagry.
                      </p>
                      <p>
                        Her workshop experience spans Women Trafficking & Child Labour, Gender Mainstreaming, Gender Development, and Poverty Alleviation, with training from organizations including UNICEF, USAID, and JICA.
                      </p>
                      <p>
                        She is a member of the Nigerian Institute of Management (Chartered) and ASCONIAN. Her extracurricular activities include membership in Women of Valour, Kauna Association, Women in Colleges of Education, and Non Academic Staff Union (NASU).
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

export default RhodaKwanchi;
