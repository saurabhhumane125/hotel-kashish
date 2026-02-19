"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { getPhoneLink, getWhatsAppLink } from "@/lib/utils";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import SectionDivider from "@/components/ui/SectionDivider";
import TextReveal from "@/components/ui/TextReveal";
import Button from "@/components/ui/Button";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  CheckCircle,
} from "lucide-react";

const eventTypes = [
  "Wedding",
  "Reception",
  "Birthday Party",
  "Corporate Event",
  "Conference",
  "Private Dinner",
  "Other",
];

const guestRanges = [
  "Under 50",
  "50 – 150",
  "150 – 300",
  "300 – 500",
  "500 – 700",
  "700 – 1000",
  "1000+",
];

// Floating label input component
function FloatingInput({
  id,
  name,
  type = "text",
  label,
  required = false,
  value,
  onChange,
}: {
  id: string;
  name: string;
  type?: string;
  label: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="relative">
      <input
        type={type}
        id={id}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        placeholder=" "
        className="peer w-full px-4 pt-6 pb-2 bg-white border border-stone-dark/30 font-inter text-sm text-charcoal focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/20 transition-all duration-300"
      />
      <label
        htmlFor={id}
        className="absolute left-4 top-1/2 -translate-y-1/2 font-inter text-sm text-charcoal/40 transition-all duration-300 pointer-events-none peer-focus:top-3 peer-focus:text-xs peer-focus:text-gold peer-[:not(:placeholder-shown)]:top-3 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-charcoal/50"
      >
        {label}
        {required && " *"}
      </label>
    </div>
  );
}

