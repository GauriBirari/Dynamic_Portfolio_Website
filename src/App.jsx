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
