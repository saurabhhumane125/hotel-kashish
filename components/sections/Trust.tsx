"use client";

import AnimatedCounter from "@/components/ui/AnimatedCounter";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import SectionDivider from "@/components/ui/SectionDivider";
import TextReveal from "@/components/ui/TextReveal";

const stats = [
  { number: 700, suffix: "+", label: "Guest Capacity" },
  { number: 3, suffix: "", label: "Banquet Halls" },
  { number: 10, suffix: "+", label: "Years in Kalyan" },
  { number: 500, suffix: "+", label: "Events Hosted" },
];

export default function Trust() {
  return (
    <section className="bg-ivory section-padding">
      <div className="container-custom">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 mb-16">
          {stats.map((stat, index) => (
            <AnimateOnScroll key={stat.label} delay={index * 0.15}>
              <div className="text-center">
                <AnimatedCounter
                  target={stat.number}
                  suffix={stat.suffix}
                  className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal"
                />
                <p className="font-cormorant text-sm sm:text-base text-gold-dark tracking-[0.1em] uppercase mt-2">
                  {stat.label}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Animated divider */}
        <SectionDivider className="mb-12" />

        {/* Brand statement with text reveal */}
        <AnimateOnScroll>
          <div className="text-center max-w-[720px] mx-auto">
            <span className="font-cormorant text-label uppercase tracking-[0.2em] font-medium text-gold-dark mb-4 block">
              Our Legacy
            </span>
            <h2 className="font-playfair text-section-heading font-semibold text-charcoal mb-6">
              <TextReveal>
                Kalyan&apos;s Most Trusted Hospitality Address
              </TextReveal>
            </h2>
            <p className="font-inter text-body text-charcoal/60 leading-relaxed">
              Hotel Kashish International has been Kalyan East&apos;s address
              for life&apos;s most important moments — from grand weddings to
              intimate celebrations, from business conferences to nights out
              with friends. Every space in our property is designed with one
              belief: your occasion deserves better than ordinary.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
