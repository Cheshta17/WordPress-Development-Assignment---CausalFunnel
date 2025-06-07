"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      alt: "Creative Design Process",
      title: "Creative Design",
    },
    {
      src: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      alt: "Modern Development",
      title: "Development",
    },
    {
      src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      alt: "Team Collaboration",
      title: "Collaboration",
    },
    {
      src: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      alt: "Digital Innovation",
      title: "Innovation",
    },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">Our Creative Process</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Take a look at how we bring ideas to life through our creative and technical expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold text-lg">{image.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={selectedImage}
              alt="Enlarged view"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default ImageGallery
