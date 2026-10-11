import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-white text-gray-900 min-h-screen flex items-center justify-center px-6 pt-24 md:pt-20"
    >
      <div className="text-center max-w-3xl">

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          Full Stack Developer <br />
          Building Modern Web Apps
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-gray-500 mt-6 text-base md:text-lg"
        >
          I build modern, responsive web experiences with clean, scalable frontend and backend solutions.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-black text-white rounded-full hover:scale-105 transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-6 py-3 border border-gray-300 rounded-full hover:bg-gray-100 transition"
          >
            Contact Me
          </a>
        </motion.div>

      </div>
    </section>
  );
}
