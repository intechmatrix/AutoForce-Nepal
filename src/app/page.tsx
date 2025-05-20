import HeroSection from "@/components/home/Hero";
import AboutSection from "./about/page";
import ProductsSection from "./products/page";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection isPreview={true} />
      <ProductsSection isPreview={true} />
    </>
  );
}
