"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { navItems } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { cn, scrollToSection, getPhoneLink } from "@/lib/utils";
import { Phone, Menu, X } from "lucide-react";
import Button from "@/components/ui/Button";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const id = href.replace("#", "");
    scrollToSection(id);
  };

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50",
          "transition-all duration-500",
          isScrolled
            ? "bg-charcoal/95 backdrop-blur-md shadow-lg"
            : "bg-transparent",
        )}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex items-center gap-3"
            >
              <Image
                src="/images/brand/logo.png"
                alt="Hotel Kashish International"
                width={500}
                height={500}
                className="h-14 w-14 sm:h-16 sm:w-16 object-contain rounded-full"
                style={{ background: "transparent" }}
              />

              <div className="flex flex-col leading-none">
                <span className="font-playfair text-ivory text-lg sm:text-xl font-semibold">
                  Kashish
                </span>
                <span className="font-cormorant text-gold text-[10px] sm:text-xs tracking-[0.2em] uppercase">
                  International
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={cn(
                    "font-inter text-sm tracking-wide",
                    "text-ivory/80 hover:text-gold",
                    "transition-colors duration-300",
                    "cursor-pointer bg-transparent border-none",
                  )}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Desktop Right */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href={getPhoneLink(siteConfig.phone)}
                className="flex items-center gap-2 text-ivory/70 hover:text-gold transition-colors duration-300"
              >
                <Phone size={14} />
                <span className="font-inter text-sm">
                  {siteConfig.phoneDisplay}
                </span>
              </a>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleNavClick("#contact")}
              >
                Inquire Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-ivory p-2 cursor-pointer"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 md:hidden",
          "transition-all duration-500",
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
      >
        <div
          className="absolute inset-0 bg-charcoal/98 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        <div className="relative z-10 flex flex-col items-center justify-center h-full gap-8">
          {/* Logo in mobile menu */}
          <Image
            src="/images/brand/logo.png"
            alt="Hotel Kashish International"
            width={500}
            height={500}
            className="h-20 w-20 object-contain rounded-full mb-4"
            style={{ background: "transparent" }}
          />

          {navItems.map((item, index) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className={cn(
                "font-playfair text-3xl text-ivory/90 hover:text-gold",
                "transition-all duration-300",
                "cursor-pointer bg-transparent border-none",
                isMobileMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0",
              )}
              style={{
                transitionDelay: isMobileMenuOpen
                  ? `${index * 100 + 200}ms`
                  : "0ms",
              }}
            >
              {item.label}
            </button>
          ))}

          <a
            href={getPhoneLink(siteConfig.phone)}
            className={cn(
              "flex items-center gap-3 text-gold mt-4",
              "transition-all duration-300",
              isMobileMenuOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0",
            )}
            style={{
              transitionDelay: isMobileMenuOpen
                ? `${navItems.length * 100 + 200}ms`
                : "0ms",
            }}
          >
            <Phone size={18} />
            <span className="font-inter text-lg">
              {siteConfig.phoneDisplay}
            </span>
          </a>
        </div>
      </div>
    </>
  );
}
