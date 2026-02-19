import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Combines class names intelligently — merges Tailwind conflicts
// Usage: cn("bg-white", isActive && "bg-black", "p-4")
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Formats price in Indian Rupee format
// Usage: formatPrice(120000) → "₹1,20,000"
export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

// Formats phone number for WhatsApp link
// Usage: getWhatsAppLink("918108847000", "Hello") → "https://wa.me/918108847000?text=Hello"
export function getWhatsAppLink(phone: string, message?: string): string {
  const base = `https://wa.me/${phone}`;
  if (message) {
    return `${base}?text=${encodeURIComponent(message)}`;
  }
  return base;
}

// Formats phone number for tel: link
// Usage: getPhoneLink("+918108847000") → "tel:+918108847000"
export function getPhoneLink(phone: string): string {
  return `tel:${phone}`;
}

// Smooth scroll to section by ID
export function scrollToSection(id: string): void {
  const element = document.getElementById(id);
  if (element) {
    const navHeight = 80; // Height of sticky nav
    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: elementPosition - navHeight,
      behavior: "smooth",
    });
  }
}
