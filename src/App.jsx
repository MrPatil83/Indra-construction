// import { BrowserRouter as Router, Routes } from "react-router-dom";
// import Navbar from "./components/Navbar"; // Make sure the import path is correct
// import TopInfo from "./components/TopInfo";
// import CustomSlider from "./components/CustomSlider";
// // import Home from "./pages/Home"; // Replace with your actual page components
// // import Contact from "./pages/Contact";
// // import Projects from "./pages/Projects";
// // import BuyNow from "./pages/BuyNow";

// function App() {
//   return (
//     <Router>
//       {" "}
//       <div>
//         <TopInfo />
//         <div className=" -mt-[32.3rem]">
//           <Navbar />
//           <div className=" max-w-4xl justify-center items-center -mt-16 -z-10 isolate">
//             <CustomSlider />
//           </div>
//         </div>
//       </div>
//       <Routes>
//         {" "}
//         {/* Define your routes here */}
//         {/* <Route path="/" element={<Home />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/projects" element={<Projects />} />
//         <Route path="/buy-now" element={<BuyNow />} /> */}
//         {/* Add other routes as needed */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
