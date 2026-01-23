const partners = [
  "NYSC/Corp Members",
  "Ministry of Youth and Sports",
  "NACTAL",
  "NAPTIP",
  "Media Houses",
  "Ministry of Women Affairs",
  "Nigeria Police Force",
  "Nigeria Security and Civil Defense Corps",
  "Nigeria Immigration Service",
  "Ministry of Health",
  "Ministry of Justice",
];

export function PartnersSection() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Working Together
          </span>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
            Our <span className="text-gradient">Collaborations</span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {partners.map((partner) => (
            <div
              key={partner}
              className="px-5 py-3 bg-card rounded-xl shadow-soft text-sm font-medium text-muted-foreground hover:text-primary hover:shadow-elevated transition-all duration-300 cursor-default"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
