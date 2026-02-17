// ========================
// Room Types
// ========================
export interface Room {
  id: string;
  name: string;
  area: number; // square feet
  bed: string;
  price: number; // per night in INR
  amenities: string[];
  description: string;
  image: string;
}

// ========================
// Banquet Hall Types
// ========================
export interface BanquetHall {
  id: string;
  name: string;
  subtitle: string;
  capacity: {
    min: number;
    max: number;
  };
  area: number; // square feet
  price: number; // starting price in INR
  bestFor: string[];
  amenities: string[];
  image: string;
}

// ========================
// Testimonial Types
// ========================
export interface Testimonial {
  id: string;
  name: string;
  role: string; // "Wedding Client", "Corporate Event", etc.
  quote: string;
  image?: string; // optional client photo
}

// ========================
// Navigation Types
// ========================
export interface NavItem {
  label: string;
  href: string; // section ID like "#celebrate"
}

// ========================
// Site Config Types
// ========================
export interface SiteConfig {
  name: string;
  tagline: string;
  subtitle: string;
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  email: string;
  address: {
    line1: string;
    line2: string;
    line3: string;
    city: string;
    state: string;
    pincode: string;
    mapUrl: string;
    mapEmbed: string;
  };
  social: {
    facebook: string;
    instagram: string;
    youtube: string;
  };
}

// ========================
// Form Types
// ========================
export interface InquiryFormData {
  name: string;
  phone: string;
  email: string;
  eventType: string;
  estimatedGuests: string;
  preferredDate: string;
  message: string;
}

// ========================
// Experience/Dining Types
// ========================
export interface Experience {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  cta: {
    label: string;
    action: string; // URL or section link
  };
}
