"use client";

import { useEffect, useRef, useState } from "react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionHeading from "@/components/ui/SectionHeading";

const stats = [
  { number: 700, suffix: "+", label: "Guest Capacity" },
  { number: 3, suffix: "", label: "Banquet Halls" },
  { number: 10, suffix: "+", label: "Years in Kalyan" },
  { number: 500, suffix: "+", label: "Events Hosted" },
];

function AnimatedNumber({
  target,
  suffix,
  isVisible,
}: {
  target: number;
  suffix: string;
  isVisible: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <span className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal">
      {count}
      {suffix}
    </span>
  );
}

export default function Trust() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-ivory section-padding">
      <div className="container-custom">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 mb-16">
          {stats.map((stat, index) => (
            <AnimateOnScroll key={stat.label} delay={index * 0.1}>
              <div className="text-center">
                <AnimatedNumber
                  target={stat.number}
                  suffix={stat.suffix}
                  isVisible={isVisible}
                />
                <p className="font-cormorant text-sm sm:text-base text-gold-dark tracking-[0.1em] uppercase mt-2">
                  {stat.label}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Gold divider */}
        <div className="flex justify-center mb-12">
          <div className="divider-gold" />
        </div>

        {/* Brand statement */}
        <AnimateOnScroll>
          <div className="text-center max-w-[720px] mx-auto">
            <SectionLabel className="mb-4 block">Our Legacy</SectionLabel>
            <SectionHeading>
              Kalyan&apos;s Most Trusted Hospitality Address
            </SectionHeading>
            <p className="font-inter text-body text-charcoal/60 mt-6 leading-relaxed">
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
