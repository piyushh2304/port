
import { Suspense, lazy } from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Loader from "./components/Loader";

const About = lazy(() => import("./sections/About"));
const Skills = lazy(() => import("./sections/Skills"));
const Projects = lazy(() => import("./sections/Projects"));
const Experiences = lazy(() => import("./sections/Experiences"));
const Contact = lazy(() => import("./sections/Contact"));
const Footer = lazy(() => import("./sections/Footer"));

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <Hero />
      <Suspense fallback={<Loader />}>
        <About />
        <Skills />
        <Projects />
        <Experiences />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;
