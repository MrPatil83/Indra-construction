import { motion } from "framer-motion";
import { useState } from "react";
import footerLogo from "../../assets/footerLogo.webp";
const ContactSection = () => {
  const [email, setEmail] = useState("");

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="bg-[#001233] text-white min-h-screen">
      {/* Contact Section */}
      <motion.div
        className="container mx-auto px-4 py-16"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <motion.div variants={fadeInUp} className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">CONTACT US</h2>
          <h3 className="text-[#FF4B26] text-3xl md:text-5xl font-bold mb-4">
            HAVE A PROJECT IN MIND?
          </h3>
          <h3 className="text-[#FF4B26] text-3xl md:text-5xl font-bold mb-6">
            CONTACT WITH US TODAY
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            There are many variations of but the majority have suffered
            alteration in some form by injected humour.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div variants={fadeInUp} className="space-y-8">
            {/* Contact Info Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-[#001845] p-6 rounded-lg">
                <div className="bg-[#FF4B26] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h4 className="font-bold mb-2">NEW YORK</h4>
                <p className="text-gray-400 text-sm">
                  92 los Angle Street, Saba Carpet
                </p>
                <p className="text-gray-400 text-sm">Antiques Store, USA</p>
              </div>

              <div className="bg-[#001845] p-6 rounded-lg">
                <div className="bg-[#FF4B26] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <h4 className="font-bold mb-2">PHONE NUMBER</h4>
                <p className="text-gray-400 text-sm">(+22) 551-573-2670</p>
                <p className="text-gray-400 text-sm">+ (00) 234-567-2569</p>
              </div>

              <div className="bg-[#001845] p-6 rounded-lg">
                <div className="bg-[#FF4B26] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h4 className="font-bold mb-2">EMAIL ADDRESS</h4>
                <p className="text-gray-400 text-sm">Response within 2 hour</p>
                <p className="text-gray-400 text-sm">support@construz.com</p>
              </div>

              <div className="bg-[#001845] p-6 rounded-lg">
                <div className="bg-[#FF4B26] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h4 className="font-bold mb-2">SOCIAL PROFILE</h4>
                <div className="flex gap-3 text-gray-400">
                  <a
                    href="#"
                    className="hover:text-[#FF4B26] transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="hover:text-[#FF4B26] transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="hover:text-[#FF4B26] transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5l6-3.5-6-3.5v7z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="relative">
            <img
              src="https://demo.themagnifico.net/construction-demolition-services/wp-content/themes/construction-demolition-services-pro/assets/images/contact-us/contact-us-image.png"
              alt="Construction Vehicle"
              className="w-full h-auto max-w-lg mx-auto"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Footer Section */}
      <motion.footer
        className="bg-[#001845] py-16"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <motion.div
              variants={fadeInUp}
              className="col-span-2 md:col-span-1"
            >
              <h3 className="text-2xl font-bold mb-6">Construction</h3>
              <p className="text-gray-400 mb-6">
                There are many variations of but the majority have suffered
                alteration in some form by injected humour.
              </p>
              <img src={footerLogo} className=" h-9 w-44" />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h4 className="text-xl font-bold mb-6">Useful Links</h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-[#FF4B26] transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#FF4B26] transition-colors"
                  >
                    What We Do
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#FF4B26] transition-colors"
                  >
                    Our Team
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#FF4B26] transition-colors"
                  >
                    Success Story
                  </a>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h4 className="text-xl font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-[#FF4B26] transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#FF4B26] transition-colors"
                  >
                    FAQ's
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#FF4B26] transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#FF4B26] transition-colors"
                  >
                    Terms Of Use
                  </a>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h4 className="text-xl font-bold mb-6">Newsletter</h4>
              <p className="text-gray-400 mb-4">
                Subscribe for the latest news. Stay updated on the latest
                trends.
              </p>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  className="w-full px-4 py-2 bg-[#001233] border border-gray-700 rounded-lg focus:outline-none focus:border-[#FF4B26]"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#FF4B26] p-2 rounded-full hover:bg-[#ff3c13] transition-colors">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={fadeInUp}
            className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400"
          >
            <p>
              Copyright ©2024{" "}
              <a href="#" className="text-[#FF4B26]">
                Themagnifico
              </a>
            </p>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
};

export default ContactSection;
