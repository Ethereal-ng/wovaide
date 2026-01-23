import { 
  GraduationCap, 
  Heart, 
  Users, 
  Shield, 
  Handshake, 
  Building2, 
  Stethoscope, 
  Brain,
  BookOpen
} from "lucide-react";

const programs = [
  {
    icon: GraduationCap,
    title: "Capacity Building & Training",
    description: "Practical skills training and capacity development for vulnerable individuals."
  },
  {
    icon: Users,
    title: "Mentoring Programs",
    description: "One-on-one mentorship to guide individuals toward self-sufficiency."
  },
  {
    icon: Heart,
    title: "Women Empowerment",
    description: "Economic empowerment initiatives for women to become self-reliant."
  },
  {
    icon: Handshake,
    title: "Networking & Partnerships",
    description: "Building connections with relevant organizations and stakeholders."
  },
  {
    icon: Building2,
    title: "Community Development",
    description: "Sustainable community services and infrastructure improvements."
  },
  {
    icon: Stethoscope,
    title: "Integrated Health Services",
    description: "Maternal and child health care, and infectious disease awareness."
  },
  {
    icon: Brain,
    title: "Psychosocial Support",
    description: "Counseling and mental health support for trauma survivors."
  },
  {
    icon: BookOpen,
    title: "Research & Documentation",
    description: "Evidence-based research to inform policy and interventions."
  },
];

const advocacyAreas = [
  "Maternal and Child Health",
  "Girl Child Education",
  "Child Labour/Trafficking",
  "Gender Issues/Violence and Rape",
  "Infectious Diseases",
];

export function ProgramsSection() {
  return (
    <section id="programs" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            What We Do
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-gradient">Programs</span> & Focus Areas
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Through dedicated programs and community-focused interventions, we work to 
            transform lives and build sustainable futures for vulnerable populations.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {programs.map((program, index) => (
            <div
              key={program.title}
              className="group p-6 bg-card rounded-2xl shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <program.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">
                {program.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {program.description}
              </p>
            </div>
          ))}
        </div>

        {/* Advocacy Areas */}
        <div className="bg-gradient-hero rounded-3xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-medium text-primary-foreground">Advocacy Focus</span>
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-8">
              Key Advocacy Areas
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {advocacyAreas.map((area) => (
                <span
                  key={area}
                  className="px-5 py-2.5 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full text-primary-foreground text-sm font-medium hover:bg-primary-foreground/20 transition-colors cursor-default"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
