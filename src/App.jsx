
import { Suspense, lazy } from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Loader from "./components/Loader";
import ChatBot from "./components/ChatBot";

const About = lazy(() => import("./sections/About"));
const Projects = lazy(() => import("./sections/Projects"));
const Experiences = lazy(() => import("./sections/Experiences"));
const Contact = lazy(() => import("./sections/Contact"));
const Footer = lazy(() => import("./sections/Footer"));

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl relative">
      <Navbar />
      <Hero />
      <Suspense fallback={<Loader />}>
        <About />
        <Projects />
        <Experiences />
        <Contact />
        <Footer />
      </Suspense>
      <ChatBot />
    </div>
  );
};

export default App;
