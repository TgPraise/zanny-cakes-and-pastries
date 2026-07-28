'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { fadeUp, scaleIn } from '@/lib/animations'

export function CTABanner() {
  return (
    <section className="w-full py-24 bg-gradient-to-r from-zanny-red via-zanny-red to-zanny-dark relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-zanny-gold/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-zanny-cream/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          {/* Headline */}
          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight"
          >
            Ready to Create Magic?
          </motion.h2>

          {/* Subheading */}
          <motion.p
            variants={fadeUp}
            className="text-xl md:text-2xl text-zanny-cream/90 max-w-2xl mx-auto"
          >
            Let&apos;s turn your celebration dreams into an edible masterpiece that everyone will remember.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={scaleIn}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-white text-zanny-red font-serif font-bold text-lg rounded-full hover:shadow-premium transition-smooth flex items-center justify-center gap-2 group"
            >
              Order Your Cake
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 border-2 border-white text-white font-serif font-bold text-lg rounded-full hover:bg-white/10 transition-smooth"
            >
              Schedule Consultation
            </motion.button>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap justify-center gap-6 pt-8 text-zanny-cream/80 text-sm"
          >
            <div className="flex items-center gap-2">
              <span>✓</span>
              <span>No Hidden Charges</span>
            </div>
            <div className="flex items-center gap-2">
              <span>✓</span>
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <span>✓</span>
              <span>100% Satisfaction</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
