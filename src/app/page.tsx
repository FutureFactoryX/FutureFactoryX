import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import BlogPreview from "@/components/BlogPreview";
import Contact from "@/components/Contact";

export default function HomePage() {

  return (
      <>
        <Hero />
        <About />
        <Services />
        <CaseStudies />
        <BlogPreview />
        <Contact />
      </>
  );
}
