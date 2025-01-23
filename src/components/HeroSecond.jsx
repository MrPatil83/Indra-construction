// import { motion } from "framer-motion";

// function HeroSecond() {
//   return (
//     <div
//       className="flex flex-col lg:flex-row items-center justify-center pt-6 px-4 md:px-0"
//       data-aos="fade-left"
//       data-aos-duration="2000"
//     >
//       <motion.div
//         className="relative w-full lg:w-1/2 md:p-4 flex flex-col items-center"
// initial={{ opacity: 0 }}
// animate={{ opacity: 1 }}
// transition={{ duration: 2 }}
//       >
//         <motion.div
//           className="relative w-full"
// initial={{ x: -200 }}
// animate={{ x: 0 }}
// transition={{ duration: 2 }}
//         >
//           <div className="relative w-full h-full flex flex-col items-center lg:items-start">
//             <img
//               src="https://demo.themagnifico.net/construction-demolition-services/wp-content/themes/construction-demolition-services-pro/assets/images/about-us/about1.png"
//               alt="About Us"
//               className=" w-[90%] h-[100%] object-cover rounded-full mb-3 lg:mb-0"
//             />
//             <div className="px-9 py-14 rounded-full bg-blue-950 shadow-lg text-center flex items-center justify-center mb-4 lg:mb-0 lg:absolute lg:top-4 lg:right-4 lg:flex lg:items-center lg:justify-center">
//               <div>
//                 <div className="text-3xl font-bold text-white">40+</div>
//                 <div className="text-base text-white">Years we have</div>
//               </div>
//             </div>

//             <div className="bg-blue-950 px-5 py-9 p-2 rounded-full shadow-lg flex flex-col items-center justify-center lg:absolute lg:bottom-4 lg:left-4 lg:flex lg:items-center lg:justify-center md:mt-4  lg:mt-0">
//               <div>
//                 <div className="text-3xl font-bold text-white">1.2k</div>
//                 <div className="text-sm text-white">Happy Customers</div>
//                 <div className="flex gap-2 mt-2">
//                   <img
//                     src="https://demo.themagnifico.net/construction-demolition-services/wp-content/themes/construction-demolition-services-pro/assets/images/about-us/customer1.png"
//                     alt="Customer 1"
//                     className="w-10 h-10 rounded-full object-cover"
//                   />
//                   <img
//                     src="https://demo.themagnifico.net/construction-demolition-services/wp-content/themes/construction-demolition-services-pro/assets/images/about-us/customer2.png"
//                     alt="Customer 2"
//                     className="w-10 h-10 rounded-full object-cover"
//                   />
//                   <img
//                     src="https://demo.themagnifico.net/construction-demolition-services/wp-content/themes/construction-demolition-services-pro/assets/images/about-us/customer3.png"
//                     alt="Customer 3"
//                     className="w-9 h-10 rounded-full object-cover"
//                   />
//                   <i className="fa-solid fa-plus text-lg"></i>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </motion.div>
//       <motion.div
//         className="w-full lg:w-1/2 p-4"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 2 }}
//       >
//         <img
//           src="https://demo.themagnifico.net/construction-demolition-services/wp-content/themes/construction-demolition-services-pro/assets/images/about-us/about-sign.png"
//           alt="About Us Sign"
//           className=" relative -top-28 left-40 md:left-0 md:-top-0 md:w-full md:h-auto object-cover"
//         />
//       </motion.div>
//     </div>
//   );
// }

// export default HeroSecond;
// import { motion } from "framer-motion";

// function HeroSecond() {
//   return (
//     <div
//       className="flex flex-col lg:flex-row items-center justify-center pt-6 px-4 md:px-0 max-w-7xl m-auto"
//       data-aos="fade-left"
//       data-aos-duration="2000"
//     >
//       {/* Left side section Open  */}
//       <motion.div
//         className="relative w-full lg:w-1/2 md:p-4 flex flex-col items-center"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 2 }}
//         viewport={{ once: true, amount: 0.5 }}
//       >
//         <motion.div
//           className="relative w-full"
//           initial={{ x: -200 }}
//           whileInView={{ x: 0 }}
//           transition={{ duration: 2 }}
//           viewport={{ once: true, amount: 0.5 }}
//         >
//           <div className="relative w-full h-full flex flex-col items-center lg:items-start">
//             <img
//               src="https://demo.themagnifico.net/construction-demolition-services/wp-content/themes/construction-demolition-services-pro/assets/images/about-us/about1.png"
//               alt="About Us"
//               className=" w-[90%] h-[100%] md:w-4/5 md:h-full object-cover rounded-full mb-3 lg:mb-0"
//             />
//             <div className="px-9 py-14 rounded-full bg-blue-950 shadow-lg text-center flex items-center justify-center mb-4 lg:mb-0 lg:absolute lg:top-4 lg:right-4 lg:flex lg:items-center lg:justify-center">
//               <div>
//                 <div className="text-3xl font-bold text-white">40+</div>
//                 <div className="text-base text-white">Years we have</div>
//               </div>
//             </div>

