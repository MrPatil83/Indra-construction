// "use client";

// import { motion, useAnimation } from "framer-motion";
// import { useEffect } from "react";
// import { useInView } from "react-intersection-observer";

// const processSteps = [
//   {
//     step: "1 Step",
//     title: "Meet and Consult About Project",
//     description:
//       "We craft unique digital experiences. With more years of expertise, we design.",
//   },
//   {
//     step: "2 Step",
//     title: "Product Design and Planning",
//     description:
//       "We craft unique digital experiences. With more years of expertise, we design.",
//   },
//   {
//     step: "3 Step",
//     title: "Testing and Quality Control",
//     description:
//       "We craft unique digital experiences. With more years of expertise, we design.",
//   },
//   {
//     step: "4 Step",
//     title: "Final Assembly and Project Handover",
//     description:
//       "We craft unique digital experiences. With more years of expertise, we design.",
//   },
// ];

// const stats = [
//   { value: 98, suffix: "%", label: "Customers Satisfied" },
//   { value: 10, suffix: "M", label: "Special Machinery" },
//   { value: 20, suffix: "+", label: "Years in Business" },
//   { value: 26, suffix: "k+", label: "Projects Completed" },
// ];

// export default function Workprocess() {
//   const controls = useAnimation();
//   const [ref, inView] = useInView({ triggerOnce: true });

//   useEffect(() => {
//     if (inView) {
//       controls.start("visible");
//     }
//   }, [inView, controls]);

//   return (
//     <>
//       <section className="relative  bg-[#FF5F15] overflow-hidden">
//         {/* Top Wave Pattern */}
//         <div className="absolute top-10 left-0 w-full">
//           <svg
//             width="200"
//             height="30"
//             viewBox="0 0 263 30"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               // fill-rule="evenodd"
//               // clip-rule="evenodd"
//               d="M-21.2678 25.481C-22.2441 26.4573 -22.2441 28.0402 -21.2678 29.0165C-20.2915 29.9928 -18.7085 29.9928 -17.7322 29.0165L7.0165 4.26777C7.99281 3.29146 7.99282 1.70854 7.0165 0.732233C6.04019 -0.244078 4.45728 -0.244077 3.48097 0.732233L-21.2678 25.481ZM7.01641 25.481C6.0401 26.4573 6.0401 28.0402 7.01641 29.0165C7.99272 29.9928 9.57564 29.9928 10.5519 29.0165L35.3007 4.26777C36.277 3.29146 36.277 1.70854 35.3007 0.732233C34.3244 -0.244078 32.7415 -0.244077 31.7651 0.732233L7.01641 25.481ZM35.3006 29.0165C34.3243 28.0402 34.3243 26.4573 35.3006 25.481L60.0493 0.732233C61.0256 -0.244077 62.6086 -0.244078 63.5849 0.732233C64.5612 1.70854 64.5612 3.29146 63.5849 4.26777L38.8361 29.0165C37.8598 29.9928 36.2769 29.9928 35.3006 29.0165ZM63.5848 25.481C62.6085 26.4573 62.6085 28.0402 63.5848 29.0165C64.5611 29.9928 66.144 29.9928 67.1203 29.0165L91.869 4.26777C92.8454 3.29146 92.8454 1.70854 91.869 0.732233C90.8927 -0.244078 89.3098 -0.244077 88.3335 0.732233L63.5848 25.481ZM91.8689 29.0165C90.8926 28.0402 90.8926 26.4573 91.8689 25.481L116.618 0.732233C117.594 -0.244077 119.177 -0.244078 120.153 0.732233C121.13 1.70854 121.13 3.29146 120.153 4.26777L95.4045 29.0165C94.4282 29.9928 92.8453 29.9928 91.8689 29.0165ZM120.153 25.481C119.177 26.4573 119.177 28.0402 120.153 29.0165C121.129 29.9928 122.712 29.9928 123.689 29.0165L148.437 4.26777C149.414 3.29146 149.414 1.70854 148.437 0.732233C147.461 -0.244078 145.878 -0.244077 144.902 0.732233L120.153 25.481ZM148.437 29.0165C147.461 28.0402 147.461 26.4573 148.437 25.481L173.186 0.732233C174.162 -0.244077 175.745 -0.244078 176.722 0.732233C177.698 1.70854 177.698 3.29146 176.722 4.26777L151.973 29.0165C150.997 29.9928 149.414 29.9928 148.437 29.0165ZM176.721 25.481C175.745 26.4573 175.745 28.0402 176.721 29.0165C177.698 29.9928 179.281 29.9928 180.257 29.0165L205.006 4.26777C205.982 3.29146 205.982 1.70854 205.006 0.732233C204.029 -0.244078 202.447 -0.244077 201.47 0.732233L176.721 25.481ZM205.006 29.0165C204.029 28.0402 204.029 26.4573 205.006 25.481L229.754 0.732233C230.731 -0.244077 232.314 -0.244078 233.29 0.732233C234.266 1.70854 234.266 3.29146 233.29 4.26777L208.541 29.0165C207.565 29.9928 205.982 29.9928 205.006 29.0165ZM233.29 25.481C232.314 26.4573 232.314 28.0402 233.29 29.0165C234.266 29.9928 235.849 29.9928 236.825 29.0165L261.574 4.26777C262.55 3.29146 262.55 1.70854 261.574 0.732233C260.598 -0.244078 259.015 -0.244077 258.039 0.732233L233.29 25.481Z"
//               fill="white"
//             ></path>
//           </svg>
//         </div>

