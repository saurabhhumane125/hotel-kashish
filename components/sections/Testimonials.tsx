"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { testimonials } from "@/config/testimonials";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import SectionDivider from "@/components/ui/SectionDivider";
import TextReveal from "@/components/ui/TextReveal";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoPlay = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
  };

  useEffect(() => {
    startAutoPlay();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
    startAutoPlay(); // Reset timer on manual navigation
  };

  const goNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
    startAutoPlay();
  };

  const goPrev = () => {
    setDirection(-1);
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
    startAutoPlay();
  };

  // Handle swipe on mobile
  const handleDragEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) {
      goNext();
    } else if (info.offset.x > swipeThreshold) {
      goPrev();
    }
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 200 : -200,
      opacity: 0,
    }),
  };

  return (
    <section className="bg-ivory section-padding overflow-hidden">
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

        {/* Testimonial Slider with Swipe */}
        <div className="max-w-[700px] mx-auto">
          <div className="relative min-h-[300px] sm:min-h-[250px] touch-pan-y">
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
                  opacity: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
                className="absolute inset-0 cursor-grab active:cursor-grabbing"
              >
                <div className="text-center px-4 select-none">
                  <Quote
                    size={32}
                    className="text-gold/20 mx-auto mb-4 sm:mb-6"
                  />

                  <blockquote className="font-inter text-base sm:text-lg md:text-xl text-charcoal/70 leading-relaxed mb-6 sm:mb-8 italic">
                    &ldquo;{testimonials[current].quote}&rdquo;
                  </blockquote>

                  <div className="flex items-center justify-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-stone flex items-center justify-center">
                      <span className="font-playfair text-base sm:text-lg text-gold-dark font-semibold">
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

          {/* Swipe hint on mobile */}
          <p className="text-center font-inter text-xs text-charcoal/30 mb-4 sm:hidden">
            Swipe to see more
          </p>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 sm:gap-6 mt-4 sm:mt-8">
            <button
              onClick={goPrev}
              className="w-9 h-9 sm:w-10 sm:h-10 border border-stone-dark/30 flex items-center justify-center hover:border-gold hover:text-gold transition-all duration-300 cursor-pointer active:scale-95"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={16} />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goTo(index)}
                  className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${
                    index === current
                      ? "w-6 sm:w-8 bg-gold"
                      : "w-2 bg-stone-dark/30 hover:bg-gold/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goNext}
              className="w-9 h-9 sm:w-10 sm:h-10 border border-stone-dark/30 flex items-center justify-center hover:border-gold hover:text-gold transition-all duration-300 cursor-pointer active:scale-95"
              aria-label="Next testimonial"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
