"use client";

import { motion } from "framer-motion";
import { Heart, ShoppingCart } from "lucide-react";
import { hoverLift } from "@/lib/animations";
import Image from "next/image";

interface ProductCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  isNew?: boolean;
}

export function ProductCard({
  name,
  description,
  price,
  image,
  category,
  isNew = false,
}: ProductCardProps) {
  return (
    <motion.div variants={hoverLift} className="group cursor-pointer">
      <div className="relative rounded-2xl overflow-hidden bg-zanny-cream shadow-soft hover:shadow-premium transition-smooth">
        {/* Image Container */}
        <div className="relative h-130 bg-gradient-to-br from-zanny-red/10 via-zanny-gold/5 to-zanny-cream overflow-hidden">
          <motion.div
            className="w-full h-full relative"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src={image}
              alt={name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover"
            />
          </motion.div>

          {/* New Badge */}
          {isNew && (
            <div className="absolute top-4 right-4 px-3 py-1 bg-zanny-red text-white text-xs font-semibold rounded-full">
              New
            </div>
          )}

          {/* Wishlist Button */}
          <button className="absolute top-4 left-4 p-2 rounded-full bg-white/80 backdrop-blur-sm text-zanny-red hover:bg-white transition-smooth opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0">
            <Heart size={18} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-xs uppercase tracking-widest text-zanny-dark/60 font-semibold mb-2">
            {category}
          </p>
          <h3 className="font-serif font-bold text-lg text-zanny-dark mb-2">
            {name}
          </h3>
          <p className="text-sm text-zanny-dark/70 mb-4 line-clamp-2">
            {description}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-zanny-gold/20">
            <span className="text-lg font-serif font-bold text-zanny-red">
              {price}
            </span>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-lg bg-zanny-red/10 text-zanny-red hover:bg-zanny-red hover:text-white transition-smooth"
            >
              <ShoppingCart size={18} />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
