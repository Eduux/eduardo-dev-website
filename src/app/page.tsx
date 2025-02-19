import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import PersonalProjects from "@/components/PersonalProjects";
import ParticipatedProjects from "@/components/ParticipatedProjects";
import Testimonials from "@/components/Testimonials";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import AnimatedBackground from "@/components/AnimatedBackground";

export default function Home() {
  return (
    <main className="bg-gray-900 text-white">
      <AnimatedBackground />
      <Hero />
      <About />
      <Skills />
      <ParticipatedProjects />
      <PersonalProjects />
      <Testimonials />
      <Education />
      <Contact />
    </main>
  );
}