//         <div className="container mx-auto px-4 py-24 md:py-16 max-w-[65rem]">
//           {/* Header */}
//           <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
//             <div>
//               <div className="relative mb-4">
//                 <svg className="w-9 h-6" viewBox="0 0 36 26" fill="none">
//                   <path d="M22.5 0L36 23H9L22.5 0Z" fill="white" />
//                 </svg>
//                 <span className=" text-base font-bold">WORK PROCESS</span>
//               </div>
//               <h2 className="text-4xl font-bold text-white mb-4">
//                 Our Services That We Provide
//               </h2>
//             </div>
//             <div className="relative">
//               <img
//                 src="https://demo.themagnifico.net/construction-demolition-services/wp-content/themes/construction-demolition-services-pro/assets/images/workp-process/work-process.png"
//                 alt="Construction Vehicle"
//                 className="w-full"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Bottom Wave Pattern */}
//         {/* <div className="absolute bottom-0 left-0 w-full">
//         <svg className="w-full" viewBox="0 0 245 33" fill="none">
//           <path
//             d="M2 30.5C2 30.5 11.5871 2 31.5 2C51.4129 2 61.5871 30.5 81.5 30.5C101.413 30.5 111.587 2 131.5 2C151.413 2 161.587 30.5 181.5 30.5C201.413 30.5 198.5 2 231.5 2C264.5 2 292 20 292 20"
//             stroke="#FF5F15"
//             strokeWidth="4"
//             strokeLinecap="round"
//           />
//         </svg>
//       </div> */}
//       </section>
//       {/* process steps */}
//       <div className="  relative z-40 ">
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center rounded-full">
//           {processSteps.map((step, index) => (
//             <div
//               key={index}
//               className={`${index === 1 ? "mt-3" : ""} ${
//                 index === 2 ? "mt-8" : ""
//               } ${index === 3 ? "mt-12" : ""}`}
//             >
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.2 }}
//                 className="bg-white w-60 lg:w-full rounded-full p-8 text-center relative flex flex-col justify-center items-center hover:border hover:border-black"
//               >
//                 <div className="text-[#FF5F15] font-bold mb-4 text-sm bg-orange-100 rounded-3xl w-20 py-1">
//                   {step.step}
//                 </div>
//                 <h5 className="text-sm font-bold mb-2">{step.title}</h5>
//                 <p className="text-gray-600 text-sm">{step.description}</p>
//               </motion.div>
//             </div>
//           ))}
//         </div>

