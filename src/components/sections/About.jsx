import React from "react";
import {
  Tractor,
  Sprout,
  TrendingUp,
  Award,
  Factory,
  Users,
  Target,
  Compass,
} from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { features, partners, aboutContent } from "../Data/AboutData";
const icons = { Tractor, Sprout, TrendingUp, Award, Factory, Users };

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-emerald-50 to-white"
    >
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-20">
            <motion.span
              variants={itemVariants}
              className="bg-emerald-100 text-emerald-800 px-4 py-1 rounded-full text-sm font-medium inline-block mb-4"
            >
              About Us
            </motion.span>

            <motion.h2
              variants={itemVariants}
              className="text-4xl font-bold mb-8 text-emerald-800"
            >
              {aboutContent.title}
            </motion.h2>

            <motion.div variants={itemVariants} className="max-w-3xl mx-auto">
              <div className="flex justify-center mb-10">
                <div className="w-20 h-1 bg-emerald-500 rounded-full"></div>
              </div>

              {aboutContent.description.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-lg text-gray-700 leading-relaxed mb-6"
                >
                  {paragraph}
                </p>
              ))}
            </motion.div>
          </div>

          {/* Vision and Mission Section */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          >
            {/* Vision Card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="p-8 bg-white rounded-xl shadow-md border-l-4 border-emerald-500 h-full flex flex-col"
            >
              <div className="mb-6 flex items-center">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-emerald-800">
                  Our Vision
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed italic">
                "To be a leader in agricultural innovation by providing
                sustainable and advanced mechanization solutions that transform
                farming practices, increase profitability, and improve the
                livelihoods of farmers."
              </p>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="p-8 bg-white rounded-xl shadow-md border-l-4 border-emerald-500 h-full flex flex-col"
            >
              <div className="mb-6 flex items-center">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mr-4">
                  <Compass className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-emerald-800">
                  Our Mission
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed italic">
                "We aim to deliver efficient, high-performance agricultural
                equipment like onion combine harvesters and multicrop diggers,
                enabling farmers to overcome challenges in harvesting and crop
                management with affordable, eco-friendly, and innovative
                machinery solutions."
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24"
          >
            {features.map((feature, index) => {
              const IconComponent = icons[feature.icon];
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="p-8 bg-white rounded-xl shadow-md border-2 border-emerald-50 h-full flex flex-col"
                >
                  <div className="mb-6 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-emerald-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-center text-emerald-700">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-center">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Supported By Section */}
          <motion.div variants={itemVariants} className="mb-10">
            <h3 className="text-2xl font-bold text-center mb-6 text-emerald-800">
              Supported By
            </h3>
            <div className="bg-white p-10 rounded-xl shadow-md border border-emerald-100">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                {partners.map((partner, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex flex-col items-center"
                  >
                    <div className="bg-white p-8 rounded-lg w-full flex items-center justify-center h-40 shadow-md">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="max-h-36 max-w-full object-contain"
                      />
                    </div>
                    <p className="text-base font-semibold text-center text-gray-700 mt-3">
                      {partner.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
