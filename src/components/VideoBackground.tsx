"use client";

import { useRef, useEffect } from "react";

export default function VideoBackground({
  src,
  className = "",
}: {
  src: string;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    // Force play on mobile — some browsers block autoplay until interaction
    const tryPlay = () => {
      video.play().catch(() => {});
    };

    // Set webkit-playsinline for iOS
    video.setAttribute("webkit-playsinline", "");

    tryPlay();

    // Retry on visibility change (tab switch, scroll into view)
    document.addEventListener("visibilitychange", () => {
      if (!document.hidden) tryPlay();
    });

    // Also try on first user interaction
    const onInteract = () => {
      tryPlay();
      window.removeEventListener("touchstart", onInteract);
      window.removeEventListener("click", onInteract);
    };
    window.addEventListener("touchstart", onInteract, { passive: true });
    window.addEventListener("click", onInteract);

    return () => {
      window.removeEventListener("touchstart", onInteract);
      window.removeEventListener("click", onInteract);
    };
  }, []);

  return (
    <video
      ref={ref}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      className={`video-bg ${className}`}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
