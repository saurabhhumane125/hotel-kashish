import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
  hover?: boolean;
}

export default function Card({
  children,
  className,
  dark = false,
  hover = true,
}: CardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden border transition-all duration-300",
        dark
          ? "bg-charcoal-light border-white/10"
          : "bg-white border-stone-dark/30",
        hover && dark && "hover:border-gold/30",
        hover && !dark && "hover:border-gold/40 hover:shadow-lg",
        className,
      )}
    >
      {children}
    </div>
  );
}
