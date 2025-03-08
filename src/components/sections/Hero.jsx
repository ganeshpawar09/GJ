import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="src\assets\images\background.avif"
          alt="Agriculture Equipment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Ghode & Jadhav Agritech
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8"
          >
            Revolutionizing Agriculture with Advanced Equipment
          </motion.p>
          <motion.a
            href="#products"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors cursor-pointer inline-block"
          >
            Explore Products
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
