import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TeamSection } from "@/components/TeamSection";

const Team = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
};

export default Team;
