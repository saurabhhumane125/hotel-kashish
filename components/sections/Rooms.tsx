"use client";

import Image from "next/image";
import { rooms } from "@/config/rooms";
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
  Bed,
  Maximize,
  Wifi,
  AirVent,
  UtensilsCrossed,
  Wine,
} from "lucide-react";

const amenityIcons: Record<string, React.ReactNode> = {
  "Complimentary Wi-Fi": <Wifi size={14} />,
  "Air Conditioning": <AirVent size={14} />,
  "In-house Restaurant": <UtensilsCrossed size={14} />,
  "Bar Access": <Wine size={14} />,
};

export default function Rooms() {
  return (
    <section id="stay" className="bg-ivory section-padding">
      <div className="container-custom">
        <AnimateOnScroll>
          <div className="text-center mb-4">
            <span className="font-cormorant text-label uppercase tracking-[0.2em] font-medium text-gold-dark mb-4 block">
              Stay
            </span>
            <h2 className="font-playfair text-section-heading font-semibold text-charcoal mb-6">
              <TextReveal>Rest, Recharge, Return</TextReveal>
            </h2>
            <p className="font-inter text-body text-charcoal/60 max-w-[600px] mx-auto">
              Whether you&apos;re here for a celebration, business, or just
              passing through Kalyan — rooms designed for genuine comfort.
            </p>
          </div>
        </AnimateOnScroll>

        <SectionDivider className="mb-12" />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {rooms.map((room) => (
            <StaggerItem key={room.id}>
              <TiltCard>
                <div className="group bg-white border border-stone-dark/30 overflow-hidden transition-all duration-500 hover:border-gold/40 hover:shadow-xl">
                  <div className="relative h-52 sm:h-60 overflow-hidden">
                    <Image
                      src={room.image}
                      alt={room.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/10 transition-colors duration-500" />
                  </div>

                  <div className="p-6 sm:p-8">
                    <h3 className="font-playfair text-xl text-charcoal mb-1">
                      {room.name}
                    </h3>
                    <p className="font-inter text-sm text-charcoal/50 mb-5">
                      {room.description}
                    </p>

                    <div className="flex items-center gap-4 mb-5 pb-5 border-b border-stone-dark/20">
                      <div className="flex items-center gap-1.5 text-charcoal/60">
                        <Maximize size={14} className="text-gold-dark" />
                        <span className="font-inter text-xs">
                          {room.area} sq ft
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 text-charcoal/60">
                        <Bed size={14} className="text-gold-dark" />
                        <span className="font-inter text-xs">{room.bed}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {room.amenities.map((amenity) => (
                        <div
                          key={amenity}
                          className="flex items-center gap-2 text-charcoal/50"
                        >
                          <span className="text-gold-dark">
                            {amenityIcons[amenity] || <Wifi size={14} />}
                          </span>
                          <span className="font-inter text-xs">{amenity}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-playfair text-2xl text-charcoal font-semibold">
                          {formatPrice(room.price)}
                        </span>
                        <span className="font-inter text-xs text-charcoal/40 ml-1">
                          / night
                        </span>
                      </div>
                      <Button variant="secondary" size="sm" href="#contact">
                        Book
                      </Button>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
