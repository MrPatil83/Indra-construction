"use client";

import { useState } from "react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(1); // Second item open by default

  const faqs = [
    {
      question: "What is construction?",
      answer:
        "Et purus duis sollicitudin dignissim ha. Egest nulla quis venenatis cras sed eu massa eu faucibus. Urna fusce aenea tortor pretium Et purus duis sollicitudin dignissim habitant",
    },
    {
      question: "How long does project typically take?",
      answer:
        "Et purus duis sollicitudin dignissim ha. Egest nulla quis venenatis cras sed eu massa eu faucibus. Urna fusce aenea tortor pretium Et purus duis sollicitudin dignissim habitant",
    },
    {
      question: "What different of construction projects?",
      answer:
        "Et purus duis sollicitudin dignissim ha. Egest nulla quis venenatis cras sed eu massa eu faucibus. Urna fusce aenea tortor pretium Et purus duis sollicitudin dignissim habitant",
    },
    {
      question: "What is the role of a construction manager?",
      answer:
        "Et purus duis sollicitudin dignissim ha. Egest nulla quis venenatis cras sed eu massa eu faucibus. Urna fusce aenea tortor pretium Et purus duis sollicitudin dignissim habitant",
    },
  ];

  return (
    <section className="relative bg-[#002B5B] py-10 sm:py-20">
      <div className="absolute top-0 left-0 right-0 text-4xl sm:text-6xl md:text-8xl lg:text-[120px] font-bold leading-none tracking-wider text-transparent bg-clip-text bg-gradient-to-b from-[#003B7B] to-[#003B7B]/0 pointer-events-none">
        FREQUENTLY
        <br />
        ASKED QUESTIONS
      </div>
      <div className="container mx-auto px-4 relative">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="pb-12">
            <div className="relative">
              <div className="mb-6">
                <svg
                  width="36"
                  height="26"
                  viewBox="0 0 36 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22.5 0L36 23H9L22.5 0Z" fill="white" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.5 3C14.3138 3 14.1628 3.14711 14.1628 3.32857V25.6714C14.1628 25.8529 14.3138 26 14.5 26C14.6862 26 14.8372 25.8529 14.8372 25.6714V3.32857C14.8372 3.14711 14.6862 3 14.5 3ZM12.1395 6.28571C11.9533 6.28571 11.8023 6.43281 11.8023 6.61429V25.6714C11.8023 25.8529 11.9533 26 12.1395 26C12.3258 26 12.4767 25.8529 12.4767 25.6714V6.61429C12.4767 6.43281 12.3258 6.28571 12.1395 6.28571ZM9.77907 9.57143C9.59285 9.57143 9.44186 9.71853 9.44186 9.9V25.6714C9.44186 25.8529 9.59285 26 9.77907 26C9.96529 26 10.1163 25.8529 10.1163 25.6714V9.9C10.1163 9.71853 9.96529 9.57143 9.77907 9.57143ZM7.4186 12.8571C7.23238 12.8571 7.0814 13.0042 7.0814 13.1857V25.6714C7.0814 25.8529 7.23238 26 7.4186 26C7.60483 26 7.75581 25.8529 7.75581 25.6714V13.1857C7.75581 13.0042 7.60483 12.8571 7.4186 12.8571ZM5.05814 16.1429C4.87192 16.1429 4.72093 16.29 4.72093 16.4714V25.6714C4.72093 25.8529 4.87192 26 5.05814 26C5.24436 26 5.39535 25.8529 5.39535 25.6714V16.4714C5.39535 16.29 5.24436 16.1429 5.05814 16.1429ZM2.69767 19.4286C2.51145 19.4286 2.36047 19.5757 2.36047 19.7571V25.6714C2.36047 25.8529 2.51145 26 2.69767 26C2.8839 26 3.03488 25.8529 3.03488 25.6714V19.7571C3.03488 19.5757 2.8839 19.4286 2.69767 19.4286ZM0 23.0429C0 22.8614 0.150987 22.7143 0.337209 22.7143C0.523432 22.7143 0.674419 22.8614 0.674419 23.0429V25.6714C0.674419 25.8529 0.523432 26 0.337209 26C0.150987 26 0 25.8529 0 25.6714V23.0429Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="text-white/70 text-sm mb-4">SOME FAQS</div>
              <h3 className="text-[#FF6B33] text-3xl sm:text-4xl font-bold mb-4">
                Creating Structures That Stand Of Time
              </h3>
              <div className="text-white/80 mb-8">
                Et purus duis sollicitudin dignissim habitant. Egestas nulla
                quis venenatis cras sed eu massa eu faucibus. Urna fusce aenean
                tortor pretium. Et purus duis sollicitudin dignissim habitant.
                Egestas
              </div>
              <div>
                <a
                  href="#"
                  className="inline-block bg-[#FF6B33] text-white px-6 py-3 rounded hover:bg-[#FF6B33]/90 transition-colors"
                >
                  Explore Our Company
                </a>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-white rounded-md mb-4 last:mb-0"
                >
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === index ? -1 : index)
                    }
                    className="w-full flex justify-between items-center p-4 text-white text-left"
                  >
                    <span className="font-medium">{faq.question}</span>
                    <span className="text-2xl">
                      {openIndex === index ? "−" : "+"}
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index ? "max-h-40" : "max-h-0"
                    }`}
                  >
                    <p className="text-white/70 px-4 pb-4">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
