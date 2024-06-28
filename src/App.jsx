// import React, { useState } from "react";
// import styled, { ThemeProvider } from "styled-components";
// import { darkTheme } from "./pages/utils/Themes";
// import { BrowserRouter } from "react-router-dom";
// import { AnimatePresence } from "framer-motion";

// import NavBar from "./pages/navbar/Navbar";

// import Experience from "./pages/sections/Experience";
// import Education from "./pages/sections/Education";
// import Contact from "./pages/sections/Contact";
// import Hero from "./pages/sections/Hero";
// import Footer from "./pages/sections/Footer";
// import StarCanvas from "./pages/canvas/Stars";
// import Skills from "./pages/sections/Skills";
// import Projects from "./pages/sections/Projects";
// import ProjectDetails from "./pages/Dialog/ProjectDetails";

// const Body = styled.div`
//   background-color: ${({ theme }) => theme.bg};
//   width: 100%;
//   overflow-x: hidden;
//   position: relative;
// `;

// const Wrapper = styled.div`
//   padding-bottom: 100px;
//   background: linear-gradient(
//       38.73deg,
//       rgba(204, 0, 187, 0.15) 0%,
//       rgba(201, 32, 184, 0) 50%
//     ),
//     linear-gradient(
//       141.27deg,
//       rgba(0, 70, 209, 0) 50%,
//       rgba(0, 70, 209, 0.15) 100%
//     );
//   width: 100%;
//   clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
// `;

// const App = () => {
//   const [openModal, setOpenModal] = useState({ state: false, project: null });

//   return (
//     // <div className="App">
//     //   {/* <Header /> */}
//     //   <NavBar />
//     //   <Banner />
//     //   <Skills />
//     //   <Experience />
//     //   {/* <Home /> */}
//     //   {/* <Nav />
//     //   <About />
//     //   <Experience />
//     //   <Qualification />
//     //   <Testimonials />
//     //   <Portfolio />
//     //   {/* <Testimonials /> */}
//     //   {/* <Contact />
//     //   <Footer /> */}
//     // </div>

//     <ThemeProvider theme={darkTheme}>
//       <BrowserRouter>
//         <NavBar />
//         <Body>
//           <StarCanvas />
//           <AnimatePresence>
//             <div>
//               <Hero />
//               <Wrapper>
//                 <Skills />
//                 {/* <Experience /> */}
//               </Wrapper>
//               {/* <Projects openModal={openModal} setOpenModal={setOpenModal} /> */}
//               <Wrapper>
//                 {/* <Education /> */}
//                 {/* <Contact /> */}
//               </Wrapper>
//               {/* <Footer /> */}

//               {/* {openModal.state && (
//                 <ProjectDetails
//                   openModal={openModal}
//                   setOpenModal={setOpenModal}
//                 />
//               )} */}
//             </div>
//           </AnimatePresence>
//         </Body>
//       </BrowserRouter>
//     </ThemeProvider>
//   );
// };

// export default App;

import React from "react";

// import NavBar from "./pages/navbar/Navbar";
// import Experience from "./pages/sections/Experience";
// import Projects from "./pages/sections/Projects";
// import Skills from "./pages/sections/Skills";
// import Education from "./pages/sections/Education";

import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";
import Header from "./components/header/Header";
import Qualification from "./components/services/Qualification";
import Contact from "./components/contact/Contact";
import Testimonials from "./components/testimonials/Testimonials";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div>
      {/* <NavBar />
      <Experience />
      <Projects />
      <Skills />
      <Education /> */}
      <Header />
      <Nav />
      <About />
      <Experience />
      <Qualification />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
