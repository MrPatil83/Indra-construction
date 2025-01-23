// import PropTypes from "prop-types";
// import { useState } from "react";
// import { motion } from "framer-motion";
// import { FaArrowRightLong } from "react-icons/fa6";

// const services = [
//   {
//     icon: "https://demo.themagnifico.net/construction-demolition-services/wp-content/themes/construction-demolition-services-pro/assets/images/services/service-icon1.png",
//     title: "Structural Repair",
//     description:
//       "Indra Constructions specializes in structural repairs, including joint treatment, polymer treatment, jacketing, and micro concrete work, ensuring long-lasting durability and safety for your property.",
//   },
//   {
//     icon: "https://demo.themagnifico.net/construction-demolition-services/wp-content/themes/construction-demolition-services-pro/assets/images/services/service-icon2.png",
//     title: "Repair & Maintenance",
//     description:
//       "Indra Constructions specializes in plaster work, waterproofing, chemical coating, tiling, marble work, water tank repairs, and plumbing services, delivering high-quality, durable solutions for your property.",
//   },
//   {
//     icon: "https://demo.themagnifico.net/construction-demolition-services/wp-content/themes/construction-demolition-services-pro/assets/images/services/service-icon4.png",
//     title: "Painting Work",
//     description:
//       "Indra Constructions excels in crack filling, external elastomeric, texture, and acrylic painting, plus internal acrylic, luster, and oil bond finishes. We also provide enamel painting for window grills and gates, ensuring durable, quality results.",
//   },
//   {
//     icon: "https://demo.themagnifico.net/construction-demolition-services/wp-content/themes/construction-demolition-services-pro/assets/images/services/service-icon5.png",
//     title: "Flooring Work",
//     description:
//       "Indra Constructions specializes in compound flooring solutions, including concrete work, checkered tiles, paver blocks, chamber repairs, and drainage maintenance. Quality services for lasting results.",
//   },
//   {
//     icon: "https://cdn.iconscout.com/icon/premium/png-256-thumb/interior-design-3379650-2807549.png",
//     title: "Interior Designing Work",
//     description:
//       "Indra Constructions offers expert interior design services, including space planning, décor, and custom furniture, enhancing the functionality and style of your space.",
//   },
// ];

// export default function ServiceCards() {
//   return (
//     <div
//       className="min-h-screen bg-[#0A2472] bg-cover bg-center py-20"
//       style={{ backgroundImage: 'url("/images/service-bg.png")' }}
//     >
//       <div className="container mx-auto px-4">
//         <motion.div
//           className="max-w-2xl mb-16"
//           initial={{ y: 50, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//         >
//           <p className="text-4xl md:text-5xl font-bold text-[#FF5722] mb-6">
//             Repair and
//             <br />
//             <span className=" text-white">Restoration Services</span>
//           </p>
//           <p className="text-blue-200">
//             Indra Constructions offers expert building and maintenance services,
//             specializing in residential, commercial, and industrial projects.
//             From renovations to full-scale building upkeep, we provide tailored
//             solutions for every structure, ensuring top-tier quality and
//             longevity. Trust our versatile expertise for efficient, aesthetic
//             transformations that meet diverse client needs.
//           </p>
//         </motion.div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {services.map((service, index) => (
//             <ServiceCard key={index} {...service} index={index} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// function ServiceCard({ icon, title, description, index }) {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <motion.div
//       className="relative group bg-[#051747] hover:bg-white transition-all duration-300 p-8 rounded-lg overflow-hidden"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       initial={{ y: 50, opacity: 0 }}
//       whileInView={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.5, delay: index * 0.1 }}
//       viewport={{ once: true }}
//     >
//       <div className="absolute top-0 right-0 w-24 h-24 opacity-20">
//         <div className="absolute inset-0">
//           {Array.from({ length: 5 }).map((_, i) => (
//             <div
//               key={i}
//               className="absolute right-0 h-px w-12 bg-white group-hover:bg-gray-400"
//               style={{
//                 top: `${i * 6}px`,
//                 transform: "rotate(-45deg)",
//                 transformOrigin: "right",
//               }}
//             />
//           ))}
//         </div>
//       </div>
//       <div className="relative z-10 space-y-6">
//         <div className="text-white group-hover:text-orange-600">
//           <img
//             src={icon || "/placeholder.svg"}
//             alt={title}
//             className="w-12 h-12"
//           />
//         </div>
//         <h3 className="text-2xl font-bold text-orange-600 group-hover:text-gray-900">
//           {title}
//         </h3>
//         <p className="text-blue-200 group-hover:text-gray-600">{description}</p>
//         <div className="relative h-12">
//           <motion.div
//             className="absolute inset-0"
//             initial={false}
//             animate={{ opacity: isHovered ? 0 : 1, x: isHovered ? 16 : 0 }}
//           >
//             <div className="w-12 h-12 bg-[#09316F] flex items-center justify-center">
//               <FaArrowRightLong className="w-6 h-6 text-white" />
//             </div>
//           </motion.div>
//           <motion.div
//             className="absolute inset-0"
//             initial={false}
//             animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -16 }}
//           >
//             <button className="px-6 py-3 bg-orange-600 text-white hover:bg-orange-700 transition-colors">
//               Get In Touch
//             </button>
//           </motion.div>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// ServiceCard.propTypes = {
//   icon: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   index: PropTypes.number.isRequired,
// };
import { useState } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types"; // Import PropTypes

