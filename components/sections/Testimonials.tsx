'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { fadeUp, staggerContainer, staggerItem } from '@/lib/animations'

export function Testimonials() {
  const testimonials = [
    {
      name: 'Chioma Okafor',
      role: 'Wedding Bride',
      text: 'Zanny made our wedding day absolutely unforgettable. The cake was not just beautiful—it was the most delicious thing our guests had ever tasted.',
      rating: 5,
      initials: 'CO',
    },
    {
      name: 'Ahmed Hassan',
      role: 'Corporate Event Organizer',
      text: 'We&apos;ve worked with Zanny for three years now. Their professionalism, creativity, and attention to detail is unmatched in Lagos.',
      rating: 5,
      initials: 'AH',
    },
    {
      name: 'Zainab Adeyemi',
      role: 'Birthday Celebration Host',
      text: 'My daughter&apos;s birthday cake exceeded all expectations. The design was exactly what we imagined, and the taste was divine!',
      rating: 5,
      initials: 'ZA',
    },
    {
      name: 'Tunde Omotayo',
      role: 'Business Owner',
      text: 'Zanny delivered the perfect dessert for our product launch. Their cakes are conversation starters—literally.',
      rating: 5,
      initials: 'TO',
    },
    {
      name: 'Nkechi Obi',
      role: 'Wedding Planner',
      text: 'As a wedding planner, I recommend Zanny to every couple. They&apos;re reliable, creative, and absolutely committed to excellence.',
      rating: 5,
      initials: 'NO',
    },
    {
      name: 'David Okonkwo',
      role: 'Hotel Manager',
      text: 'Guests consistently ask where our cakes come from. Zanny&apos;s creations have become our signature offering.',
      rating: 5,
      initials: 'DO',
    },
  ]

  return (
    <section className="w-full py-24 bg-zanny-dark">
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
            className="text-headline text-zanny-cream mb-6"
          >
            Loved by Our Clients
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-lg text-zanny-cream/70 max-w-2xl mx-auto"
          >
            Join hundreds of satisfied customers who have celebrated their special moments with us.
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              variants={staggerItem}
              className="group"
            >
              <div className="p-8 rounded-2xl bg-white/5 border border-zanny-cream/20 hover:border-zanny-gold/40 transition-smooth backdrop-blur-sm hover:bg-white/10">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-zanny-gold text-zanny-gold"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-zanny-cream/90 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-zanny-red to-zanny-gold flex items-center justify-center text-white font-serif font-bold text-sm"
                  >
                    {testimonial.initials}
                  </motion.div>
                  <div>
                    <p className="font-serif font-semibold text-zanny-cream">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-zanny-cream/60">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
