// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import sliderBG from "../assets/Hero/CarosuleImages/CarosuleBg.webp"; // Static background image
// import humanBG from "../assets/Hero/CarosuleImages/HumanImg.webp"; // Human image

// const slides = [
//   {
//     title: "Welcome Our Construction Theme",
//     subtitle: "Building Dreams with Precision and Excellence",
//     description:
//       "We craft unique digital experiences. With more than 7 years of expertise we design and code clean websites.",
//     humanImage: humanBG,
//   },
//   {
//     title: "Welcome Our Construction Theme",
//     subtitle: "Building Dreams with Precision and Excellence",
//     description:
//       "We craft unique digital experiences. With more than 7 years of expertise we design and code clean websites.",
//     humanImage: humanBG,
//   },
//   // Add more slides as needed
// ];

// const CustomSlider = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//   };

//   return (
//     <div
//       className="relative z-10 -mt-5 max-w-7xl mx-auto px-4 md:clip-path-[polygon(0_0,_100%_0%,_100%_94%,_85%_87%,_0%_95%)] overflow-hidden"
//       style={{
//         backgroundImage: `url(${sliderBG})`,
//       }}
//     >
//       <Slider {...settings}>
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className="relative flex flex-col md:flex-row items-center justify-between p-8 rounded-md h-[700px] md:h-[600px] w-full bg-cover bg-center"
//           >
//             {/* Content Container */}
//             <div className="relative flex flex-col md:flex-row w-full text-white z-10">
//               {/* Left Side (Text and Button) */}
//               <div className="flex flex-col justify-center md:w-1/2 text-left z-10 mt-6">
//                 <h2 className="text-lg md:text-xl text-orange-600 font-bold mb-2">
//                   {slide.title}
//                 </h2>
//                 <h3 className="text-2xl md:text-4xl font-semibold mb-2">
//                   {slide.subtitle}
//                 </h3>
//                 <p className="mb-4 font-medium text-sm md:text-lg">
//                   {slide.description}
//                 </p>
//                 <button className="bg-orange-600 font-bold text-white py-2 px-4 md:py-4 md:px-8 w-full md:w-48 hover:bg-[#09316F] transition duration-700">
//                   Get in Touch
//                 </button>
//               </div>

//               {/* Right Side (Human Image) */}
//               <div className="md:w-1/2 flex justify-center md:justify-end items-center z-10 mt-24 md:mt-44">
//                 <img
//                   src={slide.humanImage}
//                   alt="Human Image"
//                   className="w-[90%] md:w-[58%] h-auto object-cover rounded-md"
//                 />
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default CustomSlider;
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carosulebg from "../assets/Hero/CarosuleImages/CarosuleBg.webp";
import HumanImg from "../assets/Hero/CarosuleImages/HumanImg.webp";
import { HiArrowNarrowRight, HiArrowNarrowLeft } from "react-icons/hi";

const slideContents = [
  {
    title: "Welcome Our construction Theme",
    subtitle: "Building Dreams with Precision and Excellence",
    description:
      "We craft unique digital experiences. With more than 7 years of expertise, we design and code clean websites.",
  },
  {
    title: "Welcome Our construction Theme",
    subtitle: "Building Dreams with Precision and Excellence",
    description:
      "We craft unique digital experiences. With more than 7 years of expertise, we design and code clean websites.",
  },
  {
    title: "Welcome Our construction Theme",
    subtitle: "Building Dreams with Precision and Excellence",
    description:
      "We craft unique digital experiences. With more than 7 years of expertise, we design and code clean websites.",
  },
  // ... other slides
];

function CustomSlider() {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    customPaging: () => (
      <div
        className="w-3 h-3 bg-gray-800 rounded-full hover:bg-orange-600"
        style={{ display: "inline-block", margin: "0 5px" }}
      ></div>
    ),
  };

  return (
    <div
      className={`relative z-10 -mt-5 max-w-[83rem] mx-auto md:px-4 overflow-hidden h-screen md:h-[43rem]`}
      style={{
        clipPath:
          window.innerWidth >= 768
            ? "polygon(0% 0%, 100% 0%, 100% 90%, 100% 95%, 90% 90%, 40% 100%, 10% 88%, 0% 100%)"
            : "none", // Plain bottom for screens smaller than 768px
      }}
    >
      <Slider ref={sliderRef} {...settings}>
        {slideContents.map((content, index) => (
          <div key={index}>
            <section
              className="relative h-screen bg-cover bg-center"
              style={{ backgroundImage: `url(${Carosulebg})` }}
            >
              {/* Carousel content */}
              <div className="absolute inset-0 flex flex-col md:flex-row text-white py-8">
                {/* Left side content (Text and Button) */}
                <div className="flex flex-col justify-center items-center md:justify-start  md:items-start m-auto space-y-4 px-5 w-full md:w-1/2">
                  <p className="text-base md:text-xl font-bold text-orange-600">
                    {content.title}
                  </p>
                  <p className="text-2xl md:text-5xl font-semibold">
                    {content.subtitle}
                  </p>
                  <p className="text-base md:text-xl md:w-3/4">
                    {content.description}
                  </p>
                  <button className="bg-orange-600 text-white font-bold w-[165px] rounded-sm h-[52px] hover:bg-blue-950 transition duration-700 cursor-pointer">
                    Get In Touch
                  </button>
                </div>

                {/* Human Image on the right */}
                <div className="flex items-center justify-center w-full md:w-[43%]">
                  <img
                    src={HumanImg || "/placeholder.svg"}
                    alt="Human"
                    className="h-[85%] md:h-[80%] md:w-[90%]"
                  />
                </div>
              </div>
            </section>
          </div>
        ))}
      </Slider>

      {/* Bottom center navigation icons */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
        <button
          onClick={() => sliderRef.current.slickPrev()}
          className="text-4xl h-10 w-10 rounded-md flex justify-center items-center bg-white hover:bg-orange-600 hover:text-white transition duration-700 "
        >
          <HiArrowNarrowLeft size={22} /> {/* Left arrow */}
        </button>
        <button
          onClick={() => sliderRef.current.slickNext()}
          className="text-4xl bg-white h-10 w-10 rounded-md flex justify-center items-center hover:bg-orange-600 hover:text-white transition duration-700 "
        >
          <HiArrowNarrowRight size={22} /> {/* Right arrow */}
        </button>
      </div>
    </div>
  );
}

export default CustomSlider;
