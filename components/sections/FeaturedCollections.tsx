'use client'

import { motion } from 'framer-motion'
import { ProductCard } from '@/components/ProductCard'
import { fadeUp, staggerContainer, staggerItem } from '@/lib/animations'

export function FeaturedCollections() {
  const collections = [
    {
      name: 'Classic Red Velvet',
      category: 'Celebration Cake',
      description: 'Rich layers of velvety red cake with cream cheese frosting',
      price: '₦85,000',
      image: "/Images/classic_red.jpg",
      isNew: false,
    },
    {
      name: 'Chocolate Decadence',
      category: 'Premium Cake',
      description: 'Triple chocolate layers with ganache and gold leaf',
      price: '₦40,000',
      image: "/Images/chocolate.jpg",
      isNew: true,
    },
    {
      name: 'Tropical Paradise',
      category: 'Seasonal Special',
      description: 'Mango, passion fruit, and coconut with fresh berries',
      price: '₦55,000',
      image: "/Images/tropical.jpg",
      isNew: false,
    },
    {
      name: 'Strawberry Dreams',
      category: 'Romance Collection',
      description: 'Delicate strawberry sponge with rose petal accents',
      price: '₦35,000',
      image: "/Images/strawberry.jpg",
      isNew: false,
    },
    {
      name: 'Lavender Elegance',
      category: 'Artisan Collection',
      description: 'Subtle lavender flavor with white chocolate mousse',
      price: '₦120,000',
      image: "/Images/Lavender.jpg",
      isNew: true,
    },
    {
      name: 'Golden Caramel',
      category: 'Premium Cake',
      description: 'Salted caramel layers with honeycomb and edible gold',
      price: '₦35,000',
      image: "/Images/golden.jpg",
      isNew: false,
    },
  ]

  return (
    <section id="collections" className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div variants={fadeUp} className="inline-block mb-4">
            <span className="inline-block px-4 py-2 bg-zanny-red/10 border border-zanny-red/30 rounded-full text-sm font-medium text-zanny-red">
              Our Collections
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-headline text-zanny-dark mb-6"
          >
            Curated Cake Collections
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-lg text-zanny-dark/60 max-w-2xl mx-auto"
          >
            Each design tells a story. Choose from our carefully curated collections or create your own bespoke masterpiece.
          </motion.p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {collections.map((product) => (
            <motion.div key={product.name} variants={staggerItem}>
              <ProductCard {...product} />
            </motion.div>
          ))}
        </motion.div>

        {/* View All CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center pt-12"
        >
          <button className="px-8 py-3 border-2 border-zanny-red text-zanny-red font-serif font-semibold rounded-full hover:bg-zanny-red/5 transition-smooth">
            View Complete Menu
          </button>
        </motion.div>
      </div>
    </section>
  )
}