//         {/* Stats */}
//         <div ref={ref} className="grid md:grid-cols-4 gap-8 mt-20">
//           {stats.map((stat, index) => (
//             <motion.div
//               key={index}
//               className="text-center text-blue-950"
//               initial={{ opacity: 0 }}
//               animate={controls}
//               variants={{
//                 visible: { opacity: 1 },
//                 hidden: { opacity: 0 },
//               }}
//               transition={{ duration: 0.5, delay: index * 0.2 }}
//             >
//               <motion.div
//                 className="text-6xl font-bold mb-2"
//                 initial={{ scale: 0.5 }}
//                 animate={{ scale: 1 }}
//                 transition={{ duration: 0.5, delay: index * 0.2 }}
//               >
//                 {stat.value}
//                 {stat.suffix}
//               </motion.div>
//               <div className="text-lg">{stat.label}</div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }
"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const processSteps = [
  {
    step: "1 Step",
    title: "Meet and Consult About Project",
    description:
      "We craft unique digital experiences. With more years of expertise, we design.",
  },
  {
    step: "2 Step",
    title: "Product Design and Planning",
    description:
      "We craft unique digital experiences. With more years of expertise, we design.",
  },
  {
    step: "3 Step",
    title: "Testing and Quality Control",
    description:
      "We craft unique digital experiences. With more years of expertise, we design.",
  },
  {
    step: "4 Step",
    title: "Final Assembly and Project Handover",
    description:
      "We craft unique digital experiences. With more years of expertise, we design.",
  },
];

const stats = [
  { value: 98, suffix: "%", label: "Customers Satisfied" },
  { value: 10, suffix: "M", label: "Special Machinery" },
  { value: 20, suffix: "+", label: "Years in Business" },
  { value: 26, suffix: "k+", label: "Projects Completed" },
];

