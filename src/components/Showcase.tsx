import React, { useState, useRef, useEffect } from "react";
import { Sparkles, ArrowLeftRight } from "lucide-react";
import messyBed from "../assets/images/messy_airbnb_bedroom_1783499076289.jpg";
import cleanBed from "../assets/images/clean_airbnb_bedroom_1783499095382.jpg";

export default function Showcase() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.getBoundingClientRect().width);
    }
    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.getBoundingClientRect().width);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);

    if (isDragging) {
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("touchend", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove, { passive: true });
    }

    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchend", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [isDragging]);

  return (
    <section id="showcase" className="py-24 bg-slate-50 dark:bg-slate-900/30 transition-colors select-none">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-400 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
            Behold The Transformation
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Before & After Showcase
          </h2>
          <p className="text-slate-500 dark:text-slate-400">
            Slide the handle to see how our premium turnover cleaning team converts a chaotic check-out into a pristine, guest-ready luxury experience.
          </p>
        </div>

        {/* Interactive Comparison Slider */}
        <div 
          ref={containerRef}
          className="relative h-[300px] sm:h-[450px] md:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 cursor-ew-resize select-none"
          onMouseDown={(e) => {
            e.preventDefault();
            setIsDragging(true);
            handleMove(e.clientX);
          }}
          onTouchStart={() => setIsDragging(true)}
        >
          {/* After Image (Clean) - Bottom Layer */}
          <img
            src={cleanBed}
            alt="Clean hotel-grade bedroom after cleaning"
            className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
            referrerPolicy="no-referrer"
          />
          {/* Label "Before" */}
          <div className="absolute bottom-6 left-6 z-20 bg-rose-600/80 backdrop-blur-md text-white font-semibold font-display text-xs tracking-widest uppercase px-4 py-2 rounded-xl border border-rose-500/30 pointer-events-none shadow-md">
            Before Cleaning
          </div>

          {/* Before Image (Messy) - Top Layer (Clipped) */}
          <div 
            className="absolute inset-0 z-10 overflow-hidden pointer-events-none select-none"
            style={{ width: `${sliderPosition}%` }}
          >
            <img
              src={messyBed}
              alt="Messy check-out bedroom before cleaning"
              className="absolute inset-0 h-full object-cover select-none pointer-events-none"
              style={{ width: containerWidth || "100%" }}
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Label "After" */}
          <div className="absolute bottom-6 right-6 z-20 bg-emerald-600/90 backdrop-blur-md text-white font-semibold font-display text-xs tracking-widest uppercase px-4 py-2 rounded-xl border border-emerald-500/30 pointer-events-none shadow-md">
            Guest-Ready After
          </div>

          {/* Drag Handle Divider Line */}
          <div 
            className="absolute inset-y-0 z-30 w-1 bg-white hover:bg-emerald-400 cursor-ew-resize transform -translate-x-1/2"
            style={{ left: `${sliderPosition}%` }}
          >
            {/* Grab Node */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-slate-900 border-2 border-white shadow-xl flex items-center justify-center text-white hover:scale-110 active:scale-95 transition-transform duration-200">
              <ArrowLeftRight className="w-5 h-5 text-emerald-400" />
            </div>
          </div>
        </div>

        {/* Drag Instruction Banner */}
        <div className="mt-6 flex justify-center items-center gap-2 text-slate-400 text-xs font-semibold uppercase tracking-widest">
          <Sparkles className="w-4 h-4 text-amber-500 animate-spin" />
          <span>Click and drag the slider to inspect turnover detail</span>
        </div>

      </div>
    </section>
  );
}
