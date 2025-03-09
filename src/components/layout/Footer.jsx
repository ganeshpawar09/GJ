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
import {
  contactInfo,
  socialLinks,
  formFields,
  footerText,
} from "../Data/FooterData";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <footer id="contact" className="bg-emerald-50 text-emerald-900 pt-16 pb-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4 text-emerald-800">
            Contact Us
          </h2>
          <div className="flex justify-center">
            <div className="w-20 h-1 bg-emerald-500 rounded-full"></div>
          </div>
          <p className="mt-4 text-emerald-700 max-w-2xl mx-auto">
            Get in touch with us for inquiries about our agricultural equipment
            or to schedule a demonstration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-lg p-6 h-full flex flex-col shadow-md border border-emerald-100"
          >
            <h3 className="text-xl font-bold mb-6 text-emerald-800">
              Direct Contact
            </h3>

            <div className="space-y-4 flex-grow">
              {contactInfo.phones.map((phone, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 5 }}
                  className="flex items-start"
                >
                  <Phone className="mr-3 h-5 w-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-emerald-800">Phone</p>
                    <a
                      href={`tel:${phone}`}
                      className="text-emerald-700 hover:text-emerald-500 transition-colors"
                    >
                      {phone}
                    </a>
                  </div>
                </motion.div>
              ))}

              <motion.div whileHover={{ x: 5 }} className="flex items-start">
                <Mail className="mr-3 h-5 w-5 text-emerald-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-emerald-800">Email</p>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-emerald-700 hover:text-emerald-500 transition-colors"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </motion.div>

              <motion.div whileHover={{ x: 5 }} className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-emerald-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-emerald-800">Office Address</p>
                  <address className="not-italic text-emerald-700">
                    {contactInfo.address.split("\n").map((line, index) => (
                      <div key={index}>{line}</div>
                    ))}
                  </address>
                </div>
              </motion.div>
            </div>

            <div className="mt-6 pt-6 border-t border-emerald-100">
              <p className="text-sm text-emerald-700 mb-3">Connect With Us</p>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => {
                  const Icon =
                    link.icon === "Linkedin"
                      ? Linkedin
                      : link.icon === "Twitter"
                      ? Twitter
                      : Facebook;
                  return (
                    <motion.a
                      key={index}
                      whileHover={{ y: -3 }}
                      href={link.href}
                      className="bg-emerald-100 text-emerald-600 p-2 rounded-full hover:bg-emerald-200 transition-colors"
                    >
                      <Icon size={18} />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="md:col-span-2 bg-white rounded-lg p-6 shadow-md border border-emerald-100"
          >
            <h3 className="text-xl font-bold mb-6 text-emerald-800">
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {formFields.map((field) => (
                  <div key={field.id}>
                    <label
                      htmlFor={field.id}
                      className="block text-sm font-medium text-emerald-700 mb-1"
                    >
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      id={field.id}
                      name={field.id}
                      value={formData[field.id]}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-800 placeholder-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      placeholder={field.placeholder}
                    />
                  </div>
                ))}
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-emerald-700 mb-1"
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
                  className="w-full px-4 py-2 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-800 placeholder-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="What would you like to know about our agricultural solutions?"
                ></textarea>
              </div>
              <div className="flex justify-end">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-emerald-100 hover:bg-emerald-200 text-emerald-00 px-6 py-3 rounded-lg font-medium w-full sm:w-auto text-center"
                  type="submit"
                >
                  Send Message
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="pt-6 border-t border-emerald-200 text-center"
        >
          <p className="text-emerald-700">{footerText}</p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
