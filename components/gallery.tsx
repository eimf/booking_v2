"use client";

import { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const images = [
  {
    url: '/images/gallery1.jpg',
    title: 'Precision Cuts',
  },
  {
    url: 'images/gallery2.jpg',
    title: 'Color Expertise',
  },
  {
    url: '/images/gallery3.jpg',
    title: 'Luxury Treatments',
  },
  {
    url: '/images/gallery4.jpg',
    title: 'Modern Styles',
  },
  {
    url: '/images/gallery5.jpg',
    title: 'Classic Elegance',
  }
];

export function Gallery() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, dragFree: true });
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.scrollTo(currentIndex);
    }
  }, [currentIndex, emblaApi]);

  return (
    <section id="services" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="heading-lg text-center mb-12"
        >
          Our <span className="gold-gradient">Services</span>
        </motion.h2>
        
        <div className="embla" ref={emblaRef}>
          <div className="embla__container flex">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="embla__slide relative w-1/4 aspect-video"
              >
                <Image
                  src={image.url}
                  alt={image.title}
                  fill
                  className="object-cover rounded-lg"
                  style={{ objectPosition: 'center' }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h3 className="heading-lg text-white">{image.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}