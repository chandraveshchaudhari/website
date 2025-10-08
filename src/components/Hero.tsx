'use client';

import siteConfig from '@/config/config';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { AnimatedText } from '@/types';

interface HeroProps {
  animatedText: AnimatedText;
}

export default function Hero({ animatedText }: HeroProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.section
      className="flex flex-col md:flex-row items-center justify-between py-12"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h1 className="text-5xl font-bold mb-2">{siteConfig.personal.name}</h1>
        <h2 className="text-3xl mb-4">{siteConfig.personal.title}</h2>
        <motion.p
          className="text-2xl italic mb-4"
          key={animatedText}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {animatedText}
        </motion.p>
        <p className="text-lg mb-2">
          Email: <a href={`mailto:${siteConfig.personal.email}`} className="text-blue-500 hover:underline">{siteConfig.personal.email}</a>
        </p>
        <p className="text-lg">Location: {siteConfig.personal.location}</p>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          {imageError ? (
            <div className="w-[300px] h-[450px] bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 dark:text-gray-400">Image Not Available</span>
            </div>
          ) : (
            <Image
              src={siteConfig.personal.image}
              alt={siteConfig.personal.name}
              width={300}
              height={450}
              className="rounded-lg object-cover aspect-[2/3]"
              onError={(e) => {
                console.error(`Failed to load image: ${siteConfig.personal.image}`);
                setImageError(true);
              }}
              priority
            />
          )}
        </motion.div>
      </div>
    </motion.section>
  );
}