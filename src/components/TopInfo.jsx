import { FaPhone } from "react-icons/fa";

export default function TopInfo() {
  return (
    <section className="bg-orange-600 ">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center gap-4 mb-4 md:mb-0">
          <div className="flex items-center justify-center bg-[#09316F] h-10 w-10 md:h-12 md:w-12 rounded-full">
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
        <div
          className="bg-[#09316F] text-center py-4 px-8 md:py-6 md:px-20  mb-4 md:mb-0"
          style={{ clipPath: "polygon(0 0, 100% 0%, 88% 100%, 12% 100%)" }}
        >
          <img
            src="https://demo.themagnifico.net/construction-demolition-services/wp-content/themes/construction-demolition-services-pro/assets/images/logo.png"
            alt="logo"
            className="h-8 md:h-10 mx-auto"
          />
        </div>
        <div>
          <button className="bg-[#09316F] text-white px-6 py-2 md:px-10 md:py-4 text-sm md:text-base hover:bg-white hover:text-orange-600 font-bold transition duration-700">
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
}
