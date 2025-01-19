// const Navbar = () => {
//   const menuItems = [
//     {
//       name: "Home",
//       link: "https://demo.themagnifico.net/construction-demolition-services/",
//     },
//     {
//       name: "Blog",
//       link: "https://demo.themagnifico.net/construction-demolition-services/blog/",
//     },
//     {
//       name: "Page",
//       link: "https://demo.themagnifico.net/construction-demolition-services/page/",
//     },
//     {
//       name: "Contact",
//       link: "https://demo.themagnifico.net/construction-demolition-services/contact/",
//     },
//     {
//       name: "Projects",
//       link: "https://demo.themagnifico.net/construction-demolition-services/projects/",
//     },
//     {
//       name: "Buy Now",
//       link: "https://demo.themagnifico.net/construction-demolition-services/projects/",
//     },
//   ];

//   return (
//     <nav className="relative">
//       <div
//         className="container mx-auto flex justify-between items-center h-16 border-b-2 border-black  bg-white w-[57rem]"
//         style={{ clipPath: "polygon(0 0, 100% 0%, 95% 100%, 6% 100%)" }}
//       >
//         <ul className="flex justify-center items-center py-2 px-[12rem] space-x-4">
//           {menuItems.map((item) => (
//             <li key={item.name} className="relative group">
//               <a
//                 href={item.link}
//                 className={`px-4 py-7 text-sm font-semibold hover:text-orange-500 transition-colors duration-700 relative ${
//                   item.name === "Buy Now"
//                     ? "bg-[#09316F] text-white"
//                     : "text-black"
//                 }`}
//               >
//                 {item.name}
//                 <span className="absolute bottom-2 left-0 w-full h-0.5 bg-orange-600 transform origin-left scale-x-0 transition-transform duration-700 ease-out group-hover:scale-x-100"></span>
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaPhone } from "react-icons/fa";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = ["Home", "About Us", "Services", "Projects", "Contact Us"];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      <section className="bg-orange-600 ">
        <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center max-w-7xl">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <div className="flex items-center justify-center bg-[#09316F] h-10 w-10 md:h-12 md:w-12">
              <FaPhone size={16} className="text-white" />
            </div>
            <div>
              <p className="text-white text-sm md:text-base font-medium">
                Call us any time
              </p>
              <span className="text-white text-sm md:text-base font-bold">
                +91 1234567890
              </span>
            </div>
          </div>
          <div className="text-center py-4 px-8 md:py-6 md:px-20 mb-4 md:mt-4 bg-[#09316F] transition-clip-path duration-300 ease-in-out md:clip-path-[polygon(0_0,100%_0%,88%_100%,12%_100%)]">
            <img
              src="https://demo.themagnifico.net/construction-demolition-services/wp-content/themes/construction-demolition-services-pro/assets/images/logo.png"
              alt="logo"
              className="h-14 md:h-10 mx-auto"
            />
          </div>
          <div className="hidden md:block">
            <button className="bg-[#09316F] text-white px-6 py-2 md:px-10 md:py-4 text-sm md:text-base hover:bg-white hover:text-orange-600 font-bold transition duration-700">
              Get In Touch
            </button>
          </div>
        </div>
      </section>
      <nav className="bg-orange-600 text-white md:text-black md:bg-white shadow-md relative z-20 md:py-3">
        <div className="container mx-auto px-4 py-2 flex justify-between md:justify-center items-center">
          <div className="md:hidden flex items-center space-x-2 justify-between w-full">
            <button className="bg-blue-950 text-white px-6 py-4 text-sm hover:bg-white hover:text-orange-600 font-bold transition duration-700">
              Get In Touch
            </button>
            <button
              className="focus:outline-none bg-blue-950 py-2 px-3"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
            </button>
          </div>
          <div
            className={`w-full md:w-auto fixed md:relative inset-0 md:inset-auto bg-orange-600 md:bg-transparent z-20 md:clip-path-[polygon(0_0,100%_0%,95%_100%,5%_100%)] md:transition-clip-path duration-700 ease-in-out transform ${
              isMenuOpen ? "-translate-x-0" : "translate-x-full"
            } transition-transform duration-700 ease-in-out md:transform-none md:block`}
          >
            <div className="flex justify-end md:hidden pt-4 pr-4">
              <button
                className="text-white bg-blue-950 px-2 py-2 focus:outline-none p-4"
                onClick={toggleMenu}
              >
                <FaTimes size={30} />
              </button>
            </div>
            <ul className="flex flex-col md:flex-row md:items-center md:justify-center md:space-x-8 h-full justify-center items-center">
              {navItems.map((item, index) => (
                <li key={index} className="py-2 md:py-0 group">
                  <a
                    href="#"
                    className="block text-center text-black md:text-gray-800 hover:text-orange-600 font-medium transition duration-300 px-4 md:px-0 relative"
                    onClick={closeMenu}
                  >
                    {item}
                    <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-transparent z-10"
            onClick={closeMenu}
          ></div>
        )}
      </nav>
    </div>
  );
}
