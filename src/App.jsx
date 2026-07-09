import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBadges from "./components/TrustBadges";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustBadges />
      <Services />
      <Projects />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;