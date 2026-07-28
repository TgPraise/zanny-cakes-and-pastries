'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { fadeUp, staggerContainer, staggerItem } from '@/lib/animations'

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: 'How far in advance should I place an order?',
      answer: 'We recommend ordering at least 2-3 weeks in advance for custom designs. For seasonal events like weddings, 4-6 weeks is ideal to ensure we can accommodate your vision perfectly.',
    },
    {
      question: 'Do you offer dietary accommodations?',
      answer: 'Absolutely! We can create sugar-free, gluten-free, vegan, and dairy-free options without compromising on taste or beauty. Let us know your requirements during consultation.',
    },
    {
      question: 'What areas do you deliver to?',
      answer: 'We deliver throughout Lagos and its environs. For orders outside Lagos, we can arrange special packaging and courier services. Contact us for details.',
    },
    {
      question: 'Can I have a tasting before ordering?',
      answer: 'Yes! We offer complimentary tasting sessions for custom orders over ₦20,000. You can sample up to three flavors and fillings before making your final decision.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept bank transfers, card payments, and cash on delivery for Lagos residents. A 30% deposit is required to secure your date, with the balance due before delivery.',
    },
    {
      question: 'What if I need to make changes to my order?',
      answer: 'We offer unlimited revisions during the design phase. Once baking begins, minor changes can still be accommodated. Major changes may incur an additional fee.',
    },
  ]

  return (
    <section id="faq" className="w-full py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-lg text-zanny-dark/60"
          >
            Everything you need to know about ordering from Zanny.
          </motion.p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="border border-zanny-gold/30 rounded-2xl overflow-hidden shadow-soft hover:shadow-premium transition-smooth"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left bg-white hover:bg-zanny-cream/30 transition-smooth group"
              >
                <h3 className="font-serif font-semibold text-lg text-zanny-dark group-hover:text-zanny-red transition-smooth">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown
                    size={24}
                    className="text-zanny-red flex-shrink-0"
                  />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 bg-zanny-cream/30 border-t border-zanny-gold/20 text-zanny-dark/80 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Still have questions? */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-zanny-dark/70 mb-4">
            Didn&apos;t find what you&apos;re looking for?
          </p>
          <button className="px-8 py-3 bg-zanny-red text-white font-serif font-semibold rounded-full hover:bg-opacity-90 transition-smooth shadow-premium">
            Contact Our Team
          </button>
        </motion.div>
      </div>
    </section>
  )
}
