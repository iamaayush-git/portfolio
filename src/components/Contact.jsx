import { useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

export default function Contact() {
  const service_id = import.meta.env.VITE_SERVICE_ID;
  const template_id = import.meta.env.VITE_TEMPLATE_ID;
  const public_key = import.meta.env.VITE_PUBLIC_KEY;
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    if (!form.name || !form.email || !form.message) {
      toast.error("All fields required");
      setLoading(false);
      return;
    }

    emailjs
      .send(service_id, template_id, form, public_key)
      .then(() => {
        toast.success("Message sent");
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.log(error);
        toast.error("Failed to send");
      })
      .finally(() => setLoading(false));
  };

  return (
    <section id="contact" className="bg-slate-950 px-6 py-24 text-white md:px-8">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">Contact</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">Let’s work together</h2>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={sendEmail}
          className="mx-auto mt-10 max-w-xl rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_50px_rgba(15,23,42,0.25)] backdrop-blur-sm"
        >
          <div className="space-y-4">
            <input
              name="name"
              onChange={handleChange}
              value={form.name}
              placeholder="Name"
              className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white placeholder:text-slate-400 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20"
            />

            <input
              name="email"
              onChange={handleChange}
              value={form.email}
              placeholder="Email"
              className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white placeholder:text-slate-400 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20"
            />

            <textarea
              name="message"
              onChange={handleChange}
              value={form.message}
              placeholder="Message"
              rows="5"
              className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white placeholder:text-slate-400 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`mt-6 w-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/25 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70 ${loading ? "cursor-not-allowed" : ""}`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </motion.form>

        <ToastContainer position="top-right" theme="dark" />
      </div>
    </section>
  );
}
