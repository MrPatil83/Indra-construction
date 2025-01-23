// // import React from "react";
// import { motion } from "framer-motion";

// const Whychoose = () => {
//   return (
//     <section id="why_choose_us" className="relative">
//       <div className="container mx-auto">
//         <div className="text-center pb-5">
//           <div className="text-2xl font-bold">WHY CHOOSE US</div>
//           <div className="flex justify-center">
//             <svg
//               width="36"
//               height="26"
//               viewBox="0 0 36 26"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 className="text-white"
//                 d="M22.5 0L36 23H9L22.5 0Z"
//                 fill="white"
//               ></path>
//             </svg>
//           </div>
//           <h3 className="text-xl font-semibold mt-4">
//             High Quality Innovative Design
//           </h3>
//           <p className="mt-2 text-lg">
//             We craft unique digital experiences. With more than 7 years of
//             expertise we design and code clean websites.
//           </p>
//         </div>

//         <div className="flex flex-wrap justify-between">
//           {/* Left Section */}
//           <div className="w-full lg:w-4/12 md:w-6/12">
//             {[
//               {
//                 title: "Technology",
//                 imgSrc:
//                   "https://demo.themagnifico.net/construction-demolition-services/wp-content/themes/construction-demolition-services-pro/assets/images/why-choose-us/why-choose-us-icon1.png",
//                 description:
//                   "We are expert your all work is very nice waiting for next project.",
//               },
//               {
//                 title: "Core Planning",
//                 imgSrc:
//                   "https://demo.themagnifico.net/construction-demolition-services/wp-content/themes/construction-demolition-services-pro/assets/images/why-choose-us/why-choose-us-icon2.png",
//                 description:
//                   "We are expert your all work is very nice waiting for next project.",
//               },
//               {
//                 title: "Project Result",
//                 imgSrc:
//                   "https://demo.themagnifico.net/construction-demolition-services/wp-content/themes/construction-demolition-services-pro/assets/images/why-choose-us/why-choose-us-icon3.png",
//                 description:
//                   "We are expert your all work is very nice waiting for next project.",
//               },
//             ].map((item, index) => (
//               <motion.div
//                 className="mb-4"
//                 key={index}
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 <div className="flex items-center">
//                   <div className="w-1/4">
//                     <img
//                       src={item.imgSrc}
//                       alt={item.title}
//                       className="w-full"
//                     />
//                   </div>
//                   <div className="ml-4">
//                     <h5 className="text-xl font-semibold">{item.title}</h5>
//                     <p>{item.description}</p>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           {/* Middle Image */}
//           <div className="w-full lg:w-4/12 md:w-full">
//             <motion.div
//               className="relative"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.5 }}
//             >
//               <img
//                 src="https://demo.themagnifico.net/construction-demolition-services/wp-content/themes/construction-demolition-services-pro/assets/images/why-choose-us/why-choose-middle-image.png"
//                 alt="Middle Image"
//                 className="w-full"
//               />
//             </motion.div>
//           </div>

//           {/* Right Section */}
//           <div className="w-full lg:w-4/12 md:w-6/12">
//             {[
//               {
//                 title: "Trusted Clients",
//                 imgSrc:
//                   "https://demo.themagnifico.net/construction-demolition-services/wp-content/themes/construction-demolition-services-pro/assets/images/why-choose-us/why-choose-us-icon-right1.png",
//                 description:
//                   "Passage of Lorem Ipsum, you need to be sure there isn't anything.",
//               },
//               {
//                 title: "Skilled Team",
//                 imgSrc:
//                   "https://demo.themagnifico.net/construction-demolition-services/wp-content/themes/construction-demolition-services-pro/assets/images/why-choose-us/why-choose-us-icon-right2.png",
//                 description:
//                   "Passage of Lorem Ipsum, you need to be sure there isn't anything.",
//               },
//               {
//                 title: "Save Money",
//                 imgSrc:
//                   "https://demo.themagnifico.net/construction-demolition-services/wp-content/themes/construction-demolition-services-pro/assets/images/why-choose-us/why-choose-us-icon-right3.png",
//                 description:
//                   "Passage of Lorem Ipsum, you need to be sure there isn't anything.",
//               },
//             ].map((item, index) => (
//               <motion.div
//                 className="mb-4"
//                 key={index}
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 <div className="flex items-center">
//                   <div className="w-1/4">
//                     <img
//                       src={item.imgSrc}
//                       alt={item.title}
//                       className="w-full"
//                     />
//                   </div>
//                   <div className="ml-4">
//                     <h5 className="text-xl font-semibold">{item.title}</h5>
//                     <p>{item.description}</p>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Whychoose;

