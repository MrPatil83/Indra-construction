// import { motion } from "framer-motion";
// import { useEffect, useRef, useState } from "react";

// export default function HeroSecond() {
//   const ref = useRef();
//   const [inView, setInView] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => setInView(entry.isIntersecting),
//       { threshold: 0.5 } // Adjust threshold as needed
//     );

//     if (ref.current) {
//       observer.observe(ref.current);
//     }

//     return () => {
//       if (ref.current) {
//         observer.unobserve(ref.current);
//       }
//     };
//   }, []);

//   return (
//     <motion.div
//       ref={ref}
//       className="min-h-screen bg-white px-6 md:px-12 lg:px-24 xl:px-44 overflow-hidden"
//       initial={{ opacity: 0 }}
//       animate={inView ? { opacity: 1 } : {}}
//       transition={{ duration: 0.8 }}
//     >
//       <div className="container mx-auto py-12 flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
//         {/* Left Section with Image */}
//         <motion.div
//           className="relative w-full lg:w-1/2"
//           initial={{ x: -50 }}
//           animate={inView ? { x: 0 } : {}}
//           transition={{ duration: 0.8 }}
//         >
//           <div className="relative aspect-square rounded-full border-[10px] border-[#FF5722]">
//             <img
//               src="https://demo.themagnifico.net/construction-demolition-services/wp-content/themes/construction-demolition-services-pro/assets/images/about-us/about1.png"
//               alt="Construction site with workers"
//               className="object-cover rounded-full pt-2 pr-3"
//             />
//             {/* Stats Overlay - 40+ Years */}
//             <div className="absolute top-0 right-0 bg-[#0A2472] text-white p-4 md:p-8 rounded-full transform translate-x-1/4 py-6 md:py-10">
//               <div className="text-2xl md:text-4xl font-bold">40+</div>
//               <div className="text-xs md:text-sm whitespace-nowrap">
//                 Years we have
//                 <br />
//                 been doing this
//               </div>
//             </div>
//             {/* Stats Overlay - 1.2k Customers */}
//             <div className="absolute bottom-0 left-0 bg-[#0A2472] text-white p-4 md:p-8 rounded-full transform -translate-x-1/4 py-6 md:py-14">
//               <div className="text-2xl md:text-4xl font-bold">1.2k</div>
//               <div className="text-xs md:text-sm">Happy Customers</div>
//             </div>
//           </div>
//         </motion.div>

//         {/* Right Section with Content */}
//         <motion.div
//           className="w-full lg:w-1/2 space-y-4 md:space-y-8"
//           initial={{ x: 50 }}
//           animate={inView ? { x: 0 } : {}}
//           transition={{ duration: 0.8 }}
//         >
//           <div>
//             <h2 className="text-[#FF5722] font-medium">ABOUT US</h2>
//             <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mt-2">
//               We <span className="text-[#FF5722]">Building</span> Everything
//               <br />
//               That you needed
//             </h1>
//             <p className="text-gray-600 mt-4">
//               We craft unique digital experiences. With more than 7 years of
//               expertise we design and code clean websites.
//             </p>
//           </div>

//           <div className="space-y-4">
//             <div className="flex items-center gap-2 md:gap-4">
//               <div className="w-2 h-2 rounded-full bg-[#FF5722]" />
//               <p className="text-gray-800">
//                 Providing Solutions For Construction, Management
//               </p>
//             </div>
//             <div className="flex items-center gap-2 md:gap-4">
//               <div className="w-2 h-2 rounded-full bg-[#FF5722]" />
//               <p className="text-gray-800">
//                 Engineers design and build the structure
//               </p>
//             </div>
//           </div>

//           <div className="space-y-6">
//             {/* Mission Section */}
//             <motion.div
//               className="flex items-start gap-4"
//               whileHover={{ scale: 1.02 }}
//               transition={{ duration: 0.2 }}
//             >
//               <div className="p-2 md:p-4 rounded-full bg-[#FF5722]/10">
//                 <svg
//                   className="w-4 h-4 md:w-6 md:h-6 text-[#FF5722]"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M13 10V3L4 14h7v7l9-11h-7z"
//                   />
//                 </svg>
//               </div>
//               <div>
//                 <h3 className="text-lg md:text-xl font-bold">Our Mission</h3>
//                 <p className="text-gray-600 mt-1">
//                   We craft unique digital experiences. With more years of
//                   expertise we design
//                 </p>
//               </div>
//             </motion.div>

