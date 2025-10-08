'use client';

import siteConfig from "@/config/config";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Contact as ContactType } from '@/types';

interface ContactProps {
  contact: ContactType;
}

export default function Contact({ contact = siteConfig.contact }: ContactProps) {
  return (
    <main className="py-12">
      <motion.h1
        className="text-4xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact
      </motion.h1>
      <motion.div
        className="flex flex-col items-center space-y-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-lg">
          Email:{' '}
          <a
            href={`mailto:${contact.email}`}
            className="text-blue-500 hover:underline"
          >
            {contact.email}
          </a>
        </p>
        <p className="text-lg">
          LinkedIn:{' '}
          <Link
            href={contact.linkedin}
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Profile
          </Link>
        </p>
        <p className="text-lg">
          GitHub:{' '}
          <Link
            href={contact.github}
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Profile
          </Link>
        </p>
      </motion.div>
    </main>
  );
}