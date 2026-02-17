import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

export default function SectionLabel({
  children,
  className,
  dark = false,
}: SectionLabelProps) {
  return (
    <span
      className={cn(
        "font-cormorant text-label uppercase tracking-[0.2em] font-medium",
        dark ? "text-gold" : "text-gold-dark",
        className,
      )}
    >
      {children}
    </span>
  );
}
