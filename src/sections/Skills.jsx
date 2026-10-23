import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Data Analytics & Business Intelligence",
    icon: "📊",
    description:
      "Transforming complex, unstructured datasets into interactive dashboards, strategic KPI models, and business growth insights.",
    skills: [
      { name: "Power BI", highlight: true },
      { name: "DAX Measures", highlight: true },
      { name: "Time Intelligence", highlight: false },
      { name: "Data Storytelling", highlight: false },
      { name: "Exploratory Data Analysis (EDA)", highlight: true },
      { name: "Statistical Modeling", highlight: false },
      { name: "KPI Dashboards", highlight: false },
      { name: "Visual Analytics", highlight: false },
    ],
  },
  {
    title: "Data Engineering & Database Architecture",
    icon: "⚙️",
    description:
      "Structuring high-integrity relational schemas, data lakes, robust ETL workflows, and scalable pipeline architectures.",
    skills: [
      { name: "Azure Data Factory (ADF)", highlight: true },
      { name: "ADLS Gen2 (Data Lake)", highlight: true },
      { name: "SQL (Complex Queries)", highlight: true },
      { name: "PostgreSQL", highlight: true },
      { name: "MySQL", highlight: false },
      { name: "DataBricks", highlight: true },
      { name: "Data Modeling & Normalization", highlight: false },
      { name: "ETL / Pipeline Design", highlight: true },
      { name: "Redis Caching", highlight: false },
      { name: "Database Optimization", highlight: false },
    ],
  },
  {
    title: "Cloud Infrastructure & DevOps",
    icon: "☁️",
    description:
      "Deploying scalable cloud compute, data lake storage, containerization, and automated data workflows on Azure & AWS.",
    skills: [
      { name: "Microsoft Azure", highlight: true },
      { name: "Azure Data Factory (ADF)", highlight: true },
      { name: "ADLS Gen2", highlight: true },
      { name: "AWS (S3, EC2, Lambda)", highlight: true },
      { name: "Docker", highlight: true },
      { name: "Git & GitHub", highlight: false },
      { name: "REST & GraphQL APIs", highlight: false },
      { name: "Agile Workflow", highlight: false },
    ],
  },
  {
    title: "Languages, AI & Algorithmic Problem Solving",
    icon: "🧠",
    description:
      "Leveraging Python, modern algorithms, and vector stores to build semantic intelligence and automated data systems.",
    skills: [
      { name: "Python", highlight: true },
      { name: "C++", highlight: false },
      { name: "150+ LeetCode DSA", highlight: true },
      { name: "LangChain", highlight: false },
      { name: "Gemini AI & Embeddings", highlight: false },
      { name: "Pinecone (Vector DB)", highlight: false },
      { name: "JavaScript / TypeScript", highlight: false },
    ],
  },
];

const certifications = [
  {
    title: "SQL & Relational Databases 101",
    issuer: "Cognitive Class AI",
    date: "Nov 2024",
    badge: "Database & SQL",
    icon: "🗄️",
  },
  {
    title: "Amazon Academy Graduate",
    issuer: "Amazon Web Services (AWS)",
    date: "Aug 2024",
    badge: "Cloud Computing",
    icon: "☁️",
  },
  {
    title: "150+ DSA Problems Solved",
    issuer: "LeetCode",
    date: "Ongoing",
    badge: "Algorithms & Logic",
    icon: "⚡",
  },
  {
    title: "Hackathon Finalist",
    issuer: "Internal Hackathon (Lead of 4)",
    date: "Final Round",
    badge: "Leadership & Build",
    icon: "🏆",
  },
  {
    title: "Introduction to Software Engineering",
    issuer: "Coursera",
    date: "May 2025",
    badge: "Engineering",
    icon: "📜",
  },
  {
    title: "MERN Stack Certification",
    issuer: "30dayscoding",
    date: "Mar 2025",
    badge: "Full Stack Dev",
    icon: "💻",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="c-space section-spacing">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full text-center mb-12"
      >
        <p className="text-sm font-semibold tracking-widest uppercase text-indigo-400 mb-2">
          Technical Competencies & Credentials
        </p>
        <h2 className="text-heading">Analyst & Data Engineer Skillset</h2>
        <p className="text-center text-neutral-400 max-w-2xl mx-auto mt-3 text-sm md:text-base">
          Proven abilities across data warehousing, analytical dashboarding, pipeline architecture, and cloud systems based on verified engineering experience and coursework.
        </p>
      </motion.div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="p-6 md:p-8 rounded-2xl bg-gradient-to-b from-storm to-indigo border border-white/10 hover:border-white/20 transition-all duration-300 shadow-xl"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">{category.icon}</span>
              <h3 className="text-xl font-bold text-white">{category.title}</h3>
            </div>
            <p className="text-sm text-neutral-400 mb-6 leading-relaxed">
              {category.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill.name}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all duration-200 ${skill.highlight
                      ? "bg-indigo-500/30 text-indigo-200 border border-indigo-400/50 shadow-sm shadow-indigo-500/20"
                      : "bg-white/5 text-neutral-300 border border-white/10 hover:bg-white/10"
                    }`}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Certifications and Milestones */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="w-full"
      >
        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          <span>🏅</span> Certifications & Achievements
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="p-5 rounded-xl bg-midnight border border-white/10 hover:border-indigo-400/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xl">{cert.icon}</span>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-royal/40 text-lavender border border-royal/50">
                    {cert.badge}
                  </span>
                </div>
                <h4 className="text-base font-semibold text-white mb-1">
                  {cert.title}
                </h4>
                <p className="text-xs text-neutral-400">{cert.issuer}</p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5 flex justify-between items-center text-[11px] text-neutral-500">
                <span>Credential Date</span>
                <span className="text-neutral-300 font-medium">{cert.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
