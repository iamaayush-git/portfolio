import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  const links = ["home", "projects", "about", "contact"];
  const menuRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Scroll spy
  useEffect(() => {
    const handleScroll = () => {
      links.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActive(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const handleScroll = (id) => {
    setOpen(false);

    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-gray-200">

      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <h1 className="font-bold text-xl md:text-2xl">&lt;Aayush /&gt;</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-lg">
          {links.map((item) => (
            <button
              key={item}
              onClick={() => handleScroll(item)}
              className={`cursor-pointer capitalize transition ${active === item
                ? "text-black font-semibold"
                : "text-gray-500 hover:text-black"
                }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-t"
          >
            <div className="flex flex-col px-6 py-4 gap-4">

              {links.map((item) => (
                <motion.button
                  key={item}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleScroll(item)}
                  className={`capitalize text-sm transition text-left ${active === item
                    ? "text-black font-semibold"
                    : "text-gray-500"
                    }`}
                >
                  {item}
                </motion.button>
              ))}

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}