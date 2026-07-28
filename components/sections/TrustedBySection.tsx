'use client'

import { motion } from 'framer-motion'
import { Award, Sparkles, Users } from 'lucide-react'
import { fadeUp, staggerContainer, staggerItem } from '@/lib/animations'

export function TrustedBySection() {
  const partners = ['Elegance Events', 'Premium Weddings', 'Gourmet Guild', 'Celebration Co.', 'Luxury Events']

  const achievements = [
    {
      icon: Award,
      title: 'Award Winning',
      description: 'Recognized for excellence in artisan bakery'
    },
    {
      icon: Sparkles,
      title: 'Premium Quality',
      description: 'Only finest organic and imported ingredients'
    },
    {
      icon: Users,
      title: 'Expert Craftsmanship',
      description: 'Passionate bakers with decades of experience'
    },
  ]

  return (
    <section id="trusted" className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Trusted by Lagos' Finest
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-lg text-zanny-dark/60 max-w-2xl mx-auto"
          >
            We've had the honor of creating unforgettable moments for celebrated events and discerning clients.
          </motion.p>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {achievements.map((achievement) => {
            const Icon = achievement.icon
            return (
              <motion.div
                key={achievement.title}
                variants={staggerItem}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-zanny-red/10 text-zanny-red mb-4">
                  <Icon size={28} />
                </div>
                <h3 className="font-serif font-semibold text-lg text-zanny-dark mb-2">
                  {achievement.title}
                </h3>
                <p className="text-zanny-dark/60">
                  {achievement.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Partner Logos */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-8 pt-12 border-t border-zanny-gold/30"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.6 }}
              transition={{ delay: index * 0.1 }}
              className="px-4 py-2 text-sm font-medium text-zanny-dark/50 hover:text-zanny-dark transition-smooth"
            >
              {partner}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