//             {/* Vision Section */}
//             <motion.div
//               className="flex items-start gap-4"
//               whileHover={{ scale: 1.02 }}
//               transition={{ duration: 0.2 }}
//             >
//               <div className="p-2 md:p-4 rounded-full bg-[#FF5722]/10">
//                 <svg
//                   className="w-4 h-4 md:w-6 md:h-6 text-[#FF5722]"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
//                   />
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
//                   />
//                 </svg>
//               </div>
//               <div>
//                 <h3 className="text-lg md:text-xl font-bold">Our Vision</h3>
//                 <p className="text-gray-600 mt-1">
//                   We craft unique digital experiences. With more years of
//                   expertise we design
//                 </p>
//               </div>
//             </motion.div>
//           </div>

//           <motion.button
//             className="bg-[#FF5722] text-white px-4 py-2 md:px-8 md:py-3 rounded-lg font-medium hover:bg-[#09316F]/90 transition duration-700"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Explore Our Company
//           </motion.button>
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// }
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function HeroSecond() {
  const ref = useRef();
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const currentRef = ref.current; // Copy ref to a variable

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.5 } // Adjust threshold as needed
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      className="min-h-screen bg-white px-6 md:px-12 lg:px-24 xl:px-44 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto py-12 flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        {/* Left Section with Image */}
        <motion.div
          className="relative w-full lg:w-1/2"
          initial={{ x: -50 }}
          animate={inView ? { x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="relative aspect-square rounded-full border-[10px] border-[#FF5722]">
            <img
              src="https://demo.themagnifico.net/construction-demolition-services/wp-content/themes/construction-demolition-services-pro/assets/images/about-us/about1.png"
              alt="Construction site with workers"
              className="object-cover rounded-full pt-2 pr-3"
            />
            {/* Stats Overlay - 40+ Years */}
            <div className="absolute top-0 right-0 bg-[#0A2472] text-white p-2 md:p-4 lg:p-8 rounded-full transform translate-x-1/4 py-3 md:py-6 lg:py-10">
              <div className="text-lg md:text-2xl lg:text-4xl font-bold">
                40+
              </div>
              <div className="text-xs md:text-sm lg:text-md whitespace-nowrap">
                Years we have
                <br />
                been doing this
              </div>
            </div>
            {/* Stats Overlay - 1.2k Customers */}
            <div className="absolute bottom-0 left-0 bg-[#0A2472] text-white p-2 md:p-4 lg:p-8 rounded-full transform -translate-x-1/4 py-3 md:py-6 lg:py-14">
              <div className="text-lg md:text-2xl lg:text-4xl font-bold">
                1.2k
              </div>
              <div className="text-xs md:text-sm lg:text-md">
                Happy Customers
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Section with Content */}
        <motion.div
          className="w-full lg:w-1/2 space-y-4 md:space-y-8"
          initial={{ x: 50 }}
          animate={inView ? { x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div>
            <h2 className="text-[#FF5722] font-medium">ABOUT US</h2>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mt-2">
              We <span className="text-[#FF5722]">Build</span> Everything
              <br />
              That You Need
            </h1>
            <p className="text-gray-600 mt-4">
              At Indra Constructions, we specialize in providing comprehensive
              construction, building maintenance, and interior design solutions.
              With over 40 years of experience, our team delivers high-quality
              services, including residential and commercial projects,
              structural repairs, waterproofing, and custom interior design. We
              pride ourselves on delivering tailored solutions that meet the
              unique needs of each client, ensuring durability and aesthetic
              appeal for every space we work on.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2 md:gap-4">
              <div className="w-2 h-2 rounded-full bg-[#FF5722]" />
              <p className="text-gray-800">
                Providing Solutions For Construction, Management
              </p>
            </div>
            <div className="flex items-center gap-2 md:gap-4">
              <div className="w-2 h-2 rounded-full bg-[#FF5722]" />
              <p className="text-gray-800">
                Engineers design and build the structure
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {/* Mission Section */}
            <motion.div
              className="flex items-start gap-4"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="p-2 md:p-4 rounded-full bg-[#FF5722]/10">
                <svg
                  className="w-4 h-4 md:w-6 md:h-6 text-[#FF5722]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold">Our Mission</h3>
                <p className="text-gray-600 mt-1">
                  We craft unique digital experiences. With more than 7 years of
                  expertise, we design and build clean, efficient structures
                  with lasting quality and innovative solutions.
                </p>
              </div>
            </motion.div>

            {/* Vision Section */}
            <motion.div
              className="flex items-start gap-4"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="p-2 md:p-4 rounded-full bg-[#FF5722]/10">
                <svg
                  className="w-4 h-4 md:w-6 md:h-6 text-[#FF5722]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold">Our Vision</h3>
                <p className="text-gray-600 mt-1">
                  Our vision is to provide reliable and sustainable construction
                  solutions, while transforming spaces with innovative designs
                  and engineering excellence.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.button
            className="bg-[#FF5722] text-white px-4 py-2 md:px-8 md:py-3 rounded-lg font-medium hover:bg-[#09316F]/90 transition duration-700"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Our Company
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
}
