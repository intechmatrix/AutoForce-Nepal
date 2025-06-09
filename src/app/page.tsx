import HeroSection from "@/components/home/Hero";
import AboutSection from "./about/page";
import CategoriesSection from "@/components/home/CategorySection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection isPreview={true} />
      <CategoriesSection isPreview={true} />
    </>
  );
}
