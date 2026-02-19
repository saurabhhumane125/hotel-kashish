"use client";

import Image from "next/image";
import { siteConfig } from "@/config/site";
import { navItems } from "@/config/navigation";
import { getPhoneLink, getWhatsAppLink } from "@/lib/utils";
import { Phone, Mail, MapPin, ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-charcoal text-ivory/70">
      {/* Closing Statement */}
      <div className="bg-charcoal-dark py-12 sm:py-16">
        <div className="container-custom text-center">
          <p className="font-cormorant text-xs sm:text-sm text-gold/60 tracking-[0.3em] uppercase mb-4">
            Your Occasion Awaits
          </p>
          <h3 className="font-playfair text-2xl sm:text-3xl lg:text-4xl text-ivory/90 max-w-[600px] mx-auto leading-snug mb-6">
            Every great celebration begins with the right place
          </h3>
          <div className="w-12 h-px bg-gold/30 mx-auto" />
        </div>
      </div>

      <div className="w-full h-px bg-gold/20" />

      <div className="container-custom py-10 sm:py-14">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <Image
                src="/images/brand/logo.png"
                alt="Hotel Kashish International"
                width={120}
                height={120}
                className="h-10 w-10 object-contain rounded-full"
              />
              <div className="flex flex-col leading-none">
                <span className="font-playfair text-ivory text-lg font-semibold">
                  Kashish
                </span>
                <span className="font-cormorant text-gold text-[10px] tracking-[0.2em] uppercase">
                  International
                </span>
              </div>
            </div>
            <p className="font-inter text-sm text-ivory/40 leading-relaxed max-w-xs">
              Kalyan East&apos;s premier destination for celebrations, dining,
              and stays.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-cormorant text-xs sm:text-sm text-gold uppercase tracking-[0.2em] mb-3 sm:mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="font-inter text-sm text-ivory/40 hover:text-gold transition-colors duration-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Reservations */}
          <div>
            <h4 className="font-cormorant text-xs sm:text-sm text-gold uppercase tracking-[0.2em] mb-3 sm:mb-4">
              Reservations
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="#stay"
                  className="font-inter text-sm text-ivory/40 hover:text-gold transition-colors duration-300"
                >
                  Rooms
                </a>
              </li>
              <li>
                <a
                  href="#celebrate"
                  className="font-inter text-sm text-ivory/40 hover:text-gold transition-colors duration-300"
                >
                  Banquets
                </a>
              </li>
              <li>
                <a
                  href="#dine"
                  className="font-inter text-sm text-ivory/40 hover:text-gold transition-colors duration-300"
                >
                  Restaurant & Bar
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-cormorant text-xs sm:text-sm text-gold uppercase tracking-[0.2em] mb-3 sm:mb-4">
              Contact
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={getPhoneLink(siteConfig.phone)}
                  className="flex items-start gap-2 font-inter text-sm text-ivory/40 hover:text-gold transition-colors duration-300"
                >
                  <Phone size={13} className="mt-0.5 shrink-0" />
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={getWhatsAppLink(
                    siteConfig.whatsapp,
                    "Hello, I'd like to inquire about Hotel Kashish International.",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 font-inter text-sm text-ivory/40 hover:text-gold transition-colors duration-300"
                >
                  <Phone size={13} className="mt-0.5 shrink-0" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-2 font-inter text-sm text-ivory/40 hover:text-gold transition-colors duration-300"
                >
                  <Mail size={13} className="mt-0.5 shrink-0" />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.address.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 font-inter text-sm text-ivory/40 hover:text-gold transition-colors duration-300"
                >
                  <MapPin size={13} className="mt-0.5 shrink-0" />
                  <span>{siteConfig.address.line2}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Back to Top */}
        <div className="mt-10 pt-6 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-inter text-xs text-ivory/25">
              © {currentYear} {siteConfig.name}. All rights reserved.
            </p>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-ivory/25 hover:text-gold transition-colors duration-300 cursor-pointer group"
            >
              <span className="font-inter text-xs">Back to top</span>
              <div className="w-7 h-7 border border-ivory/15 group-hover:border-gold/50 flex items-center justify-center transition-all duration-300">
                <ArrowUp size={12} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
