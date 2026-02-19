"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Shorter on mobile, slightly longer on desktop
    const duration = window.innerWidth < 768 ? 1200 : 1800;
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, duration);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal"
          exit={{
            clipPath: "inset(0 0 100% 0)",
          }}
          transition={{
            duration: 0.6,
            ease: [0.76, 0, 0.24, 1],
          }}
        >
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {/* Try logo image, fall back to text */}
              <div className="mb-3">
                <Image
                  src="/images/brand/logo.png"
                  alt="Hotel Kashish International"
                  width={80}
                  height={80}
                  className="h-16 w-16 sm:h-20 sm:w-20 object-contain mx-auto rounded-full"
                />
              </div>
              <h1 className="font-playfair text-2xl sm:text-3xl text-ivory mb-1">
                Kashish
              </h1>
              <div className="overflow-hidden">
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="font-cormorant text-gold text-xs sm:text-sm tracking-[0.3em] uppercase"
                >
                  International
                </motion.p>
              </div>
            </motion.div>

            <motion.div
              className="mt-6 h-px bg-gold/30 mx-auto"
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
