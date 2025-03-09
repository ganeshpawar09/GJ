import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { milestones } from "../data/InvestementsData";

const Investments = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section
      id="investment"
      className="py-20 bg-gradient-to-b from-emerald-50 to-white"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-emerald-800 mb-3">
            Government Funding Journey
          </h2>
          <p className="text-lg text-emerald-600 max-w-2xl mx-auto">
            Partnering with prestigious government institutions to revolutionize
            agricultural technology
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="relative"
        >
          {/* Timeline track */}
          <div className="absolute top-28 left-0 right-0 h-2 bg-emerald-200 rounded-full"></div>

          <div className="flex flex-col md:flex-row md:space-x-6 md:justify-center">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="w-full md:w-1/2 lg:w-5/12 mb-12 md:mb-0 relative"
              >
                {/* Year circle marker */}
                <div className="absolute top-28 left-1/2 md:left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold shadow-lg"
                  >
                    {milestone.year}
                  </motion.div>
                </div>

                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-white p-6 pt-12 rounded-xl shadow-md border-2 border-emerald-100 h-full flex flex-col"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-emerald-700">
                        {milestone.title}
                      </h3>
                      <div className="text-sm text-gray-500 mt-1">
                        {milestone.partner}
                      </div>
                    </div>
                    <span className="text-emerald-600 font-bold text-xl bg-emerald-50 px-4 py-1 rounded-lg">
                      {milestone.amount}
                    </span>
                  </div>

                  <div className="bg-emerald-50 p-3 rounded-lg mb-4">
                    <div className="text-emerald-800 font-medium mb-1">
                      Program:
                    </div>
                    <div className="text-gray-700">{milestone.program}</div>
                  </div>

                  <p className="text-gray-600 mb-4 flex-grow">
                    {milestone.description}
                  </p>

                  <div className="mb-4">
                    <div className="text-emerald-800 font-medium mb-2">
                      Supported by:
                    </div>
                    <div className="text-gray-700 text-sm">
                      {milestone.institution}
                    </div>
                  </div>

                  <div>
                    <div className="text-emerald-800 font-medium mb-2">
                      Mentors & Support:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {milestone.mentors.map((mentor, i) => (
                        <div
                          key={i}
                          className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs"
                        >
                          {mentor}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Investments;
