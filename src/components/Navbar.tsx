'use client';

import siteConfig from "@/config/config";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 py-4 sticky top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          {siteConfig.personal.name}
        </Link>
        <div className="hidden md:flex space-x-6">
          {siteConfig.navigation.map((item, index) => (
            <Link
              key={index}
              href={item.url}
              className={`hover:text-blue-500 ${pathname === item.url ? 'text-blue-500 font-semibold' : ''}`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
          {theme === 'dark' ? <Sun /> : <Moon />}
        </button>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          Menu
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-4 mt-4 px-4">
          {siteConfig.navigation.map((item, index) => (
            <Link
              key={index}
              href={item.url}
              className={`hover:text-blue-500 ${pathname === item.url ? 'text-blue-500 font-semibold' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}