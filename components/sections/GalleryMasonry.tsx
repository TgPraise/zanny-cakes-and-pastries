"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";
import {
  Eye,
  Heart,
  PartyPopper,
  GraduationCap,
  Sparkles,
  Flower2,
  Trophy,
  Palette,
} from "lucide-react";

export function GalleryMasonry() {
  const galleryItems = [
    { icon: Heart, title: "Wedding Elegance", span: "col-span-1" },
    { icon: Sparkles, title: "Engagement Bliss", span: "col-span-1" },
    { icon: PartyPopper, title: "Birthday Magic", span: "col-span-1" },
    { icon: GraduationCap, title: "Graduation Glory", span: "col-span-1" },
    { icon: Sparkles, title: "Anniversary Dreams", span: "col-span-1" },
    { icon: Flower2, title: "Romance Collection", span: "col-span-1" },
    { icon: Trophy, title: "Awards Celebration", span: "col-span-1" },
    { icon: Palette, title: "Artistic Masterpiece", span: "col-span-1" },
  ];

  return (
    <section
      id="gallery"
      className="w-full py-24 bg-gradient-to-b from-white to-zanny-cream/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeUp}
            className="text-headline text-zanny-dark mb-6"
          >
            Our Masterpieces
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-lg text-zanny-dark/60 max-w-2xl mx-auto"
          >
            Every creation tells a unique story. Browse through our portfolio of
            celebrations we&apos;ve been honored to create.
          </motion.p>
        </motion.div>

        {/* Masonry Gallery */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6"
        >
          {galleryItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                variants={staggerItem}
                className={`group ${item.span}`}
              >
                <div className="relative h-48 md:h-52 rounded-2xl overflow-hidden cursor-pointer shadow-soft hover:shadow-premium transition-smooth bg-gradient-to-br from-zanny-red/10 via-zanny-gold/5 to-zanny-cream/10 border border-zanny-gold/20 hover:border-zanny-red/30">
                  {/* Icon Container */}
                  <motion.div
                    className="w-full h-full flex flex-col items-center justify-center text-center p-6 group-hover:bg-gradient-to-br group-hover:from-zanny-red/5 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Icon Badge */}
                    <div className="relative mb-5">
                      <div className="absolute inset-0 bg-gradient-to-br from-zanny-red/20 to-zanny-gold/20 rounded-full blur-xl scale-150" />
                      <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-white to-zanny-cream flex items-center justify-center shadow-premium border border-zanny-gold/30">
                        <Icon
                          size={36}
                          strokeWidth={1.5}
                          className="text-zanny-red"
                        />
                      </div>
                    </div>
                    <h3 className="font-serif font-semibold text-lg text-zanny-dark">
                      {item.title}
                    </h3>
                  </motion.div>

                  {/* Overlay */}
                  <motion.div
                    initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                    whileHover={{ opacity: 1, backdropFilter: "blur(4px)" }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      className="w-12 h-12 rounded-full bg-white text-zanny-red flex items-center justify-center"
                    >
                      <Eye size={24} />
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* View More CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="px-8 py-3 border-2 border-zanny-red text-zanny-red font-serif font-semibold rounded-full hover:bg-zanny-red/5 transition-smooth">
            View Full Gallery
          </button>
        </motion.div>
      </div>
    </section>
  );
}