// import { motion } from "framer-motion";

// export default function WhyChooseUs() {
//   const leftFeatures = [
//     {
//       title: "Technology",
//       description:
//         "We are expert your all work is very nice waiting for next project.",
//       icon: "https://demo.themagnifico.net/construction-demolition-services/wp-content/themes/construction-demolition-services-pro/assets/images/why-choose-us/why-choose-us-icon1.png",
//     },
//     {
//       title: "Core Planning",
//       description:
//         "We are expert your all work is very nice waiting for next project.",
//       icon: "https://demo.themagnifico.net/construction-demolition-services/wp-content/themes/construction-demolition-services-pro/assets/images/why-choose-us/why-choose-us-icon2.png",
//     },
//     {
//       title: "Project Result",
//       description:
//         "We are expert your all work is very nice waiting for next project.",
//       icon: "https://demo.themagnifico.net/construction-demolition-services/wp-content/themes/construction-demolition-services-pro/assets/images/why-choose-us/why-choose-us-icon3.png",
//     },
//   ];

//   const rightFeatures = [
//     {
//       title: "Trusted Clients",
//       description:
//         "Passage of Lorem Ipsum, you need to be sure there isn't anything.",
//       icon: "https://demo.themagnifico.net/construction-demolition-services/wp-content/themes/construction-demolition-services-pro/assets/images/why-choose-us/why-choose-us-icon-right1.png",
//     },
//     {
//       title: "Skilled Team",
//       description:
//         "Passage of Lorem Ipsum, you need to be sure there isn't anything.",
//       icon: "https://demo.themagnifico.net/construction-demolition-services/wp-content/themes/construction-demolition-services-pro/assets/images/why-choose-us/why-choose-us-icon-right2.png",
//     },
//     {
//       title: "Save Money",
//       description:
//         "Passage of Lorem Ipsum, you need to be sure there isn't anything.",
//       icon: "https://demo.themagnifico.net/construction-demolition-services/wp-content/themes/construction-demolition-services-pro/assets/images/why-choose-us/why-choose-us-icon-right3.png",
//     },
//   ];

//   return (
//     <section className="relative bg-[#002B5B] text-white py-16">
//       <div className="container mx-auto px-4">
//         <div className="text-center pb-12">
//           <h2 className="text-3xl md:text-4xl font-bold tracking-wider mb-4">
//             WHY CHOOSE US
//           </h2>
//           <div className="flex justify-center mb-6">
//             <svg
//               width="36"
//               height="26"
//               viewBox="0 0 36 26"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path d="M22.5 0L36 23H9L22.5 0Z" fill="white" />
//             </svg>
//           </div>
//           <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-[#FF4A17]">
//             High Quality Innovate Design
//           </h3>
//           <p className="text-lg max-w-3xl mx-auto">
//             We craft unique digital experiences. With more than 7 years of
//             expertise we design and code clean websites.
//           </p>
//         </div>

//         <div className="flex flex-wrap justify-between items-center">
//           {/* Left Features */}
//           <div className="w-full lg:w-4/12 space-y-8">
//             {leftFeatures.map((feature, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, x: -50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.2 }}
//                 className="flex items-center gap-6"
//               >
//                 <div className="bg-white rounded-full p-4 w-16 h-16 flex items-center justify-center shrink-0">
//                   <img
//                     src={feature.icon || "/placeholder.svg"}
//                     alt={feature.title}
//                     className="w-10 h-10 object-contain"
//                   />
//                 </div>
//                 <div>
//                   <h4 className="text-xl font-semibold mb-2">
//                     {feature.title}
//                   </h4>
//                   <p className="text-gray-300">{feature.description}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           {/* Center Image */}
//           <motion.div
//             className="w-full lg:w-4/12 px-8 py-12"
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//           >
//             <img
//               src="https://demo.themagnifico.net/construction-demolition-services/wp-content/themes/construction-demolition-services-pro/assets/images/why-choose-us/why-choose-middle-image.png"
//               alt="Construction Professional"
//               className="w-full h-auto"
//             />
//           </motion.div>

