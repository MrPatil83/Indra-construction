// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Logo from "../assets/Logo/Logo.webp";

// const navItems = [
//   { name: "Home", href: "/" },
//   { name: "About Us", href: "/about" },
//   {
//     name: "Services",
//     href: "/services",
//     dropdown: [
//       { name: "Service 1", href: "/services/1" },
//       { name: "Service 2", href: "/services/2" },
//       { name: "Service 3", href: "/services/3" },
//     ],
//   },
//   { name: "Projects", href: "/projects" },
//   {
//     name: "Blogs",
//     href: "/blogs",
//     dropdown: [
//       { name: "Blog 1", href: "/blogs/1" },
//       { name: "Blog 2", href: "/blogs/2" },
//       { name: "Blog 3", href: "/blogs/3" },
//     ],
//   },
//   { name: "Careers", href: "/careers" },
// ];

// export default function Navbar() {
//   const [activeDropdown, setActiveDropdown] = useState(null);

//   return (
//     <div
//       id="nav-container"
//       className="w-[100%] m-auto py-4 px-2 h-24 bg-none z-50 relative"
//     >
//       <div
//         className=" bg-white h-20 z-10 m-auto  shadow-black shadow-md"
//         style={{
//           clipPath: "polygon(0 0, 100% 0%, 95% 100%, 6% 100%)",
//           width: "80%",
//         }}
//       ></div>
//       <nav className="absolute top-4 left-0 right-0 overflow-visible bg-none w-[60%] m-auto">
//         <div className="container mx-auto px-4 py-4 flex items-center justify-between">
//           <a href="/" className="text-2xl font-bold text-orange-500">
//             <img
//               src={Logo}
//               alt="Logo"
//               className=" hover:scale-110 transition duration-700"
//             />
//           </a>

//           <ul className="flex space-x-6">
//             {navItems.map((item) => (
//               <li
//                 key={item.name}
//                 className="relative"
//                 onMouseEnter={() =>
//                   item.dropdown && setActiveDropdown(item.name)
//                 }
//                 onMouseLeave={() => setActiveDropdown(null)}
//               >
//                 <a
//                   href={item.href}
//                   className="text-gray-700 hover:text-orange-500"
//                 >
//                   {item.name}
//                 </a>

//                 {item.dropdown && (
//                   <AnimatePresence>
//                     {activeDropdown === item.name && (
//                       <motion.ul
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0, y: 20 }}
//                         transition={{ duration: 0.2 }}
//                         className="absolute left-0 mt-2 w-48 bg-orange-500 rounded-md shadow-lg py-2 z-50"
//                       >
//                         {item.dropdown.map((subItem) => (
//                           <li key={subItem.name}>
//                             <a
//                               href={subItem.href}
//                               className="block px-4 py-2 text-white hover:bg-orange-600"
//                             >
//                               {subItem.name}
//                             </a>
//                           </li>
//                         ))}
//                       </motion.ul>
//                     )}
//                   </AnimatePresence>
//                 )}
//               </li>
//             ))}
//           </ul>

