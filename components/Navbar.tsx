"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on window resize if screen becomes desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileMenuOpen]);

  const leftNav = [
    { label: "Buy", href: "/#" },
    { label: "Sell", href: "/#" },
    { label: "Rent", href: "/#" },
    { label: "Manage", href: "/manage" },
  ];

  const rightNav = [
    { label: "Community", href: "/#", prefix: "+" },
    { label: "About", href: "/#", prefix: "+" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md py-2"
          : "bg-beach/90 py-3 md:py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Left nav - hidden on mobile/tablet */}
        <div className="hidden lg:flex gap-6 xl:gap-8 items-center">
          {leftNav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-semibold tracking-wide uppercase transition-all duration-300 hover:text-sunset hover:scale-105 whitespace-nowrap"
              style={{ color: "#185b89" }}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Logo - responsive sizing and positioning */}
        <Link
          href="/"
          className="cursor-pointer flex-shrink-0 transition-opacity duration-300 hover:opacity-80 md:-translate-x-0 lg:translate-x-0"
        >
          <img
            src="/MainLogo_FullColor_BlueGingham-1000px.png"
            alt="Company Logo"
            className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto object-contain"
          />
        </Link>

        {/* Right nav - hidden on mobile/tablet */}
        <div className="hidden lg:flex gap-6 xl:gap-8 items-center">
          {rightNav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-semibold tracking-wide uppercase transition-all duration-300 hover:text-sunset hover:scale-105 whitespace-nowrap"
              style={{ color: "#185b89" }}
            >
              {item.prefix} {item.label}
            </Link>
          ))}
          <Link
            href="/#"
            className="bg-sunset text-white px-6 xl:px-8 py-2.5 xl:py-3 font-bold uppercase tracking-widest text-sm hover:bg-sunset/90 hover:scale-105 transition-all duration-300 rounded-md whitespace-nowrap"
          >
            Contact
          </Link>
        </div>

        {/* Mobile menu button - visible on tablet and below */}
        <button
          className="lg:hidden p-2 transition-all duration-300 hover:scale-110 active:scale-95"
          style={{ color: "#185b89" }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu - responsive for all mobile/tablet sizes */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-white border-t border-ocean/10 shadow-lg overflow-hidden"
          >
            <div className="px-4 sm:px-6 py-4 sm:py-6 flex flex-col gap-3 sm:gap-4 max-h-[80vh] overflow-y-auto">
              {/* Left nav items */}
              {leftNav.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-base sm:text-lg font-semibold tracking-wide uppercase py-2 sm:py-3 transition-all duration-300 hover:text-sunset hover:translate-x-2 active:translate-x-1"
                  style={{ color: "#185b89" }}
                >
                  {item.label}
                </Link>
              ))}

              {/* Divider */}
              <div className="h-px bg-ocean/20 my-2"></div>

              {/* Right nav items */}
              {rightNav.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-base sm:text-lg font-semibold tracking-wide uppercase py-2 sm:py-3 transition-all duration-300 hover:text-sunset hover:translate-x-2 active:translate-x-1"
                  style={{ color: "#185b89" }}
                >
                  {item.prefix ? `${item.prefix} ${item.label}` : item.label}
                </Link>
              ))}

              {/* Contact button */}
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-sunset text-white p-3 sm:p-4 text-center font-bold uppercase tracking-widest text-sm sm:text-base rounded-md mt-3 sm:mt-4 hover:bg-sunset/90 active:scale-95 transition-all duration-300"
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
