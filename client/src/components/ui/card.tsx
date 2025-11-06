import clsx from "clsx";

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: "default" | "soft" | "dark";
};

export function Card({ variant = "default", className, ...props }: CardProps) {
  return (
    <div
      className={clsx(
        "rounded-3xl border px-6 py-8 shadow-card",
        variant === "default" && "border-border bg-white/90",
        variant === "soft" && "border-transparent bg-accent-soft/80 text-primary",
        variant === "dark" && "border-white/10 bg-midnight/90 text-white",
        className
      )}
      {...props}
    />
  );
}

export function CardHeading({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={clsx("text-xl font-semibold text-primary", className)} {...props} />;
}

export function CardDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={clsx("mt-2 text-sm text-slate-600", className)} {...props} />;
}