//             <div className="bg-blue-950 px-5 py-9 p-2 rounded-full shadow-lg flex flex-col items-center justify-center lg:absolute lg:bottom-4 lg:left-4 lg:flex lg:items-center lg:justify-center md:mt-4 lg:mt-0">
//               <div>
//                 <div className="text-3xl font-bold text-white">1.2k</div>
//                 <div className="text-sm text-white">Happy Customers</div>
//                 <div className="flex gap-2 mt-2">
//                   <img
//                     src="https://demo.themagnifico.net/construction-demolition-services/wp-content/themes/construction-demolition-services-pro/assets/images/about-us/customer1.png"
//                     alt="Customer 1"
//                     className="w-10 h-10 rounded-full object-cover"
//                   />
//                   <img
//                     src="https://demo.themagnifico.net/construction-demolition-services/wp-content/themes/construction-demolition-services-pro/assets/images/about-us/customer2.png"
//                     alt="Customer 2"
//                     className="w-10 h-10 rounded-full object-cover"
//                   />
//                   <img
//                     src="https://demo.themagnifico.net/construction-demolition-services/wp-content/themes/construction-demolition-services-pro/assets/images/about-us/customer3.png"
//                     alt="Customer 3"
//                     className="w-9 h-10 rounded-full object-cover"
//                   />
//                   <i className="fa-solid fa-plus text-lg"></i>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <motion.div
//             className="w-full lg:w-1/2 p-4"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 2 }}
//             viewport={{ once: true, amount: 0.5 }}
//           >
//             <img
//               src="https://demo.themagnifico.net/construction-demolition-services/wp-content/themes/construction-demolition-services-pro/assets/images/about-us/about-sign.png"
//               alt="About Us Sign"
//               className="relative -top-28 left-[182px] md:left-[24rem] md:-top-24 md:w-44 md:h-auto object-cover"
//             />
//           </motion.div>
//         </motion.div>
//       </motion.div>
//       {/* Left side section Close  */}