//           <button className="bg-blue-950 text-white px-6 py-2  hover:bg-orange-600 transition duration-700 hover:scale-105">
//             Get in Touch
//           </button>
//         </div>
//       </nav>
//     </div>
//   );
// }
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
// import Logo from "../assets/Logo/Logo.webp";
import whiteLogo from "../assets/Logo/whiteLogo.webp";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  {
    name: "Our Services",
    href: "/services",
    dropdown: [
      { name: "Service 1", href: "/services/1" },
      { name: "Service 2", href: "/services/2" },
      { name: "Service 3", href: "/services/3" },
    ],
  },
  { name: "Our Projects", href: "/projects" },
  {
    name: "Blogs",
    href: "/blogs",
    dropdown: [
      { name: "Blog 1", href: "/blogs/1" },
      { name: "Blog 2", href: "/blogs/2" },
      { name: "Blog 3", href: "/blogs/3" },
    ],
  },
  { name: "Careers", href: "/careers" },
];

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileDropdowns, setMobileDropdowns] = useState({});

  const toggleMobileDropdown = (itemName) => {
    setMobileDropdowns((prevState) => ({
      ...prevState,
      [itemName]: !prevState[itemName],
    }));
  };

  return (
    <div
      id="nav-container"
      className="w-full m-auto py-4 px-2 h-24 z-50 relative"
    >
      {/* Background div for desktop only */}
      <div
        className="hidden lg:block bg-white h-20 z-10 m-auto shadow-black shadow-md"
        style={{
          clipPath: "polygon(0 0, 100% 0%, 95% 100%, 6% 100%)",
          width: "80%",
        }}
      ></div>

      <nav className="absolute top-4 left-0 right-0 overflow-visible w-full lg:w-[70%] m-auto">
        <div className="container mx-auto px-3 md:px-0 md:py-4  flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="text-2xl font-bold text-orange-500">
            <img
              src={whiteLogo}
              alt="Logo"
              className="hover:scale-110  transition duration-700"
            />
          </a>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex space-x-6">
            {navItems.map((item) => (
              <li
                key={item.name}
                className="relative"
                onMouseEnter={() =>
                  item.dropdown && setActiveDropdown(item.name)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  className="text-gray-700 hover:text-orange-500 flex items-center"
                >
                  {item.name}
                  {item.dropdown && <FiChevronDown className="ml-1" />}
                </a>

                {/* Dropdown Menu */}
                {item.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.ul
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 mt-2 w-48 bg-orange-500 rounded-md shadow-lg py-2 z-50"
                      >
                        {item.dropdown.map((subItem) => (
                          <li key={subItem.name}>
                            <a
                              href={subItem.href}
                              className="block px-4 py-2 text-white hover:bg-orange-600"
                            >
                              {subItem.name}
                            </a>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                )}
              </li>
            ))}
          </ul>

          {/* Desktop "Get in Touch" Button */}
          <button className="hidden lg:block bg-blue-950 text-white px-6 py-2 h-12 rounded-sm hover:bg-orange-600 transition duration-700 hover:scale-105">
            Get in Touch
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            className="lg:hidden focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <FaTimes className="h-8 w-8 text-white" />
            ) : (
              <FaBars className="h-8 w-8 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              key="mobileMenu"
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.3 }}
              className="lg:hidden fixed top-0 right-0 w-[80%] h-full bg-white shadow-lg z-50 p-4"
            >
              {/* Close Button and Logo */}
              <div className="flex justify-between items-center mb-8">
                {/* Logo */}
                <a href="/" className="text-2xl font-bold text-orange-500">
                  <img
                    src={whiteLogo}
                    alt="Logo"
                    className=" w-48 hover:scale-110 transition duration-700"
                  />
                </a>
                {/* Close Icon */}
                <button
                  className="focus:outline-none"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <FaTimes className="h-8 w-8" />
                </button>
              </div>

              <ul className="space-y-4">
                {navItems.map((item) => (
                  <li key={item.name} className="relative">
                    <div
                      className="flex justify-between items-center text-gray-700 hover:text-orange-500 text-lg cursor-pointer"
                      onClick={() =>
                        item.dropdown
                          ? toggleMobileDropdown(item.name)
                          : setIsMobileMenuOpen(false)
                      }
                    >
                      <a href={item.href}>{item.name}</a>
                      {item.dropdown && (
                        <FiChevronDown
                          className={`ml-2 transform transition-transform ${
                            mobileDropdowns[item.name] ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </div>

                    {/* Mobile Dropdown */}
                    {item.dropdown && mobileDropdowns[item.name] && (
                      <ul className="mt-2 space-y-2 ml-4">
                        {item.dropdown.map((subItem) => (
                          <li key={subItem.name}>
                            <a
                              href={subItem.href}
                              className="block text-gray-600 hover:text-orange-500"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {subItem.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>

              <button className="mt-6 bg-blue-950 text-white px-6 py-2 hover:bg-orange-600 transition duration-700 hover:scale-105 w-full">
                Get in Touch
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}
