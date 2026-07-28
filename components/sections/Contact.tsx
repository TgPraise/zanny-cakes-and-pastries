'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Mail, Send, User, MessageSquare, ArrowUpRight } from 'lucide-react'
import { fadeUp, fadeIn, staggerContainer, staggerItem } from '@/lib/animations'

function InstagramIcon({ size = 24, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function FacebookIcon({ size = 24, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.891h-2.33v6.987C18.343 21.128 22 16.991 22 12z" />
    </svg>
  )
}

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  const contactMethods = [
    {
      icon: InstagramIcon,
      label: 'Instagram',
      value: '@zanny.cakes',
      href: 'https://instagram.com/zanny.cakes',
    },
    {
      icon: FacebookIcon,
      label: 'Facebook',
      value: 'Zanny Cakes & Pastries',
      href: 'https://facebook.com/zannycakes',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@zanny.com',
      href: 'mailto:hello@zanny.com',
    },
  ]

  return (
    <section
      id="contact"
      className="relative w-full py-24 md:py-32 bg-gradient-to-br from-zanny-cream via-white to-zanny-red/5 overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-[30rem] h-[30rem] bg-zanny-red/10 rounded-full blur-3xl -z-10 -translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-zanny-red/10 rounded-full blur-3xl -z-10 translate-x-1/3 translate-y-1/3" />
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-zanny-gold/5 rounded-full blur-3xl -z-10 -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div variants={fadeUp} className="inline-block mb-4">
            <span className="inline-block px-4 py-2 bg-zanny-red/10 border border-zanny-red/30 rounded-full text-sm font-medium text-zanny-red">
              Let&apos;s Connect
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-headline text-zanny-dark mb-6"
          >
            We&apos;d Love to Hear From You
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-lg text-zanny-dark/60 max-w-2xl mx-auto"
          >
            Whether it&apos;s a wedding, a birthday, or just a craving — reach out and let&apos;s start creating something unforgettable together.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side — Social Contact */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div variants={fadeUp} className="mb-10">
              <h3 className="text-2xl font-serif font-bold text-zanny-dark mb-3">
                Find Us Online
              </h3>
              <p className="text-zanny-dark/60">
                Follow our latest creations or drop us a message directly — we respond fast.
              </p>
            </motion.div>

            {contactMethods.map((method) => {
              const Icon = method.icon
              return (
                <motion.a
                  key={method.label}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={staggerItem}
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.3 }}
                  className="group flex items-center gap-5 p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-zanny-red/20 hover:border-zanny-red/50 shadow-soft hover:shadow-premium transition-smooth"
                >
                  {/* Icon Badge */}
                  <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-zanny-red/20 to-zanny-gold/20 rounded-full blur-lg scale-125 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-zanny-cream to-white flex items-center justify-center shadow-soft border border-zanny-red/20 group-hover:scale-110 transition-transform duration-300">
                      <Icon size={26} strokeWidth={1.5} className="text-zanny-red" />
                    </div>
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <p className="text-xs uppercase tracking-widest text-zanny-dark/50 font-semibold mb-1">
                      {method.label}
                    </p>
                    <p className="font-serif font-semibold text-zanny-dark truncate">
                      {method.value}
                    </p>
                  </div>

                  {/* Arrow */}
                  <ArrowUpRight
                    size={20}
                    className="text-zanny-red opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 -translate-y-0 group-hover:-translate-y-1 transition-all duration-300 flex-shrink-0"
                  />
                </motion.a>
              )
            })}

            {/* Decorative quote / accent */}
            <motion.div
              variants={fadeUp}
              className="mt-10 p-6 rounded-2xl bg-gradient-to-br from-zanny-red to-zanny-red/80 shadow-premium"
            >
              <p className="font-serif text-white/95 italic leading-relaxed">
                &ldquo;Every message is the start of a celebration. We can&apos;t wait to hear about yours.&rdquo;
              </p>
            </motion.div>
          </motion.div>

          {/* Right Side — Contact Form */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            {/* Glow behind card */}
            <div className="absolute -inset-4 bg-gradient-to-br from-zanny-red/15 via-transparent to-zanny-gold/15 rounded-[2rem] blur-2xl -z-10" />

            <div className="relative bg-white/80 backdrop-blur-md rounded-3xl p-8 md:p-10 shadow-premium border border-zanny-red/20">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-zanny-dark mb-2">
                      Send a Message
                    </h3>
                    <p className="text-zanny-dark/60 text-sm">
                      Fill out the form and we&apos;ll get back to you within 24 hours.
                    </p>
                  </div>

                  {/* Name */}
                  <div>
                    <label className="block text-sm font-serif font-semibold text-zanny-dark mb-2">
                      Full Name
                    </label>
                    <div className="relative">
                      <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-zanny-red" />
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
                        className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-zanny-red/20 focus:border-zanny-red outline-none transition-smooth bg-white/50 text-zanny-dark placeholder:text-zanny-dark/30"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-serif font-semibold text-zanny-dark mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-zanny-red" />
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@example.com"
                        className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-zanny-red/20 focus:border-zanny-red outline-none transition-smooth bg-white/50 text-zanny-dark placeholder:text-zanny-dark/30"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-sm font-serif font-semibold text-zanny-dark mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Wedding cake enquiry, custom order..."
                      className="w-full px-4 py-3 rounded-xl border-2 border-zanny-red/20 focus:border-zanny-red outline-none transition-smooth bg-white/50 text-zanny-dark placeholder:text-zanny-dark/30"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-serif font-semibold text-zanny-dark mb-2">
                      Message
                    </label>
                    <div className="relative">
                      <MessageSquare size={18} className="absolute left-4 top-4 text-zanny-red" />
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your celebration..."
                        className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-zanny-red/20 focus:border-zanny-red outline-none transition-smooth bg-white/50 text-zanny-dark placeholder:text-zanny-dark/30 resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-6 py-4 bg-gradient-to-r from-zanny-red to-zanny-red/80 text-white font-serif font-semibold rounded-full hover:opacity-90 transition-smooth shadow-premium flex items-center justify-center gap-2 group"
                  >
                    Send Message
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                  </motion.button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-16"
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-zanny-red/15 to-zanny-gold/15 flex items-center justify-center mb-6">
                    <Send size={32} className="text-zanny-red" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-zanny-dark mb-3">
                    Message Sent!
                  </h3>
                  <p className="text-zanny-dark/60 max-w-sm">
                    Thank you for reaching out. Our team will get back to you within 24 hours.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}