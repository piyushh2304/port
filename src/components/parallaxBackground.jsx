import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const ParallaxBackground = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const mountain3Y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const planetsX = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const mountain2Y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <section ref={containerRef} className="absolute inset-0 bg-black/40 pointer-events-none">
      <div className="relative h-screen overflow-y-hidden">
        {/* Background Sky */}
        <div
          className="absolute inset-0 w-full h-screen -z-50"
          style={{
            backgroundImage: "url(/assets/sky.jpg)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }}
        />
        {/* Mountain Layer 3 */}
        <motion.div
          className="absolute inset-0 -z-40 will-change-transform"
          style={{
            backgroundImage: "url(/assets/mountain-3.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mountain3Y,
          }}
        />
        {/* Planets */}
        <motion.div
          className="absolute inset-0 -z-30 will-change-transform"
          style={{
            backgroundImage: "url(/assets/planets.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            x: planetsX,
          }}
        />
        {/* Mountain Layer 2 */}
        <motion.div
          className="absolute inset-0 -z-20 will-change-transform"
          style={{
            backgroundImage: "url(/assets/mountain-2.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mountain2Y,
          }}
        />
        {/* Mountaine Layer 1 */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: "url(/assets/mountain-1.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }}
        />
      </div>
    </section>
  );
};

export default ParallaxBackground;
