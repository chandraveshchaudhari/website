'use client';

import siteConfig from '@/config/config';
import { motion } from 'framer-motion';

export default function EducationPage() {
  const education = siteConfig.education;

  return (
    <main className="py-12">
      {/* Page Title */}
      <motion.h1
        className="text-4xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Education
      </motion.h1>

      {/* Education Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <h2 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">
              {edu.degree}
            </h2>
            <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-1">
              {edu.institution}
            </p>
            <p className="text-md text-gray-600 dark:text-gray-400">
              {edu.year}
            </p>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
