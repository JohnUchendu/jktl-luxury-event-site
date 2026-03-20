import Hero from "@/components/sections/Hero";
import WhyUs from "@/components/sections/WhyUs";
import ServicesPreview from "@/components/sections/ServicesPreview";
import CaseStudiesPreview from "@/components/sections/CaseStudiesPreview";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import { BlogPreview, LocationsSection, CallToAction } from "@/components/sections/Sections";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyUs />
      <ServicesPreview />
      <CaseStudiesPreview />
      <Process />
      <Testimonials />
      <BlogPreview />
      <LocationsSection />
      <CallToAction />
    </>
  );
}
