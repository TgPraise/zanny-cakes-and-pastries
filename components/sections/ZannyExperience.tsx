'use client'

import { motion } from 'framer-motion'
import { MessageSquare, Palette, Flame, Sparkles, Send } from 'lucide-react'
import { staggerContainer, staggerItem, fadeUp } from '@/lib/animations'

export function ZannyExperience() {
  const steps = [
    {
      icon: MessageSquare,
      number: '01',
      title: 'Consultation',
      description: 'Share your vision and celebration details in a personalized consultation.',
      color: 'from-zanny-red/20 to-zanny-red/10',
    },
    {
      icon: Palette,
      number: '02',
      title: 'Design',
      description: 'Our pastry chefs sketch and refine your custom design with your input.',
      color: 'from-zanny-gold/20 to-zanny-gold/10',
    },
    {
      icon: Flame,
      number: '03',
      title: 'Baking',
      description: 'Fresh ingredients are carefully combined and baked to perfection.',
      color: 'from-zanny-red/20 to-zanny-cream/10',
    },
    {
      icon: Sparkles,
      number: '04',
      title: 'Decoration',
      description: 'Intricate hand-piped designs and premium finishes bring it to life.',
      color: 'from-zanny-gold/20 to-zanny-cream/10',
    },
    {
      icon: Send,
      number: '05',
      title: 'Delivery',
      description: 'Your masterpiece arrives safely and on time, ready to impress.',
      color: 'from-zanny-red/10 to-zanny-red/20',
    },
  ]

  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2
            variants={fadeUp}
            className="text-headline text-zanny-dark mb-6"
          >
            The Zanny Experience
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-lg text-zanny-dark/60 max-w-2xl mx-auto"
          >
            From your first idea to the final celebration, we guide you through every step with care and precision.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-zanny-red via-zanny-gold to-zanny-red transform -translate-x-1/2" />

          {/* Timeline Steps */}
          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={step.number}
                  variants={staggerItem}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                >
                  {/* Left/Right Content */}
                  <div className={`${isEven ? 'lg:order-first' : 'lg:order-last'}`}>
                    <div className="group">
                      <div className={`bg-gradient-to-br ${step.color} p-8 rounded-2xl border border-zanny-gold/30 hover:border-zanny-red/30 transition-smooth`}>
                        <div className="flex items-start gap-4">
                          <motion.div
                            whileHover={{ scale: 1.1, rotate: -5 }}
                            className="flex-shrink-0 w-14 h-14 rounded-full bg-white flex items-center justify-center text-zanny-red shadow-soft"
                          >
                            <Icon size={28} />
                          </motion.div>
                          <div>
                            <h3 className="font-serif font-bold text-xl text-zanny-dark mb-2">
                              {step.title}
                            </h3>
                            <p className="text-zanny-dark/70">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step Number Circle */}
                  <div className="hidden lg:flex justify-center">
                    <motion.div
                      whileHover={{ scale: 1.15 }}
                      className="w-20 h-20 rounded-full bg-white border-4 border-zanny-red flex items-center justify-center shadow-premium"
                    >
                      <span className="font-serif font-bold text-2xl text-zanny-red">
                        {step.number}
                      </span>
                    </motion.div>
                  </div>

                  {/* Mobile Step Number */}
                  <div className="lg:hidden flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-zanny-red text-white flex items-center justify-center font-serif font-bold">
                      {index + 1}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* CTA */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <button className="px-8 py-3 bg-zanny-red text-white font-serif font-semibold rounded-full hover:bg-opacity-90 transition-smooth shadow-premium">
              Start Your Journey
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
