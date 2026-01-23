import { Link } from "react-router-dom";
import euodiasImg from "@/assets/team/euodias-david-luther.jpeg";
import jessicaImg from "@/assets/team/jessica-jidanke-offia.jpg";
import etemiImg from "@/assets/team/etemi-joshua-garba.jpg";
import vincentImg from "@/assets/team/vincent-emmanuel-chidera.jpg";
import samImg from "@/assets/team/sam-david-kuritsi.jpg";
import estherImg from "@/assets/team/esther-yakubu-sule.jpeg";
import rhodaImg from "@/assets/team/rhoda-kwanchi.jpg";
import sarahImg from "@/assets/team/sarah-david-ibi.jpeg";

const teamMembers = [
  {
    name: "Mrs. Esther Yakubu Sule",
    role: "Chairperson",
    image: estherImg,
    slug: "esther-yakubu-sule",
    description: "Seasoned educationist with over 40 years of experience in teaching, peace building, and conflict resolution.",
  },
  {
    name: "Mrs. Sarah David Ibi",
    role: "Vice Chairperson",
    role2: "(Executive Director)",
    image: sarahImg,
    slug: "sarah-david-ibi",
    description: "Executive Director of WOVAIDE with 15+ years in programme planning and health sector experience.",
  },
  {
    name: "Barr. Euodias David Luther",
    role: "Secretary",
    image: euodiasImg,
    slug: "euodias-david-luther",
    description: "Legal practitioner dedicated to advocating for human rights and access to justice.",
  },
  {
    name: "Barr. Jessica Jidanke Offia",
    role: "Trustee",
    image: jessicaImg,
    slug: "jessica-jidanke-offia",
    description: "Human Rights lawyer with 15+ years experience in women's rights advocacy and conflict resolution.",
  },
  {
    name: "Prof. Etemi Joshua Garba",
    role: "Trustee",
    image: etemiImg,
    slug: "etemi-joshua-garba",
    description: "Professor of Computer Science and expert in Software Engineering and Digital Economy.",
  },
  {
    name: "Dr. Vincent Emmanuel Chidera",
    role: "Trustee",
    image: vincentImg,
    slug: "vincent-emmanuel-chidera",
    description: "Medical doctor passionate about humanitarian projects and youth mentorship.",
  },
  {
    name: "Mr. Sam David Kuritsi",
    role: "Trustee",
    image: samImg,
    slug: "sam-david-kuritsi",
    description: "Laboratory technologist with experience in HIV/AIDS peer education and community health.",
  },
  {
    name: "Mrs. Rhoda Kwanchi",
    role: "Trustee",
    image: rhodaImg,
    slug: "rhoda-kwanchi",
    description: "Deputy Registrar with extensive experience in women affairs and child development.",
  },
];

export function TeamSection() {
  return (
    <section className="py-20 md:py-28 bg-gradient-soft">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Leadership
          </span>
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-gradient">Board of Trustees</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Meet the dedicated individuals who guide WOVAIDE's mission to empower 
            widows, orphans, and vulnerable persons across Nigeria.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-primary font-medium">{member.role}</p>
                {member.role2 && (
                  <p className="text-primary font-medium mb-3">{member.role2}</p>
                )}
                {!member.role2 && <div className="mb-3" />}
                <Link 
                  to={`/team/${member.slug}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors underline underline-offset-2"
                >
                  {member.description}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
