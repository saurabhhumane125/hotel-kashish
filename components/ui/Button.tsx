import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  href?: string;
}

export default function Button({
  variant = "primary",
  size = "md",
  children,
  className,
  href,
  ...props
}: ButtonProps) {
  const variants = {
    primary: "bg-gold text-white hover:bg-gold-dark border border-gold",
    secondary:
      "bg-charcoal text-ivory hover:bg-charcoal-light border border-charcoal",
    outline:
      "bg-transparent text-gold border border-gold hover:bg-gold hover:text-white",
    ghost:
      "bg-transparent text-charcoal hover:bg-charcoal/5 border border-transparent",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const baseStyles = cn(
    "inline-flex items-center justify-center gap-2",
    "font-inter font-medium tracking-wide",
    "transition-all duration-300 ease-out",
    "cursor-pointer select-none",
    "disabled:opacity-50 disabled:cursor-not-allowed",
    variants[variant],
    sizes[size],
    className,
  );

  if (href) {
    return (
      <a href={href} className={baseStyles}>
        {children}
      </a>
    );
  }

  return (
    <button className={baseStyles} {...props}>
      {children}
    </button>
  );
}
