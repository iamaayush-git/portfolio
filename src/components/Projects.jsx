import { motion } from "framer-motion";
import jobportal from "../assets/jobportal.webp";
import ssda from "../assets/ssda.webp"


const projects = [
  {
    title: "Job Portal (AI)",
    desc: "Full stack job platform with AI-based recommendation system.",
    tech: "MERN + AI",
    image: jobportal,
    github: "https://github.com/iamaayush-git/Job-Portal.git",
    live: "https://job-portal-swart-zeta-49.vercel.app/",
  },
  {
    title: "School Website",
    desc: "Real production website used by school for management.",
    tech: "React + Node",
    image: ssda,
    github: "https://github.com/iamaayush-git/School-System-Singhadevi-Academy.git",
    live: "https://shreesinghadeviacademy.com/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-white text-gray-900 px-4 sm:px-6 py-24">

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-semibold text-center"
      >
        Projects
      </motion.h2>

      {/* Grid */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-12">

        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl overflow-hidden border shadow-sm hover:shadow-lg bg-white"
          >

            {/* Image */}
            <div className="h-52 sm:h-56 md:h-64 overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-contain hover:scale-105 transition duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-5 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold">
                {p.title}
              </h3>

              <p className="text-gray-600 mt-2 text-sm sm:text-base">
                {p.desc}
              </p>

              <p className="text-blue-600 mt-3 text-sm font-medium">
                {p.tech}
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mt-5">

                <a
                  href={p.live}
                  target="_blank"
                  className="flex-1 text-center px-4 py-2 rounded-lg bg-black text-white text-sm hover:opacity-80 transition"
                >
                  Live Demo
                </a>

                <a
                  href={p.github}
                  target="_blank"
                  className="flex-1 text-center px-4 py-2 rounded-lg border text-sm hover:bg-gray-100 transition"
                >
                  GitHub
                </a>

              </div>

            </div>

          </motion.div>
        ))}

      </div>
    </section>
  );
}