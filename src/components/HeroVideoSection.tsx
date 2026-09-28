"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import VideoOverlay from "./VideoOverlay";

export type HeroVideoSectionProps = {
  videoFramePath: string;
  totalFrames: number;
  overlayTitle: string;
  overlayDescription: string;
};

function formatFramePath(basePath: string, frame: number): string {
  return `${basePath}${String(frame).padStart(4, "0")}.webp`;
}

export default function HeroVideoSection({
  videoFramePath,
  totalFrames,
  overlayTitle,
  overlayDescription,
}: HeroVideoSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const preloadCache = useRef<Set<string>>(new Set());

  const [currentFrame, setCurrentFrame] = useState(1);

  const activeSrc = useMemo(() => {
    return formatFramePath(videoFramePath, currentFrame);
  }, [videoFramePath, currentFrame]);

  const scrollSectionHeight = useMemo(
    () => Math.max(totalFrames * 8, 2000),
    [totalFrames],
  );

  const preloadFrame = useCallback(
    (frame: number) => {
      if (frame < 1 || frame > totalFrames) return;
      const path = formatFramePath(videoFramePath, frame);
      if (preloadCache.current.has(path)) return;
      preloadCache.current.add(path);
      const img = new window.Image();
      img.src = path;
    },
    [videoFramePath, totalFrames],
  );

  // Preload initial batch of frames immediately on mount
  useEffect(() => {
    for (let i = 1; i <= Math.min(25, totalFrames); i++) {
      preloadFrame(i);
    }
  }, [totalFrames, preloadFrame]);

  useEffect(() => {
    const onScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const scrollableDistance = section.offsetHeight - window.innerHeight;
      if (scrollableDistance <= 0) return;

      const scrolled = Math.min(
        scrollableDistance,
        Math.max(0, -rect.top),
      );
      const progress = scrolled / scrollableDistance;
      const frame = Math.min(
        totalFrames,
        Math.max(1, Math.round(progress * (totalFrames - 1)) + 1),
      );

      setCurrentFrame(frame);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [totalFrames]);

  // Preload surrounding frames ahead and behind current position
  useEffect(() => {
    for (let offset = -3; offset <= 6; offset++) {
      preloadFrame(currentFrame + offset);
    }
  }, [currentFrame, preloadFrame]);

  const scrubProgress =
    totalFrames > 1 ? (currentFrame - 1) / (totalFrames - 1) : 0;

  return (
    <section
      ref={sectionRef}
      className="relative w-full"
      style={{ height: scrollSectionHeight }}
      aria-label="Clinic walkthrough hero"
    >
      <div className="sticky top-0 z-20 w-full">
        <div className="relative mx-auto w-full aspect-video max-h-[100svh] overflow-hidden bg-slate-900">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={activeSrc}
            alt={`Clinic walkthrough frame ${currentFrame} of ${totalFrames}`}
            className="absolute inset-0 h-full w-full object-cover"
            draggable={false}
          />

          {/* Reusable Video Overlay */}
          <VideoOverlay
            text={overlayTitle}
            description={overlayDescription}
            badgeText="Virtual Clinic Tour"
            currentFrame={currentFrame}
            totalFrames={totalFrames}
            scrubProgress={scrubProgress}
            scrubHintText="Scroll to explore"
          />
        </div>
      </div>
    </section>
  );
}
