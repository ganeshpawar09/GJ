import React from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
} from "lucide-react";
import { contactInfo, socialLinks, footerText } from "../Data/FooterData";

const Footer = () => {
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

        {/* Centered container for contact details */}
        <div className="flex justify-center mb-12">
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-lg p-6 h-full flex flex-col shadow-md border border-emerald-100 max-w-lg w-full"
          >
            <h3 className="text-xl font-bold mb-6 text-emerald-800 text-center">
              Contact Details
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
              <p className="text-sm text-emerald-700 mb-3 text-center">
                Connect With Us
              </p>
              <div className="flex justify-center space-x-4">
                {socialLinks.map((link, index) => {
                  const Icon =
                    link.icon === "Linkedin"
                      ? Linkedin
                      : link.icon === "Twitter"
                      ? Twitter
                      : link.icon === "Instagram"
                      ? Instagram
                      : Facebook;
                  return (
                    <motion.a
                      key={index}
                      whileHover={{ y: -3 }}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-emerald-100 text-emerald-600 p-2 rounded-full hover:bg-emerald-200 transition-colors"
                    >
                      <Icon size={18} />
                    </motion.a>
                  );
                })}
              </div>
            </div>
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
