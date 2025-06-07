"use client"

import { motion } from "framer-motion"
import { ArrowRight, Star, Users, Award, Zap } from "lucide-react"
import { Link } from "react-router-dom"
import CreativeBackground from "../components/CreativeBackground"
import ImageGallery from "../components/ImageGallery"
import CreativeHeroImage from "../components/CreativeHeroImage"

const Home = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized for speed and performance with modern technologies.",
    },
    {
      icon: Users,
      title: "User Friendly",
      description: "Intuitive design that provides excellent user experience.",
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized for excellence in design and functionality.",
    },
  ]

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechCorp",
      content: "Outstanding work! The website exceeded our expectations in every way.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    },
    {
      name: "Mike Chen",
      role: "Marketing Director",
      content: "Professional, responsive, and delivered exactly what we needed.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    },
    {
      name: "Emily Davis",
      role: "Startup Founder",
      content: "The team brought our vision to life with incredible attention to detail.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    },
  ]

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      {}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden pt-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <CreativeBackground />
        <div className="container-custom relative z-10 text-center px-4">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold mb-6 leading-tight max-w-5xl mx-auto"
          >
            Build Amazing
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              Websites
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl lg:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed px-4"
          >
            Create stunning, responsive websites with modern design and cutting-edge technology. Your digital presence
            starts here.
          </motion.p>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight size={20} />
            </motion.button>

            <Link to="/blog">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-600 transition-all duration-300"
              >
                View Our Work
              </motion.button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16"
          >
            <CreativeHeroImage />
          </motion.div>
        </div>

        {}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="absolute top-1/4 left-1/4 w-64 h-64 border border-white/10 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 border border-white/5 rounded-full"
          />
        </div>
      </section>

      {}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">Why Choose Us?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We combine creativity with technology to deliver exceptional digital experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-8 text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 bg-gradient-to-r from-primary-600 to-primary-800 rounded-xl flex items-center justify-center mx-auto mb-6"
                >
                  <feature.icon size={32} className="text-white" />
                </motion.div>
                <h3 className="text-xl font-heading font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {}
      <ImageGallery />

      {}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.2 }}
                  className="text-3xl md:text-4xl font-bold mb-2"
                >
                  {stat.number}
                </motion.div>
                <div className="text-blue-100 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about our work.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-8"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-500 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {}
      <section className="section-padding bg-secondary-900 text-white">
        <div className="container-custom text-center">
          <motion.div initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's work together to create something amazing. Get in touch with us today.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-lg px-8 py-4"
            >
              Start Your Project
            </motion.button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default Home
