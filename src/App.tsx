"use client"

import { Routes, Route } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Blog from "./pages/Blog"
import BlogPost from "./pages/BlogPost"
import ScrollToTop from "./components/ScrollToTop"

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ScrollToTop />
      <Header />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  )
}

export default App
