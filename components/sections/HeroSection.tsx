'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { fadeUp, fadeIn, staggerContainer } from '@/lib/animations'

export function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden">
      {/* Mobile background image */}
      <div className="absolute inset-0 lg:hidden">
        <Image
          src="/Hero_cake.jpg"
          alt="Luxury handcrafted celebration cake"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Dark wine overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#3D0F1A]/85 via-[#5C1F2E]/80 to-[#3D0F1A]/90" />
      </div>

      {/* Desktop background */}
      <div className="hidden lg:block absolute inset-0 bg-gradient-to-b from-[#EBC6CC] to-white" />

      {/* Background decoration - desktop only, doesn't suit the photo overlay on mobile */}
      <div className="hidden lg:block absolute top-0 right-0 w-96 h-96 bg-zanny-red/5 rounded-full blur-3xl -z-10" />
      <div className="hidden lg:block absolute bottom-0 left-0 w-96 h-96 bg-zanny-gold/5 rounded-full blur-3xl -z-10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Text Content */}
          <motion.div
            variants={fadeUp}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                variants={fadeUp}
                className="inline-block px-4 py-2 bg-white/10 lg:bg-zanny-red/10 border border-white/30 lg:border-zanny-red/30 rounded-full text-sm font-medium text-white lg:text-zanny-red backdrop-blur-sm lg:backdrop-blur-none"
              >
                Crafted with Excellence
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="text-hero text-white lg:text-zanny-dark leading-tight"
              >
                Celebrate Life's Sweetest Moments
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="text-lg text-white/85 lg:text-zanny-dark/70 leading-relaxed max-w-lg"
              >
                Handcrafted luxury cakes and pastries that transform celebrations into unforgettable memories. Each creation is a masterpiece of flavor and artistry.
              </motion.p>
            </div>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <a
                href="#builder"
                className="px-8 py-3 bg-zanny-red text-white font-serif font-semibold rounded-full hover:bg-opacity-90 transition-smooth shadow-premium flex items-center justify-center gap-2 group"
              >
                Order Your Cake
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <a
                href="#collections"
                className="px-8 py-3 border-2 border-white lg:border-zanny-red text-white lg:text-zanny-red font-serif font-semibold rounded-full hover:bg-white/10 lg:hover:bg-zanny-red/5 transition-smooth text-center"
              >
                View Collections
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeUp}
              className="grid grid-cols-3 gap-4 pt-8 border-t border-white/20 lg:border-zanny-gold/30"
            >
              <div>
                <p className="text-2xl font-serif font-bold text-white lg:text-zanny-red">500+</p>
                <p className="text-sm text-white/70 lg:text-zanny-dark/60">Happy Clients</p>
              </div>
              <div>
                <p className="text-2xl font-serif font-bold text-white lg:text-zanny-red">15</p>
                <p className="text-sm text-white/70 lg:text-zanny-dark/60">Years Experience</p>
              </div>
              <div>
                <p className="text-2xl font-serif font-bold text-white lg:text-zanny-red">100%</p>
                <p className="text-sm text-white/70 lg:text-zanny-dark/60">Satisfaction</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Image - desktop only, side-by-side layout */}
          <motion.div
            variants={fadeIn}
            className="relative h-full min-h-96 lg:min-h-screen hidden lg:block"
          >
            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-premium">
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="relative w-full h-full"
              >
                <Image
                  src="/Hero_cake.jpg"
                  alt="Luxury handcrafted celebration cake"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </motion.div>
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute -top-10 -right-10 w-32 h-32 border-2 border-zanny-gold/30 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              className="absolute -bottom-10 -left-10 w-24 h-24 border-2 border-zanny-red/20 rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <p className="text-sm text-white/70 lg:text-zanny-dark/60">Scroll to explore</p>
        <div className="w-6 h-10 border-2 border-white/40 lg:border-zanny-dark/30 rounded-full flex items-center justify-center">
          <div className="w-1 h-2 bg-white lg:bg-zanny-red rounded-full" />
        </div>
      </motion.div>
    </section>
  )
}