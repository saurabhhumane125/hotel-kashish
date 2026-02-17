import { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: "restaurant",
    name: "The Restaurant",
    tagline: "Diverse Dining",
    description:
      "Authentic Indian favourites and global cuisines, made fresh daily. Perfect for family dinners and special occasions.",
    image: "/images/dining/restaurant.jpg",
    cta: {
      label: "Reserve a Table",
      action: "#contact",
    },
  },
  {
    id: "bar",
    name: "The Bar",
    tagline: "Premium Bar",
    description:
      "Signature cocktails, fine wines, whiskey, and craft beers — served in a refined, relaxed setting.",
    image: "/images/dining/bar.jpg",
    cta: {
      label: "Visit Us",
      action: "#contact",
    },
  },
  {
    id: "sports-bar",
    name: "The Sports Bar",
    tagline: "Live Sports",
    description:
      "Every match on the big screen. High-energy atmosphere, cold beers, and the best company. Cheer for your team.",
    image: "/images/dining/sports-bar.jpg",
    cta: {
      label: "Walk In",
      action: "#contact",
    },
  },
];
