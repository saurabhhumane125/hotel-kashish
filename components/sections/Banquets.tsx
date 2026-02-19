"use client";

import Image from "next/image";
import { banquetHalls, banquetAmenities } from "@/config/banquets";
import { formatPrice } from "@/lib/utils";
import SectionDivider from "@/components/ui/SectionDivider";
import TextReveal from "@/components/ui/TextReveal";
import TiltCard from "@/components/ui/TiltCard";
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
  "Large Capacity Air-Conditioned Halls": <AirVent size={20} />,
  "Elegant Décor & Stage Setup": <Sparkles size={20} />,
  "Catering with Customizable Menu": <UtensilsCrossed size={20} />,
  "Bridal Room & Guest Changing Rooms": <DoorOpen size={20} />,
  "Valet Parking & Dedicated Staff Support": <CarFront size={20} />,
};

export default function Banquets() {
  return (
    <section id="celebrate" className="bg-charcoal section-padding">
      <div className="container-custom">
        {/* Header */}
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <span className="font-cormorant text-label uppercase tracking-[0.2em] font-medium text-gold mb-4 block">
              Celebrations
            </span>
            <h2 className="font-playfair text-section-heading font-semibold text-ivory mb-6">
              <TextReveal>Spaces That Rise to the Occasion</TextReveal>
            </h2>
            <p className="font-inter text-body text-ivory/60 max-w-[600px] mx-auto">
              Three distinctive halls, each designed for a different scale of
              celebration. From intimate gatherings of 50 to grand events of
              1000.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Hall Cards with Stagger + Tilt */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {banquetHalls.map((hall) => (
            <StaggerItem key={hall.id}>
              <TiltCard>
                <div className="group relative border border-white/10 bg-charcoal-light overflow-hidden transition-all duration-500 hover:border-gold/30">
                  {/* Image */}
                  <div className="relative h-56 sm:h-64 overflow-hidden">
                    <Image
                      src={hall.image}
                      alt={`${hall.name} - ${hall.subtitle}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-charcoal-light/90 z-10" />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/10 transition-colors duration-500 z-10" />
                  </div>

                  <div className="p-6 sm:p-8">
                    <h3 className="font-playfair text-xl sm:text-2xl text-ivory mb-1">
                      {hall.name}
                    </h3>
                    <p className="font-cormorant text-gold text-sm tracking-[0.1em] mb-6">
                      {hall.subtitle}
                    </p>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3 text-ivory/60">
                        <Users size={16} className="text-gold/70 shrink-0" />
                        <span className="font-inter text-sm">
                          {hall.capacity.min} – {hall.capacity.max} Guests
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-ivory/60">
                        <Maximize size={16} className="text-gold/70 shrink-0" />
                        <span className="font-inter text-sm">
                          {hall.area.toLocaleString()} sq ft
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-ivory/60">
                        <IndianRupee
                          size={16}
                          className="text-gold/70 shrink-0"
                        />
                        <span className="font-inter text-sm">
                          Starting at {formatPrice(hall.price)}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {hall.bestFor.map((tag) => (
                        <span
                          key={tag}
                          className="font-inter text-xs text-ivory/40 border border-white/10 px-3 py-1 hover:border-gold/30 hover:text-gold/60 transition-all duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Button
                      variant="outline"
                      size="sm"
                      href="#contact"
                      className="w-full justify-center"
                    >
                      Inquire About {hall.name}
                    </Button>
                  </div>
                </div>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Amenities with animated divider */}
        <AnimateOnScroll delay={0.3}>
          <div className="mt-16">
            <SectionDivider dark className="mb-8" />
            <p className="font-cormorant text-sm text-gold tracking-[0.2em] uppercase text-center mb-8">
              Every Hall Includes
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
              {banquetAmenities.map((amenity) => (
                <div
                  key={amenity}
                  className="flex flex-col items-center text-center gap-3 group cursor-default"
                >
                  <div className="text-gold/60 group-hover:text-gold group-hover:scale-110 transition-all duration-300">
                    {amenityIcons[amenity] || <Sparkles size={20} />}
                  </div>
                  <span className="font-inter text-xs text-ivory/50 leading-snug group-hover:text-ivory/70 transition-colors duration-300">
                    {amenity}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.4}>
          <div className="text-center mt-12">
            <Button variant="primary" size="lg" href="#contact">
              Plan Your Celebration
            </Button>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
