import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

export default function HeroForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/submit-quote", formData);
      alert("Quote request submitted successfully!");
      setFormData({ name: "", email: "", projectType: "", message: "" });
    } catch (error) {
      alert(error, "Error submitting form. Please try again.");
    }
  };

  return (
    <div className=" bg-blue-900 relative overflow-hidden flex items-center">
      {/* Animated JCB Image */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute left-0 bottom-0 w-1/2 h-auto z-10"
      >
        <img
          src="https://demo.themagnifico.net/construction-demolition-services/wp-content/themes/construction-demolition-services-pro/assets/images/free-quote-image.png "
          alt="Construction Machine"
          className=" w-full h-auto grayscale"
        />
      </motion.div>
      {/* Orange Background with Clip Path */}
      <div
        className="absolute right-0 top-0 h-full w-[65%] bg-orange-500"
        style={{
          clipPath: "polygon(100% 0, 100% 100%, 0 100%, 20% 0)",
        }}
      />
      {/* Form Container */}
      <div className="container mx-auto px-4 pt-8">
        <div className="ml-auto w-full max-w-xl relative z-20">
          <div className="text-white mb-8">
            <img
              src="https://www.indraconstruction.com/wp-content/uploads/2022/08/cropped-web-mono.png"
              alt="Logo"
              className="md:mb-4 w-8 h-8 mb-2"
            />
            <p className="text-sm font-medium mb-2">GET FREE QUOTE</p>
            <h1 className=" text-2xl md:text-4xl font-bold">
              Have a Project in Mind?
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 mb-4">
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full p-3 rounded bg-orange-400/40 placeholder-white/70 text-white border border-white/20 focus:outline-none focus:border-white"
              required
            />

            <input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full p-3 rounded bg-orange-400/40 placeholder-white/70 text-white border border-white/20 focus:outline-none focus:border-white"
              required
            />

            <select
              value={formData.projectType}
              onChange={(e) =>
                setFormData({ ...formData, projectType: e.target.value })
              }
              className="w-full p-3 rounded bg-orange-400/40 text-white border border-white/20 focus:outline-none focus:border-white"
              required
            >
              <option value="">Choose 1</option>
              <option value="construction">Construction</option>
              <option value="renovation">Renovation</option>
              <option value="maintenance">Maintenance</option>
            </select>

            <textarea
              placeholder="Enter Your Message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full p-3 rounded bg-orange-400/40 placeholder-white/70 text-white border border-white/20 focus:outline-none focus:border-white h-32 resize-none"
              required
            />

            <button
              type="submit"
              className="w-full bg-white text-blue-900 font-bold py-3 px-6 rounded flex items-center justify-center group hover:bg-blue-50 transition-colors"
            >
              Submit Now
              <svg
                className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
