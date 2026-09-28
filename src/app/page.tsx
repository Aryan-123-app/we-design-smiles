import Navigation from "@/components/Navigation";
import HeroVideoSection from "@/components/HeroVideoSection";
import ServicesSection from "@/components/ServicesSection";
import ResultsGalleryVideoSection from "@/components/ResultsGalleryVideoSection";
import AboutSection from "@/components/AboutSection";
import VideoSection3 from "@/components/VideoSection3";
import LocationSection from "@/components/LocationSection";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-slate-50 font-sans antialiased selection:bg-emerald-500 selection:text-white">
      {/* Sticky Header Navigation with Active Section Scroll Tracking */}
      <Navigation sections={["home", "services", "gallery", "about", "videos", "location", "booking"]} />

      <main className="flex-1 w-full bg-slate-50">
        {/* Section 1: Hero Video Section (Reception to Chair) */}
        <div id="home">
          <HeroVideoSection
            videoFramePath="/videos/video_1_frames/frame_"
            totalFrames={300}
            overlayTitle="We Design Smiles - Professional Dental Care"
            overlayDescription="Your journey to perfect smiles starts here. Experience a full clinic tour from reception to the doctor's chair."
          />
        </div>

        {/* Services & Treatments Menu */}
        <div id="services">
          <ServicesSection />
        </div>

        {/* Section Divider 1 */}
        <div className="relative py-12 w-full px-6 bg-slate-50 overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#10b981_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-15" />
          <div className="relative mx-auto max-w-7xl flex items-center justify-center z-10">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent" />
            <div className="absolute bg-slate-50 px-6 py-1 text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-1 text-xs font-bold uppercase tracking-widest text-emerald-800 shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Before & After Transformations
              </span>
            </div>
          </div>
        </div>

        {/* Section 2: Results Gallery Video Section */}
        <div id="gallery">
          <ResultsGalleryVideoSection
            videoFramePath="/videos/video_2_frames/frame_"
            totalFrames={522}
            overlayTitle="See Our Smile Transformations - Before & After Results"
            overlayDescription="Join hundreds of satisfied patients who achieved their dream smiles through precision cosmetic dentistry."
          />
        </div>

        {/* About Us & Team Section */}
        <div id="about">
          <AboutSection />
        </div>

        {/* Section Divider 2 */}
        <div className="relative py-12 w-full px-6 bg-slate-50 overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#10b981_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-15" />
          <div className="relative mx-auto max-w-7xl flex items-center justify-center z-10">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent" />
            <div className="absolute bg-slate-50 px-6 py-1 text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-1 text-xs font-bold uppercase tracking-widest text-emerald-800 shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Clinic Atmosphere & Flow
              </span>
            </div>
          </div>
        </div>

        {/* Section 3: Clinic Continuity Walkthrough Section */}
        <div id="videos">
          <VideoSection3
            videoFramePath="/videos/video_3_frames/frame_"
            totalFrames={310}
            overlayTitle="Professional Clinic Design - Built for Your Comfort"
            overlayDescription="Every space designed for your peace of mind, from calm waiting suites to sterile surgical rooms."
          />
        </div>

        {/* Location & Map Section */}
        <div id="location">
          <LocationSection />
        </div>

        {/* Appointment Booking Form Section */}
        <div id="booking">
          <BookingSection />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