//           {/* Right Features */}
//           <div className="w-full lg:w-4/12 space-y-8">
//             {rightFeatures.map((feature, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, x: 50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.2 }}
//                 className="flex items-center gap-6"
//               >
//                 <div className="bg-white rounded-full p-4 w-16 h-16 flex items-center justify-center shrink-0">
//                   <img
//                     src={feature.icon || "/placeholder.svg"}
//                     alt={feature.title}
//                     className="w-10 h-10 object-contain"
//                   />
//                 </div>
//                 <div>
//                   <h4 className="text-xl font-semibold mb-2">
//                     {feature.title}
//                   </h4>
//                   <p className="text-gray-300">{feature.description}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import { motion } from "framer-motion";
export default function WhyChooseUs() {
  const leftFeatures = [
    {
      title: "Technology",
      description:
        "We are expert your all work is very nice waiting for next project.",
      icon: "https://demo.themagnifico.net/construction-demolition-services/wp-content/themes/construction-demolition-services-pro/assets/images/why-choose-us/why-choose-us-icon1.png",
    },
    {
      title: "Core Planning",
      description:
        "We are expert your all work is very nice waiting for next project.",
      icon: "https://demo.themagnifico.net/construction-demolition-services/wp-content/themes/construction-demolition-services-pro/assets/images/why-choose-us/why-choose-us-icon2.png",
    },
    {
      title: "Project Result",
      description:
        "We are expert your all work is very nice waiting for next project.",
      icon: "https://demo.themagnifico.net/construction-demolition-services/wp-content/themes/construction-demolition-services-pro/assets/images/why-choose-us/why-choose-us-icon3.png",
    },
  ];

  const rightFeatures = [
    {
      title: "Trusted Clients",
      description:
        "Passage of Lorem Ipsum, you need to be sure there isn't anything.",
      icon: "https://demo.themagnifico.net/construction-demolition-services/wp-content/themes/construction-demolition-services-pro/assets/images/why-choose-us/why-choose-us-icon-right1.png",
    },
    {
      title: "Skilled Team",
      description:
        "Passage of Lorem Ipsum, you need to be sure there isn't anything.",
      icon: "https://demo.themagnifico.net/construction-demolition-services/wp-content/themes/construction-demolition-services-pro/assets/images/why-choose-us/why-choose-us-icon-right2.png",
    },
    {
      title: "Save Money",
      description:
        "Passage of Lorem Ipsum, you need to be sure there isn't anything.",
      icon: "https://demo.themagnifico.net/construction-demolition-services/wp-content/themes/construction-demolition-services-pro/assets/images/why-choose-us/why-choose-us-icon-right3.png",
    },
  ];

  return (
    <section className="relative bg-[#09316f] text-white py-16">
      <div className="container mx-auto px-4 max-w-7xl ">
        {/* Outlined Heading */}
        <div className="relative text-center pb-12">
          {/* Border-only text */}
          <h1
            className="text-[5vw] -mt-24 font-bold text-transparent tracking-wide"
            style={{
              WebkitTextStroke: "1px #1a4280", // White border
            }}
          >
            WHY CHOOSE US
          </h1>
        </div>

        <div className="text-center pb-12">
          <div className="flex justify-center mb-6">
            {/* <svg
              width="36"
              height="26"
              viewBox="0 0 36 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22.5 0L36 23H9L22.5 0Z" fill="white" />
            </svg> */}
            <img
              src="https://www.indraconstruction.com/wp-content/uploads/2022/08/cropped-web-mono.png"
              className="rounded-sm"
            />
          </div>
          <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-[#FF4A17]">
            High Quality Innovate Design
          </h3>
          <p className="text-lg max-w-3xl mx-auto">
            We craft unique digital experiences. With more than 7 years of
            expertise we design and code clean websites.
          </p>
        </div>

        {/* Features and Image */}
        <div className="flex flex-wrap justify-between items-center">
          {/* Left Features */}
          <div className="w-full lg:w-4/12 space-y-8">
            {leftFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex items-center gap-6"
              >
                <div className="bg-white rounded-full p-4 w-16 h-16 flex items-center justify-center shrink-0">
                  <img
                    src={feature.icon || "/placeholder.svg"}
                    alt={feature.title}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Center Image */}
          <motion.div
            className="w-full lg:w-4/12 px-8 py-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <img
              src="https://demo.themagnifico.net/construction-demolition-services/wp-content/themes/construction-demolition-services-pro/assets/images/why-choose-us/why-choose-middle-image.png"
              alt="Construction Professional"
              className="w-full h-auto"
            />
          </motion.div>

          {/* Right Features */}
          <div className="w-full lg:w-4/12 space-y-8">
            {rightFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex items-center gap-6"
              >
                <div className="bg-white rounded-full p-4 w-16 h-16 flex items-center justify-center shrink-0">
                  <img
                    src={feature.icon || "/placeholder.svg"}
                    alt={feature.title}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
