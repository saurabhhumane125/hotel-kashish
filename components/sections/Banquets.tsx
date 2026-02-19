"use client";

import Image from "next/image";
import { banquetHalls, banquetAmenities } from "@/config/banquets";
import { formatPrice } from "@/lib/utils";
import SectionDivider from "@/components/ui/SectionDivider";
import TextReveal from "@/components/ui/TextReveal";
import TiltCard from "@/components/ui/TiltCard";
import MobileCarousel from "@/components/ui/MobileCarousel";
import StaggerContainer, {
  StaggerItem,
} from "@/components/ui/StaggerContainer";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import Button from "@/components/ui/Button";
import {
  Users,
  Maximize,
  IndianRupee,
  Sparkles,
  AirVent,
  UtensilsCrossed,
  DoorOpen,
  CarFront,
} from "lucide-react";

const amenityIcons: Record<string, React.ReactNode> = {
  "Air-Conditioned Halls": <AirVent size={18} />,
  "Stage & Décor Setup": <Sparkles size={18} />,
  "Customizable Menu": <UtensilsCrossed size={18} />,
  "Valet Parking & Staff": <CarFront size={18} />,
};

// Single Banquet Card component (reused in both mobile & desktop)
function BanquetCard({ hall }: { hall: (typeof banquetHalls)[0] }) {
  return (
    <div className="group relative border border-white/10 bg-charcoal-light overflow-hidden transition-all duration-500 hover:border-gold/30 h-full">
      {/* Image */}
      <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
        <Image
          src={hall.image}
          alt={`${hall.name} - ${hall.subtitle}`}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-charcoal-light/90 z-10" />
        <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/10 transition-colors duration-500 z-10" />

        {/* Hall name overlay on image */}
        <div className="absolute bottom-4 left-4 z-20">
          <h3 className="font-playfair text-xl sm:text-2xl text-ivory">
            {hall.name}
          </h3>
          <p className="font-cormorant text-gold text-sm tracking-[0.1em]">
            {hall.subtitle}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 md:p-8 flex flex-col">
        {" "}
        <div className="space-y-2.5 mb-5">
          <div className="flex items-center gap-3 text-ivory/60">
            <Users size={15} className="text-gold/70 shrink-0" />
            <span className="font-inter text-sm">
              {hall.capacity.min} – {hall.capacity.max} Guests
            </span>
          </div>
          <div className="flex items-center gap-3 text-ivory/60">
            <Maximize size={15} className="text-gold/70 shrink-0" />
            <span className="font-inter text-sm">
              {hall.area.toLocaleString()} sq ft
            </span>
          </div>
          <div className="flex items-center gap-3 text-ivory/60">
            <IndianRupee size={15} className="text-gold/70 shrink-0" />
            <span className="font-inter text-sm">
              Starting at {formatPrice(hall.price)}
            </span>
          </div>
        </div>
        <div className="flex flex-wrap gap-1.5 mb-5">
          {hall.bestFor.map((tag) => (
            <span
              key={tag}
              className="font-inter text-[11px] text-ivory/40 border border-white/10 px-2.5 py-0.5"
            >
              {tag}
            </span>
          ))}
        </div>
        <Button
          variant="outline"
          size="sm"
          href="#contact"
          className="w-full justify-center mt-auto"
        >
          Inquire Now
        </Button>
      </div>
    </div>
  );
}

export default function Banquets() {
  return (
    <section id="celebrate" className="bg-charcoal section-padding">
      <div className="container-custom">
        {/* Header */}
        <AnimateOnScroll>
          <div className="text-center mb-10 sm:mb-16">
            <span className="font-cormorant text-label uppercase tracking-[0.2em] font-medium text-gold mb-4 block">
              Celebrations
            </span>
            <h2 className="font-playfair text-section-heading font-semibold text-ivory mb-4 sm:mb-6">
              <TextReveal>Spaces That Rise to the Occasion</TextReveal>
            </h2>
            <p className="font-inter text-body text-ivory/60 max-w-[600px] mx-auto">
              Three distinctive halls, each designed for a different scale of
              celebration. From intimate gatherings of 50 to grand events of
              1000.
            </p>
          </div>
        </AnimateOnScroll>

        {/* MOBILE: Auto-switching carousel */}
        <MobileCarousel autoPlayInterval={5000} dark>
          {banquetHalls.map((hall) => (
            <BanquetCard key={hall.id} hall={hall} />
          ))}
        </MobileCarousel>

        {/* DESKTOP: 3-column grid with tilt */}
        <StaggerContainer className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8">
          {banquetHalls.map((hall) => (
            <StaggerItem key={hall.id}>
              <TiltCard>
                <BanquetCard hall={hall} />
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Amenities */}
        <AnimateOnScroll delay={0.3}>
          <div className="mt-12 sm:mt-16">
            <SectionDivider dark className="mb-6 sm:mb-8" />
            <p className="font-cormorant text-sm text-gold tracking-[0.2em] uppercase text-center mb-6 sm:mb-8">
              Every Hall Includes
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-[600px] mx-auto">
              {banquetAmenities.map((amenity) => (
                <div
                  key={amenity}
                  className="flex flex-col items-center text-center gap-2 group cursor-default"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 border border-gold/20 flex items-center justify-center group-hover:border-gold/50 group-hover:scale-110 transition-all duration-300">
                    <div className="text-gold/60 group-hover:text-gold transition-colors duration-300">
                      {amenityIcons[amenity] || <Sparkles size={18} />}
                    </div>
                  </div>
                  <span className="font-inter text-[11px] sm:text-xs text-ivory/50 leading-snug">
                    {amenity}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.4}>
          <div className="text-center mt-10 sm:mt-12">
            <Button variant="primary" size="lg" href="#contact">
              Plan Your Celebration
            </Button>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
