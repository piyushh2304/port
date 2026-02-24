import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { myProjects } from "../constants"; // your project data
import { Particles } from "../components/Particles";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full pt-16 md:pt-24 px-4"
      >
        <h2 className="text-white text-3xl md:text-5xl font-bold text-center mb-4">My Selected Projects</h2>
        <p className="text-center text-neutral-400 max-w-2xl mx-auto mb-16">
          A curated selection of my recent work, showcasing a blend of creative design and technical precision.
        </p>
      </motion.div>

      <section
        id="project"
        className="relative w-full max-w-7xl mx-auto px-4 min-h-[50vh] pb-20"
      >
        <Particles
          className="absolute inset-0 -z-10"
          quantity={100}
          ease={80}
          color={"#ffffff"}
          refresh
        />

        {/* Grid Layout */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
        >
          {myProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              whileHover={{ y: -8, transition: { duration: 0.4, ease: "circOut" } }}
              className="group relative grid-black-color border border-white/5 overflow-hidden cursor-pointer hover:border-white/20 transition-all duration-500 flex flex-col p-4 md:p-6 shadow-2xl shadow-black/50 rounded-3xl"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative aspect-video overflow-hidden rounded-xl bg-[#111111]">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8, ease: "circOut" }}
                />
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>

                <p className="text-neutral-400 text-sm line-clamp-2 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-auto flex items-end justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags?.map((tag) => (
                      <span
                        key={tag.id}
                        className="px-3 py-1 text-[10px] font-semibold uppercase tracking-wider rounded-full bg-white/5 border border-white/10 text-neutral-300 group-hover:bg-white/10 transition-colors"
                      >
                        {tag.name}
                      </span>
                    ))}
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-radial from-lavender to-royal text-white text-[10px] font-bold uppercase tracking-widest hover-animation shrink-0 shadow-lg shadow-royal/20"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                    }}
                  >
                    Details
                    <img src="/assets/arrow-up.svg" className="w-3 h-3" alt="" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Selected Project Details Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[100] px-4 py-8"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 40 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 40 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative bg-[#0d0d0d] border border-white/10 text-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-full overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button */}
                <button
                  aria-label="Close"
                  className="absolute top-5 right-5 z-10 p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                  onClick={() => setSelectedProject(null)}
                >
                  <img src="/assets/close.svg" alt="Close" className="w-5 h-5" />
                </button>

                {/* Content */}
                <div className="p-6 md:p-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2, duration: 0.6 }}
                      className="space-y-6"
                    >
                      <img
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        className="w-full rounded-2xl shadow-lg border border-white/5"
                      />

                      {selectedProject.href && (
                        <motion.a
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          href={selectedProject.href}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition-all font-semibold shadow-lg shadow-indigo-500/20"
                        >
                          Launch Live Project
                          <img src="/assets/arrow-up.svg" alt="" className="w-4 h-4" />
                        </motion.a>
                      )}
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                      className="flex flex-col"
                    >
                      <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
                        {selectedProject.title}
                      </h3>
                      <p className="text-neutral-400 leading-relaxed mb-6">
                        {selectedProject.description}
                      </p>

                      {selectedProject.subDescription && (
                        <div className="mb-8">
                          <p className="text-white font-semibold mb-4 flex items-center gap-2">
                            <span className="w-8 h-[1px] bg-indigo-500"></span>
                            Key Highlights
                          </p>
                          <ul className="space-y-4">
                            {Array.isArray(selectedProject.subDescription) ? (
                              selectedProject.subDescription.map((item, idx) => (
                                <motion.li
                                  key={idx}
                                  initial={{ opacity: 0, x: 10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 0.4 + (idx * 0.1) }}
                                  className="text-sm text-neutral-400 flex gap-3 items-start"
                                >
                                  <span className="text-indigo-500 mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                                  <span className="leading-relaxed">{item}</span>
                                </motion.li>
                              ))
                            ) : (
                              <li className="text-sm text-neutral-400 flex gap-3">
                                <span className="text-indigo-500 mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500" />
                                {selectedProject.subDescription}
                              </li>
                            )}
                          </ul>
                        </div>
                      )}

                      <div className="mt-auto pt-6">
                        <p className="text-white font-semibold mb-3">Technologies</p>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.tags?.map((t, idx) => (
                            <motion.div
                              key={t.id}
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.6 + (idx * 0.05) }}
                              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-xs text-neutral-300 hover:bg-white/10 transition-colors"
                            >
                              {t.path && <img src={t.path} alt="" className="w-4 h-4 opacity-70" />}
                              {t.name}
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="w-full py-10 border-t border-white/5"
      >
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-neutral-500">
            For more projects, visit my{" "}
            <a
              href="https://github.com/piyushh2304"
              target="_blank"
              rel="noreferrer"
              className="text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              GitHub profile
            </a>
          </p>
          <p className="text-xs text-neutral-600">© {new Date().getFullYear()} Piyush Rajput. All rights reserved.</p>
        </div>
      </motion.div>
    </>
  );
};

export default Projects;
