import React from "react";
import { ShieldCheck, UserCheck, Award, Zap, ArrowRight } from "lucide-react";
import heroBg from "../assets/images/luxury_airbnb_living_room_1783499057688.jpg";

interface HeroProps {
  onBookClick: () => void;
  onQuoteClick: () => void;
}

export default function Hero({ onBookClick, onQuoteClick }: HeroProps) {
  const trustBadges = [
    { icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />, text: "Fully Insured" },
    { icon: <UserCheck className="w-5 h-5 text-emerald-400" />, text: "Professional Cleaners" },
    { icon: <Award className="w-5 h-5 text-emerald-400" />, text: "Satisfaction Guaranteed" },
    { icon: <Zap className="w-5 h-5 text-emerald-400" />, text: "Same-Day Availability" },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Background Image with Rich Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Luxury Short Term Rental Interior"
          className="w-full h-full object-cover scale-105 animate-pulse-subtle"
          referrerPolicy="no-referrer"
        />
        {/* Dark Slate, Navy, and Emerald Gradient Overlay for Premium Look */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/80 to-slate-950/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-slate-950/30 to-slate-950/90" />
      </div>

      {/* Decorative Gold and Emerald Glow Effects */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-3xl">
          {/* Tagline */}
          <div className="inline-flex items-center gap-2 bg-emerald-500/15 border border-emerald-500/30 px-3.5 py-1.5 rounded-full text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-6 backdrop-blur-md animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            America's #1 Short-Term Rental Cleaners
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight leading-none text-white mb-4">
            Professional Turnover Cleaning for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300">
              Short-Term Rentals
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl font-semibold font-display text-amber-400 tracking-wide mb-6">
            Fast. Consistent. Guest-Ready. Every Time.
          </p>

          {/* Description */}
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed mb-10 max-w-2xl">
            We help Airbnb hosts, vacation rental owners, and property managers keep every property spotless between guests with reliable, professional turnover cleaning. Never miss a 5-star review due to cleanliness.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button
              onClick={onBookClick}
              className="group bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white font-semibold px-8 py-4 rounded-xl shadow-xl shadow-emerald-700/20 hover:shadow-emerald-500/30 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              Book Your Cleaning
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={onQuoteClick}
              className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300 backdrop-blur-sm cursor-pointer"
            >
              Get Free Quote
            </button>
          </div>

          {/* Trust Badges */}
          <div className="border-t border-white/10 pt-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">
              Our Trusted Guarantees
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {trustBadges.map((badge, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 bg-white/5 border border-white/5 px-4 py-3 rounded-xl backdrop-blur-md hover:bg-white/10 transition-colors"
                >
                  <div className="flex-shrink-0 bg-emerald-500/10 p-1.5 rounded-lg border border-emerald-500/20">
                    {badge.icon}
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-slate-200">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
