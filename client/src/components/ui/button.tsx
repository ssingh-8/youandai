import clsx from "clsx";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "default" | "lg" | "sm";
};

const baseStyles = "inline-flex items-center justify-center rounded-full font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-60";

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "bg-accent text-accent-foreground hover:bg-accent/90 shadow-accent",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  outline: "border border-border bg-transparent text-foreground hover:bg-secondary",
  ghost: "text-foreground hover:text-accent hover:bg-secondary/50",
};

const sizes: Record<NonNullable<ButtonProps["size"]>, string> = {
  default: "px-6 py-3 text-sm",
  lg: "px-7 py-3.5 text-base",
  sm: "px-4 py-2 text-xs",
};

export function Button({ variant = "primary", size = "default", className, ...props }: ButtonProps) {
  return (
    <button
      className={clsx(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    />
  );
}
