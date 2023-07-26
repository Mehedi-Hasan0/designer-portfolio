import AboutHeroSection from "../components/AboutHeroSection/AboutHeroSection";
import AboutInfo from "../components/AboutHeroSection/AboutInfo";
import ContactInfo from "../components/AboutHeroSection/ContactInfo";
import ExploreCard from "../components/AboutHeroSection/ExploreCard";
import PhotographyCard from "../components/AboutHeroSection/PhotographyCard";
import Container from "../components/Container";

const About = () => {
  return (
    <main className="mx-auto max-w-3xl md:max-w-5xl lg:max-w-7xl xl:max-w-[2520px] relative -z-10">
      <Container>
        <AboutHeroSection />
        <AboutInfo />
        <ExploreCard />
        <PhotographyCard />
      </Container>
      <ContactInfo />
    </main>
  );
};

export default About;
