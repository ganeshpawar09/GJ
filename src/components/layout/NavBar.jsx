import React, { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = [
        "home",
        "about",
        "products",
        "investment",
        "team",
        "contact",
      ];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Home", "About", "Products", "Investment", "Team"];

  const logoVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * index,
        duration: 0.5,
      },
    }),
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0, overflow: "hidden" },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-gradient-to-b from-black/60 to-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            variants={logoVariants}
            initial="hidden"
            animate="visible"
            className="flex items-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
              className={`flex items-center ${
                isScrolled ? "text-emerald-800" : "text-white"
              }`}
            >
              {/* Logo Icon */}
              <div
                className={`mr-3 w-10 h-10 rounded-full flex items-center justify-center ${
                  isScrolled
                    ? "bg-emerald-600 text-white"
                    : "bg-emerald-600 text-white"
                }`}
              >
                <span className="font-bold text-lg">GJ</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                custom={index}
                variants={navItemVariants}
                initial="hidden"
                animate="visible"
                href={`#${item.toLowerCase()}`}
                className={`px-4 py-2 rounded-md font-medium transition-colors ${
                  activeSection === item.toLowerCase()
                    ? isScrolled
                      ? "text-emerald-700 bg-emerald-50"
                      : "text-white bg-emerald-600/20"
                    : isScrolled
                    ? "text-gray-700 hover:text-emerald-600 hover:bg-emerald-50/80"
                    : "text-gray-100 hover:text-white hover:bg-white/10"
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {item}
              </motion.a>
            ))}

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className={`ml-2 px-5 py-2 rounded-md font-medium ${
                isScrolled
                  ? "bg-emerald-600 text-white hover:bg-emerald-700"
                  : "bg-emerald-600/90 text-white hover:bg-emerald-600"
              } transition-colors`}
            >
              Contact Us
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${
                isScrolled
                  ? "text-gray-800 hover:bg-gray-100"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="md:hidden bg-white rounded-lg mt-2 py-2 shadow-xl overflow-hidden"
            >
              {navItems.map((item) => (
                <motion.a
                  key={item}
                  variants={mobileItemVariants}
                  href={`#${item.toLowerCase()}`}
                  className={`flex items-center px-4 py-3 ${
                    activeSection === item.toLowerCase()
                      ? "text-emerald-700 bg-emerald-50 font-medium"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <ChevronRight
                    size={16}
                    className={
                      activeSection === item.toLowerCase()
                        ? "text-emerald-500"
                        : "text-gray-400"
                    }
                  />
                  <span className="ml-2">{item}</span>
                </motion.a>
              ))}

              <motion.div
                variants={mobileItemVariants}
                className="px-4 pt-4 pb-2 mt-2 border-t border-gray-100"
              >
                <a
                  href="#contact"
                  className="w-full block text-center py-2 px-4 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Contact Us
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
