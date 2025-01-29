import HeroSection from "../components/CustomSlider";
import ServicesSection from "../components/ServiceCards";
import HeroSecond from "../components/HeroSecond";
import HeroForm from "../components/HeroForm";
import HeroExploreproject from "../components/HeroExploreproject";
import Whychoose from "../components/Whychoose";
import FAQSection from "../components/FAQSection";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <HeroSecond />
      <ServicesSection />
      <HeroForm />
      <HeroExploreproject />
      <Whychoose />
      <FAQSection />
    </main>
  );
}
