// src/app/education/page.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import siteConfig from "@/config/config";
import type { Certification } from "@/types";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

/* -------------------------------------------------------------------------- */
/*  Proper type for Specialization – NO `any`                                 */
/* -------------------------------------------------------------------------- */
type SubCertificate = {
  name: string;
  file: string;
};

type Specialization = {
  title: string;
  cardImage: string;
  certificates: SubCertificate[];
};

const isSpecialization = (cert: Certification): cert is Specialization =>
  "certificates" in cert && Array.isArray((cert as Specialization).certificates);

export default function EducationPage() {
  const allCerts = siteConfig.certifications ?? [];

  const [filter, setFilter] = useState<"all" | "specialization" | "individual">("all");
  const [selectedSpec, setSelectedSpec] = useState<Specialization | null>(null);

  const filteredCerts = allCerts.filter((cert) => {
    if (filter === "specialization") return isSpecialization(cert);
    if (filter === "individual") return "file" in cert;
    return true;
  });

  return (
    <main className="py-12">
      <motion.h1
        className="text-4xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        MOOCs & Certifications
      </motion.h1>

      <div className="flex justify-center gap-4 mb-10">
        {(["all", "specialization", "individual"] as const).map((key) => (
          <Button
            key={key}
            variant={filter === key ? "default" : "outline"}
            onClick={() => setFilter(key)}
          >
            {key === "all"
              ? "All"
              : key === "specialization"
              ? "Specializations"
              : "Individual Courses"}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-12">
        {filteredCerts.map((cert, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.03 }}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-lg transition p-5 cursor-pointer border border-gray-200 dark:border-gray-700"
            onClick={() => {
              if (isSpecialization(cert)) {
                setSelectedSpec(cert);
              } else if ("file" in cert) {
                window.open(cert.file, "_blank");
              }
            }}
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-32 h-32 relative mb-4">
                <Image
                  src={cert.cardImage}
                  alt={cert.title}
                  fill
                  className="object-contain rounded-lg"
                />
              </div>

              <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>

              {isSpecialization(cert) ? (
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  View specialization details
                </p>
              ) : (
                <Button
                  variant="link"
                  className="text-blue-600 dark:text-blue-400 p-0"
                  onClick={(e) => {
                    e.stopPropagation();
                    if ("file" in cert) {
                      window.open(cert.file, "_blank");
                    }
                  }}
                >
                  View Certificate
                </Button>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {selectedSpec && (
        <Dialog open={!!selectedSpec} onOpenChange={() => setSelectedSpec(null)}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>{selectedSpec.title}</DialogTitle>
            </DialogHeader>

            <div className="grid grid-cols-1 gap-3 mt-4">
              {selectedSpec.certificates.map((subCert, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border-b pb-2"
                >
                  <span>{subCert.name}</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(subCert.file, "_blank")}
                  >
                    View
                  </Button>
                </div>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      )}
    </main>
  );
}