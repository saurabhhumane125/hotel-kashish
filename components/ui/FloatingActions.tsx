"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/config/site";
import { getWhatsAppLink, getPhoneLink, cn } from "@/lib/utils";
import { MessageCircle, Phone, X } from "lucide-react";

export default function FloatingActions() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-2 sm:gap-3",
        "transition-all duration-500",
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8 pointer-events-none",
      )}
    >
      {/* Expanded options */}
      <div
        className={cn(
          "flex flex-col items-end gap-2 sm:gap-3 transition-all duration-300",
          isExpanded
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none",
        )}
      >
        {/* Call Button */}
        <a
          href={getPhoneLink(siteConfig.phone)}
          className="flex items-center gap-2 sm:gap-3 group"
          onClick={() => setIsExpanded(false)}
        >
          <span className="hidden sm:block bg-charcoal text-ivory text-xs font-inter px-3 py-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Call Us
          </span>
          <div className="w-11 h-11 sm:w-12 sm:h-12 bg-charcoal text-ivory rounded-full flex items-center justify-center shadow-lg hover:bg-charcoal-light transition-colors duration-300 active:scale-95">
            <Phone size={18} />
          </div>
        </a>

        {/* WhatsApp Button */}
        <a
          href={getWhatsAppLink(
            siteConfig.whatsapp,
            "Hello, I'd like to inquire about Hotel Kashish International.",
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 sm:gap-3 group"
          onClick={() => setIsExpanded(false)}
        >
          <span className="hidden sm:block bg-charcoal text-ivory text-xs font-inter px-3 py-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            WhatsApp
          </span>
          <div className="w-11 h-11 sm:w-12 sm:h-12 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors duration-300 active:scale-95">
            <MessageCircle size={18} />
          </div>
        </a>
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={cn(
          "w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shadow-xl",
          "transition-all duration-300 cursor-pointer active:scale-90",
          isExpanded
            ? "bg-charcoal text-ivory"
            : "bg-gold text-white hover:bg-gold-dark",
        )}
        aria-label="Contact options"
      >
        {isExpanded ? <X size={20} /> : <MessageCircle size={20} />}
      </button>
    </div>
  );
}
