"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/config/testimonials";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import SectionDivider from "@/components/ui/SectionDivider";
import TextReveal from "@/components/ui/TextReveal";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto rotate every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const goNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const goPrev = () => {
    setDirection(-1);
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <section className="bg-ivory section-padding">
      <div className="container-custom">
        <AnimateOnScroll>
          <div className="text-center mb-4">
            <span className="font-cormorant text-label uppercase tracking-[0.2em] font-medium text-gold-dark mb-4 block">
              Voices
            </span>
            <h2 className="font-playfair text-section-heading font-semibold text-charcoal mb-6">
              <TextReveal>In Their Words</TextReveal>
            </h2>
          </div>
        </AnimateOnScroll>

        <SectionDivider className="mb-12" />

        {/* Testimonial Slider */}
        <div className="max-w-[700px] mx-auto">
          <div className="relative min-h-[280px] sm:min-h-[240px]">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                }}
                className="absolute inset-0"
              >
                <div className="text-center px-4">
                  <Quote size={36} className="text-gold/20 mx-auto mb-6" />

                  <blockquote className="font-inter text-lg sm:text-xl text-charcoal/70 leading-relaxed mb-8 italic">
                    &ldquo;{testimonials[current].quote}&rdquo;
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-stone flex items-center justify-center">
                      <span className="font-playfair text-lg text-gold-dark font-semibold">
                        {testimonials[current].name.charAt(0)}
                      </span>
                    </div>
                    <div className="text-left">
                      <p className="font-inter text-sm font-semibold text-charcoal">
                        {testimonials[current].name}
                      </p>
                      <p className="font-cormorant text-sm text-gold-dark">
                        {testimonials[current].role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={goPrev}
              className="w-10 h-10 border border-stone-dark/30 flex items-center justify-center hover:border-gold hover:text-gold transition-all duration-300 cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Progress dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goTo(index)}
                  className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${
                    index === current
                      ? "w-8 bg-gold"
                      : "w-2 bg-stone-dark/30 hover:bg-gold/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goNext}
              className="w-10 h-10 border border-stone-dark/30 flex items-center justify-center hover:border-gold hover:text-gold transition-all duration-300 cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
