"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Heart, Share2 } from "lucide-react";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "About",
      links: ["Our Story", "Craftsmanship", "Ingredients", "Sustainability"],
    },
    {
      title: "Services",
      links: [
        "Custom Orders",
        "Corporate Events",
        "Wedding Cakes",
        "Consultations",
      ],
    },
    {
      title: "Connect",
      links: ["Contact", "Newsletter", "Instagram", "Blog"],
    },
  ];

  return (
    <footer className="bg-zanny-dark text-zanny-cream pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className="mb-16 pb-16 border-b border-zanny-cream/20"
        >
          <div className="max-w-md">
            <h3 className="text-2xl font-serif font-bold mb-4">Stay Updated</h3>
            <p className="text-zanny-cream/70 mb-6">
              Get exclusive offers and behind-the-scenes bakery stories.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-3 bg-zanny-cream/10 border border-zanny-cream/30 rounded-lg text-zanny-cream placeholder:text-zanny-cream/50 focus:outline-none focus:border-zanny-gold transition-smooth"
              />
              <button className="px-6 py-3 bg-zanny-red text-white font-medium rounded-lg hover:bg-opacity-90 transition-smooth shadow-soft">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12"
        >
          {/* Brand */}
          <motion.div variants={staggerItem}>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/logo-navbar.png"
                alt="Zanny"
                width={36}
                height={36}
                className="h-9 w-auto"
              />
              <span className="text-2xl font-serif font-bold text-zanny-red">
                Zanny
              </span>
            </div>

            <p className="text-zanny-cream/70 text-sm leading-relaxed mb-6">
              Handcrafted luxury cakes and pastries celebrating life's precious
              moments.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-zanny-cream/70 hover:text-zanny-gold transition-smooth"
              >
                <Heart size={20} />
              </a>
              <a
                href="#"
                className="text-zanny-cream/70 hover:text-zanny-gold transition-smooth"
              >
                <Share2 size={20} />
              </a>
            </div>
          </motion.div>

          {/* Links */}
          {footerSections.map((section, index) => (
            <motion.div key={section.title} variants={staggerItem}>
              <h4 className="font-serif font-semibold text-zanny-cream mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-zanny-cream/70 hover:text-zanny-gold text-sm transition-smooth"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Info */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 pb-12 border-b border-zanny-cream/20"
        >
          <div className="flex gap-4">
            <Phone size={20} className="text-zanny-gold flex-shrink-0 mt-1" />
            <div>
              <p className="text-sm text-zanny-cream/70">Phone</p>
              <p className="font-serif font-semibold">+234 (800) 123-4567</p>
            </div>
          </div>
          <div className="flex gap-4">
            <Mail size={20} className="text-zanny-gold flex-shrink-0 mt-1" />
            <div>
              <p className="text-sm text-zanny-cream/70">Email</p>
              <p className="font-serif font-semibold">hello@zanny.com</p>
            </div>
          </div>
          <div className="flex gap-4">
            <MapPin size={20} className="text-zanny-gold flex-shrink-0 mt-1" />
            <div>
              <p className="text-sm text-zanny-cream/70">Location</p>
              <p className="font-serif font-semibold">Lagos, Nigeria</p>
            </div>
          </div>
        </motion.div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-zanny-cream/50">
          <p>
            &copy; {currentYear} Zanny Cakes & Pastries. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-zanny-cream transition-smooth">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-zanny-cream transition-smooth">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
