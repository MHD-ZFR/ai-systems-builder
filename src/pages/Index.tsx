import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Architecture from "@/components/Architecture";
import LiveDemos from "@/components/LiveDemos";
import Skills from "@/components/Skills";
import Blog from "@/components/Blog";
import Metrics from "@/components/Metrics";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <Hero />
    <About />
    <Projects />
    <Architecture />
    <LiveDemos />
    <Skills />
    <Blog />
    <Metrics />
    <Contact />
    <Footer />
  </div>
);

export default Index;
