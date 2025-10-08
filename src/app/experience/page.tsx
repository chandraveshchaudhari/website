'use client';

import siteConfig from "@/config/config";
import { motion } from 'framer-motion';

export default function ExperiencePage() {
  const experience = siteConfig.experience;

  return (
    <main className="py-12">
      <motion.h1
        className="text-4xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Experience
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {experience.map((exp, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <h2 className="text-2xl font-semibold mb-2">{exp.role}</h2>
            <p className="text-lg mb-1">{exp.company}</p>
            <p className="text-md text-gray-600 dark:text-gray-400">{exp.duration}</p>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
