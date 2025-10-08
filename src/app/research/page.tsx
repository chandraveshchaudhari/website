'use client';

import siteConfig from "@/config/config";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Research as ResearchType } from '@/types';

interface ResearchProps {
  research: ResearchType[];
}

export default function Research({ research = siteConfig.research }: ResearchProps) {
  return (
    <main className="py-12">
      <motion.h1
        className="text-4xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Research
      </motion.h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {research.map((res, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <h2 className="text-2xl font-semibold mb-2">{res.title}</h2>
            <p className="text-lg mb-1">{res.journal}</p>
            <Link
              href={res.link}
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read More
            </Link>
          </motion.div>
        ))}
      </div>
    </main>
  );
}