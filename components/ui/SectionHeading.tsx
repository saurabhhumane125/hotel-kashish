import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

export default function SectionHeading({
  children,
  className,
  dark = false,
}: SectionHeadingProps) {
  return (
    <h2
      className={cn(
        "font-playfair text-section-heading font-semibold",
        dark ? "text-ivory" : "text-charcoal",
        className,
      )}
      style={{ textWrap: "balance" }}
    >
      {children}
    </h2>
  );
}
