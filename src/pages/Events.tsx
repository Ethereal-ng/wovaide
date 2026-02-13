import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Calendar, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import ceoSpeakingImg from "@/assets/events/ceo-speaking.jpeg";
import nyscAudience1 from "@/assets/events/nysc-audience-1.jpeg";
import nyscAudience2 from "@/assets/events/nysc-audience-2.jpeg";
import nyscAudience3 from "@/assets/events/nysc-audience-3.jpeg";
import nyscAudience4 from "@/assets/events/nysc-audience-4.jpeg";
import nyscAudience5 from "@/assets/events/nysc-audience-5.jpeg";

const events = [
  {
    id: 101,
    title: "Prevention of Sexual Harassment Sensitization",
    date: "January 24, 2026",
    time: "Completed",
    location: "Multi-purpose Hall NYSC Orientation camp Sibre, Ardokola LGA",
    description: "Facilitated by WOVAIDE CEO Sarah David Ibi and Volunteer Mr. Friday Moses Matamba. A successful sensitization session on the 'Prevention of Sexual Harassment' delivered to 1400 Corps members, 8 NYSC Staff, and 7 Security Personnel. The session featured a mixed audience and was well-received.",
    image: ceoSpeakingImg,
    category: "Sensitization",
    stats: [
      { label: "Corp Members", value: "1400" },
      { label: "Total Audience", value: "1415" }
    ],
    gallery: [
      nyscAudience1,
      nyscAudience2,
      nyscAudience3,
      nyscAudience4,
      nyscAudience5
    ]
  }
];

const Events = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-purple-mid font-semibold tracking-wider uppercase mb-2 block">
              Recent Highlights
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Impact in Action
            </h1>
            <p className="text-lg text-muted-foreground">
              A showcase of our recent programs, workshops, and community outreaches.
            </p>
          </div>

          <div className="space-y-24">
            {events.map((event) => (
              <div key={event.id} className="flex flex-col gap-12 border-b border-border/50 pb-16 last:border-0">
                {/* Main Event Card Area */}
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
                  <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg group">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-semibold text-white">
                      {event.category}
                    </div>
                  </div>
                  
                  <div className="flex flex-col h-full justify-center">
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                      {event.title}
                    </h2>
                    
                    <div className="space-y-4 mb-8">
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <div className="p-2 bg-purple-lightest rounded-lg">
                          <Calendar className="w-5 h-5 text-purple-mid" />
                        </div>
                        <span className="font-medium">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <div className="p-2 bg-purple-lightest rounded-lg">
                          <MapPin className="w-5 h-5 text-purple-mid" />
                        </div>
                        <span className="font-medium">{event.location}</span>
                      </div>
                    </div>
                    
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                      {event.description}
                    </p>

                    {event.stats && (
                      <div className="grid grid-cols-2 gap-6 p-6 bg-card border border-border rounded-xl shadow-sm">
                        {event.stats.map((stat, idx) => (
                          <div key={idx} className="text-center">
                            <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                            <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Separate Gallery Section */}
                {event.gallery && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-foreground pl-4 border-l-4 border-purple-mid">
                      Event Gallery
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                      {event.gallery.map((img, idx) => (
                        <div key={idx} className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-muted shadow-md hover:shadow-xl transition-all duration-300">
                          <img 
                            src={img} 
                            alt={`${event.title} highlight ${idx + 1}`}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-20 bg-purple-lightest rounded-3xl p-8 md:p-12 text-center">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Host an Event with Us
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Interested in partnering with WOVAIDE for a community event or workshop? 
              We're always looking for collaborators who share our vision.
            </p>
            <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
              Contact Us
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Events;
