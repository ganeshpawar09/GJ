import React, { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";

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
        "founders",
        "careers",
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

  const navItems = [
    "Home",
    "About",
    "Products",
    "Investment",
    "Founders",
    "Careers",
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-gradient-to-b from-black/70 to-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <div
              className={`overflow-hidden transition-all duration-300 ${
                isScrolled ? "h-16" : "h-18"
              }`}
            >
              <img
                src="/images/logo1.png"
                alt="Company Logo"
                className={`h-full object-contain transition-transform duration-300 ${
                  isScrolled ? "scale-95" : "scale-100"
                }`}
              />
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`px-4 py-2 rounded-md font-medium transition-colors duration-200 ${
                  activeSection === item.toLowerCase()
                    ? isScrolled
                      ? "text-emerald-700 bg-emerald-50"
                      : "text-white bg-emerald-600/20"
                    : isScrolled
                    ? "text-gray-700 hover:text-emerald-600 hover:bg-emerald-50/80"
                    : "text-gray-100 hover:text-white hover:bg-white/10"
                }`}
              >
                {item}
              </a>
            ))}

            <a
              href="#contact"
              className="ml-2 px-5 py-2 rounded-md font-medium bg-emerald-100 text-emerald-800 hover:bg-emerald-200 transition-colors duration-200"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md transition-colors duration-200 ${
                isScrolled
                  ? "text-gray-800 hover:bg-gray-100"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white rounded-lg mt-2 py-2 shadow-xl overflow-hidden transition-all duration-300">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`flex items-center px-4 py-3 transition-colors duration-200 ${
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
              </a>
            ))}

            <div className="px-4 pt-4 pb-2 mt-2 border-t border-gray-100">
              <a
                href="#contact"
                className="w-full block text-center py-2 px-4 bg-emerald-100 text-emerald-800 rounded-md hover:bg-emerald-200 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