//       {/* Right side section open  */}
//       <motion.div
//         className="w-full lg:w-[45%] pb-3 flex items-center"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 2 }}
//         viewport={{ once: true, amount: 0.5 }}
//       >
//         <div className="about-head-outer">
//           <div className="about-head pb-3">
//             <div className="heading-shape">
//               <svg
//                 width="36"
//                 height="26"
//                 viewBox="0 0 36 26"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   className="heading-svg-path-1"
//                   d="M22.5 0L36 23H9L22.5 0Z"
//                   fill="white"
//                 />
//                 <path
//                   className="heading-svg-path-2"
//                   fillRule="evenodd"
//                   clipRule="evenodd"
//                   d="M14.5 3C14.3138 3 14.1628 3.14711 14.1628 3.32857V25.6714C14.1628 25.8529 14.3138 26 14.5 26C14.6862 26 14.8372 25.8529 14.8372 25.6714V3.32857C14.8372 3.14711 14.6862 3 14.5 3ZM12.1395 6.28571C11.9533 6.28571 11.8023 6.43281 11.8023 6.61429V25.6714C11.8023 25.8529 11.9533 26 12.1395 26C12.3258 26 12.4767 25.8529 12.4767 25.6714V6.61429C12.4767 6.43281 12.3258 6.28571 12.1395 6.28571ZM9.77907 9.57143C9.59285 9.57143 9.44186 9.71853 9.44186 9.9V25.6714C9.44186 25.8529 9.59285 26 9.77907 26C9.96529 26 10.1163 25.8529 10.1163 25.6714V9.9C10.1163 9.71853 9.96529 9.57143 9.77907 9.57143ZM7.4186 12.8571C7.23238 12.8571 7.0814 13.0042 7.0814 13.1857V25.6714C7.0814 25.8529 7.23238 26 7.4186 26C7.60483 26 7.75581 25.8529 7.75581 25.6714V13.1857C7.75581 13.0042 7.60483 12.8571 7.4186 12.8571ZM5.05814 16.1429C4.87192 16.1429 4.72093 16.29 4.72093 16.4714V25.6714C4.72093 25.8529 4.87192 26 5.05814 26C5.24436 26 5.39535 25.8529 5.39535 25.6714V16.4714C5.39535 16.29 5.24436 16.1429 5.05814 16.1429ZM2.69767 19.4286C2.51145 19.4286 2.36047 19.5757 2.36047 19.7571V25.6714C2.36047 25.8529 2.51145 26 2.69767 26C2.8839 26 3.03488 25.8529 3.03488 25.6714V19.7571C3.03488 19.5757 2.8839 19.4286 2.69767 19.4286ZM0 23.0429C0 22.8614 0.150987 22.7143 0.337209 22.7143C0.523432 22.7143 0.674419 22.8614 0.674419 23.0429V25.6714C0.674419 25.8529 0.523432 26 0.337209 26C0.150987 26 0 25.8529 0 25.6714V23.0429ZM29 23.0429C29 22.8614 28.849 22.7143 28.6628 22.7143C28.4766 22.7143 28.3256 22.8614 28.3256 23.0429V25.6714C28.3256 25.8529 28.4766 26 28.6628 26C28.849 26 29 25.8529 29 25.6714V23.0429ZM26.6395 19.7571C26.6395 19.5757 26.4885 19.4286 26.3023 19.4286C26.1161 19.4286 25.9651 19.5757 25.9651 19.7571V25.6714C25.9651 25.8529 26.1161 26 26.3023 26C26.4885 26 26.6395 25.8529 26.6395 25.6714V19.7571ZM24.2791 16.4714C24.2791 16.29 24.1281 16.1429 23.9419 16.1429C23.7556 16.1429 23.6047 16.29 23.6047 16.4714V25.6714C23.6047 25.8529 23.7556 26 23.9419 26C24.1281 26 24.2791 25.8529 24.2791 25.6714V16.4714ZM21.9186 13.1857C21.9186 13.0042 21.7676 12.8571 21.5814 12.8571C21.3952 12.8571 21.2442 13.0042 21.2442 13.1857V25.6714C21.2442 25.8529 21.3952 26 21.5814 26C21.7676 26 21.9186 25.8529 21.9186 25.6714V13.1857ZM19.5581 9.9C19.5581 9.71853 19.4072 9.57143 19.2209 9.57143C19.0347 9.57143 18.8837 9.71853 18.8837 9.9V25.6714C18.8837 25.8529 19.0347 26 19.2209 26C19.4072 26 19.5581 25.8529 19.5581 25.6714V9.9ZM17.1977 6.61429C17.1977 6.43281 17.0467 6.28571 16.8605 6.28571C16.6742 6.28571 16.5233 6.43281 16.5233 6.61429V25.6714C16.5233 25.8529 16.6742 26 16.8605 26C17.0467 26 17.1977 25.8529 17.1977 25.6714V6.61429Z"
//                   fill="white"
//                 />
//               </svg>
//             </div>
//             <div className=" flex flex-col items-center md:items-start">
//               <h6 className="text-lg font-semibold mb-2 text-orange-600">
//                 ABOUT US
//               </h6>
//               <h3 className=" text-3xl pl-6 md:pl-0 md:text-5xl font-bold mb-4">
//                 We <span className="text-orange-600">Building</span> Everything
//                 That you needed
//               </h3>
//               <div className="text-gray-600 mb-6">
//                 We craft unique digital experiences. With more than 7 years of
//                 expertise we design and code clean websites.
//               </div>
//             </div>

//             <ul className="space-y-2 mb-6">
//               <li className="flex items-center text-[15px] md:text-base font-semibold">
//                 <svg
//                   className="w-4 h-4 mr-2 text-orange-600 relative"
//                   fill="none"
//                   viewBox="0 0 20 20"
//                 >
//                   <circle
//                     cx="10"
//                     cy="10"
//                     r="9"
//                     stroke="orange"
//                     strokeWidth="2"
//                     fill="none"
//                   />
//                 </svg>
//                 - Providing Solutions For Construction Management
//               </li>
//               <li className="flex items-center text-[15px] md:text-base font-semibold">
//                 <svg
//                   className="w-4 h-4 mr-2 text-orange-600 relative"
//                   fill="none"
//                   viewBox="0 0 20 20"
//                 >
//                   <circle
//                     cx="10"
//                     cy="10"
//                     r="9"
//                     stroke="orange"
//                     strokeWidth="2"
//                     fill="none"
//                   />
//                 </svg>
//                 - Engineers design and build the structure
//               </li>
//             </ul>

