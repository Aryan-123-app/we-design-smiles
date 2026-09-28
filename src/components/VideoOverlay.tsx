export type VideoOverlayProps = {
  text: string;
  description: string;
  badgeText?: string;
  currentFrame?: number;
  totalFrames?: number;
  scrubProgress?: number;
  scrubHintText?: string;
};

export function VideoOverlay({
  text,
  description,
  badgeText,
  currentFrame,
  totalFrames,
  scrubProgress = 0,
  scrubHintText = "Scroll to scrub",
}: VideoOverlayProps) {
  const percentage = Math.round(scrubProgress * 100);

  return (
    <>
      {/* Apple-style Multi-stage Gradient Scrim for seamless cinematic video contrast */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[65%] bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"
        aria-hidden
      />

      {/* Top subtle vignette for balanced contrast */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[20%] bg-gradient-to-b from-slate-950/40 to-transparent"
        aria-hidden
      />

      {/* Primary Cinematic Text Content - Floating directly over video without box boundaries */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex flex-col justify-end p-6 sm:p-10 md:p-14 lg:p-16">
        <div className="max-w-3xl space-y-3">
          {badgeText && (
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 backdrop-blur-xl shadow-[0_0_20px_rgba(16,185,129,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-300">
                {badgeText}
              </span>
            </div>
          )}

          <h2 className="text-balance font-sans text-3xl font-extrabold tracking-tight text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)] sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1]">
            {text}
          </h2>

          <p className="max-w-xl text-pretty text-sm font-normal leading-relaxed text-slate-300/90 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] sm:text-base md:text-lg">
            {description}
          </p>
        </div>
      </div>

      {/* Minimalist Glass Pill Scroll Indicator - Bottom Right */}
      <div
        className="pointer-events-none absolute bottom-6 right-6 sm:bottom-10 sm:right-10 z-20 transition-opacity duration-300"
        style={{ opacity: scrubProgress < 0.98 ? 1 : 0 }}
        aria-hidden={scrubProgress >= 0.98}
      >
        <div className="flex items-center gap-2 rounded-full border border-white/15 bg-slate-950/70 px-4 py-2 backdrop-blur-2xl shadow-2xl">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-200">
            {scrubHintText}
          </span>
          <svg
            className="h-3.5 w-3.5 animate-bounce text-emerald-400"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </div>
    </>
  );
}

export default VideoOverlay;


