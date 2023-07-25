import Container from "./components/Container";
import GallerySection from "./components/gallerySection/GallerySection";
import HeroSection from "./components/heroSection/HeroSection";
import Services from "./components/heroSection/Services";

export default function Home() {
  return (
    <main
      className={`mx-auto max-w-3xl md:max-w-5xl lg:max-w-7xl xl:max-w-[2520px] relative -z-10`}
    >
      <Container>
        <HeroSection />
      </Container>
      <Services />
      <Container>
        <GallerySection />
      </Container>
    </main>
  );
}