//             <div className="space-y-4 mb-6">
//               <div className="flex flex-col items-center md:flex-row md:items-start ">
//                 <img
//                   src="https://demo.themagnifico.net/construction-demolition-services/wp-content/themes/construction-demolition-services-pro/assets/images/about-us/about-image1.png"
//                   alt="Our Mission"
//                   className="w-16 h-16 p-3 object-cover rounded-full mr-4 border border-orange-600"
//                 />
//                 <div className=" flex flex-col items-center md:flex-row md:items-start">
//                   <h5 className="text-lg font-semibold mb-2">Our Mission</h5>
//                   <p className="text-gray-600">
//                     We craft unique digital experiences. With more years of
//                     expertise we design
//                   </p>
//                 </div>
//               </div>
//               <div className="flex flex-col items-center md:flex-row md:items-start ">
//                 <img
//                   src="https://demo.themagnifico.net/construction-demolition-services/wp-content/themes/construction-demolition-services-pro/assets/images/about-us/about-image2.png"
//                   alt="Our Vision"
//                   className="w-16 h-16 p- object-cover rounded-full mr-4 border border-orange-600"
//                 />
//                 <div className="  flex flex-col items-center md:flex-row md:items-start">
//                   <h5 className="text-lg font-semibold mb-2">Our Vision</h5>
//                   <p className="text-gray-600">
//                     We craft unique digital experiences. With more years of
//                     expertise we design
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="about_btn rounded-sm flex justify-center md:justify-start">
//               <a
//                 href="#"
//                 className="bg-orange-600 text-white px-6 py-4 font-bold rounded-md inline-block hover:bg-blue-950 transition duration-700"
//               >
//                 Explore Our Company
//               </a>
//             </div>
//           </div>
//         </div>
//       </motion.div>
//       {/* Right side section Close  */}
//     </div>
//   );
// }

// export default HeroSecond;
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef } from "react";

