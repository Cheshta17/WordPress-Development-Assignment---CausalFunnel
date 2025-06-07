"use client"

import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Calendar, User, ArrowRight, Tag } from "lucide-react"

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      slug: "modern-web-development-trends-2024",
      title: "Modern Web Development Trends in 2024",
      excerpt:
        "Explore the latest trends shaping the future of web development, from AI integration to progressive web apps.",
      author: "John Doe",
      date: "2024-01-15",
      category: "Web Development",
      tags: ["React", "TypeScript", "AI"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      readTime: "5 min read",
    },
    {
      id: 2,
      slug: "responsive-design-best-practices",
      title: "Responsive Design Best Practices",
      excerpt:
        "Learn how to create websites that look great on all devices with these essential responsive design techniques.",
      author: "Jane Smith",
      date: "2024-01-10",
      category: "Design",
      tags: ["CSS", "Mobile", "UX"],
      image: "https://images.unsplash.com/photo-1559028006-448665bd7c7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      readTime: "7 min read",
    },
    {
      id: 3,
      slug: "javascript-performance-optimization",
      title: "JavaScript Performance Optimization",
      excerpt:
        "Discover proven strategies to optimize your JavaScript code for better performance and user experience.",
      author: "Mike Johnson",
      date: "2024-01-05",
      category: "Performance",
      tags: ["JavaScript", "Optimization", "Performance"],
      image:
        "https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      readTime: "6 min read",
    },
    {
      id: 4,
      slug: "css-grid-vs-flexbox",
      title: "CSS Grid vs Flexbox: When to Use Which",
      excerpt:
        "A comprehensive guide to understanding the differences between CSS Grid and Flexbox and when to use each.",
      author: "Sarah Wilson",
      date: "2024-01-01",
      category: "CSS",
      tags: ["CSS", "Grid", "Flexbox"],
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      readTime: "8 min read",
    },
    {
      id: 5,
      slug: "react-hooks-deep-dive",
      title: "React Hooks: A Deep Dive",
      excerpt: "Master React Hooks with this comprehensive guide covering useState, useEffect, and custom hooks.",
      author: "David Brown",
      date: "2023-12-28",
      category: "React",
      tags: ["React", "Hooks", "JavaScript"],
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      readTime: "10 min read",
    },
    {
      id: 6,
      slug: "web-accessibility-guide",
      title: "Complete Guide to Web Accessibility",
      excerpt: "Learn how to make your websites accessible to everyone with this comprehensive accessibility guide.",
      author: "Emily Davis",
      date: "2023-12-25",
      category: "Accessibility",
      tags: ["A11y", "WCAG", "Inclusive Design"],
      image:
        "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      readTime: "9 min read",
    },
  ]

  const categories = ["All", "Web Development", "Design", "Performance", "CSS", "React", "Accessibility"]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      {}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom text-center">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-heading font-bold mb-6"
          >
            Our Blog
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-blue-100 max-w-2xl mx-auto"
          >
            Stay updated with the latest trends, tips, and insights in web development and design.
          </motion.p>
        </div>
      </section>

      {}
      <section className="py-8 bg-white border-b">
        <div className="container-custom">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  index === 0
                    ? "bg-primary-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-primary-100 hover:text-primary-700"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
                    <div className="flex items-center space-x-1">
                      <User size={16} />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar size={16} />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="flex items-center space-x-1 text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                        >
                          <Tag size={12} />
                          <span>{tag}</span>
                        </span>
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>

                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium mt-4 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Read More</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <motion.div initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Subscribe to Our Newsletter</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get the latest articles and insights delivered straight to your inbox.
            </p>
            <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default Blog
