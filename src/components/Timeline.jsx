"use client";

import { motion } from "framer-motion";

import { FaPlus, FaCheck } from "react-icons/fa";

const timelineData = [
  {
    year: "2022",
    content: [
      "Major milestone reached as The Success Story continues",
      "We won a national award in Emerging Technology category",
      "Our team has grown to 25+ members",
    ],
    image: "/placeholder.svg?height=80&width=80",
    position: "left",
    icon: "plus",
  },
  {
    year: "2021",
    content: [
      "Started our 'Vision' and reached key milestones in growth",
      "Services lineup of Design, UX design solutions were set up and delivered quality solutions to our clients",
    ],
    image: "/placeholder.svg?height=80&width=80",
    position: "right",
    icon: "check",
  },
  {
    year: "2020",
    content: [
      "Ridl scaled our CSR Goals & hit milestones",
      "Our team grew stronger with talented minds joining us",
    ],
    image: "/placeholder.svg?height=80&width=80",
    position: "left",
    icon: "plus",
  },
  {
    year: "2017-18",
    content: [
      "Major tech-oriented Discovery Work kicked off",
      "Our services expanded across multiple domains",
    ],
    image: "/placeholder.svg?height=80&width=80",
    position: "right",
    icon: "check",
  },
  {
    year: "2015-16",
    content: [
      "We expanded our horizons to design solutions",
      "Started to serve startups & crucial step toward tech innovation",
    ],
    image: "/placeholder.svg?height=80&width=80",
    position: "left",
    icon: "plus",
  },
  {
    year: "2013-14",
    content: [
      "Collaboration started with major clients",
      "We set up our first office and began building the foundation",
    ],
    image: "/placeholder.svg?height=80&width=80",
    position: "right",
    icon: "check",
  },
  {
    year: "2010",
    content: [
      "Growing ideas and their dreams since beginning",
      "Started to work for startups and small clients",
    ],
    image: "/placeholder.svg?height=80&width=80",
    position: "left",
    icon: "plus",
  },
];

export default function Timeline() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <div className="flex items-center justify-center gap-2 mb-4">
          <img
            src="/placeholder.svg?height=40&width=100"
            alt="ridl logo"
            width={100}
            height={40}
            className="h-10 object-contain"
          />
          <h1 className="text-3xl font-bold">Timeline</h1>
        </div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We have a team of diverse, passionate people who foster a culture that
          empowers you to do your best work.
        </p>
      </motion.div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-px w-0.5 h-full bg-[#ff3366]" />

        {timelineData.map((event, index) => (
          <motion.div
            key={event.year}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`relative flex items-center justify-between mb-20 ${
              event.position === "left" ? "flex-row" : "flex-row-reverse"
            }`}
          >
            {/* Content */}
            <div
              className={`w-[45%] ${
                event.position === "left" ? "pr-12" : "pl-12"
              }`}
            >
              <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                <div
                  className={`flex items-center ${
                    event.position === "left" ? "justify-start" : "justify-end"
                  } mb-4`}
                >
                  {event.position === "left" ? (
                    <>
                      <img
                        src={event.image || "/placeholder.svg"}
                        alt={`Timeline event ${event.year}`}
                        width={80}
                        height={80}
                        className="rounded-lg"
                      />
                      <h3 className="text-2xl font-bold text-[#ff3366] ml-4">
                        {event.year}
                      </h3>
                    </>
                  ) : (
                    <>
                      <img
                        src={event.image || "/placeholder.svg"}
                        alt={`Timeline event ${event.year}`}
                        width={80}
                        height={80}
                        className="rounded-lg"
                      />
                      <h3 className="text-2xl font-bold text-[#ff3366] ml-4">
                        {event.year}
                      </h3>
                    </>
                  )}
                </div>
                <div
                  className={`h-0.5 w-full bg-gradient-to-r ${
                    event.position === "left"
                      ? "from-[#ff3366] to-[#ff3366]/0"
                      : "from-[#ff3366]/0 to-[#ff3366]"
                  }`}
                />
                <div
                  className={`space-y-2 text-sm text-gray-600 mt-4 ${
                    event.position === "left" ? "text-left" : "text-right"
                  }`}
                >
                  {event.content.map((text, i) => (
                    <p key={i}>{text}</p>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Timeline node */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <motion.div
                whileHover={{ scale: 1.2 }}
                className={`w-8 h-8 rounded-full flex items-center justify-center
                  ${event.icon === "plus" ? "bg-[#ff3366]" : "bg-green-500"}`}
              >
                {event.icon === "plus" ? (
                  <FaPlus className="w-5 h-5 text-white" />
                ) : (
                  <FaCheck className="w-5 h-5 text-white" />
                )}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
