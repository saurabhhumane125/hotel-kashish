"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import Button from "@/components/ui/Button";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-[85vh] sm:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Ken Burns effect */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, ease: "linear" }}
        >
          <Image
            src="/images/hero/hotel-exterior.jpg"
            alt="Hotel Kashish International - Kalyan East"
            fill
            className="object-cover"
            priority
            quality={85}
            sizes="100vw"
            style={{ objectPosition: "center 30%" }}
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-dark/70 via-charcoal/50 to-charcoal-dark/80 z-10" />
        <div
          className="absolute inset-0 z-10 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(184,134,11,0.3) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container-custom text-center px-4">
        {/* Top label with line animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="mb-8"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <motion.div
              initial={{ width: 0 }}
              animate={isLoaded ? { width: 40 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="h-px bg-gold/50"
            />
            <span className="font-cormorant text-label text-gold uppercase tracking-[0.3em] font-medium">
              {siteConfig.name}
            </span>
            <motion.div
              initial={{ width: 0 }}
              animate={isLoaded ? { width: 40 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="h-px bg-gold/50"
            />
          </div>
        </motion.div>

        {/* Main heading — word by word reveal */}
        <div className="overflow-hidden mb-2">
          <motion.h1
            className="font-playfair text-hero text-ivory leading-[1.1]"
            initial={{ y: "100%" }}
            animate={isLoaded ? { y: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: 0.7,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            Where Every Occasion
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-6">
          <motion.h1
            className="font-playfair text-hero text-gold leading-[1.1]"
            initial={{ y: "100%" }}
            animate={isLoaded ? { y: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: 0.9,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            Finds Its Place
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.p
          className="font-inter text-body text-ivory/60 max-w-[600px] mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {siteConfig.subtitle}
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <Button variant="primary" size="lg" href="#celebrate">
            Plan Your Event
          </Button>
          <Button variant="outline" size="lg" href="#stay">
            Explore Rooms
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-20 sm:bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : {}}
          transition={{ delay: 2, duration: 1 }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="font-cormorant text-ivory/30 text-xs tracking-[0.3em] uppercase">
              Scroll
            </span>
            <motion.div
              className="w-px h-8 bg-gradient-to-b from-gold/50 to-transparent"
              animate={{ scaleY: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformOrigin: "top" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
