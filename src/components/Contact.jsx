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
      }).finally(() => setLoading(false))
  };

  return (
    <section id="contact" className="bg-white px-6 py-24 text-gray-900">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h2 className="text-4xl font-bold">Contact Me</h2>
        <p className="text-gray-500 mt-2">Let’s work together</p>
      </motion.div>

      <form
        onSubmit={sendEmail}
        className="max-w-xl mx-auto mt-10 space-y-5"
      >
        <input
          name="name"
          onChange={handleChange}
          value={form.name}
          placeholder="Name"
          className="w-full border p-3 rounded-lg"
        />

        <input
          name="email"
          onChange={handleChange}
          value={form.email}
          placeholder="Email"
          className="w-full border p-3 rounded-lg"
        />

        <textarea
          name="message"
          onChange={handleChange}
          value={form.message}
          placeholder="Message"
          rows="5"
          className="w-full border p-3 rounded-lg"
        />

        <button
          disabled={loading}
          className={`${loading && 'cursor-not-allowed'} w-full bg-black text-white py-3 rounded-lg hover:opacity-80`}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>

      <ToastContainer position="top-right" theme="dark" />
    </section>
  );
}