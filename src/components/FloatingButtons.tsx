import React from "react";
import { Calendar, MessageSquare, PhoneCall } from "lucide-react";

interface FloatingButtonsProps {
  onBookClick: () => void;
}

export default function FloatingButtons({ onBookClick }: FloatingButtonsProps) {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3.5 items-end pointer-events-none">
      
      {/* Floating Book Now button (only visible if scrolled down) */}
      <button
        onClick={onBookClick}
        className="pointer-events-auto bg-gradient-to-tr from-emerald-700 to-emerald-600 text-white font-bold p-4 sm:px-5 sm:py-3.5 rounded-full shadow-2xl hover:shadow-emerald-600/30 transition-all duration-300 transform hover:-translate-y-1 active:scale-95 flex items-center gap-2 border border-emerald-500/10 focus:outline-none cursor-pointer"
        title="Book Turnover Cleaning"
      >
        <Calendar className="w-5 h-5 animate-pulse" />
        <span className="hidden sm:inline text-xs uppercase tracking-wider font-extrabold font-display">
          Book Clean
        </span>
      </button>

      {/* WhatsApp Help chat button */}
      <a
        href="https://wa.me/18005550192?text=Hi%20Canada%20Clean%2C%20I%20would%20like%20to%20get%20a%20turnover%20cleaning%20quote%20for%20my%20short-term%20rental%20property%20please."
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto bg-[#25D366] hover:bg-[#20ba5a] text-white p-4 rounded-full shadow-2xl hover:shadow-[#25D366]/30 transition-all duration-300 transform hover:-translate-y-1 active:scale-95 flex items-center justify-center border border-white/10 focus:outline-none"
        title="Chat on WhatsApp"
      >
        <MessageSquare className="w-5 h-5 fill-current" />
      </a>

    </div>
  );
}
