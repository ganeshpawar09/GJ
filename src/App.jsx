import React from "react";
import Navbar from "./components/layout/NavBar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Products from "./components/Sections/Products";
import Investments from "./components/Sections/Investments";
import Founders from "./components/Sections/Founders";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Investments />
      <Founders />
      <Footer />
    </div>
  );
}

export default App;
