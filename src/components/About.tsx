import React from "react";
import { CheckCircle2, ShieldAlert, HeartHandshake } from "lucide-react";

export default function About() {
  const pillars = [
    {
      icon: <CheckCircle2 className="w-6 h-6 text-emerald-600" />,
      title: "Hotel-Grade Quality",
      desc: "We clean to luxury hospitality standards, ensuring flawless bed tucks, polished faucets, and perfectly rolled towels.",
    },
    {
      icon: <ShieldAlert className="w-6 h-6 text-amber-600" />,
      title: "Damage & Issue Reporting",
      desc: "Our cleaners document and report any property damage, smoking violations, or maintenance issues instantly.",
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-teal-600" />,
      title: "True Guest-Ready Experience",
      desc: "We ensure all guest essentials are fully replenished and complete a strict Quality Checklist before departing.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-slate-900/50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Premium Text Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-400 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
              Elevating Guest Standards
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight leading-tight">
              A Five-Star Service Designed for{" "}
              <span className="text-emerald-700 dark:text-emerald-400">Five-Star Reviews</span>
            </h2>
            
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              At Green Clean, we understand that every guest expects hotel-level cleanliness. Our experienced team delivers meticulous turnover cleaning that prepares your property for the next check-in—on time, every time.
            </p>
            
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
              Based out of major short-term rental hubs across the United States, we serve as the critical operational backbone for Airbnb hosts, VRBO owners, and professional property managers. We align with your check-out/check-in windows to handle fast turnarounds flawlessly.
            </p>

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 bg-emerald-100 flex items-center justify-center font-bold text-xs text-emerald-800">AB</div>
                  <div className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 bg-amber-100 flex items-center justify-center font-bold text-xs text-amber-800">CD</div>
                  <div className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 bg-teal-100 flex items-center justify-center font-bold text-xs text-teal-800">EF</div>
                </div>
                <div className="text-sm">
                  <span className="font-bold text-slate-900 dark:text-white">Join 150+ Happy Hosts</span>
                  <p className="text-slate-500 dark:text-slate-400 text-xs">Trusting us with their turnovers weekly</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Three Pillar Cards with Elegant Visuals */}
          <div className="grid grid-cols-1 gap-6">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-md border border-slate-100 dark:border-slate-700/50 hover:shadow-xl hover:border-emerald-600/25 transition-all duration-300"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0 bg-slate-50 dark:bg-slate-900 p-3.5 rounded-xl border border-slate-100 dark:border-slate-700">
                    {pillar.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-display text-slate-900 dark:text-white mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
