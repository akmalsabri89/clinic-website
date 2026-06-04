import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import Services from "@/components/sections/Services";
import Doctors from "@/components/sections/Doctors";
import WhyUs from "@/components/sections/WhyUs";
import Facilities from "@/components/sections/Facilities";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Services />
      <Doctors />
      <WhyUs />
      <Facilities />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
