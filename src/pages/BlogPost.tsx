"use client"

import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import {
  Calendar,
  User,
  ArrowLeft,
  Share2,
  Heart,
  MessageCircle,
  Tag,
} from "lucide-react"

const BlogPost = () => {
  const post = {
    title: "Modern Web Development Trends in 2024",
    content: `
      <p>The web development landscape continues to evolve at a rapid pace, with new technologies and methodologies emerging regularly. As we progress through 2024, several key trends are shaping how we build and interact with web applications.</p>
      
      <h2>1. AI-Powered Development Tools</h2>
      <p>Artificial Intelligence is revolutionizing the development process. From code completion tools like GitHub Copilot to automated testing and debugging, AI is making developers more productive than ever before.</p>
      
      <h2>2. Progressive Web Apps (PWAs)</h2>
      <p>PWAs continue to bridge the gap between web and native applications, offering offline functionality, push notifications, and app-like experiences directly through the browser.</p>
      
      <h2>3. Serverless Architecture</h2>
      <p>The serverless paradigm is gaining momentum, allowing developers to focus on code rather than infrastructure management. This approach offers better scalability and cost-effectiveness.</p>
      
      <h2>4. WebAssembly (WASM)</h2>
      <p>WebAssembly is enabling high-performance applications in the browser, allowing languages like Rust, C++, and Go to run at near-native speeds on the web.</p>
      
      <h2>Conclusion</h2>
      <p>These trends represent just the beginning of what's possible in modern web development. As technology continues to advance, we can expect even more exciting innovations in the coming years.</p>
    `,
    author: "John Doe",
    date: "2024-01-15",
    category: "Web Development",
    tags: ["React", "TypeScript", "AI", "PWA", "WebAssembly"],
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    readTime: "5 min read",
  }

  const relatedPosts = [
    {
      title: "Responsive Design Best Practices",
      slug: "responsive-design-best-practices",
      image:
        "https://images.unsplash.com/photo-1559028006-448665bd7c7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      title: "JavaScript Performance Optimization",
      slug: "javascript-performance-optimization",
      image:
        "https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      title: "CSS Grid vs Flexbox",
      slug: "css-grid-vs-flexbox",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      {}
      <div className="container-custom py-8">
        <Link
          to="/blog"
          className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium"
        >
          <ArrowLeft size={20} />
          <span>Back to Blog</span>
        </Link>
      </div>

      {}
      <article className="container-custom max-w-4xl mx-auto">
        <motion.header
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="mb-6">
            <span className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-medium">
              {post.category}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
            <div className="flex items-center space-x-2">
              <User size={18} />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar size={18} />
              <span>{new Date(post.date).toLocaleDateString()}</span>
            </div>
            <span>{post.readTime}</span>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="flex items-center space-x-1 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
              >
                <Tag size={14} />
                <span>{tag}</span>
              </span>
            ))}
          </div>
        </motion.header>

        {}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
          />
        </motion.div>

        {}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="prose prose-lg max-w-none mb-12"
        >
          <div
            className="text-gray-700 leading-relaxed space-y-6"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </motion.div>

        {}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center justify-between border-t border-b border-gray-200 py-6 mb-12"
        >
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 text-gray-600 hover:text-red-500 transition-colors"
            >
              <Heart size={20} />
              <span>Like</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors"
            >
              <MessageCircle size={20} />
              <span>Comment</span>
            </motion.button>
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors"
          >
            <Share2 size={20} />
            <span>Share</span>
          </motion.button>
        </motion.div>

        {}
        <motion.section
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-8">
            Related Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost, index) => (
              <motion.div
                                key={relatedPost.slug}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                className="card overflow-hidden group"
              >
                <img
                  src={relatedPost.image || "/placeholder.svg"}
                  alt={relatedPost.title}
                  className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                    {relatedPost.title}
                  </h3>
                  <Link
                    to={`/blog/${relatedPost.slug}`}
                    className="text-primary-600 hover:text-primary-700 text-sm font-medium mt-2 inline-block"
                  >
                    Read More →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </article>
    </motion.div>
  )
}

export default BlogPost