const services = [
  {
    icon: "https://demo.themagnifico.net/construction-demolition-services/wp-content/themes/construction-demolition-services-pro/assets/images/services/service-icon1.png",
    title: "Structural Repair",
    description:
      "Indra Constructions specializes in structural repairs, including joint treatment, polymer treatment, jacketing, and micro concrete work, ensuring long-lasting durability and safety for your property.",
  },
  {
    icon: "https://demo.themagnifico.net/construction-demolition-services/wp-content/themes/construction-demolition-services-pro/assets/images/services/service-icon2.png",
    title: "Repair & Maintenance",
    description:
      "Indra Constructions specializes in plaster work, waterproofing, chemical coating, tiling, marble work, water tank repairs, and plumbing services, delivering high-quality, durable solutions for your property.",
  },
  {
    icon: "https://demo.themagnifico.net/construction-demolition-services/wp-content/themes/construction-demolition-services-pro/assets/images/services/service-icon4.png",
    title: "Painting Work",
    description:
      "Indra Constructions excels in crack filling, external elastomeric, texture, and acrylic painting, plus internal acrylic, luster, and oil bond finishes. We also provide enamel painting for window grills and gates, ensuring durable, quality results.",
  },
  {
    icon: "https://demo.themagnifico.net/construction-demolition-services/wp-content/themes/construction-demolition-services-pro/assets/images/services/service-icon5.png",
    title: "Flooring Work",
    description:
      "Indra Constructions specializes in compound flooring solutions, including concrete work, checkered tiles, paver blocks, chamber repairs, and drainage maintenance. Quality services for lasting results.",
  },
  {
    icon: "https://cdn.iconscout.com/icon/premium/png-256-thumb/interior-design-3379650-2807549.png",
    title: "Interior Designing Work",
    description:
      "Indra Constructions offers expert interior design services, including space planning, décor, and custom furniture, enhancing the functionality and style of your space.",
  },
];

export default function ServiceCards() {
  return (
    <div
      className="min-h-screen bg-[#0A2472] bg-cover bg-center py-20"
      style={{ backgroundImage: 'url("/images/service-bg.png")' }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-2xl mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-4xl md:text-5xl font-bold text-[#FF5722] mb-6">
            Repair and
            <br />
            <span className=" text-white">Restoration Services</span>
          </p>
          <p className="text-blue-200">
            Indra Constructions offers expert building and maintenance services,
            specializing in residential, commercial, and industrial projects.
            From renovations to full-scale building upkeep, we provide tailored
            solutions for every structure, ensuring top-tier quality and
            longevity. Trust our versatile expertise for efficient, aesthetic
            transformations that meet diverse client needs.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ icon, title, description, index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative group bg-[#051747] hover:bg-white transition-all duration-300 p-8 rounded-lg overflow-hidden shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="absolute top-0 right-0 w-24 h-24 opacity-30">
        <div className="absolute inset-0">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="absolute right-0 h-px w-12 bg-white group-hover:bg-orange-600"
              style={{
                top: `${i * 6}px`,
                transform: "rotate(-45deg)",
                transformOrigin: "right",
              }}
            />
          ))}
        </div>
      </div>
      <div className="relative z-10 space-y-6">
        <motion.div
          animate={{
            filter: isHovered
              ? "invert(48%) sepia(79%) saturate(2476%) hue-rotate(346deg) brightness(118%) contrast(119%)"
              : "none",
          }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={icon || "/placeholder.svg"}
            alt={title}
            className="w-12 h-12"
          />
        </motion.div>
        <h3 className="text-2xl font-bold text-orange-600 group-hover:text-gray-900">
          {title}
        </h3>
        <p className="text-blue-200 group-hover:text-gray-600 transition duration-300">
          {description}
        </p>
        <div className="relative h-12">
          <motion.div
            className="absolute inset-0"
            initial={false}
            animate={{ opacity: isHovered ? 0 : 1, x: isHovered ? 16 : 0 }}
          >
            <div className="w-12 h-12 bg-[#09316F] flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </motion.div>
          <motion.div
            className="absolute inset-0"
            initial={false}
            animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -16 }}
          >
            <button className="px-6 py-3 bg-orange-600 text-white hover:bg-orange-700 transition-colors">
              Get In Touch
            </button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

ServiceCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
