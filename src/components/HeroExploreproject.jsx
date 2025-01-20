import { useState, useCallback } from "react";

const projects = [
  {
    id: 1,
    title: "General Construction",
    category: "Construction",
    date: "Construction Since 6 June 2024",
    image:
      "https://demo.themagnifico.net/construction-demolition-services/wp-content/uploads/sites/124/2024/09/project2.png",
  },
  {
    id: 2,
    title: "Modern Architecture",
    category: "Mechanical",
    date: "Construction Since 12 June 2024",
    image:
      "https://demo.themagnifico.net/construction-demolition-services/wp-content/uploads/sites/124/2024/09/project1.png",
  },
  {
    id: 3,
    title: "Urban Development",
    category: "Construction",
    date: "Construction Since 18 June 2024",
    image:
      "https://demo.themagnifico.net/construction-demolition-services/wp-content/uploads/sites/124/2024/09/project3.png",
  },
];

const categories = ["All", "Construction", "Mechanical", "Consulting"];

export default function HeroExploreproject() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter((project) =>
    activeCategory === "All" ? true : project.category === activeCategory
  );

  const nextSlide = useCallback(() => {
    setActiveIndex((current) =>
      current === filteredProjects.length - 1 ? 0 : current + 1
    );
  }, [filteredProjects.length]);

  const prevSlide = useCallback(() => {
    setActiveIndex((current) =>
      current === 0 ? filteredProjects.length - 1 : current - 1
    );
  }, [filteredProjects.length]);

  const goToSlide = useCallback((index) => {
    setActiveIndex(index);
  }, []);

  return (
    <div className="w-full min-h-screen bg-white px-4 py-16 pt-14">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <img
              src="https://www.indraconstruction.com/wp-content/uploads/2022/08/cropped-web-mono.png"
              alt="logo"
              className="h-8 w-9"
            />
            {/* <div className="w-0 h-0 border-l-[10px] border-l-transparent border-b-[20px] border-b-black border-r-[10px] border-r-transparent" /> */}
          </div>
          <div className="text-orange-500 font-medium mb-4">
            Construction Projects
          </div>
          <h2 className="text-4xl font-bold mb-4">Our Recent Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We craft unique digital experiences. With more than 7 years of
            expertise we design and code clean websites.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeCategory === category
                  ? "bg-orange-500 text-white"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Carousel Section */}
        <div className="relative">
          <div className="overflow-hidden relative h-[600px]">
            <div
              className="flex transition-transform duration-500 ease-out h-full"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="w-full h-full flex-shrink-0 relative"
                >
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                    <div className="absolute bottom-12 left-12 text-white">
                      <span className="flex flex-col md:flex-row px-4 py-2 bg-blue-900 rounded-full w-28 font-bold text-sm mb-4">
                        {project.category}
                      </span>
                      <h3 className="text-4xl font-bold mb-2">
                        {project.title}
                      </h3>
                      <p className="mb-6">{project.date}</p>
                      <button className="bg-orange-500 text-white px-8 py-3 rounded hover:bg-blue-950 transition-colors">
                        Explore Project
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/80 rounded-full hover:bg-white transition-colors"
          >
            <span className="sr-only">Previous</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/80 rounded-full hover:bg-white transition-colors"
          >
            <span className="sr-only">Next</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Dot Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {filteredProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  activeIndex === index ? "bg-orange-500" : "bg-white"
                }`}
              >
                <span className="sr-only">Go to slide {index + 1}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
