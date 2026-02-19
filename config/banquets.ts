import { BanquetHall } from "@/types";

export const banquetHalls: BanquetHall[] = [
  {
    id: "golden-eye",
    name: "Golden Eye",
    subtitle: "For Grand Celebrations",
    capacity: { min: 500, max: 1000 },
    area: 8035,
    price: 120000,
    bestFor: [
      "Grand Weddings",
      "Receptions",
      "Large Corporate Events",
      "Cultural Events",
    ],
    amenities: [
      "Large AC Hall",
      "Elegant Stage & Décor",
      "Customizable Menu",
      "Bridal Room",
      "Valet Parking",
      "Dedicated Staff",
    ],
    image: "/images/banquets/golden-eye.jpg",
  },
  {
    id: "ruby-red",
    name: "Ruby Red",
    subtitle: "For Intimate Gatherings",
    capacity: { min: 50, max: 150 },
    area: 2176,
    price: 60000,
    bestFor: [
      "Small Weddings",
      "Birthday Parties",
      "Corporate Meetings",
      "Private Dinners",
    ],
    amenities: [
      "AC Hall",
      "Stage & Décor",
      "Customizable Menu",
      "Changing Rooms",
      "Parking",
      "Dedicated Staff",
    ],
    image: "/images/banquets/ruby-red.jpg",
  },
  {
    id: "blue-moon",
    name: "Blue Moon",
    subtitle: "For Memorable Events",
    capacity: { min: 150, max: 500 },
    area: 3776,
    price: 90000,
    bestFor: [
      "Weddings",
      "Birthday Parties",
      "Family Gatherings",
      "Corporate Events",
    ],
    amenities: [
      "AC Hall",
      "Stage & Décor",
      "Customizable Menu",
      "Bridal Room",
      "Valet Parking",
      "Dedicated Staff",
    ],
    image: "/images/banquets/blue-moon.jpg",
  },
];

// Shared amenities shown below all hall cards
export const banquetAmenities: string[] = [
  "Air-Conditioned Halls",
  "Stage & Décor Setup",
  "Customizable Menu",
  "Valet Parking & Staff",
];
