"use client";

import { motion } from "framer-motion";
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
        {/* Stats Grid — Premium Containers */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-12 sm:mb-16">
          {stats.map((stat, index) => (
            <AnimateOnScroll key={stat.label} delay={index * 0.1}>
              <motion.div
                className="relative text-center py-6 sm:py-8 px-4 border border-stone-dark/20 bg-white group hover:border-gold/30 transition-all duration-500"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Corner accent */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-gold/40" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-gold/40" />

                <AnimatedCounter
                  target={stat.number}
                  suffix={stat.suffix}
                  className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal block"
                />
                <p className="font-cormorant text-xs sm:text-sm text-gold-dark tracking-[0.1em] uppercase mt-2">
                  {stat.label}
                </p>
              </motion.div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Animated divider */}
        <SectionDivider className="mb-10 sm:mb-12" />

        {/* Brand statement */}
        <AnimateOnScroll>
          <div className="text-center max-w-[720px] mx-auto">
            <span className="font-cormorant text-label uppercase tracking-[0.2em] font-medium text-gold-dark mb-4 block">
              Our Legacy
            </span>
            <h2 className="font-playfair text-section-heading font-semibold text-charcoal mb-6">
              <TextReveal>
                {"Kalyan's Most Trusted Hospitality Address"}
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
