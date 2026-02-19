"use client";

import { testimonials } from "@/config/testimonials";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionHeading from "@/components/ui/SectionHeading";
import { Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="bg-ivory section-padding">
      <div className="container-custom">
        {/* Header */}
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <SectionLabel className="mb-4 block">Voices</SectionLabel>
            <SectionHeading>In Their Words</SectionHeading>
            <p className="font-inter text-body text-charcoal/60 max-w-[600px] mx-auto mt-6">
              Discover what our guests and clients say about their experiences
              at Hotel Kashish International.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[900px] mx-auto">
          {testimonials.map((testimonial, index) => (
            <AnimateOnScroll key={testimonial.id} delay={index * 0.2}>
              <div className="relative bg-white border border-stone-dark/20 p-8 sm:p-10 transition-all duration-300 hover:shadow-lg">
                {/* Quote mark */}
                <Quote size={32} className="text-gold/20 mb-6" />

                {/* Quote text */}
                <blockquote className="font-inter text-base text-charcoal/70 leading-relaxed mb-8">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  {/* Avatar placeholder */}
                  <div className="w-12 h-12 rounded-full bg-stone flex items-center justify-center shrink-0">
                    <span className="font-playfair text-lg text-gold-dark font-semibold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-inter text-sm font-semibold text-charcoal">
                      {testimonial.name}
                    </p>
                    <p className="font-cormorant text-sm text-gold-dark">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
