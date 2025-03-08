import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Send,
} from "lucide-react";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData({ name: "", email: "", message: "" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <footer id="contact" className="bg-emerald-900 text-white pt-16 pb-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <div className="flex justify-center">
            <div className="w-20 h-1 bg-emerald-500 rounded-full"></div>
          </div>
          <p className="mt-4 text-emerald-100 max-w-2xl mx-auto">
            Get in touch with us for inquiries about our agricultural equipment
            or to schedule a demonstration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <motion.div
            variants={itemVariants}
            className="bg-emerald-800 rounded-lg p-6 h-full flex flex-col"
          >
            <h3 className="text-xl font-bold mb-6 text-emerald-100">
              Direct Contact
            </h3>

            <div className="space-y-4 flex-grow">
              <motion.div whileHover={{ x: 5 }} className="flex items-start">
                <Phone className="mr-3 h-5 w-5 text-emerald-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-emerald-200">Phone</p>
                  <a
                    href="tel:+919876543210"
                    className="hover:text-emerald-400 transition-colors"
                  >
                    +91 9876 543 210
                  </a>
                  <br />
                  <a
                    href="tel:+919876543211"
                    className="hover:text-emerald-400 transition-colors"
                  >
                    +91 9876 543 211
                  </a>
                </div>
              </motion.div>

              <motion.div whileHover={{ x: 5 }} className="flex items-start">
                <Mail className="mr-3 h-5 w-5 text-emerald-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-emerald-200">Email</p>
                  <a
                    href="mailto:contact@ghodejadhav.com"
                    className="hover:text-emerald-400 transition-colors"
                  >
                    ghode.jadhav@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div whileHover={{ x: 5 }} className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-emerald-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-emerald-200">Office Address</p>
                  <address className="not-italic">
                    123 Agricultural Hub,
                    <br />
                    Technical Park, Phase 1,
                    <br />
                    Pune, Maharashtra - 411057
                  </address>
                </div>
              </motion.div>
            </div>

            <div className="mt-6 pt-6 border-t border-emerald-700">
              <p className="text-sm text-emerald-300 mb-3">Connect With Us</p>
              <div className="flex space-x-4">
                <motion.a
                  whileHover={{ y: -3 }}
                  href="#"
                  className="bg-emerald-700 p-2 rounded-full hover:bg-emerald-600 transition-colors"
                >
                  <Linkedin size={18} />
                </motion.a>
                <motion.a
                  whileHover={{ y: -3 }}
                  href="#"
                  className="bg-emerald-700 p-2 rounded-full hover:bg-emerald-600 transition-colors"
                >
                  <Twitter size={18} />
                </motion.a>
                <motion.a
                  whileHover={{ y: -3 }}
                  href="#"
                  className="bg-emerald-700 p-2 rounded-full hover:bg-emerald-600 transition-colors"
                >
                  <Facebook size={18} />
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="md:col-span-2 bg-emerald-800 rounded-lg p-6"
          >
            <h3 className="text-xl font-bold mb-6 text-emerald-100">
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-emerald-200 mb-1"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-md bg-emerald-700 border border-emerald-600 text-white placeholder-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-emerald-200 mb-1"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-md bg-emerald-700 border border-emerald-600 text-white placeholder-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-emerald-200 mb-1"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-2 rounded-md bg-emerald-700 border border-emerald-600 text-white placeholder-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="What would you like to know about our agricultural solutions?"
                ></textarea>
              </div>
              <div className="flex justify-end">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="inline-flex items-center bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2 rounded-md transition-colors font-medium"
                >
                  Send Message
                  <Send size={16} className="ml-2" />
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="pt-6 border-t border-emerald-800 text-center"
        >
          <p className="text-emerald-300">
            &copy; 2025 Ghode & Jadhav Agritech. All rights reserved.
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
