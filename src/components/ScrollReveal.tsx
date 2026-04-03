"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

type Animation = "fade-up" | "fade-in" | "fade-left" | "fade-right" | "scale" | "blur-in";

interface ScrollRevealProps {
  children: ReactNode;
  animation?: Animation;
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
  once?: boolean;
  stagger?: number;
}

const animationStyles: Record<Animation, { from: string; to: string }> = {
  "fade-up": {
    from: "opacity-0 translate-y-10",
    to: "opacity-100 translate-y-0",
  },
  "fade-in": {
    from: "opacity-0",
    to: "opacity-100",
  },
  "fade-left": {
    from: "opacity-0 -translate-x-10",
    to: "opacity-100 translate-x-0",
  },
  "fade-right": {
    from: "opacity-0 translate-x-10",
    to: "opacity-100 translate-x-0",
  },
  scale: {
    from: "opacity-0 scale-90",
    to: "opacity-100 scale-100",
  },
  "blur-in": {
    from: "opacity-0 blur-sm",
    to: "opacity-100 blur-0",
  },
};

export default function ScrollReveal({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 700,
  threshold = 0.15,
  className = "",
  once = true,
  stagger = 0,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  const style = animationStyles[animation];
  const totalDelay = delay + stagger;

  return (
    <div
      ref={ref}
      className={`transition-all ${visible ? style.to : style.from} ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${totalDelay}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {children}
    </div>
  );
}

// Staggered children wrapper
interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  animation?: Animation;
  threshold?: number;
}

export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 100,
  animation = "fade-up",
  threshold = 0.1,
}: StaggerContainerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const style = animationStyles[animation];

  return (
    <div ref={ref} className={className}>
      {Array.isArray(children)
        ? children.map((child, i) => (
            <div
              key={i}
              className={`transition-all ${visible ? style.to : style.from}`}
              style={{
                transitionDuration: "700ms",
                transitionDelay: `${i * staggerDelay}ms`,
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              {child}
            </div>
          ))
        : children}
    </div>
  );
}
