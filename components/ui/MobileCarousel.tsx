"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { cn } from "@/lib/utils";

interface MobileCarouselProps {
  children: React.ReactNode[];
  className?: string;
  autoPlayInterval?: number;
  dark?: boolean;
}

export default function MobileCarousel({
  children,
  className,
  autoPlayInterval = 4000,
  dark = false,
}: MobileCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const total = children.length;

  const startAutoPlay = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % total);
    }, autoPlayInterval);
  }, [autoPlayInterval, total]);

  useEffect(() => {
    startAutoPlay();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startAutoPlay]);

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
    startAutoPlay();
  };

  const handleDragEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % total);
      startAutoPlay();
    } else if (info.offset.x > swipeThreshold) {
      setDirection(-1);
      setCurrent((prev) => (prev - 1 + total) % total);
      startAutoPlay();
    }
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <div className={cn("md:hidden", className)}>
      {/* Card Container */}
      <div className="relative overflow-hidden">
        <div className="min-h-[420px] relative">
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
                scale: { duration: 0.3 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.15}
              onDragEnd={handleDragEnd}
              className="absolute inset-0"
            >
              {children[current]}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Progress Bar + Dots */}
      <div className="mt-6 flex flex-col items-center gap-3">
        {/* Auto-play progress bar */}
        <div className="w-32 h-0.5 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className={cn(
              "h-full rounded-full",
              dark ? "bg-gold/60" : "bg-gold",
            )}
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
              duration: autoPlayInterval / 1000,
              ease: "linear",
            }}
            key={current}
          />
        </div>

        {/* Dots */}
        <div className="flex items-center gap-2">
          {Array.from({ length: total }).map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              className={cn(
                "h-2 rounded-full transition-all duration-500 cursor-pointer",
                index === current
                  ? cn("w-6", dark ? "bg-gold" : "bg-gold")
                  : cn(
                      "w-2",
                      dark
                        ? "bg-white/20 hover:bg-white/40"
                        : "bg-charcoal/20 hover:bg-charcoal/40",
                    ),
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Swipe hint */}
        <p
          className={cn(
            "font-inter text-[10px] tracking-wider uppercase",
            dark ? "text-ivory/30" : "text-charcoal/30",
          )}
        >
          Swipe or wait
        </p>
      </div>
    </div>
  );
}
