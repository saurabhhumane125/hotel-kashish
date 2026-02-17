import { Room } from "@/types";

export const rooms: Room[] = [
  {
    id: "standard",
    name: "Standard Room",
    area: 150,
    bed: "Queen Bed",
    price: 2500,
    amenities: [
      "Complimentary Wi-Fi",
      "Air Conditioning",
      "In-house Restaurant",
      "Bar Access",
    ],
    description:
      "Comfortable and well-appointed rooms with everything you need for a restful stay in Kalyan.",
    image: "/images/rooms/standard.jpg",
  },
  {
    id: "executive",
    name: "Executive Room",
    area: 250,
    bed: "Queen / Twin Beds",
    price: 3000,
    amenities: [
      "Complimentary Wi-Fi",
      "Air Conditioning",
      "In-house Restaurant",
      "Bar Access",
    ],
    description:
      "Spacious rooms designed for comfort and productivity — the preferred choice for business and extended stays.",
    image: "/images/rooms/executive.jpg",
  },
  {
    id: "superior",
    name: "Superior Room",
    area: 300,
    bed: "King Bed",
    price: 3500,
    amenities: [
      "Complimentary Wi-Fi",
      "Air Conditioning",
      "In-house Restaurant",
      "Bar Access",
    ],
    description:
      "Our most generous rooms — king-sized comfort with premium amenities for an elevated experience.",
    image: "/images/rooms/superior.jpg",
  },
];
