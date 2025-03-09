import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="/images/background.avif"
          alt="Agriculture Equipment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-emerald-900/30"></div>
      </div>
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl text-white">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
              <span className="bg-emerald-100 text-emerald-800 px-4 py-1 rounded-full text-sm font-medium">
                Backed by Government Funding
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            >
              Modernizing Indian Agriculture
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl"
            >
              Ghode & Jadhav Agritech delivers innovative farming equipment
              designed specifically for Indian agricultural conditions
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <motion.a
                href="#products"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-emerald-100 hover:bg-emerald-200 text-emerald-800 px-8 py-4 rounded-lg text-lg font-semibold transition-colors cursor-pointer inline-flex items-center justify-center"
              >
                View Our Products
                <ChevronRight className="ml-2 h-5 w-5" />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center"
      >
        <p className="mb-2 text-sm font-medium">Scroll to explore</p>
        <ArrowDown className="mx-auto h-6 w-6" />
      </motion.div>
    </section>
  );
};

export default Hero;
