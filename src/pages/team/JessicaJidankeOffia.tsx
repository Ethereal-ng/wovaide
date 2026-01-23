import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import jessicaImg from "@/assets/team/jessica-jidanke-offia.jpg";

const JessicaJidankeOffia = () => {
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
                      src={jessicaImg}
                      alt="Barr. Jessica Jidanke Offia"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="md:w-2/3 p-8">
                    <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                      Trustee
                    </span>
                    <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                      Barr. Jessica Jidanke Offia
                    </h1>
                    <div className="prose prose-lg text-muted-foreground space-y-4">
                      <p>
                        Mrs. Jessica R Jidanke-Ofia is a lawyer with over 15 years experience as a Human Rights & Access to Justice legal practitioner and advocate; Women's rights advocacy, conflict resolution and mediation consultant. She obtained a law degree from the University of Jos Nigeria in 2002 and had her law school professional training accordingly. She was thereafter called to the Nigerian bar in 2004. She trained and obtained a (LL.M) in Law and Human Rights at the University of Jos again in 2015.
                      </p>
                      <p>
                        She is a registered member of the Institute of Chartered Mediators and Conciliation (ICMC), Nigerian Bar Association, and International Federation of Women Lawyers FIDA Nigeria. She was a past chairperson of International Federation of Women Lawyers (FIDA) Taraba branch and state coordinator of Legal Aid council Nigeria also in Taraba.
                      </p>
                      <p>
                        She has also participated in training and various collaborations with partners such as United Nations High Commission on Refugees (UNHCR), UNICEF and UNODC. Mrs. Jidanke-Ofia is currently at the Lagos State Office of the Legal Aid Council of Nigeria.
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

export default JessicaJidankeOffia;
