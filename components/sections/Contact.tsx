"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";
import { getPhoneLink, getWhatsAppLink } from "@/lib/utils";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";

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
    }, 3000);
  };

  const inputStyles =
    "w-full px-4 py-3 bg-white border border-stone-dark/30 font-inter text-sm text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:border-gold transition-colors duration-300";

  const labelStyles =
    "font-inter text-xs text-charcoal/60 uppercase tracking-wider mb-1.5 block";

  return (
    <section id="contact" className="bg-ivory-light section-padding">
      <div className="container-custom">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <SectionLabel className="mb-4 block">Connect</SectionLabel>
            <SectionHeading>Let&apos;s Plan Together</SectionHeading>
            <p className="font-inter text-body text-charcoal/60 max-w-[600px] mx-auto mt-6">
              Whether it&apos;s a grand wedding, an intimate gathering, or a
              room booking — reach out and we&apos;ll make it happen.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Form */}
          <AnimateOnScroll className="lg:col-span-3">
            <div className="bg-white border border-stone-dark/20 p-6 sm:p-8 lg:p-10">
              <h3 className="font-playfair text-xl text-charcoal mb-6">
                Send an Inquiry
              </h3>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send size={24} className="text-green-600" />
                  </div>
                  <h4 className="font-playfair text-xl text-charcoal mb-2">
                    Inquiry Sent!
                  </h4>
                  <p className="font-inter text-sm text-charcoal/60">
                    We&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className={labelStyles}>
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className={inputStyles}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className={labelStyles}>
                        Phone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        className={inputStyles}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className={labelStyles}>
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className={inputStyles}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="eventType" className={labelStyles}>
                        Event Type *
                      </label>
                      <select
                        id="eventType"
                        name="eventType"
                        required
                        value={formData.eventType}
                        onChange={handleChange}
                        className={inputStyles}
                      >
                        <option value="">Select event type</option>
                        {eventTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="estimatedGuests" className={labelStyles}>
                        Estimated Guests
                      </label>
                      <select
                        id="estimatedGuests"
                        name="estimatedGuests"
                        value={formData.estimatedGuests}
                        onChange={handleChange}
                        className={inputStyles}
                      >
                        <option value="">Select range</option>
                        {guestRanges.map((range) => (
                          <option key={range} value={range}>
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="preferredDate" className={labelStyles}>
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      id="preferredDate"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className={inputStyles}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className={labelStyles}>
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your event or requirements..."
                      className={`${inputStyles} resize-none`}
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full justify-center"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Inquiry"}
                  </Button>
                </form>
              )}
            </div>
          </AnimateOnScroll>

          {/* Contact Info */}
          <AnimateOnScroll delay={0.2} className="lg:col-span-2">
            <div className="space-y-8">
              <div className="bg-white border border-stone-dark/20 p-6 sm:p-8">
                <h3 className="font-playfair text-xl text-charcoal mb-6">
                  Quick Contact
                </h3>
                <div className="space-y-4">
                  <a
                    href={getPhoneLink(siteConfig.phone)}
                    className="flex items-center gap-4 p-4 bg-ivory/50 hover:bg-gold/5 transition-colors duration-300 group"
                  >
                    <div className="w-10 h-10 bg-gold/10 flex items-center justify-center shrink-0">
                      <Phone size={18} className="text-gold" />
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
                    className="flex items-center gap-4 p-4 bg-ivory/50 hover:bg-green-50/50 transition-colors duration-300 group"
                  >
                    <div className="w-10 h-10 bg-green-50 flex items-center justify-center shrink-0">
                      <MessageCircle size={18} className="text-green-600" />
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
                    className="flex items-center gap-4 p-4 bg-ivory/50 hover:bg-gold/5 transition-colors duration-300 group"
                  >
                    <div className="w-10 h-10 bg-gold/10 flex items-center justify-center shrink-0">
                      <Mail size={18} className="text-gold" />
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
              <div className="bg-white border border-stone-dark/20 p-6 sm:p-8">
                <h3 className="font-playfair text-xl text-charcoal mb-4">
                  Find Us
                </h3>
                <a
                  href={siteConfig.address.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-charcoal/60 hover:text-gold-dark transition-colors duration-300 mb-6"
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

                {/* Google Map */}
                <div className="h-48 overflow-hidden">
                  <iframe
                    src="https://maps.app.goo.gl/NnaNmkEQJnQG7rvo7"
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
