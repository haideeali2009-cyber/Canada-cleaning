import React from "react";
import { Star, Quote, MapPin } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Sarah Jenkins",
      role: "Superhost (2 Listings)",
      location: "Toronto, ON",
      text: "Canada Clean has completely transformed how we manage our Airbnb. Every guest compliments the cleanliness, and our occupancy has surged! Highly consistent team.",
    },
    {
      name: "Marcus Vance",
      role: "Vance Properties CEO",
      location: "Vancouver, BC",
      text: "Always on time and incredibly consistent. They manage turnovers across all 8 of our downtown lofts flawlessly. The photo inspection reports keep us at ease.",
    },
    {
      name: "Chantelle Tremblay",
      role: "Property Manager",
      location: "Montréal, QC",
      text: "Professional team, easy communication, and flawless results every visit. Last-minute guest check-ins are no longer a source of panic for our staff.",
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-white dark:bg-slate-950 transition-colors relative overflow-hidden">
      {/* Background Decorative Art */}
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-emerald-500/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-amber-500/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-400 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
            Voices of Five-Star Success
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Loved by Canada's Top Hosts
          </h2>
          <p className="text-slate-500 dark:text-slate-400">
            Hear directly from property owners and vacation rental managers who have automated their turnover cleaning schedules.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="glass-card p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-md flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative"
            >
              {/* Quote Mark Watermark */}
              <Quote className="absolute top-6 right-8 w-12 h-12 text-slate-100 dark:text-slate-800 pointer-events-none -z-10" />

              <div>
                {/* Stars */}
                <div className="flex gap-1 mb-6 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-base text-slate-600 dark:text-slate-300 italic leading-relaxed mb-6 font-normal">
                  "{rev.text}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-4">
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white font-display text-base">
                    {rev.name}
                  </h4>
                  <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                    {rev.role}
                  </p>
                </div>
                <div className="flex items-center gap-1 bg-slate-50 dark:bg-slate-900 px-2.5 py-1 rounded-xl text-slate-500 dark:text-slate-400 border border-slate-100 dark:border-slate-800">
                  <MapPin className="w-3 h-3 text-emerald-500" />
                  <span className="text-[10px] font-bold uppercase tracking-wider font-display">
                    {rev.location}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
