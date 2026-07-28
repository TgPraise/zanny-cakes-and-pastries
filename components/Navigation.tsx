"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Collections", href: "#collections" },
    { label: "About", href: "#about" },
    { label: "Gallery", href: "#gallery" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <motion.nav
      initial={false}
      animate={{
        background: isScrolled
          ? "rgba(235, 198, 204, 0.95)"
          : "rgba(235, 198, 204, 0)",
        backdropFilter: isScrolled ? "blur(12px)" : "blur(0px)",
        boxShadow: isScrolled
          ? "0 10px 40px rgba(0, 0, 0, 0.08)"
          : "0 0 0 rgba(0, 0, 0, 0)",
      }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="flex-shrink-0 flex items-center gap-2"
          >
            <Image
              src="/logo-navbar.png"
              alt="Zanny"
              width={40}
              height={40}
              className="h-10 w-auto"
              priority
            />
            <span className="text-2xl font-serif font-bold text-zanny-red">
              Zanny
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
                className="text-sm font-medium text-zanny-dark hover:text-zanny-red transition-smooth"
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="hidden md:inline-block px-6 py-2 bg-zanny-red text-white text-sm font-medium rounded-full hover:bg-opacity-90 transition-smooth shadow-soft"
          >
            Order Now
          </motion.a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-zanny-dark hover:bg-zanny-cream transition-smooth"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isOpen ? "auto" : 0,
            opacity: isOpen ? 1 : 0,
            overflow: "hidden",
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden"
        >
          <div className="pb-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-4 py-2 text-sm font-medium text-zanny-dark hover:bg-zanny-cream rounded transition-smooth"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button className="w-full mt-4 px-4 py-2 bg-zanny-red text-white text-sm font-medium rounded-full hover:bg-opacity-90 transition-smooth">
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block w-full mt-4 px-4 py-2 bg-zanny-red text-white text-sm font-medium rounded-full hover:bg-opacity-90 transition-smooth text-center"
              >
                Order Now
              </a>
            </button>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
