import Hero from "@/components/Hero";
import TechnologyStrip from "@/components/TechnologyStrip";
import BlogPreview from "@/components/BlogPreview";
import About from "@/components/About";
import Services from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import Contact from "@/components/Contact";

export default function HomePage() {

  return (
      <>
        <Hero />
        <TechnologyStrip/>
        <BlogPreview />
        <Services />
        <CaseStudies />
        <About />
        <Contact />
      </>
  );
}
