import AboutHeroSection from "../components/AboutHeroSection/AboutHeroSection";
import Container from "../components/Container";

const About = () => {
  return (
    <main className="mx-auto max-w-3xl md:max-w-5xl lg:max-w-7xl xl:max-w-[2520px] relative -z-10">
      <Container>
        <AboutHeroSection />
      </Container>
    </main>
  );
};

export default About;