function FloatingSelect({
  id,
  name,
  label,
  required = false,
  value,
  onChange,
  options,
}: {
  id: string;
  name: string;
  label: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
}) {
  return (
    <div className="relative">
      <select
        id={id}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        className={`w-full px-4 pt-6 pb-2 bg-white border border-stone-dark/30 font-inter text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/20 transition-all duration-300 appearance-none ${
          value ? "text-charcoal" : "text-transparent"
        }`}
      >
        <option value=""></option>
        {options.map((opt) => (
          <option key={opt} value={opt} className="text-charcoal">
            {opt}
          </option>
        ))}
      </select>
      <label
        htmlFor={id}
        className={`absolute left-4 font-inter transition-all duration-300 pointer-events-none ${
          value
            ? "top-3 text-xs text-charcoal/50"
            : "top-1/2 -translate-y-1/2 text-sm text-charcoal/40"
        }`}
      >
        {label}
        {required && " *"}
      </label>
      {/* Custom arrow */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          className="text-charcoal/30"
        >
          <path
            d="M3 4.5L6 7.5L9 4.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    eventType: "",
    estimatedGuests: "",
    preferredDate: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const message = `Hello, I'd like to inquire about an event at Hotel Kashish International.

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email || "Not provided"}
Event Type: ${formData.eventType}
Estimated Guests: ${formData.estimatedGuests}
Preferred Date: ${formData.preferredDate || "Flexible"}
Message: ${formData.message || "No additional message"}`;

    window.open(getWhatsAppLink(siteConfig.whatsapp, message), "_blank");

    setIsSubmitting(false);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        phone: "",
        email: "",
        eventType: "",
        estimatedGuests: "",
        preferredDate: "",
        message: "",
      });
    }, 4000);
  };

  return (
    <section id="contact" className="bg-ivory-light section-padding">
      <div className="container-custom">
        <AnimateOnScroll>
          <div className="text-center mb-4">
            <span className="font-cormorant text-label uppercase tracking-[0.2em] font-medium text-gold-dark mb-4 block">
              Connect
            </span>
            <h2 className="font-playfair text-section-heading font-semibold text-charcoal mb-6">
              <TextReveal>Let&apos;s Plan Together</TextReveal>
            </h2>
            <p className="font-inter text-body text-charcoal/60 max-w-[600px] mx-auto">
              Whether it&apos;s a grand wedding, an intimate gathering, or a
              room booking — reach out and we&apos;ll make it happen.
            </p>
          </div>
        </AnimateOnScroll>

        <SectionDivider className="mb-12" />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16">
          {/* Form */}
          <AnimateOnScroll className="lg:col-span-3">
            <div className="bg-white border border-stone-dark/15 p-6 sm:p-8 lg:p-10 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1 h-6 bg-gold" />
                <h3 className="font-playfair text-xl text-charcoal">
                  Send an Inquiry
                </h3>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <CheckCircle size={32} className="text-green-600" />
                  </motion.div>
                  <h4 className="font-playfair text-xl text-charcoal mb-2">
                    Inquiry Sent!
                  </h4>
                  <p className="font-inter text-sm text-charcoal/60">
                    We&apos;ll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 sm:space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <FloatingInput
                      id="name"
                      name="name"
                      label="Your Name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                    <FloatingInput
                      id="phone"
                      name="phone"
                      type="tel"
                      label="Phone Number"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <FloatingInput
                    id="email"
                    name="email"
                    type="email"
                    label="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <FloatingSelect
                      id="eventType"
                      name="eventType"
                      label="Event Type"
                      required
                      value={formData.eventType}
                      onChange={handleChange}
                      options={eventTypes}
                    />
                    <FloatingSelect
                      id="estimatedGuests"
                      name="estimatedGuests"
                      label="Estimated Guests"
                      value={formData.estimatedGuests}
                      onChange={handleChange}
                      options={guestRanges}
                    />
                  </div>

                  <div className="relative">
                    <input
                      type="date"
                      id="preferredDate"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className="w-full px-4 pt-6 pb-2 bg-white border border-stone-dark/30 font-inter text-sm text-charcoal focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/20 transition-all duration-300"
                    />
                    <label
                      htmlFor="preferredDate"
                      className="absolute left-4 top-3 font-inter text-xs text-charcoal/50 pointer-events-none"
                    >
                      Preferred Date
                    </label>
                  </div>

                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder=" "
                      className="peer w-full px-4 pt-6 pb-2 bg-white border border-stone-dark/30 font-inter text-sm text-charcoal placeholder:text-transparent focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/20 transition-all duration-300 resize-none"
                    />
                    <label
                      htmlFor="message"
                      className="absolute left-4 top-4 font-inter text-sm text-charcoal/40 transition-all duration-300 pointer-events-none peer-focus:top-2 peer-focus:text-xs peer-focus:text-gold peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-charcoal/50"
                    >
                      Tell us about your event...
                    </label>
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full justify-center mt-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                        />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send size={16} />
                        Send Inquiry
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </AnimateOnScroll>

          {/* Contact Info */}
          <AnimateOnScroll delay={0.2} className="lg:col-span-2">
            <div className="space-y-6">
              {/* Quick Actions */}
              <div className="bg-white border border-stone-dark/15 p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-6 bg-gold" />
                  <h3 className="font-playfair text-xl text-charcoal">
                    Quick Contact
                  </h3>
                </div>

                <div className="space-y-3">
                  <a
                    href={getPhoneLink(siteConfig.phone)}
                    className="flex items-center gap-4 p-4 bg-ivory/50 hover:bg-gold/5 transition-all duration-300 group active:scale-[0.98]"
                  >
                    <div className="w-10 h-10 bg-gold/10 flex items-center justify-center shrink-0">
                      <Phone
                        size={18}
                        className="text-gold group-hover:text-gold-dark transition-colors"
                      />
                    </div>
                    <div>
                      <p className="font-inter text-xs text-charcoal/40 uppercase tracking-wider">
                        Call Us
                      </p>
                      <p className="font-inter text-sm text-charcoal font-medium">
                        {siteConfig.phoneDisplay}
                      </p>
                    </div>
                  </a>

                  <a
                    href={getWhatsAppLink(
                      siteConfig.whatsapp,
                      "Hello, I'd like to inquire about Hotel Kashish International.",
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-ivory/50 hover:bg-green-50/50 transition-all duration-300 group active:scale-[0.98]"
                  >
                    <div className="w-10 h-10 bg-green-50 flex items-center justify-center shrink-0">
                      <MessageCircle
                        size={18}
                        className="text-green-600 group-hover:text-green-700 transition-colors"
                      />
                    </div>
                    <div>
                      <p className="font-inter text-xs text-charcoal/40 uppercase tracking-wider">
                        WhatsApp
                      </p>
                      <p className="font-inter text-sm text-charcoal font-medium">
                        Message Us Directly
                      </p>
                    </div>
                  </a>

                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-center gap-4 p-4 bg-ivory/50 hover:bg-gold/5 transition-all duration-300 group active:scale-[0.98]"
                  >
                    <div className="w-10 h-10 bg-gold/10 flex items-center justify-center shrink-0">
                      <Mail
                        size={18}
                        className="text-gold group-hover:text-gold-dark transition-colors"
                      />
                    </div>
                    <div>
                      <p className="font-inter text-xs text-charcoal/40 uppercase tracking-wider">
                        Email
                      </p>
                      <p className="font-inter text-sm text-charcoal font-medium">
                        {siteConfig.email}
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Address + Map */}
              <div className="bg-white border border-stone-dark/15 p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1 h-6 bg-gold" />
                  <h3 className="font-playfair text-xl text-charcoal">
                    Find Us
                  </h3>
                </div>

                <a
                  href={siteConfig.address.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-charcoal/60 hover:text-gold-dark transition-colors duration-300 mb-6 active:scale-[0.98]"
                >
                  <MapPin size={18} className="text-gold shrink-0 mt-0.5" />
                  <div className="font-inter text-sm leading-relaxed">
                    <p>{siteConfig.address.line1}</p>
                    <p>{siteConfig.address.line2}</p>
                    <p>{siteConfig.address.line3}</p>
                    <p>
                      {siteConfig.address.city}, {siteConfig.address.state} –{" "}
                      {siteConfig.address.pincode}
                    </p>
                  </div>
                </a>

                <div className="h-48 overflow-hidden border border-stone-dark/10">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.0!2d73.1355!3d19.2437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bd8a0b8e3c7b%3A0x1234567890abcdef!2sHotel%20Kashish%20International!5e0!3m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Hotel Kashish International Location"
                  />
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
