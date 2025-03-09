import React from "react";
import Hero from "./components/Sections/Hero";
import About from "./components/Sections/About";
import Products from "./components/Sections/Products";
import Investments from "./components/Sections/Investments";
import Founders from "./components/Sections/Founders";
import NavBar from "./components/Layout/NavBar";
import Footer from "./components/Layout/Footer";

function App() {
  return (
    <div className="font-sans">
      <NavBar />
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
