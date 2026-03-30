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
  const [failed, setFailed] = useState(false);

  // Derive poster path from video path: /hero-video-1.mp4 -> /hero-video-1-poster.jpg
  const poster = src.replace(".mp4", "-poster.jpg");

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    video.setAttribute("webkit-playsinline", "");
    video.setAttribute("x5-playsinline", "");
    video.setAttribute("x5-video-player-type", "h5");

    const tryPlay = () => {
      if (video.paused) {
        video.play().catch(() => {
          setFailed(true);
        });
      }
    };

    // IntersectionObserver: only play when visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            tryPlay();
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(video);

    // Retry on first user interaction (iOS Low Power Mode)
    const onInteract = () => {
      tryPlay();
      window.removeEventListener("touchstart", onInteract);
      window.removeEventListener("scroll", onInteract);
      window.removeEventListener("click", onInteract);
    };
    window.addEventListener("touchstart", onInteract, { passive: true, once: true });
    window.addEventListener("scroll", onInteract, { passive: true, once: true });
    window.addEventListener("click", onInteract, { once: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("touchstart", onInteract);
      window.removeEventListener("scroll", onInteract);
      window.removeEventListener("click", onInteract);
    };
  }, []);

  return (
    <>
      {/* Poster fallback — always rendered, hidden when video plays */}
      <img
        src={poster}
        alt=""
        className={`video-bg ${className} ${failed ? "" : "hidden"}`}
        aria-hidden="true"
      />
      {/* Video — hidden if autoplay fails */}
      <video
        ref={ref}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={poster}
        className={`video-bg ${className} ${failed ? "hidden" : ""}`}
      >
        <source src={src} type="video/mp4" />
      </video>
    </>
  );
}
