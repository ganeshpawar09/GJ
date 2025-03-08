import React from "react";
import {
  Tractor,
  Sprout,
  TrendingUp,
  Award,
  Factory,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: Tractor,
      title: "Agricultural Innovation",
      description:
        "Developing cutting-edge solutions like our Multicrop Digger and Onion Combine Harvester to revolutionize farm operations",
    },
    {
      icon: Sprout,
      title: "Farm Productivity",
      description:
        "Creating equipment that significantly boosts yield while reducing manual labor and operational costs",
    },
    {
      icon: Factory,
      title: "Made in India",
      description:
        "Proudly designing and manufacturing agricultural equipment tailored for Indian farming conditions",
    },
    {
      icon: Award,
      title: "Government Recognized",
      description:
        "Recipients of prestigious grants from DST NIDHI PRAYAS and RKVY Innovation programs",
    },
    {
      icon: TrendingUp,
      title: "Research Driven",
      description:
        "Continuous R&D with academic institutions and agricultural experts to develop next-generation solutions",
    },
    {
      icon: Users,
      title: "Farmer Focused",
      description:
        "Creating practical, affordable solutions developed with direct input from farming communities",
    },
  ];

  const partners = [
    {
      name: "Startup India",
      logo: "/api/placeholder/120/60",
    },
    {
      name: "Bhau Institute, COEP Technological University, Pune",
      logo: "/api/placeholder/120/60",
    },
    {
      name: "CIRCOT, Mumbai",
      logo: "/api/placeholder/120/60",
    },
    {
      name: "Directorate of Onion and Garlic Research (DOGR), Pune",
      logo: "/api/placeholder/120/60",
    },
    {
      name: "Pusa Krishi, Delhi",
      logo: "/api/placeholder/120/60",
    },
  ];

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
      className="py-20 bg-gradient-to-b from-emerald-50 to-white"
    >
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.h2
              variants={itemVariants}
              className="text-4xl font-bold mb-8 text-emerald-800"
            >
              About Ghode & Jadhav Agritech
            </motion.h2>

            <motion.div variants={itemVariants} className="max-w-3xl mx-auto">
              <div className="flex justify-center mb-8">
                <div className="w-20 h-1 bg-emerald-500 rounded-full"></div>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Ghode & Jadhav Agritech Equipments Industries Private Limited is
                a pioneering agritech company dedicated to transforming Indian
                agriculture through innovative mechanical solutions.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-12">
                Our flagship innovations—the Multicrop Digger and Onion Combine
                Harvester—are designed to address critical challenges faced by
                Indian farmers. Backed by government funding and incubated at
                prestigious institutions, we're committed to building
                agricultural equipment that increases efficiency, reduces costs,
                and improves the livelihoods of farming communities.
              </p>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="p-6 bg-white rounded-xl shadow-md border-2 border-emerald-50 h-full flex flex-col"
              >
                <div className="mb-6 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-emerald-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center text-emerald-700">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Supported By Section */}
          <motion.div variants={itemVariants} className="mb-10">
            <h3 className="text-2xl font-bold text-center mb-10 text-emerald-800">
              Supported By
            </h3>
            <div className="bg-white p-10 rounded-xl shadow-md border-2 border-emerald-50">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                {partners.map((partner, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className="flex flex-col items-center"
                  >
                    <div className="bg-gray-50 p-4 rounded-lg mb-3 w-full flex items-center justify-center h-24">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="max-h-16 max-w-full"
                      />
                    </div>
                    <p className="text-xs text-center text-gray-600">
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
