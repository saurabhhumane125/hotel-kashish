import Image from "next/image";
import { siteConfig } from "@/config/site";
import { navItems } from "@/config/navigation";
import { getPhoneLink, getWhatsAppLink } from "@/lib/utils";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-ivory/70">
      <div className="w-full h-px bg-gold/20" />

      <div className="container-custom py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/brand/logo.png"
                alt="Hotel Kashish International"
                width={500}
                height={500}
                className="h-14 w-14 object-contain rounded-full"
                style={{ background: "transparent" }}
              />
              <div className="flex flex-col leading-none">
                <span className="font-playfair text-ivory text-xl font-semibold">
                  Kashish
                </span>
                <span className="font-cormorant text-gold text-xs tracking-[0.2em] uppercase">
                  International
                </span>
              </div>
            </div>
            <p className="font-inter text-sm text-ivory/50 leading-relaxed max-w-xs">
              Kalyan East&apos;s premier destination for celebrations, dining,
              and stays. Making every occasion memorable.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-cormorant text-sm text-gold uppercase tracking-[0.2em] mb-4">
              Explore
            </h4>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="font-inter text-sm text-ivory/50 hover:text-gold transition-colors duration-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Reservations */}
          <div>
            <h4 className="font-cormorant text-sm text-gold uppercase tracking-[0.2em] mb-4">
              Reservations
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#stay"
                  className="font-inter text-sm text-ivory/50 hover:text-gold transition-colors duration-300"
                >
                  Rooms
                </a>
              </li>
              <li>
                <a
                  href="#celebrate"
                  className="font-inter text-sm text-ivory/50 hover:text-gold transition-colors duration-300"
                >
                  Banquets
                </a>
              </li>
              <li>
                <a
                  href="#dine"
                  className="font-inter text-sm text-ivory/50 hover:text-gold transition-colors duration-300"
                >
                  Restaurant & Bar
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-cormorant text-sm text-gold uppercase tracking-[0.2em] mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={getPhoneLink(siteConfig.phone)}
                  className="flex items-start gap-2 font-inter text-sm text-ivory/50 hover:text-gold transition-colors duration-300"
                >
                  <Phone size={14} className="mt-0.5 shrink-0" />
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
                  className="flex items-start gap-2 font-inter text-sm text-ivory/50 hover:text-gold transition-colors duration-300"
                >
                  <Phone size={14} className="mt-0.5 shrink-0" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-2 font-inter text-sm text-ivory/50 hover:text-gold transition-colors duration-300"
                >
                  <Mail size={14} className="mt-0.5 shrink-0" />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.address.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 font-inter text-sm text-ivory/50 hover:text-gold transition-colors duration-300"
                >
                  <MapPin size={14} className="mt-0.5 shrink-0" />
                  <span>
                    {siteConfig.address.line2}, {siteConfig.address.line3}
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-inter text-xs text-ivory/30">
              © {currentYear} {siteConfig.name}. All rights reserved.
            </p>
            <p className="font-inter text-xs text-ivory/30">
              {siteConfig.address.line2}, {siteConfig.address.city},{" "}
              {siteConfig.address.state}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
