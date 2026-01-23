import { Target, Eye, Sparkles } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-gradient-soft">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Who We Are
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            About <span className="text-gradient">WOVAIDE</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Women of Valor Initiative for Development and Empowerment is a dream born 
            from a passionate desire to advance the lives of vulnerable people in Nigerian society.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              The recent UNDP report reveals that the number of people who are multidimensionally 
              poor in Nigeria increased from 86 million to 98 million, which is about 51% of the 
              population. The North East region, including Taraba State, lags other regions in 
              human development indices.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              This situation is worsened by the humanitarian crisis in the region. More than two 
              million people have been displaced and tens of thousands killed in the last decade alone. 
              The impact on all basic human development indices is colossal.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              At WOVAIDE, we believe that investing in others pays great dividends and that people 
              have a way of becoming what you encourage them to be. We therefore assign ourselves 
              the purpose of making other people happy and successful.
            </p>
            <div className="p-6 bg-primary/5 border-l-4 border-primary rounded-r-lg">
              <p className="text-foreground font-medium italic">
                "We are the advocate for the vulnerable!"
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {/* Vision */}
            <div className="bg-gradient-card p-6 rounded-2xl shadow-soft hover:shadow-elevated transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">Our Vision</h3>
                  <p className="text-muted-foreground">
                    WOVAIDE envisions a society where the vulnerable are empowered to contribute 
                    to the development of their communities.
                  </p>
                </div>
              </div>
            </div>

            {/* Mission */}
            <div className="bg-gradient-card p-6 rounded-2xl shadow-soft hover:shadow-elevated transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-xl">
                  <Target className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">Our Mission</h3>
                  <p className="text-muted-foreground">
                    WOVAIDE seeks to develop the vulnerable through capacity building, training, 
                    advocacy, networking and community development.
                  </p>
                </div>
              </div>
            </div>

            {/* Values */}
            <div className="bg-gradient-card p-6 rounded-2xl shadow-soft hover:shadow-elevated transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-mid/20 rounded-xl">
                  <Sparkles className="w-6 h-6 text-purple-mid" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">Our Values</h3>
                  <p className="text-muted-foreground">
                    Compassion, integrity, empowerment, and community-focused interventions that 
                    create lasting change.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
