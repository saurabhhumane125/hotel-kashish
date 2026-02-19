"use client";

import Image from "next/image";
import { experiences } from "@/config/experiences";
import TextReveal from "@/components/ui/TextReveal";
import TiltCard from "@/components/ui/TiltCard";
import SectionDivider from "@/components/ui/SectionDivider";
import StaggerContainer, {
  StaggerItem,
} from "@/components/ui/StaggerContainer";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import Button from "@/components/ui/Button";

export default function Experience() {
  return (
    <section id="dine" className="bg-stone section-padding">
      <div className="container-custom">
        <AnimateOnScroll>
          <div className="text-center mb-4">
            <span className="font-cormorant text-label uppercase tracking-[0.2em] font-medium text-gold-dark mb-4 block">
              Experience
            </span>
            <h2 className="font-playfair text-section-heading font-semibold text-charcoal mb-6">
              <TextReveal>Dine. Drink. Cheer.</TextReveal>
            </h2>
            <p className="font-inter text-body text-charcoal/60 max-w-[600px] mx-auto">
              At Hotel Kashish International, food, drinks, and sports come
              together under one roof. Whatever the moment, you&apos;ll find the
              perfect place.
            </p>
          </div>
        </AnimateOnScroll>

        <SectionDivider className="mb-12" />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {experiences.map((exp) => (
            <StaggerItem key={exp.id}>
              <TiltCard>
                <div className="group bg-white border border-stone-dark/20 overflow-hidden transition-all duration-500 hover:border-gold/40 hover:shadow-lg h-full">
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <Image
                      src={exp.image}
                      alt={exp.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/10 transition-colors duration-500" />
                  </div>

                  <div className="p-6 sm:p-8">
                    <p className="font-cormorant text-xs text-gold-dark tracking-[0.2em] uppercase mb-2">
                      {exp.tagline}
                    </p>
                    <h3 className="font-playfair text-xl text-charcoal mb-3">
                      {exp.name}
                    </h3>
                    <p className="font-inter text-sm text-charcoal/50 leading-relaxed mb-6">
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
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
