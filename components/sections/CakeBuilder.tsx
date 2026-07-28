'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'
import { fadeUp, staggerContainer, staggerItem } from '@/lib/animations'

export function CakeBuilder() {
  const [selections, setSelections] = useState({
    size: 'medium',
    flavor: 'chocolate',
    filling: 'buttercream',
    topping: 'ganache',
  })

  const options = {
    size: [
      { value: 'small', label: '6" Small', price: 15000 },
      { value: 'medium', label: '8" Medium', price: 22000 },
      { value: 'large', label: '10" Large', price: 32000 },
      { value: 'xlarge', label: '12" Extra Large', price: 45000 },
    ],
    flavor: [
      { value: 'chocolate', label: 'Dark Chocolate', price: 0 },
      { value: 'vanilla', label: 'Madagascar Vanilla', price: 2000 },
      { value: 'carrot', label: 'Spiced Carrot', price: 3000 },
      { value: 'redvelvet', label: 'Red Velvet', price: 4000 },
    ],
    filling: [
      { value: 'buttercream', label: 'Classic Buttercream', price: 0 },
      { value: 'mousse', label: 'Chocolate Mousse', price: 3000 },
      { value: 'custard', label: 'French Custard', price: 2500 },
      { value: 'ganache', label: 'Silky Ganache', price: 4000 },
    ],
    topping: [
      { value: 'ganache', label: 'Ganache', price: 0 },
      { value: 'fondant', label: 'Fondant', price: 5000 },
      { value: 'macaron', label: 'Macarons', price: 6000 },
      { value: 'fresh', label: 'Fresh Berries', price: 3500 },
    ],
  }

  const calculatePrice = () => {
    const baseSize = options.size.find((o) => o.value === selections.size)?.price || 0
    const flavorAdd = options.flavor.find((o) => o.value === selections.flavor)?.price || 0
    const fillingAdd = options.filling.find((o) => o.value === selections.filling)?.price || 0
    const toppingAdd = options.topping.find((o) => o.value === selections.topping)?.price || 0
    return baseSize + flavorAdd + fillingAdd + toppingAdd
  }

  return (
    <section id="builder" className="w-full py-24 bg-gradient-to-br from-zanny-cream/50 via-white to-zanny-cream/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Build Your Dream Cake
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-lg text-zanny-dark/60"
          >
            Customize every layer to create your perfect celebration cake.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Preview */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="relative w-full h-[32rem] rounded-3xl overflow-hidden shadow-premium bg-gradient-to-br from-zanny-red/10 via-zanny-gold/5 to-zanny-cream"
            >
              <Image
                src="/Images/cake-preview.jpg"
                alt="Custom cake preview"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

              {/* Caption overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6 pt-16">
                <p className="text-white font-serif font-semibold">
                  {options.size.find((o) => o.value === selections.size)?.label}
                </p>
                <p className="text-sm text-white/80 mt-1">
                  {options.flavor.find((o) => o.value === selections.flavor)?.label}
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Customizer */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Size */}
            <motion.div variants={staggerItem}>
              <label className="block text-sm font-serif font-semibold text-zanny-dark mb-3">
                Cake Size
              </label>
              <div className="grid grid-cols-2 gap-2">
                {options.size.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setSelections({ ...selections, size: opt.value })}
                    className={`px-4 py-3 rounded-lg font-medium text-sm transition-smooth border-2 ${
                      selections.size === opt.value
                        ? 'border-zanny-red bg-zanny-red text-white'
                        : 'border-zanny-gold/30 text-zanny-dark hover:border-zanny-red/50'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Flavor */}
            <motion.div variants={staggerItem}>
              <label className="block text-sm font-serif font-semibold text-zanny-dark mb-3">
                Flavor
              </label>
              <div className="grid grid-cols-2 gap-2">
                {options.flavor.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setSelections({ ...selections, flavor: opt.value })}
                    className={`px-4 py-3 rounded-lg font-medium text-sm transition-smooth border-2 ${
                      selections.flavor === opt.value
                        ? 'border-zanny-red bg-zanny-red text-white'
                        : 'border-zanny-gold/30 text-zanny-dark hover:border-zanny-red/50'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Filling */}
            <motion.div variants={staggerItem}>
              <label className="block text-sm font-serif font-semibold text-zanny-dark mb-3">
                Filling
              </label>
              <div className="grid grid-cols-2 gap-2">
                {options.filling.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setSelections({ ...selections, filling: opt.value })}
                    className={`px-4 py-3 rounded-lg font-medium text-sm transition-smooth border-2 ${
                      selections.filling === opt.value
                        ? 'border-zanny-red bg-zanny-red text-white'
                        : 'border-zanny-gold/30 text-zanny-dark hover:border-zanny-red/50'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Topping */}
            <motion.div variants={staggerItem}>
              <label className="block text-sm font-serif font-semibold text-zanny-dark mb-3">
                Topping
              </label>
              <div className="grid grid-cols-2 gap-2">
                {options.topping.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setSelections({ ...selections, topping: opt.value })}
                    className={`px-4 py-3 rounded-lg font-medium text-sm transition-smooth border-2 ${
                      selections.topping === opt.value
                        ? 'border-zanny-red bg-zanny-red text-white'
                        : 'border-zanny-gold/30 text-zanny-dark hover:border-zanny-red/50'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Price & CTA */}
            <motion.div
              variants={staggerItem}
              className="pt-6 border-t border-zanny-gold/30 space-y-4"
            >
              <div className="flex justify-between items-center">
                <span className="text-zanny-dark/70">Estimated Price:</span>
                <span className="text-3xl font-serif font-bold text-zanny-red">
                  ₦{calculatePrice().toLocaleString()}
                </span>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-3 bg-zanny-red text-white font-serif font-semibold rounded-full hover:bg-opacity-90 transition-smooth shadow-premium"
              >
                Place order
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}