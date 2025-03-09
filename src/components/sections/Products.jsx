import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Check } from "lucide-react";
import { products } from "../data/ProductData";

const Products = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const staggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <section
      id="products"
      className="py-20 bg-gradient-to-b from-white to-emerald-50"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-emerald-800 mb-3">
            Our Agricultural Solutions
          </h2>
          <p className="text-lg text-emerald-600 max-w-2xl mx-auto">
            Innovative equipment designed for Indian farmers, backed by
            government funding and agricultural expertise
          </p>
          <div className="flex justify-center mt-6">
            <div className="w-20 h-1 bg-emerald-500 rounded-full"></div>
          </div>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerVariants}
          className="space-y-16 max-w-6xl mx-auto"
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2 relative">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="h-full"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 flex flex-col space-y-2">
                      {product.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="bg-emerald-600 text-white text-xs px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                <div className="lg:w-1/2 p-8">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="text-3xl font-bold text-emerald-700">
                      {product.name}
                    </h3>
                  </div>

                  <div className="mb-2">
                    <span className="text-sm bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full">
                      Funded by {product.fundedBy}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-6 mt-4">
                    {product.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-xl font-semibold mb-4 text-emerald-800">
                      Machine Specifications
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {product.specs.map((spec, i) => (
                        <div
                          key={i}
                          className="flex items-center space-x-3 p-2 rounded-lg bg-gray-50"
                        >
                          <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                            <spec.icon className="w-5 h-5 text-emerald-600" />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-xs text-gray-500">
                              {spec.label}
                            </span>
                            <span className="font-medium text-gray-800">
                              {spec.value}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-xl font-semibold mb-4 text-emerald-800">
                      Key Features
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {product.features.map((feature, i) => (
                        <div key={i} className="flex items-start space-x-2">
                          <div className="mt-1">
                            <Check className="w-4 h-4 text-emerald-500" />
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                    <motion.a
                      href="#contact"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-emerald-100 hover:bg-emerald-200 text-emerald-00 px-6 py-3 rounded-lg font-medium w-full sm:w-auto text-center"
                    >
                      Contact Our Team
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
