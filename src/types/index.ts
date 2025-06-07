import type React from "react"
export interface BlogPost {
  id: number
  slug: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  category: string
  tags: string[]
  image: string
  readTime: string
}

export interface Feature {
  icon: React.ComponentType<{ size?: number; className?: string }>
  title: string
  description: string
}

export interface Testimonial {
  name: string
  role: string
  content: string
  rating: number
}

export interface NavigationItem {
  name: string
  href: string
  icon: React.ComponentType<{ size?: number; className?: string }>
}
