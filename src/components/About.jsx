import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className=" bg-white text-gray-900 px-6 py-24">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-4xl font-semibold">About Me</h2>
        <p className="text-gray-500 mt-3">
          Full Stack Developer focused on clean, scalable web apps
        </p>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="max-w-2xl mx-auto text-center mt-10 text-gray-600 leading-relaxed"
      >
        I build modern web applications using the MERN stack. I focus on performance,
        usability, and creating real-world solutions that deliver value to users.
      </motion.p>

      {/* Skills */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-12 flex flex-wrap justify-center gap-3"
      >
        {["React", "Node.js", "Express", "MongoDB", "Tailwind", "Framer Motion"].map(
          (skill, i) => (
            <span
              key={i}
              className="px-4 py-2 rounded-full border text-sm text-gray-700 hover:bg-blue-50 hover:border-blue-500 transition"
            >
              {skill}
            </span>
          )
        )}
      </motion.div>
    </section>
  );
}