// import React from "react";
import { motion } from "framer-motion";

const Whychoose = () => {
  return (
    <section id="why_choose_us" className="relative">
      <div className="container mx-auto">
        <div className="text-center pb-5">
          <div className="text-2xl font-bold">WHY CHOOSE US</div>
          <div className="flex justify-center">
            <svg
              width="36"
              height="26"
              viewBox="0 0 36 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="text-white"
                d="M22.5 0L36 23H9L22.5 0Z"
                fill="white"
              ></path>
            </svg>
          </div>
          <h3 className="text-xl font-semibold mt-4">
            High Quality Innovative Design
          </h3>
          <p className="mt-2 text-lg">
            We craft unique digital experiences. With more than 7 years of
            expertise we design and code clean websites.
          </p>
        </div>

        <div className="flex flex-wrap justify-between">
          {/* Left Section */}
          <div className="w-full lg:w-4/12 md:w-6/12">
            {[
              {
                title: "Technology",
                imgSrc:
                  "https://demo.themagnifico.net/construction-demolition-services/wp-content/themes/construction-demolition-services-pro/assets/images/why-choose-us/why-choose-us-icon1.png",
                description:
                  "We are expert your all work is very nice waiting for next project.",
              },
              {
                title: "Core Planning",
                imgSrc:
                  "https://demo.themagnifico.net/construction-demolition-services/wp-content/themes/construction-demolition-services-pro/assets/images/why-choose-us/why-choose-us-icon2.png",
                description:
                  "We are expert your all work is very nice waiting for next project.",
              },
              {
                title: "Project Result",
                imgSrc:
                  "https://demo.themagnifico.net/construction-demolition-services/wp-content/themes/construction-demolition-services-pro/assets/images/why-choose-us/why-choose-us-icon3.png",
                description:
                  "We are expert your all work is very nice waiting for next project.",
              },
            ].map((item, index) => (
              <motion.div
                className="mb-4"
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center">
                  <div className="w-1/4">
                    <img
                      src={item.imgSrc}
                      alt={item.title}
                      className="w-full"
                    />
                  </div>
                  <div className="ml-4">
                    <h5 className="text-xl font-semibold">{item.title}</h5>
                    <p>{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Middle Image */}
          <div className="w-full lg:w-4/12 md:w-full">
            <motion.div
              className="relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="https://demo.themagnifico.net/construction-demolition-services/wp-content/themes/construction-demolition-services-pro/assets/images/why-choose-us/why-choose-middle-image.png"
                alt="Middle Image"
                className="w-full"
              />
            </motion.div>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-4/12 md:w-6/12">
            {[
              {
                title: "Trusted Clients",
                imgSrc:
                  "https://demo.themagnifico.net/construction-demolition-services/wp-content/themes/construction-demolition-services-pro/assets/images/why-choose-us/why-choose-us-icon-right1.png",
                description:
                  "Passage of Lorem Ipsum, you need to be sure there isn't anything.",
              },
              {
                title: "Skilled Team",
                imgSrc:
                  "https://demo.themagnifico.net/construction-demolition-services/wp-content/themes/construction-demolition-services-pro/assets/images/why-choose-us/why-choose-us-icon-right2.png",
                description:
                  "Passage of Lorem Ipsum, you need to be sure there isn't anything.",
              },
              {
                title: "Save Money",
                imgSrc:
                  "https://demo.themagnifico.net/construction-demolition-services/wp-content/themes/construction-demolition-services-pro/assets/images/why-choose-us/why-choose-us-icon-right3.png",
                description:
                  "Passage of Lorem Ipsum, you need to be sure there isn't anything.",
              },
            ].map((item, index) => (
              <motion.div
                className="mb-4"
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center">
                  <div className="w-1/4">
                    <img
                      src={item.imgSrc}
                      alt={item.title}
                      className="w-full"
                    />
                  </div>
                  <div className="ml-4">
                    <h5 className="text-xl font-semibold">{item.title}</h5>
                    <p>{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whychoose;
