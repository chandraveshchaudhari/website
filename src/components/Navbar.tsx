"use client";
import siteConfig from "@/config/config";
import Link from "next/link";

export default function Navbar() {
  const { navigation } = siteConfig;

  return (
    <nav className="flex justify-center gap-6 py-6 border-b">
      {navigation.map((item) => (
        <Link key={item.name} href={`/${item.url.replace(".html", "")}`}>
          <span className="hover:text-primary transition">{item.name}</span>
        </Link>
      ))}
    </nav>
  );
}
