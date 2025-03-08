import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Linkedin, Twitter, Mail, Globe } from "lucide-react";

const Team = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const founders = [
    {
      name: "Abhishek Ghode",
      role: "CEO & Technical Founder",
      image: "/api/placeholder/200/200",
      bio: "With extensive experience in agricultural engineering, Abhishek brings innovative vision to our farming solutions. He leads the technical development of our Multicrop Digger and Onion Combine Harvester.",
      expertise: [
        "Agricultural Engineering",
        "Product Design",
        "Mechanical Systems",
      ],
      education: "B.Tech in Mechanical Engineering",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "abhishek@example.com",
      },
    },
    {
      name: "Vishal Jadhav",
      role: "COO & Operations Founder",
      image: "/api/placeholder/200/200",
      bio: "Vishal's expertise in agricultural operations ensures our products address real-world farming challenges effectively. He oversees production and maintains relationships with farming communities.",
      expertise: [
        "Operations Management",
        "Farm Logistics",
        "Community Relations",
      ],
      education: "B.Tech in Agricultural Engineering",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "vishal@example.com",
      },
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="team"
      className="py-20 bg-gradient-to-b from-white to-emerald-50"
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
              Our Leadership Team
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
            <h3 className="text-2xl font-bold text-center mb-12 text-emerald-700">
              Founders
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {founders.map((founder, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-white rounded-xl shadow-md border-2 border-emerald-50 overflow-hidden flex flex-col items-center p-8"
                >
                  <div className="mb-6">
                    <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-emerald-100 shadow-md">
                      <img
                        src={founder.image}
                        alt={founder.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-emerald-800 mb-1">
                    {founder.name}
                  </h3>
                  <p className="text-emerald-600 font-medium mb-4">
                    {founder.role}
                  </p>
                  <p className="text-sm text-emerald-500 mb-4">
                    {founder.education}
                  </p>

                  <p className="text-gray-600 text-center mb-6">
                    {founder.bio}
                  </p>

                  <div className="mb-6 w-full">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3 text-center">
                      Areas of Expertise
                    </h4>
                    <div className="flex flex-wrap justify-center gap-2">
                      {founder.expertise.map((skill, i) => (
                        <span
                          key={i}
                          className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-5 mt-2">
                    <motion.a
                      href={founder.social.linkedin}
                      whileHover={{ scale: 1.2 }}
                      className="text-gray-500 hover:text-blue-600"
                    >
                      <Linkedin size={20} />
                    </motion.a>
                    <motion.a
                      href={founder.social.twitter}
                      whileHover={{ scale: 1.2 }}
                      className="text-gray-500 hover:text-blue-400"
                    >
                      <Twitter size={20} />
                    </motion.a>
                    <motion.a
                      href={`mailto:${founder.social.email}`}
                      whileHover={{ scale: 1.2 }}
                      className="text-gray-500 hover:text-emerald-600"
                    >
                      <Mail size={20} />
                    </motion.a>
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

export default Team;
