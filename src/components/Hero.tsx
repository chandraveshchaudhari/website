'use client';

import siteConfig from '@/config/config';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { AnimatedText } from '@/types';
import { Linkedin, Github, GraduationCap, BookUser } from 'lucide-react';

interface HeroProps {
  animatedText: AnimatedText;
}

export default function Hero({ animatedText }: HeroProps) {
  const [imageError, setImageError] = useState(false);
  const contact = siteConfig.contact;

  return (
    <motion.section
      className="flex flex-col md:flex-row items-center justify-between py-12"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* LEFT SIDE — TEXT */}
      <div className="md:w-1/2 mb-8 md:mb-0 space-y-3">
        <h1 className="text-5xl font-bold">{siteConfig.personal.name}</h1>
        <h2 className="text-3xl">{siteConfig.personal.title}</h2>

        {/* Animated text */}
        <motion.p
          className="text-2xl italic text-gray-600 dark:text-gray-300"
          key={animatedText}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {animatedText}
        </motion.p>

        {/* Tagline */}
        {siteConfig.personal.tagline && (
          <p className="text-lg text-gray-700 dark:text-gray-300">
            {siteConfig.personal.tagline}
          </p>
        )}

        {/* Contact info */}
        <p className="text-lg">
          Email:{' '}
          <a
            href={`mailto:${contact.email}`}
            className="text-blue-500 hover:underline"
          >
            {contact.email}
          </a>
        </p>
        {siteConfig.personal.location && (
          <p className="text-lg">{siteConfig.personal.location}</p>
        )}

        {/* Social icons row */}
        <div className="flex space-x-4 mt-4">
          {contact.linkedin && (
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6 hover:text-blue-700" />
            </a>
          )}
          {contact.github && (
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6 hover:text-gray-800 dark:hover:text-white" />
            </a>
          )}
          {contact.googleScholar && (
            <a
              href={contact.googleScholar}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Google Scholar"
            >
              <GraduationCap className="w-6 h-6 hover:text-blue-600" />
            </a>
          )}
          {contact.orcid && (
            <a
              href={contact.orcid}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ORCID"
            >
              <BookUser className="w-6 h-6 hover:text-green-600" />
            </a>
          )}
        </div>

        {/* CTA buttons */}
        <div className="flex gap-4 mt-6">
          <a
            href="/assets/CV_Chandravesh.pdf"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            View CV
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* RIGHT SIDE — IMAGE */}
      <div className="md:w-1/2 flex justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          {imageError ? (
            <div className="w-[300px] h-[450px] bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 dark:text-gray-400">
                Image Not Available
              </span>
            </div>
          ) : (
            <Image
              src={siteConfig.personal.image}
              alt={siteConfig.personal.name}
              width={300}
              height={450}
              className="rounded-lg object-cover aspect-[2/3]"
              onError={() => {
                console.error(
                  `Failed to load image: ${siteConfig.personal.image}`
                );
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
