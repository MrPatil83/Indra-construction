import HeroSection from "../components/CustomSlider";
import ServicesSection from "../components/ServiceCards";
import HeroSecond from "../components/HeroSecond";
import HeroForm from "../components/HeroForm";
import HeroExploreproject from "../components/HeroExploreproject";
import WhyChooseUs from "../components/WhychooseUs";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <HeroSecond />
      <ServicesSection />
      <HeroForm />
      <HeroExploreproject />
      <WhyChooseUs />
    </main>
  );
}
