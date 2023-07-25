import Container from "./components/Container";
import HeroSection from "./components/heroSection/HeroSection";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl md:max-w-5xl lg:max-w-7xl xl:max-w-[2520px]">
      <Container>
        <HeroSection />
      </Container>
    </main>
  );
}
