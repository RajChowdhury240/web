import HeroSection from "@/components/sections/HeroSection";
import StatsBar from "@/components/sections/StatsBar";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import CVEHighlights from "@/components/sections/CVEHighlights";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <AboutSection />
      <SkillsSection />
      <FeaturedProjects />
      <CVEHighlights />
    </>
  );
}
