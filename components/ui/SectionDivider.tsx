"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionDividerProps {
  className?: string;
  dark?: boolean;
}

export default function SectionDivider({
  className,
  dark = false,
}: SectionDividerProps) {
  return (
    <div className={cn("flex items-center justify-center py-2", className)}>
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: 80, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={cn("h-px", dark ? "bg-gold/40" : "bg-gold/30")}
      />
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.4,
          duration: 0.5,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        className={cn(
          "w-2 h-2 rotate-45 mx-3",
          dark ? "bg-gold/60" : "bg-gold/40",
        )}
      />
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: 80, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={cn("h-px", dark ? "bg-gold/40" : "bg-gold/30")}
      />
    </div>
  );
}
