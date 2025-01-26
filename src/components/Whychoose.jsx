import { motion } from "framer-motion";
import Workprocess from "./Workprocess";
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
    <>
      <section className="relative bg-[#09316f] text-white py-2 md:py-0 m-auto overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl ">
          {/* Outlined Heading */}
          <div className="relative text-center pb-12">
            {/* Border-only text */}
            <div
              className=" text-[2.5rem] md:text-[4rem] lg:text-[6rem] xl:text-[8vw] font-bold text-transparent tracking-wide"
              style={{
                WebkitTextStroke: "2px #1a4280", // White border
              }}
            >
              WHY CHOOSE US
            </div>
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
            <span className=" text-xl font-semibold">WHY CHOOSE US</span>
            <p className="text-2xl md:text-5xl font-bold mb-4 text-[#FF4A17]">
              High Quality Innovate Design
            </p>
            <p className="text-[17px] max-w-3xl mx-auto text-gray-300 font-semibold">
              We craft unique digital experiences. With more than 7 years of
              expertise we design and code clean websites.
            </p>
          </div>

          {/* Features and Image */}
          <div className="flex flex-wrap justify-between items-center m-auto">
            {/* Left Features */}
            <div className="w-full lg:w-4/12 space-y-12">
              {leftFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="flex items-center gap-6 flex-row-reverse text-end"
                >
                  <div className="bg-white rounded-full p-4 w-24 h-24 flex items-center justify-center shrink-0">
                    <img
                      src={feature.icon || "/placeholder.svg"}
                      alt={feature.title}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold mb-2">{feature.title}</h4>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Center Image */}
            <motion.div
              className="w-full lg:w-[33%]"
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
            <div className="w-full lg:w-4/12 space-y-12">
              {rightFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="flex items-center gap-6"
                >
                  <div className="bg-white rounded-full p-4 w-24 h-24 flex items-center justify-center shrink-0">
                    <img
                      src={feature.icon || "/placeholder.svg"}
                      alt={feature.title}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold mb-2">{feature.title}</h4>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Workprocess />
    </>
  );
}