export default function Workprocess() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <div className="relative">
      <section className="relative bg-[#FF5F15] overflow-hidden">
        {/* Top Wave Pattern */}
        <div className="absolute top-10 left-0 w-full">
          <svg
            width="200"
            height="30"
            viewBox="0 0 263 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-21.2678 25.481C-22.2441 26.4573 -22.2441 28.0402 -21.2678 29.0165C-20.2915 29.9928 -18.7085 29.9928 -17.7322 29.0165L7.0165 4.26777C7.99281 3.29146 7.99282 1.70854 7.0165 0.732233C6.04019 -0.244078 4.45728 -0.244077 3.48097 0.732233L-21.2678 25.481ZM7.01641 25.481C6.0401 26.4573 6.0401 28.0402 7.01641 29.0165C7.99272 29.9928 9.57564 29.9928 10.5519 29.0165L35.3007 4.26777C36.277 3.29146 36.277 1.70854 35.3007 0.732233C34.3244 -0.244078 32.7415 -0.244077 31.7651 0.732233L7.01641 25.481ZM35.3006 29.0165C34.3243 28.0402 34.3243 26.4573 35.3006 25.481L60.0493 0.732233C61.0256 -0.244077 62.6086 -0.244078 63.5849 0.732233C64.5612 1.70854 64.5612 3.29146 63.5849 4.26777L38.8361 29.0165C37.8598 29.9928 36.2769 29.9928 35.3006 29.0165ZM63.5848 25.481C62.6085 26.4573 62.6085 28.0402 63.5848 29.0165C64.5611 29.9928 66.144 29.9928 67.1203 29.0165L91.869 4.26777C92.8454 3.29146 92.8454 1.70854 91.869 0.732233C90.8927 -0.244078 89.3098 -0.244077 88.3335 0.732233L63.5848 25.481ZM91.8689 29.0165C90.8926 28.0402 90.8926 26.4573 91.8689 25.481L116.618 0.732233C117.594 -0.244077 119.177 -0.244078 120.153 0.732233C121.13 1.70854 121.13 3.29146 120.153 4.26777L95.4045 29.0165C94.4282 29.9928 92.8453 29.9928 91.8689 29.0165ZM120.153 25.481C119.177 26.4573 119.177 28.0402 120.153 29.0165C121.129 29.9928 122.712 29.9928 123.689 29.0165L148.437 4.26777C149.414 3.29146 149.414 1.70854 148.437 0.732233C147.461 -0.244078 145.878 -0.244077 144.902 0.732233L120.153 25.481ZM148.437 29.0165C147.461 28.0402 147.461 26.4573 148.437 25.481L173.186 0.732233C174.162 -0.244077 175.745 -0.244078 176.722 0.732233C177.698 1.70854 177.698 3.29146 176.722 4.26777L151.973 29.0165C150.997 29.9928 149.414 29.9928 148.437 29.0165ZM176.721 25.481C175.745 26.4573 175.745 28.0402 176.721 29.0165C177.698 29.9928 179.281 29.9928 180.257 29.0165L205.006 4.26777C205.982 3.29146 205.982 1.70854 205.006 0.732233C204.029 -0.244078 202.447 -0.244077 201.47 0.732233L176.721 25.481ZM205.006 29.0165C204.029 28.0402 204.029 26.4573 205.006 25.481L229.754 0.732233C230.731 -0.244077 232.314 -0.244078 233.29 0.732233C234.266 1.70854 234.266 3.29146 233.29 4.26777L208.541 29.0165C207.565 29.9928 205.982 29.9928 205.006 29.0165ZM233.29 25.481C232.314 26.4573 232.314 28.0402 233.29 29.0165C234.266 29.9928 235.849 29.9928 236.825 29.0165L261.574 4.26777C262.55 3.29146 262.55 1.70854 261.574 0.732233C260.598 -0.244078 259.015 -0.244077 258.039 0.732233L233.29 25.481Z"
              fill="white"
            ></path>
          </svg>
        </div>

        <div className="container mx-auto px-4 py-24 md:py-16 max-w-[65rem]">
          {/* Header */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
            <div>
              <div className="relative mb-4">
                <svg className="w-9 h-6" viewBox="0 0 36 26" fill="none">
                  <path d="M22.5 0L36 23H9L22.5 0Z" fill="white" />
                </svg>
                <span className="text-base font-bold">WORK PROCESS</span>
              </div>
              <h2 className="text-4xl font-bold text-white mb-4">
                Our Services That We Provide
              </h2>
            </div>
            <div className="relative">
              <img
                src="https://demo.themagnifico.net/construction-demolition-services/wp-content/themes/construction-demolition-services-pro/assets/images/workp-process/work-process.png"
                alt="Construction Vehicle"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process steps */}
      <div className="relative z-10 -mt-32">
        <div className="container mx-auto px-4 max-w-[65rem]">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`${index === 1 ? "mt-3" : ""} ${
                  index === 2 ? "mt-8" : ""
                } ${index === 3 ? "mt-12" : ""}`}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-white w-60 lg:w-full rounded-full p-8 text-center relative flex flex-col justify-center items-center hover:border hover:border-black shadow-md shadow-orange-400 cursor-pointer "
                >
                  <div className="text-[#FF5F15] font-bold mb-4 text-sm bg-orange-100 rounded-3xl w-20 py-1">
                    {step.step}
                  </div>
                  <h5 className="text-sm font-bold mb-2">{step.title}</h5>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute right-14 top-1/2 transform -translate-y-1/2 hidden lg:block">
          <svg
            width="52"
            height="165"
            viewBox="0 0 52 165"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Top Arrow */}
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M25.9808 0L0 45H51.9615L25.9808 0ZM25.9808 8L6.9282 41H45.0333L25.9808 8Z"
              fill="#002258"
            />
            {/* Middle Arrow */}
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M25.9808 60L0 105H51.9615L25.9808 60ZM25.9808 68L6.9282 101H45.0333L25.9808 68Z"
              fill="#002258"
            />
            {/* Bottom Arrow */}
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M25.9808 120L51.9615 165H0L25.9808 120ZM6.9282 161L25.9808 128L45.0333 161H6.9282Z"
              fill="#002258"
            />
          </svg>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-white pt-32 pb-16 relative">
        {/* Left Corner SVG */}

        <div className="container mx-auto px-4 max-w-[65rem]">
          <div ref={ref} className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center text-blue-950 p-6 rounded-lg"
                initial={{ opacity: 0 }}
                animate={controls}
                variants={{
                  visible: { opacity: 1 },
                  hidden: { opacity: 0 },
                }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <motion.div
                  className="text-6xl font-bold mb-2 text-transparent bg-clip-text bg-white"
                  style={{ WebkitTextStroke: "1px #1E3A8A" }}
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  {stat.value}
                  {stat.suffix}
                </motion.div>
                <div className="text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
