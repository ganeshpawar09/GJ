import React from "react";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Products from "./components/sections/Products";
import Investment from "./components/sections/Investment";
import Team from "./components/sections/Team";
import Navbar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Investment />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
