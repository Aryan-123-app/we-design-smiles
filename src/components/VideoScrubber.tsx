import { useCallback, useEffect, useMemo, useRef, useState } from "react";

export const VIDEO_FRAME_CONFIG = {
  1: { folder: "video_1_frames", frameCount: 300 },
  2: { folder: "video_2_frames", frameCount: 522 },
  3: { folder: "video_3_frames", frameCount: 310 },
} as const;

export type VideoScrubberId = keyof typeof VIDEO_FRAME_CONFIG;

function framePath(folder: string, index: number): string {
  return `/videos/${folder}/frame_${String(index).padStart(4, "0")}.webp`;
}

type VideoScrubberProps = {
  videoId: VideoScrubberId;
  progress?: number;
  className?: string;
  alt?: string;
};

export function VideoScrubber({
  videoId,
  progress = 0,
  className,
  alt = "Scrubbed video frame",
}: VideoScrubberProps) {
  const { folder, frameCount } = VIDEO_FRAME_CONFIG[videoId];
  const clampedProgress = Math.min(1, Math.max(0, progress));
  const frameIndex = Math.min(
    frameCount,
    Math.max(1, Math.round(clampedProgress * (frameCount - 1)) + 1),
  );

  const src = useMemo(
    () => framePath(folder, frameIndex),
    [folder, frameIndex],
  );

  const [displaySrc, setDisplaySrc] = useState(src);
  const preloadRef = useRef<Set<string>>(new Set());

  const preload = useCallback((path: string) => {
    if (preloadRef.current.has(path)) return;
    preloadRef.current.add(path);
    const img = new Image();
    img.src = path;
  }, []);

  useEffect(() => {
    preload(src);
    for (let i = -2; i <= 3; i++) {
      const target = frameIndex + i;
      if (target >= 1 && target <= frameCount) {
        preload(framePath(folder, target));
      }
    }
  }, [src, frameIndex, frameCount, folder, preload]);

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={className}
      src={src}
      alt={alt}
      decoding="async"
      draggable={false}
    />
  );
}

export default VideoScrubber;
