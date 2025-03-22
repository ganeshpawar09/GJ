import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Linkedin, Twitter, Mail, ExternalLink } from "lucide-react";
import { founders } from "../Data/FounderData";

const Founders = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="founders"
      className="py-24 bg-gradient-to-b from-white to-emerald-50"
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
            <motion.span
              variants={itemVariants}
              className="bg-emerald-100 text-emerald-800 px-4 py-1 rounded-full text-sm font-medium inline-block mb-4"
            >
              Our Team
            </motion.span>

            <motion.h2
              variants={itemVariants}
              className="text-4xl font-bold mb-8 text-emerald-800"
            >
              Leadership Team
            </motion.h2>
            <motion.div variants={itemVariants} className="max-w-3xl mx-auto">
              <div className="flex justify-center mb-8">
                <div className="w-20 h-1 bg-emerald-500 rounded-full"></div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-12">
                Meet the visionaries behind Ghode & Jadhav Agritech who combine
                technical expertise, agricultural knowledge, and business acumen
                to transform Indian farming through innovative mechanical
                solutions.
              </p>
            </motion.div>
          </div>

          {/* Founders Section */}
          <motion.div variants={itemVariants} className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {founders.map((founder, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-white rounded-xl shadow-lg border-2 border-emerald-50 overflow-hidden flex flex-col"
                >
                  <div className="grid md:grid-cols-5 h-full">
                    <div className="md:col-span-2 bg-emerald-50">
                      <div className="h-full p-6 flex items-center justify-center">
                        <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-md">
                          <img
                            src={founder.image}
                            alt={founder.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="md:col-span-3 p-8">
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold text-emerald-800 mb-1">
                          {founder.name}
                        </h3>
                        <p className="text-emerald-600 font-medium mb-1">
                          {founder.role}
                        </p>
                        <p className="text-sm text-emerald-500 mb-4">
                          {founder.education}
                        </p>
                      </div>

                      <p className="text-gray-600 mb-6">{founder.bio}</p>

                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-700 mb-3">
                          Areas of Expertise
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {founder.expertise.map((skill, i) => (
                            <span
                              key={i}
                              className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-xs font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex space-x-5 mt-4 pt-4 border-t border-gray-100">
                        <motion.a
                          href={founder.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.2 }}
                          className="bg-emerald-100 text-emerald-600 p-2 rounded-full hover:bg-emerald-200 transition-colors"
                        >
                          <Linkedin size={20} />
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Founders;
