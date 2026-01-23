import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GallerySection } from "@/components/GallerySection";

const Gallery = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <GallerySection />
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
