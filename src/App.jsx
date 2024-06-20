import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Qualification from "./components/services/Qualification";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import NavBar from "./pages/navbar/Navbar";
import Home from "./pages/home/Home";
import { Banner } from "./pages/banner/Banner";
import { Skills } from "./pages/skills/Skills";

const App = () => {
  return (
    <div className="App">
      {/* <Header /> */}
      <NavBar />
      <Banner />
      <Skills />
      {/* <Home /> */}
      {/* <Nav />
      <About />
      <Experience />
      <Qualification />
      <Testimonials />
      <Portfolio />
      {/* <Testimonials /> */}
      {/* <Contact />
      <Footer /> */}
    </div>
  );
};

export default App;