function HeroSecond() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const leftVariants = {
    hidden: { opacity: 0, x: -200 }, // Start far left
    visible: {
      opacity: 1,
      x: 0, // Animate to center
      transition: {
        duration: 2.2,
        ease: "easeOut",
      },
    },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 200 }, // Start far right
    visible: {
      opacity: 1,
      x: 0, // Animate to center
      transition: {
        duration: 3.2,
        ease: "easeOut",
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 3.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <div
      ref={containerRef}
      className="flex flex-col lg:flex-row items-center justify-center pt-6 px-4 md:px-0 max-w-7xl m-auto"
    >
      <AnimatePresence>
        {isInView && (
          <motion.div
            className="relative w-full lg:w-1/2 md:p-4 flex flex-col items-center"
            variants={leftVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="relative w-full" variants={childVariants}>
              <div className="relative w-full h-full flex flex-col items-center lg:items-start">
                <img
                  src="https://demo.themagnifico.net/construction-demolition-services/wp-content/themes/construction-demolition-services-pro/assets/images/about-us/about1.png"
                  alt="About Us"
                  className="w-[90%] h-[100%] md:w-4/5 md:h-full object-cover rounded-full mb-3 lg:mb-0"
                />
                <motion.div
                  className="px-9 py-14 rounded-full bg-blue-950 shadow-lg text-center flex items-center justify-center mb-4 lg:mb-0 lg:absolute lg:top-4 lg:right-4 lg:flex lg:items-center lg:justify-center"
                  variants={childVariants}
                >
                  <div>
                    <div className="text-3xl font-bold text-white">40+</div>
                    <div className="text-base text-white">Years we have</div>
                  </div>
                </motion.div>

                <motion.div
                  className="bg-blue-950 px-5 py-9 p-2 rounded-full shadow-lg flex flex-col items-center justify-center lg:absolute lg:bottom-4 lg:left-4 lg:flex lg:items-center lg:justify-center md:mt-4 lg:mt-0"
                  variants={childVariants}
                >
                  <div>
                    <div className="text-3xl font-bold text-white">1.2k</div>
                    <div className="text-sm text-white">Happy Customers</div>
                    <div className="flex gap-2 mt-2">
                      <img
                        src="https://demo.themagnifico.net/construction-demolition-services/wp-content/themes/construction-demolition-services-pro/assets/images/about-us/customer1.png"
                        alt="Customer 1"
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <img
                        src="https://demo.themagnifico.net/construction-demolition-services/wp-content/themes/construction-demolition-services-pro/assets/images/about-us/customer2.png"
                        alt="Customer 2"
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <img
                        src="https://demo.themagnifico.net/construction-demolition-services/wp-content/themes/construction-demolition-services-pro/assets/images/about-us/customer3.png"
                        alt="Customer 3"
                        className="w-9 h-10 rounded-full object-cover"
                      />
                      <i className="fa-solid fa-plus text-lg"></i>
                    </div>
                  </div>
                </motion.div>
              </div>
              <motion.div
                className="w-full lg:w-1/2 p-4"
                variants={childVariants}
              >
                <img
                  src="https://demo.themagnifico.net/construction-demolition-services/wp-content/themes/construction-demolition-services-pro/assets/images/about-us/about-sign.png"
                  alt="About Us Sign"
                  className="relative -top-28 left-[182px] md:left-[24rem] md:-top-24 md:w-44 md:h-auto object-cover"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        )}

        {isInView && (
          <motion.div
            className="w-full lg:w-[45%] pb-3 flex items-center"
            variants={rightVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="about-head-outer">
              <motion.div className="about-head pb-3" variants={childVariants}>
                <div className="heading-shape">
                  <svg
                    width="36"
                    height="26"
                    viewBox="0 0 36 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="heading-svg-path-1"
                      d="M22.5 0L36 23H9L22.5 0Z"
                      fill="white"
                    />
                    <path
                      className="heading-svg-path-2"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14.5 3C14.3138 3 14.1628 3.14711 14.1628 3.32857V25.6714C14.1628 25.8529 14.3138 26 14.5 26C14.6862 26 14.8372 25.8529 14.8372 25.6714V3.32857C14.8372 3.14711 14.6862 3 14.5 3ZM12.1395 6.28571C11.9533 6.28571 11.8023 6.43281 11.8023 6.61429V25.6714C11.8023 25.8529 11.9533 26 12.1395 26C12.3258 26 12.4767 25.8529 12.4767 25.6714V6.61429C12.4767 6.43281 12.3258 6.28571 12.1395 6.28571ZM9.77907 9.57143C9.59285 9.57143 9.44186 9.71853 9.44186 9.9V25.6714C9.44186 25.8529 9.59285 26 9.77907 26C9.96529 26 10.1163 25.8529 10.1163 25.6714V9.9C10.1163 9.71853 9.96529 9.57143 9.77907 9.57143ZM7.4186 12.8571C7.23238 12.8571 7.0814 13.0042 7.0814 13.1857V25.6714C7.0814 25.8529 7.23238 26 7.4186 26C7.60483 26 7.75581 25.8529 7.75581 25.6714V13.1857C7.75581 13.0042 7.60483 12.8571 7.4186 12.8571ZM5.05814 16.1429C4.87192 16.1429 4.72093 16.29 4.72093 16.4714V25.6714C4.72093 25.8529 4.87192 26 5.05814 26C5.24436 26 5.39535 25.8529 5.39535 25.6714V16.4714C5.39535 16.29 5.24436 16.1429 5.05814 16.1429ZM2.69767 19.4286C2.51145 19.4286 2.36047 19.5757 2.36047 19.7571V25.6714C2.36047 25.8529 2.51145 26 2.69767 26C2.8839 26 3.03488 25.8529 3.03488 25.6714V19.7571C3.03488 19.5757 2.8839 19.4286 2.69767 19.4286ZM0 23.0429C0 22.8614 0.150987 22.7143 0.337209 22.7143C0.523432 22.7143 0.674419 22.8614 0.674419 23.0429V25.6714C0.674419 25.8529 0.523432 26 0.337209 26C0.150987 26 0 25.8529 0 25.6714V23.0429ZM29 23.0429C29 22.8614 28.849 22.7143 28.6628 22.7143C28.4766 22.7143 28.3256 22.8614 28.3256 23.0429V25.6714C28.3256 25.8529 28.4766 26 28.6628 26C28.849 26 29 25.8529 29 25.6714V23.0429ZM26.6395 19.7571C26.6395 19.5757 26.4885 19.4286 26.3023 19.4286C26.1161 19.4286 25.9651 19.5757 25.9651 19.7571V25.6714C25.9651 25.8529 26.1161 26 26.3023 26C26.4885 26 26.6395 25.8529 26.6395 25.6714V19.7571ZM24.2791 16.4714C24.2791 16.29 24.1281 16.1429 23.9419 16.1429C23.7556 16.1429 23.6047 16.29 23.6047 16.4714V25.6714C23.6047 25.8529 23.7556 26 23.9419 26C24.1281 26 24.2791 25.8529 24.2791 25.6714V16.4714ZM21.9186 13.1857C21.9186 13.0042 21.7676 12.8571 21.5814 12.8571C21.3952 12.8571 21.2442 13.0042 21.2442 13.1857V25.6714C21.2442 25.8529 21.3952 26 21.5814 26C21.7676 26 21.9186 25.8529 21.9186 25.6714V13.1857ZM19.5581 9.9C19.5581 9.71853 19.4072 9.57143 19.2209 9.57143C19.0347 9.57143 18.8837 9.71853 18.8837 9.9V25.6714C18.8837 25.8529 19.0347 26 19.2209 26C19.4072 26 19.5581 25.8529 19.5581 25.6714V9.9ZM17.1977 6.61429C17.1977 6.43281 17.0467 6.28571 16.8605 6.28571C16.6742 6.28571 16.5233 6.43281 16.5233 6.61429V25.6714C16.5233 25.8529 16.6742 26 16.8605 26C17.0467 26 17.1977 25.8529 17.1977 25.6714V6.61429Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="flex flex-col items-center md:items-start">
                  <h6 className="text-lg font-semibold mb-2 text-orange-600">
                    ABOUT US
                  </h6>
                  <h3 className="text-3xl pl-6 md:pl-0 md:text-5xl font-bold mb-4">
                    We <span className="text-orange-600">Building</span>{" "}
                    Everything That you needed
                  </h3>
                  <div className="text-gray-600 mb-6">
                    We craft unique digital experiences. With more than 7 years
                    of expertise we design and code clean websites.
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-[15px] md:text-base font-semibold">
                    <svg
                      className="w-4 h-4 mr-2 text-orange-600 relative"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <circle
                        cx="10"
                        cy="10"
                        r="9"
                        stroke="orange"
                        strokeWidth="2"
                        fill="none"
                      />
                    </svg>
                    - Providing Solutions For Construction Management
                  </li>
                  <li className="flex items-center text-[15px] md:text-base font-semibold">
                    <svg
                      className="w-4 h-4 mr-2 text-orange-600 relative"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <circle
                        cx="10"
                        cy="10"
                        r="9"
                        stroke="orange"
                        strokeWidth="2"
                        fill="none"
                      />
                    </svg>
                    - Engineers design and build the structure
                  </li>
                </ul>

                <div className="space-y-4 mb-6">
                  <motion.div
                    className="flex flex-col items-center md:flex-row md:items-start"
                    variants={childVariants}
                  >
                    <img
                      src="https://demo.themagnifico.net/construction-demolition-services/wp-content/themes/construction-demolition-services-pro/assets/images/about-us/about-image1.png"
                      alt="Our Mission"
                      className="w-16 h-16 p-3 object-cover rounded-full mr-4 border border-orange-600 shadow-xl mb-4 md:mb-0"
                    />
                    <div>
                      <h4 className="text-xl font-semibold flex justify-center md:justify-start">
                        Our Mission
                      </h4>
                      <p className="text-gray-600">
                        We provide the best solutions for engineering,
                        construction, and management.
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    className="flex flex-col items-center md:flex-row md:items-start"
                    variants={childVariants}
                  >
                    <img
                      src="https://demo.themagnifico.net/construction-demolition-services/wp-content/themes/construction-demolition-services-pro/assets/images/about-us/about-image2.png"
                      alt="Our Vision"
                      className="w-16 h-16 p-3 object-cover border-orange-600 rounded-full mr-4 border  shadow-xl mb-4 md:mb-0"
                    />
                    <div>
                      <h4 className="text-xl font-semibold flex justify-center md:justify-start ">
                        Our Vision
                      </h4>
                      <p className="text-gray-600">
                        Our aim is to create unique, efficient, and sustainable
                        projects.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default HeroSecond;
