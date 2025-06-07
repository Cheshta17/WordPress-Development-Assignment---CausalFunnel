"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion } from "framer-motion"
import { Menu, X, Home, BookOpen, Mail, User } from "lucide-react"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigation = [
    { name: "Home", href: "/", icon: Home },
    { name: "Blog", href: "/blog", icon: BookOpen },
    { name: "About", href: "/about", icon: User },
    { name: "Contact", href: "/contact", icon: Mail },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white/10 backdrop-blur-sm"
      }`}
    >
      <nav className="container-custom">
        <div className="flex justify-between items-center py-6">
          {}
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-10 h-10 bg-gradient-to-r from-primary-600 to-primary-800 rounded-lg flex items-center justify-center"
            >
              <span className="text-white font-bold text-xl">W</span>
            </motion.div>
            <span className="text-xl font-heading font-bold text-gray-900">WordMap</span>
          </Link>

          {}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-300 ${
                  location.pathname === item.href
                    ? "text-primary-600 bg-primary-50"
                    : "text-gray-700 hover:text-primary-600 hover:bg-gray-100"
                }`}
              >
                <item.icon size={18} />
                <span className="font-medium">{item.name}</span>
              </Link>
            ))}
          </div>

          {}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {}
        <motion.div initial={false} animate={{ height: isOpen ? "auto" : 0 }} className="md:hidden overflow-hidden">
          <div className="py-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center space-x-2 px-4 py-3 rounded-lg transition-all duration-300 ${
                  location.pathname === item.href
                    ? "text-primary-600 bg-primary-50"
                    : "text-gray-700 hover:text-primary-600 hover:bg-gray-100"
                }`}
              >
                <item.icon size={20} />
                <span className="font-medium">{item.name}</span>
              </Link>
            ))}
          </div>
        </motion.div>
      </nav>
    </motion.header>
  )
}

export default Header
