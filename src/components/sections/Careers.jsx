import React from "react";
import { Briefcase, MapPin, Clock, Award } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const careerPositions = [
  {
    id: 1,
    title: "CAD Software Mechanical Engineer",
    location: "Pune, Maharashtra",
    type: "Full-time",
    experience: "2-5 years",
    description:
      "We're looking for skilled Mechanical Engineers proficient in CAD software to design and develop innovative agricultural machinery components.",
    responsibilities: [
      "Create and modify 3D models and 2D drawings using CAD software",
      "Design mechanical components for agricultural machinery",
      "Conduct structural analysis and optimize designs for manufacturability",
      "Collaborate with production team to ensure design feasibility",
      "Maintain design documentation and technical specifications",
    ],
    requirements: [
      "Bachelor's degree in Mechanical Engineering",
      "2-5 years of experience with CAD software (SolidWorks, AutoCAD, etc.)",
      "Knowledge of GD&T and mechanical design principles",
      "Understanding of manufacturing processes",
      "Strong problem-solving abilities",
    ],
  },
  {
    id: 2,
    title: "ITI - Welder",
    location: "Pune, Maharashtra",
    type: "Full-time",
    experience: "1-3 years",
    description:
      "Join our production team as a skilled Welder to fabricate and assemble agricultural equipment components.",
    responsibilities: [
      "Perform various welding techniques (MIG, TIG, arc welding)",
      "Read and interpret engineering drawings and blueprints",
      "Set up welding equipment and fixtures",
      "Inspect completed welds for quality and structural integrity",
      "Maintain welding equipment and work area",
    ],
    requirements: [
      "ITI certification in Welding/Fabrication",
      "1-3 years of hands-on welding experience",
      "Proficiency in multiple welding techniques",
      "Ability to read technical drawings",
      "Knowledge of safety standards and procedures",
    ],
  },
];

const Careers = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const variants = {
    container: {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
    },
    item: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    },
  };

  const JobItem = ({ job }) => (
    <motion.div
      variants={variants.item}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="p-6 bg-white rounded-xl shadow-md border-l-4 border-emerald-500"
    >
      <h3 className="text-xl font-bold text-emerald-800 mb-3">{job.title}</h3>

      <div className="flex flex-wrap gap-3 mb-4">
        <div className="flex items-center text-gray-600">
          <MapPin className="w-4 h-4 text-emerald-600 mr-1" />
          <span>{job.location}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Clock className="w-4 h-4 text-emerald-600 mr-1" />
          <span>{job.type}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Award className="w-4 h-4 text-emerald-600 mr-1" />
          <span>{job.experience}</span>
        </div>
      </div>

      <p className="text-gray-700 mb-4">{job.description}</p>

      <details className="mb-3">
        <summary className="text-lg font-semibold text-emerald-700 cursor-pointer">
          Responsibilities
        </summary>
        <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
          {job.responsibilities.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </details>

      <details className="mb-4">
        <summary className="text-lg font-semibold text-emerald-700 cursor-pointer">
          Requirements
        </summary>
        <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
          {job.requirements.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </details>

      <motion.a
        href="#contact"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="block bg-emerald-100 hover:bg-emerald-200 text-emerald-800 px-4 py-2 rounded-lg font-medium text-center"
      >
        Contact Our Team
      </motion.a>
    </motion.div>
  );

  return (
    <section
      id="careers"
      className="py-16 bg-gradient-to-b from-emerald-50 to-white"
    >
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants.container}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-12">
            <motion.span
              variants={variants.item}
              className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium"
            >
              Join Our Team
            </motion.span>
            <motion.h2
              variants={variants.item}
              className="text-3xl font-bold my-4 text-emerald-800"
            >
              Build Your Career With Us
            </motion.h2>
            <motion.div variants={variants.item} className="max-w-2xl mx-auto">
              <p className="text-gray-700">
                We're seeking talented individuals passionate about agricultural
                innovation. Join us to revolutionize farming with cutting-edge
                mechanical solutions in a collaborative environment where your
                ideas make a real impact.
              </p>
            </motion.div>
          </div>

          <motion.div
            variants={variants.item}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {careerPositions.map((job) => (
              <JobItem key={job.id} job={job} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Careers;
