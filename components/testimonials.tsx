"use client";

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    text: "The attention to detail and personalized service at Tableau de Katia is unmatched. I've never felt more confident with my hair.",
    author: "Sarah Mitchell",
    role: "Fashion Editor"
  },
  {
    text: "A truly luxurious experience from start to finish. The stylists here are true artists who understand exactly what you want.",
    author: "James Wilson",
    role: "Executive"
  },
  {
    text: "Found my forever salon. The ambiance, the expertise, and the results are consistently exceptional.",
    author: "Emma Thompson",
    role: "Interior Designer"
  }
];

export function Testimonials() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg">
            Client <span className="gold-gradient">Testimonials</span>
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-900 p-8 rounded-lg relative"
            >
              <Quote className="absolute top-4 right-4 text-gold-500/20 h-8 w-8" />
              <p className="body-text mb-6 text-gray-300">{testimonial.text}</p>
              <div>
                <p className="font-cormorant text-xl text-gold-400">
                  {testimonial.author}
                </p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}