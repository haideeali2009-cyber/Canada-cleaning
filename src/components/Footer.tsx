import React from "react";
import { Sparkles, Mail, Phone, MapPin, ArrowUp, Send } from "lucide-react";

interface FooterProps {
  onBookClick: () => void;
}

export default function Footer({ onBookClick }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10 relative overflow-hidden">
      {/* Absolute Decorative Glow */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 group">
              <div className="bg-[#50C878] text-white p-2 h-10 w-10 flex items-center justify-center rounded-xl border border-[#D4AF37] shadow-lg shadow-emerald-500/20">
                <Sparkles className="w-5 h-5 text-white animate-pulse" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold font-display tracking-wider text-white">
                  CANADA <span className="text-[#D4AF37]">CLEAN</span>
                </span>
                <span className="text-[9px] uppercase tracking-widest text-[#D4AF37] font-semibold font-display">
                  Turnover Specialists
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm font-normal">
              Canada Clean is Canada's premier professional turnover cleaning service. We help hosts automate scheduling, secure guest satisfaction, and scale listings effortlessly.
            </p>

            {/* Contacts details */}
            <div className="space-y-3.5 text-xs text-slate-300 font-normal">
              <p className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>+1 (800) 555-TURNS</span>
              </p>
              <p className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-emerald-400" />
                <span>support@canadaclean.ca</span>
              </p>
              <p className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>Toronto, Vancouver, Montréal</span>
              </p>
            </div>
          </div>

          {/* Quick Links Col */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-amber-400 font-display mb-6">
              Navigation
            </h4>
            <ul className="space-y-3.5 text-xs text-slate-300 font-medium">
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Our Services</a></li>
              <li><a href="#why-choose-us" className="hover:text-emerald-400 transition-colors">Why Choose Us</a></li>
              <li><a href="#how-it-works" className="hover:text-emerald-400 transition-colors">Staging Timeline</a></li>
              <li><a href="#showcase" className="hover:text-emerald-400 transition-colors">Before & After</a></li>
              <li><a href="#faq" className="hover:text-emerald-400 transition-colors">Frequently Asked Questions</a></li>
            </ul>
          </div>

          {/* Services col */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-emerald-400 font-display mb-6">
              Service List
            </h4>
            <ul className="space-y-3.5 text-xs text-slate-300 font-normal">
              <li>Airbnb Turnover resets</li>
              <li>Vacation Rental deep services</li>
              <li>Comprehensive Linen changeouts</li>
              <li>Essential Stock replenishing</li>
              <li>Same-day emergency dispatches</li>
              <li>Portfolio contract operations</li>
            </ul>
          </div>

          {/* Newsletter / Booking Callout */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-amber-400 font-display mb-2">
              Ready for 5-Stars?
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Book your turnover today and see your cleanliness scores skyrocket. Cancel or reschedule for free up to 24 hours prior.
            </p>
            <button
              onClick={onBookClick}
              className="w-full bg-emerald-700 hover:bg-emerald-600 text-white font-bold py-3 px-4 rounded-xl text-xs transition-all shadow-md cursor-pointer"
            >
              Book Your Cleaning Now
            </button>
          </div>

        </div>

        {/* Bottom row */}
        <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-slate-500 font-medium">
          <p>© {currentYear} Canada Clean Inc. All rights reserved. Made in Canada 🇨🇦</p>
          
          <div className="flex gap-6">
            <a href="#faq" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#faq" className="hover:text-slate-300 transition-colors">Terms & Conditions</a>
            <button
              onClick={handleScrollTop}
              className="flex items-center gap-1.5 hover:text-white transition-colors focus:outline-none"
            >
              Back to Top
              <ArrowUp className="w-4 h-4 bg-slate-800 p-1 rounded-full text-slate-400" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
