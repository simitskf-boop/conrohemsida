"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  value: string;
  duration?: number;
  className?: string;
}

export default function AnimatedCounter({
  value,
  duration = 2000,
  className = "",
}: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState("0");
  const [done, setDone] = useState(false);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animate();
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration]);

  const animate = () => {
    // Extract the numeric part and any prefix/suffix
    const match = value.match(/^([^\d]*)([\d]+)(.*)$/);
    if (!match) {
      setDisplay(value);
      setDone(true);
      return;
    }

    const prefix = match[1];
    const num = parseInt(match[2], 10);
    const suffix = match[3];

    const startTime = performance.now();

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing: ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * num);

      setDisplay(`${prefix}${current}${suffix}`);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setDisplay(value);
        setDone(true);
      }
    };

    requestAnimationFrame(step);
  };

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-500 ${done ? "animate-counter-done" : ""}`}
    >
      {display}
    </div>
  );
}
