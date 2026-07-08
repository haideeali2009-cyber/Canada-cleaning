import React from "react";
import {
  Zap,
  Calendar,
  Leaf,
  Users,
  Clock,
  ClipboardCheck,
  Award,
  ShieldCheck
} from "lucide-react";

export default function WhyChooseUs() {
  const cards = [
    {
      title: "Fast Turnover Cleaning",
      desc: "We prioritize tight turnaround windows. Our team completes meticulous cleans within hours between guest check-out and next check-in.",
      icon: <Zap className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
    },
    {
      title: "Reliable Scheduling",
      desc: "Never suffer a 'no-show' cleaner again. Our automated backup scheduling ensures your listing is cleaned, no matter what.",
      icon: <Calendar className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
    },
    {
      title: "Eco-Friendly Products",
      desc: "We use non-toxic, pet-safe, biodegradable cleaners that leave your property smelling fresh and allergen-free for sensitive guests.",
      icon: <Leaf className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
    },
    {
      title: "Experienced Professionals",
      desc: "Our cleaning staff undergo rigorous training in luxury hospitality, commercial staging, and modern disinfection standards.",
      icon: <Users className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
    },
    {
      title: "Flexible Booking",
      desc: "Book on-demand, schedule far in advance, or link your Airbnb/VRBO calendar directly for worry-free auto-bookings.",
      icon: <Clock className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
    },
    {
      title: "Detailed Quality Inspection",
      desc: "Every clean is checked by a certified supervisor with photo-verification sent straight to your dashboard before guest arrival.",
      icon: <ClipboardCheck className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
    },
    {
      title: "Guest Ready Guarantee",
      desc: "If a guest raises a cleanliness concern, we will immediately dispatch a cleaner to resolve it within 60 minutes, free of charge.",
      icon: <Award className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
    },
    {
      title: "Fully Insured Team",
      desc: "Total peace of mind. We carry comprehensive commercial general liability insurance and are fully covered by WSIB/Workers' Comp.",
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
    },
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-slate-50 dark:bg-slate-900/40 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-400 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
            Why Canada Clean Stands Out
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Designed Exclusively for Short-Term Rental Success
          </h2>
          <p className="text-slate-500 dark:text-slate-400">
            Standard maid services don't understand Airbnb. We do. Discover the features that make us Canada's most trusted short-term rental cleaning partner.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="group bg-white dark:bg-slate-800 p-6 rounded-3xl border border-slate-100 dark:border-slate-700/50 shadow-sm hover:shadow-xl hover:border-emerald-500/25 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="bg-emerald-50 dark:bg-slate-900 w-12 h-12 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                <span className="group-hover:text-white transition-colors">
                  {card.icon}
                </span>
              </div>
              <h3 className="text-lg font-bold font-display text-slate-900 dark:text-white mb-2.5">
                {card.title}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
