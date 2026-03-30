"use client";

import { useRef, useEffect, useState } from "react";

export default function VideoBackground({
  src,
  className = "",
}: {
  src: string;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const poster = src.replace(".mp4", "-poster.jpg");

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    // iOS-specific attributes
    video.setAttribute("webkit-playsinline", "");
    video.setAttribute("x5-playsinline", "");

    // Track when video actually starts playing
    const onPlaying = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    video.addEventListener("playing", onPlaying);
    video.addEventListener("pause", onPause);

    const tryPlay = () => {
      if (video.paused) {
        video.muted = true; // Force muted (some browsers reset this)
        video.play().catch(() => {});
      }
    };

    // Try immediately
    tryPlay();

    // Try again after a short delay (some browsers need this)
    const t1 = setTimeout(tryPlay, 500);
    const t2 = setTimeout(tryPlay, 1500);

    // Play when visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) tryPlay();
        });
      },
      { threshold: 0.05 }
    );
    observer.observe(video);

    // Retry on any user interaction
    const onInteract = () => {
      document.querySelectorAll("video").forEach((v) => {
        if (v.paused) {
          v.muted = true;
          v.play().catch(() => {});
        }
      });
    };
    window.addEventListener("touchstart", onInteract, { passive: true });
    window.addEventListener("scroll", onInteract, { passive: true });
    window.addEventListener("click", onInteract);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      observer.disconnect();
      video.removeEventListener("playing", onPlaying);
      video.removeEventListener("pause", onPause);
      window.removeEventListener("touchstart", onInteract);
      window.removeEventListener("scroll", onInteract);
      window.removeEventListener("click", onInteract);
    };
  }, []);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Poster — always visible underneath */}
      <img
        src={poster}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Video — layered on top, visible when playing */}
      <video
        ref={ref}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          isPlaying ? "opacity-100" : "opacity-0"
        }`}
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}
