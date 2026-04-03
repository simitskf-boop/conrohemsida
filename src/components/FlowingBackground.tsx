"use client";

import { useEffect, useRef } from "react";

export default function FlowingBackground({
  className = "",
}: {
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;

      ctx.clearRect(0, 0, w, h);

      // Layer 1 — slow deep wave
      drawWave(ctx, w, h, {
        time,
        speed: 0.0008,
        amplitude: h * 0.12,
        yOffset: h * 0.35,
        wavelength: w * 0.8,
        color: "rgba(22, 163, 74, 0.07)",
        lineWidth: h * 0.45,
      });

      // Layer 2 — mid wave
      drawWave(ctx, w, h, {
        time,
        speed: 0.0012,
        amplitude: h * 0.1,
        yOffset: h * 0.55,
        wavelength: w * 0.6,
        color: "rgba(74, 222, 128, 0.05)",
        lineWidth: h * 0.35,
        phaseShift: 2,
      });

      // Layer 3 — faster surface wave
      drawWave(ctx, w, h, {
        time,
        speed: 0.002,
        amplitude: h * 0.06,
        yOffset: h * 0.7,
        wavelength: w * 0.45,
        color: "rgba(16, 185, 129, 0.04)",
        lineWidth: h * 0.25,
        phaseShift: 4,
      });

      // Layer 4 — subtle accent wave
      drawWave(ctx, w, h, {
        time,
        speed: 0.0015,
        amplitude: h * 0.08,
        yOffset: h * 0.25,
        wavelength: w * 1.0,
        color: "rgba(249, 115, 22, 0.025)",
        lineWidth: h * 0.3,
        phaseShift: 1,
      });

      time++;
      animationId = requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
    />
  );
}

interface WaveParams {
  time: number;
  speed: number;
  amplitude: number;
  yOffset: number;
  wavelength: number;
  color: string;
  lineWidth: number;
  phaseShift?: number;
}

function drawWave(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  params: WaveParams
) {
  const {
    time,
    speed,
    amplitude,
    yOffset,
    wavelength,
    color,
    lineWidth,
    phaseShift = 0,
  } = params;

  ctx.beginPath();
  ctx.moveTo(0, h);

  const steps = Math.ceil(w / 4);
  for (let i = 0; i <= steps; i++) {
    const x = (i / steps) * w;
    const phase = time * speed + phaseShift;
    const y =
      yOffset +
      Math.sin((x / wavelength) * Math.PI * 2 + phase) * amplitude +
      Math.sin((x / wavelength) * Math.PI * 4 + phase * 1.3) *
        (amplitude * 0.3);
    if (i === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  }

  ctx.lineTo(w, h);
  ctx.lineTo(0, h);
  ctx.closePath();

  const gradient = ctx.createLinearGradient(0, yOffset - amplitude, 0, yOffset + lineWidth);
  gradient.addColorStop(0, color);
  gradient.addColorStop(1, "transparent");
  ctx.fillStyle = gradient;
  ctx.fill();
}
