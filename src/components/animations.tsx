"use client";

import { useCallback, useEffect, useRef, type ElementType, type ReactNode } from "react";

type IntersectionAnimationProps = {
  as?: ElementType;
  animation?: "fade-in" | "fade-in-up" | "scale-in" | "slide-in-right";
  delay?: number;
  className?: string;
  children: ReactNode;
};

export function IntersectionAnimation({
  as: Component = "div",
  animation = "fade-in",
  delay = 0,
  className,
  children,
}: IntersectionAnimationProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const target = ref.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            target.style.animationDelay = `${delay}s`;
            target.classList.add(`animate-${animation}`);
            observer.unobserve(target);
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, [animation, delay]);

  const Comp = Component as ElementType;

  const setRef = useCallback((node: Element | null) => {
    ref.current = node instanceof HTMLElement ? node : null;
  }, []);

  return (
    <Comp ref={setRef} className={className}>
      {children}
    </Comp>
  );
}

