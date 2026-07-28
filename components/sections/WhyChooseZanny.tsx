'use client'

import { motion } from 'framer-motion'
import { Leaf, Clock, Sparkles, Users, Truck, Shield } from 'lucide-react'
import { staggerContainer, staggerItem, fadeUp } from '@/lib/animations'

export function WhyChooseZanny() {
  const benefits = [
    {
      icon: Leaf,
      title: 'Organic Ingredients',
      description: 'We source only the finest organic and fair-trade ingredients from trusted suppliers.',
    },
    {
      icon: Clock,
      title: 'Fresh Daily',
      description: 'Every cake is baked fresh to order, never pre-made, ensuring peak flavor and texture.',
    },
    {
      icon: Sparkles,
      title: 'Artisan Craftsmanship',
      description: 'Each design is handcrafted by our award-winning pastry chefs with meticulous attention to detail.',
    },
    {
      icon: Users,
      title: 'Personal Consultations',
      description: 'We work closely with you to bring your vision to life, with unlimited revisions.',
    },
    {
      icon: Truck,
      title: 'Professional Delivery',
      description: 'Careful handling and timely delivery to ensure your cake arrives in pristine condition.',
    },
    {
      icon: Shield,
      title: '100% Satisfaction',
      description: 'Not completely delighted? We&apos;ll make it right or offer a full refund, no questions asked.',
    },
  ]

  return (
    <section className="w-full py-24 bg-gradient-to-b from-zanny-cream/50 to-white">
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
            Why Choose Zanny?
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-lg text-zanny-dark/60 max-w-2xl mx-auto"
          >
            We&apos;re not just baking cakes—we&apos;re creating memories that will be savored for years.
          </motion.p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {benefits.map((benefit) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={benefit.title}
                variants={staggerItem}
                className="group"
              >
                <div className="p-8 rounded-2xl bg-white border border-zanny-gold/20 hover:border-zanny-red/30 transition-smooth shadow-soft hover:shadow-premium h-full">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-zanny-red/10 to-zanny-gold/10 text-zanny-red mb-6"
                  >
                    <Icon size={32} />
                  </motion.div>

                  {/* Title */}
                  <h3 className="font-serif font-bold text-xl text-zanny-dark mb-3">
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="text-zanny-dark/70 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
