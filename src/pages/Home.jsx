// // import React from 'react'

// import CustomSlider from "../components/CustomSlider";
// import Navbar from "../components/Navbar";
// import TopInfo from "../components/TopInfo";
// import HeroSecond from "../components/HeroSecond";
// import ServiceCards from "../components/ServiceCards";

// function Home() {
//   return (
//     <>
//       <div>
//         <div>
//           <TopInfo />
//           <div className="relative">
//             <div className="relative z-20 -mt-[32.2rem]">
//               <Navbar />
//             </div>
//             <div className="absolute top-0 left-4 right-4 -mt-[2px]">
//               <CustomSlider />
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className=" mt-[35rem]">
//         <HeroSecond />
//       </div>
//       <ServiceCards />
//     </>
//   );
// }

// export default Home;

// import TopInfo from "../components/TopInfo";
import Navbar from "../components/Navbar";
import HeroSection from "../components/CustomSlider";
import ServicesSection from "../components/ServiceCards";
import HeroSecond from "../components/HeroSecond";
import HeroForm from "../components/HeroForm";
import HeroExploreproject from "../components/HeroExploreproject";

export default function Home() {
  return (
    <main className="">
      {/* <TopInfo /> */}
      <Navbar />
      <HeroSection />
      <HeroSecond />
      <ServicesSection />
      <HeroForm />
      <HeroExploreproject />
    </main>
  );
}
