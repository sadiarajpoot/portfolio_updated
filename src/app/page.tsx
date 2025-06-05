
import About from "@/components/About";
import HeroSection from "@/components/Hero";
import Projects from "./projects/page";
import Contact from "@/components/Contact";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import AboutMe from "@/components/About";
import MyProjects from "@/components/Projects";
import ServicesSection from "@/components/survives";



export default function Home() {
  return (
    <div>
      <HeroSection />
      <div/>
      <div>
        <About/>
      </div>
      <div>
        <MyProjects/>
      </div>
      <div>
        <Skills/>
      </div>
      <div>
       <ServicesSection/>
      </div>
      <div>
        <Contact/>
      </div>
  </div>
  );
}
