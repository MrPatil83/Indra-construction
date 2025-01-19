import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderBG from "../assets/slider-bg.png"; // Static background image
import humanBG from "../assets/humanImg.png"; // Human image

const slides = [
  {
    title: "Welcome Our Construction Theme",
    subtitle: "Building Dreams with Precision and Excellence",
    description:
      "We craft unique digital experiences. With more than 7 years of expertise we design and code clean websites.",
    humanImage: humanBG,
  },
  {
    title: "Welcome Our Construction Theme",
    subtitle: "Building Dreams with Precision and Excellence",
    description:
      "We craft unique digital experiences. With more than 7 years of expertise we design and code clean websites.",
    humanImage: humanBG,
  },
  // Add more slides as needed
];

const CustomSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div
      className="relative z-10 -mt-5 max-w-7xl mx-auto px-4 md:clip-path-[polygon(0_0,_100%_0%,_100%_94%,_85%_87%,_0%_95%)] overflow-hidden"
      style={{
        backgroundImage: `url(${sliderBG})`,
      }}
    >
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className="relative flex flex-col md:flex-row items-center justify-between p-8 rounded-md h-[700px] md:h-[600px] w-full bg-cover bg-center"
          >
            {/* Content Container */}
            <div className="relative flex flex-col md:flex-row w-full text-white z-10">
              {/* Left Side (Text and Button) */}
              <div className="flex flex-col justify-center md:w-1/2 text-left z-10 mt-6">
                <h2 className="text-lg md:text-xl text-orange-600 font-bold mb-2">
                  {slide.title}
                </h2>
                <h3 className="text-2xl md:text-4xl font-semibold mb-2">
                  {slide.subtitle}
                </h3>
                <p className="mb-4 font-medium text-sm md:text-lg">
                  {slide.description}
                </p>
                <button className="bg-orange-600 font-bold text-white py-2 px-4 md:py-4 md:px-8 w-full md:w-48 hover:bg-[#09316F] transition duration-700">
                  Get in Touch
                </button>
              </div>

              {/* Right Side (Human Image) */}
              <div className="md:w-1/2 flex justify-center md:justify-end items-center z-10 mt-24 md:mt-44">
                <img
                  src={slide.humanImage}
                  alt="Human Image"
                  className="w-[90%] md:w-[58%] h-auto object-cover rounded-md"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CustomSlider;
