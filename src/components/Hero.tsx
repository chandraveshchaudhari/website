"use client";
import siteConfig from "@/config/config";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  const { personal, animatedText } = siteConfig;
  return (
    <section className="text-center space-y-4">
      <Image
        src={`/${personal.image}`}
        alt={personal.name}
        width={160}
        height={160}
        className="rounded-full mx-auto shadow-lg"
      />
      <h1 className="text-4xl font-bold">{personal.name}</h1>
      <p className="text-lg text-gray-500">{personal.title}</p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-xl font-semibold text-primary"
      >
        {animatedText.join(" • ")}
      </motion.div>
    </section>
  );
}
