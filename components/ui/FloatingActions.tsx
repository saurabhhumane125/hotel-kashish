"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/config/site";
import { getWhatsAppLink, getPhoneLink, cn } from "@/lib/utils";
import { MessageCircle, Phone, X } from "lucide-react";

export default function FloatingActions() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  // Show buttons after scrolling past hero
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
        "fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3",
        "transition-all duration-500",
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8 pointer-events-none",
      )}
    >
      {/* Expanded options */}
      <div
        className={cn(
          "flex flex-col items-end gap-3 transition-all duration-300",
          isExpanded
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none",
        )}
      >
        {/* Call Button */}
        <a
          href={getPhoneLink(siteConfig.phone)}
          className="flex items-center gap-3 group"
        >
          <span className="bg-charcoal text-ivory text-xs font-inter px-3 py-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Call Us
          </span>
          <div className="w-12 h-12 bg-charcoal text-ivory rounded-full flex items-center justify-center shadow-lg hover:bg-charcoal-light transition-colors duration-300">
            <Phone size={20} />
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
          className="flex items-center gap-3 group"
        >
          <span className="bg-charcoal text-ivory text-xs font-inter px-3 py-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            WhatsApp
          </span>
          <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors duration-300">
            <MessageCircle size={20} />
          </div>
        </a>
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={cn(
          "w-14 h-14 rounded-full flex items-center justify-center shadow-xl",
          "transition-all duration-300 cursor-pointer",
          isExpanded
            ? "bg-charcoal text-ivory rotate-0"
            : "bg-gold text-white rotate-0 hover:bg-gold-dark",
        )}
        aria-label="Contact options"
      >
        {isExpanded ? <X size={22} /> : <MessageCircle size={22} />}
      </button>
    </div>
  );
}
