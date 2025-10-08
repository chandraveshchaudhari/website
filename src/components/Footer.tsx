import siteConfig from "@/config/config";

export default function Footer() {
  return (
    <footer className="text-center py-8 text-gray-500 text-sm border-t mt-12">
      © {new Date().getFullYear()} {siteConfig.personal.name} — All rights reserved.
    </footer>
  );
}
