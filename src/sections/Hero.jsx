import { useState, useEffect, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/parallaxBackground";
import { Astronaut } from "../components/Astronaut";
import { Float } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import CanvasLoader from "../components/CanvasLoader";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(true);

  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space"
    >
      <HeroText />
      <ParallaxBackground />
      <figure
        className="absolute inset-0 pointer-events-none"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas
          className="w-full h-full"
          dpr={[1, 1.3]}
          frameloop={isInView ? "always" : "never"}
          gl={{ powerPreference: "high-performance", antialias: true, alpha: true }}
          camera={{ position: [0, 1, 3] }}
        >
          <Suspense fallback={<CanvasLoader />}>
            <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
              <Astronaut
                scale={isMobile ? 0.23 : 0.3}
                position={isMobile ? [0, -1.5, 0] : [1.3, -1, 0]}
              />
            </Float>
            <Rig />
          </Suspense>
        </Canvas>
      </figure>
    </section>
  );
};

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
      0.3,
      delta
    );
  });
}

export default Hero;
