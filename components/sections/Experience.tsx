"use client";

import Image from "next/image";
import { experiences } from "@/config/experiences";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export default function Experience() {
  return (
    <section id="dine" className="bg-stone section-padding">
      <div className="container-custom">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <SectionLabel className="mb-4 block">Experience</SectionLabel>
            <SectionHeading>Dine. Drink. Cheer.</SectionHeading>
            <p className="font-inter text-body text-charcoal/60 max-w-[600px] mx-auto mt-6">
              At Hotel Kashish International, food, drinks, and sports come
              together under one roof. Whatever the moment, you&apos;ll find the
              perfect place.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {experiences.map((exp, index) => (
            <AnimateOnScroll key={exp.id} delay={index * 0.15}>
              <div className="group bg-white border border-stone-dark/20 overflow-hidden transition-all duration-500 hover:border-gold/40 hover:shadow-lg">
                {/* Image */}
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <Image
                    src={exp.image}
                    alt={exp.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Content */}
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
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
