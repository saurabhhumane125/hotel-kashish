"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-[85vh] sm:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/hotel-exterior.jpg"
          alt="Hotel Kashish International - Kalyan East"
          fill
          className="object-cover object-center sm:object-center"
          priority
          quality={85}
          sizes="100vw"
          style={{
            objectPosition: "center 30%",
          }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-dark/70 via-charcoal/50 to-charcoal-dark/80 z-10" />
        {/* Subtle pattern */}
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
        <div
          className={`transition-all duration-1000 delay-200 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <SectionLabel dark className="mb-6 block">
            {siteConfig.name}
          </SectionLabel>
        </div>

        <div
          className={`transition-all duration-1000 delay-500 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h1 className="font-playfair text-hero text-ivory mb-6 leading-[1.1]">
            Where Every Occasion
            <br />
            <span className="text-gold">Finds Its Place</span>
          </h1>
        </div>

        <div
          className={`transition-all duration-1000 delay-700 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="font-inter text-body text-ivory/60 max-w-[600px] mx-auto mb-10">
            {siteConfig.subtitle}
          </p>
        </div>

        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <Button variant="primary" size="lg" href="#celebrate">
            Plan Your Event
          </Button>
          <Button variant="outline" size="lg" href="#stay">
            Explore Rooms
          </Button>
        </div>

        {/* Scroll indicator */}
        <div
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-[1200ms] ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="font-cormorant text-ivory/30 text-xs tracking-[0.3em] uppercase">
              Scroll
            </span>
            <div className="w-px h-8 bg-gradient-to-b from-gold/50 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
