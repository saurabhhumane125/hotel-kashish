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
  const [activeSection, setActiveSection] = useState("");

  // Track scroll for nav background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section
  useEffect(() => {
    const sections = navItems.map((item) =>
      document.getElementById(item.href.replace("#", "")),
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-80px 0px -50% 0px" },
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Lock body scroll when mobile menu open
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
            ? "bg-charcoal/95 backdrop-blur-md shadow-lg py-0"
            : "bg-transparent py-1",
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
                setActiveSection("");
              }}
              className="flex items-center gap-2.5"
            >
              <Image
                src="/images/brand/logo.png"
                alt="Hotel Kashish International"
                width={120}
                height={120}
                className="h-10 w-10 sm:h-12 sm:w-12 object-contain rounded-full"
              />
              <div className="flex flex-col leading-none">
                <span className="font-playfair text-ivory text-base sm:text-lg font-semibold">
                  Kashish
                </span>
                <span className="font-cormorant text-gold text-[9px] sm:text-xs tracking-[0.2em] uppercase">
                  International
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={cn(
                    "relative font-inter text-sm tracking-wide px-4 py-2",
                    "transition-colors duration-300",
                    "cursor-pointer bg-transparent border-none",
                    activeSection === item.href
                      ? "text-gold"
                      : "text-ivory/70 hover:text-ivory",
                  )}
                >
                  {item.label}
                  {/* Active indicator line */}
                  <span
                    className={cn(
                      "absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gold transition-all duration-300",
                      activeSection === item.href ? "w-4" : "w-0",
                    )}
                  />
                </button>
              ))}
            </div>

            {/* Desktop Right */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href={getPhoneLink(siteConfig.phone)}
                className="flex items-center gap-2 text-ivory/60 hover:text-gold transition-colors duration-300"
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
              className="md:hidden text-ivory p-2 cursor-pointer active:scale-90 transition-transform"
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

        <div className="relative z-10 flex flex-col items-center justify-center h-full gap-6">
          <Image
            src="/images/brand/logo.png"
            alt="Hotel Kashish International"
            width={120}
            height={120}
            className="h-16 w-16 object-contain rounded-full mb-2"
          />

          {navItems.map((item, index) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className={cn(
                "text-2xl sm:text-3xl",
                "transition-all duration-300",
                "cursor-pointer bg-transparent border-none",
                activeSection === item.href
                  ? "text-gold font-semibold"
                  : "text-ivory/80 hover:text-gold",
                isMobileMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0",
              )}
              style={{
                fontFamily: "var(--font-playfair)",
                transitionDelay: isMobileMenuOpen
                  ? `${index * 80 + 150}ms`
                  : "0ms",
              }}
            >
              {item.label}
            </button>
          ))}

          {/* Divider */}
          <div
            className={cn(
              "w-12 h-px bg-gold/30 transition-all duration-500",
              isMobileMenuOpen ? "opacity-100" : "opacity-0",
            )}
            style={{
              transitionDelay: isMobileMenuOpen
                ? `${navItems.length * 80 + 150}ms`
                : "0ms",
            }}
          />

          <a
            href={getPhoneLink(siteConfig.phone)}
            className={cn(
              "flex items-center gap-3 text-gold",
              "transition-all duration-300",
              isMobileMenuOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0",
            )}
            style={{
              transitionDelay: isMobileMenuOpen
                ? `${navItems.length * 80 + 250}ms`
                : "0ms",
            }}
          >
            <Phone size={16} />
            <span className="font-inter text-base">
              {siteConfig.phoneDisplay}
            </span>
          </a>
        </div>
      </div>
    </>
  );
}
