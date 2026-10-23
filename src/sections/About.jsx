import { useRef } from "react";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";

const About = () => {
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            loading="lazy"
            decoding="async"
            alt="coding pov"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">Hi, I&#39;m Piyush Rajput</p>
            <p className="subtext">
              Computer Science Engineering student with proven experience in Data Analytics, Database Optimization, and Data Engineering. Proficient in Python, SQL (MySQL, PostgreSQL), MongoDB, Power BI, and Cloud technologies (AWS, Microsoft Azure — ADF & ADLS Gen2). Experienced in building robust ETL workflows, data lake architectures, and transforming complex data into actionable business intelligence and scalable AI solutions.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
        {/* Grid 2 */}
        <div className="grid-default-color grid-2 relative overflow-hidden">
          <div className="flex flex-col items-center justify-center h-full w-full p-6">
            <p className="absolute inset-0 flex items-center justify-center text-4xl md:text-5xl text-gray-500 font-bold opacity-10 select-none pointer-events-none z-0">
              DATA IS POWER
            </p>
            <div className="grid grid-cols-3 gap-3 w-[85%] z-10 transition-all duration-500">
              {[
                "Python",
                "SQL / RDBMS",
                "Power BI / DAX",
                "Azure (ADF)",
                "ADLS Gen2",
                "PostgreSQL",
                "MongoDB",
                "AWS Cloud",
                "ETL Pipelines",
                "Data Analytics",
                "Docker",
                "150+ DSA",
              ].map((lang) => (
                <div
                  key={lang}
                  className="bg-white/5 border border-white/10 rounded-lg py-3 px-1 text-center text-[10px] md:text-xs font-bold uppercase tracking-widest text-neutral-300 hover:bg-indigo-500/20 hover:border-indigo-500/40 hover:text-white hover:scale-105 transition-all duration-300 backdrop-blur-sm"
                >
                  {lang}
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">IST</p>
            <p className="subtext">
              I&#39;m based in Indore, India. Open to remote work worldwide
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>
        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>
        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headtext">Tech Stack</p>
            <p className="subtext">
              Specialized in analytical tools, database systems, ETL orchestration with Azure Data Factory (ADF), data lakes with ADLS Gen2, and cloud infrastructure to design scalable data architectures.
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
