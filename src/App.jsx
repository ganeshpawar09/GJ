import React from "react";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Products from "./components/sections/Products";
import Investments from "./components/sections/Investments";
import Founders from "./components/sections/Founders";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import Careers from "./components/sections/Careers";

function App() {
  return (
    <div className="font-sans">
      <NavBar />
      <Hero />
      <About />
      <Products />
      <Investments />
      <Founders />
      <Careers />
      <Footer />
    </div>
  );
}

export default App;
