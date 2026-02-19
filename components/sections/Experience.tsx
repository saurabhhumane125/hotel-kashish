"use client";

import Image from "next/image";
import { experiences } from "@/config/experiences";
import TextReveal from "@/components/ui/TextReveal";
import TiltCard from "@/components/ui/TiltCard";
import SectionDivider from "@/components/ui/SectionDivider";
import MobileCarousel from "@/components/ui/MobileCarousel";
import StaggerContainer, {
  StaggerItem,
} from "@/components/ui/StaggerContainer";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import Button from "@/components/ui/Button";

function ExperienceCard({ exp }: { exp: (typeof experiences)[0] }) {
  return (
    <div className="group bg-white border border-stone-dark/20 overflow-hidden transition-all duration-500 hover:border-gold/40 hover:shadow-lg h-full">
      {/* Image */}
      <div className="relative h-48 sm:h-52 md:h-56 overflow-hidden">
        <Image
          src={exp.image}
          alt={exp.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/10 transition-colors duration-500" />

        {/* Tagline badge */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1">
          <span className="font-cormorant text-xs text-gold-dark tracking-[0.15em] uppercase font-medium">
            {exp.tagline}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 md:p-8">
        <h3 className="font-playfair text-xl text-charcoal mb-3">{exp.name}</h3>
        <p className="font-inter text-sm text-charcoal/50 leading-relaxed mb-5">
          {exp.description}
        </p>
        <Button
          variant="ghost"
          size="sm"
          href={exp.cta.action}
          className="text-gold-dark hover:text-gold px-0"
        >
          {exp.cta.label} →
        </Button>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="dine" className="bg-stone section-padding">
      <div className="container-custom">
        <AnimateOnScroll>
          <div className="text-center mb-4">
            <span className="font-cormorant text-label uppercase tracking-[0.2em] font-medium text-gold-dark mb-4 block">
              Experience
            </span>
            <h2 className="font-playfair text-section-heading font-semibold text-charcoal mb-4 sm:mb-6">
              <TextReveal>Dine. Drink. Cheer.</TextReveal>
            </h2>
            <p className="font-inter text-body text-charcoal/60 max-w-[600px] mx-auto">
              At Hotel Kashish International, food, drinks, and sports come
              together under one roof. Whatever the moment, you&apos;ll find the
              perfect place.
            </p>
          </div>
        </AnimateOnScroll>

        <SectionDivider className="mb-10 sm:mb-12" />

        {/* MOBILE: Auto-switching carousel */}
        <MobileCarousel autoPlayInterval={4500}>
          {experiences.map((exp) => (
            <ExperienceCard key={exp.id} exp={exp} />
          ))}
        </MobileCarousel>

        {/* DESKTOP: 3-column grid */}
        <StaggerContainer className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8">
          {experiences.map((exp) => (
            <StaggerItem key={exp.id}>
              <TiltCard>
                <ExperienceCard exp={exp} />
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
