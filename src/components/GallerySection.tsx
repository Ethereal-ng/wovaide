import gallery2 from "@/assets/gallery-2.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";

const galleryImages = [
  { src: gallery2, alt: "Community engagement session" },
  { src: gallery4, alt: "Stakeholder engagement" },
  { src: gallery5, alt: "Team group photo" },
  { src: gallery6, alt: "Board meeting discussion" },
  { src: gallery7, alt: "Women in leadership session" },
  { src: gallery8, alt: "Strategic planning meeting" },
];

export function GallerySection() {
  return (
    <section id="gallery" className="py-20 md:py-28 bg-gradient-soft">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Our Impact
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Photo <span className="text-gradient">Gallery</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Moments captured from our Board of Trustees meetings, community engagements, 
            and empowerment programs across Nigeria.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl aspect-square shadow-soft hover:shadow-elevated transition-all duration-300"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-darkest/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-primary-foreground text-sm font-medium">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
