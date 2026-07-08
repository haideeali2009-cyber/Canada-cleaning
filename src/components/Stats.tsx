import React, { useState, useEffect } from "react";
import { Sparkles, Calendar, Heart, ShieldAlert } from "lucide-react";

export default function Stats() {
  const stats = [
    { value: 2500, label: "Properties Cleaned", suffix: "+", desc: "Short-term rentals across the US" },
    { value: 98, label: "Client Satisfaction", suffix: "%", desc: "Consistent 5-star feedback" },
    { value: 5000, label: "Happy Guests", suffix: "+", desc: "Pristine check-ins completed" },
    { value: 24, label: "Booking Support", suffix: "/7", desc: "On-demand dispatcher availability" },
  ];

  // Micro-animated count-up effect
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const duration = 2000; // ms
    const steps = 50;
    const stepTime = duration / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setCounts(
        stats.map((stat) => {
          const target = stat.value;
          const progress = currentStep / steps;
          return Math.min(target, Math.floor(target * progress));
        })
      );

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-20 bg-slate-900 text-white overflow-hidden">
      {/* Absolute Decorative Glows */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-emerald-500/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-amber-500/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="space-y-2 group">
              <div className="inline-block bg-white/5 border border-white/5 p-3 rounded-2xl mb-2 group-hover:scale-110 group-hover:border-emerald-500/25 transition-transform duration-300">
                {idx === 0 && <Calendar className="w-5 h-5 text-emerald-400" />}
                {idx === 1 && <Heart className="w-5 h-5 text-amber-400" />}
                {idx === 2 && <Sparkles className="w-5 h-5 text-emerald-400" />}
                {idx === 3 && <ShieldAlert className="w-5 h-5 text-amber-400" />}
              </div>
              
              <h3 className="text-4xl sm:text-5xl font-extrabold font-display tracking-tight text-white flex items-center justify-center">
                {counts[idx]}
                <span className="text-emerald-400 font-normal">{stat.suffix}</span>
              </h3>
              
              <p className="text-sm font-semibold tracking-wide uppercase text-slate-400">
                {stat.label}
              </p>
              
              <p className="text-xs text-slate-500 max-w-[180px] mx-auto">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
