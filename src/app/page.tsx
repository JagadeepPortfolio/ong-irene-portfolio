import Hero from "@/components/home/Hero";
import Philosophy from "@/components/home/Philosophy";
import ServicesOverview from "@/components/home/ServicesOverview";
import AwardSpotlight from "@/components/home/AwardSpotlight";
import WhyIrene from "@/components/home/WhyIrene";
import Testimonials from "@/components/home/Testimonials";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Philosophy />
      <ServicesOverview />
      <AwardSpotlight />
      <WhyIrene />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
