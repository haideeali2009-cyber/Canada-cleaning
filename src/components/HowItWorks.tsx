import React from "react";
import {
  MousePointerClick,
  CalendarCheck,
  UserCheck,
  ClipboardCheck,
  CheckCircle,
  ArrowRight
} from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Book Online",
      desc: "Select your required service, property size, and preferred turnover window using our live availability system.",
      icon: <MousePointerClick className="w-6 h-6" />,
      color: "from-emerald-500 to-teal-500",
    },
    {
      num: "02",
      title: "Schedule Confirmed",
      desc: "Our smart server schedules your clean instantly. You will receive an automated calendar invite and confirmation email.",
      icon: <CalendarCheck className="w-6 h-6" />,
      color: "from-teal-500 to-cyan-500",
    },
    {
      num: "03",
      title: "Professional Arrival",
      desc: "Our fully equipped, vetted cleaners arrive within your designated short-term rental turnover check-out window.",
      icon: <UserCheck className="w-6 h-6" />,
      color: "from-cyan-500 to-emerald-600",
    },
    {
      num: "04",
      title: "Detailed Inspection",
      desc: "A supervisor completes a thorough 50-point checklist inspection, capturing digital photos of bed styling, towels, and setups.",
      icon: <ClipboardCheck className="w-6 h-6" />,
      color: "from-emerald-600 to-amber-500",
    },
    {
      num: "05",
      title: "Guest-Ready Alert",
      desc: "Receive an instant text/email notification that your home is completely sanitized, staged, and guest-ready.",
      icon: <CheckCircle className="w-6 h-6" />,
      color: "from-amber-500 to-amber-600",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-400 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
            Our Flawless Process
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            How Canada Clean Prepares Your Listing
          </h2>
          <p className="text-slate-500 dark:text-slate-400">
            From checkout to the next check-in, we orchestrate a swift and seamless cleaning sequence so you don't have to lift a finger.
          </p>
        </div>

        {/* Timeline Grid (Horizontal on Desktop, Vertical on Mobile) */}
        <div className="relative">
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-1/2 left-4 right-4 h-0.5 bg-slate-100 dark:bg-slate-800 transform -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-6 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                
                {/* Node Container */}
                <div className="relative mb-6">
                  {/* Step Number Badge */}
                  <span className="absolute -top-3 -right-3 bg-amber-500 text-slate-950 text-[10px] font-extrabold font-display w-6 h-6 rounded-full flex items-center justify-center border border-amber-600 shadow-md">
                    {step.num}
                  </span>

                  {/* Icon Circle */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-tr ${step.color} text-white flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    {step.icon}
                  </div>
                </div>

                {/* Arrow indicator for desktop */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 transform -translate-y-1/2 translate-x-20 text-slate-300 dark:text-slate-700 pointer-events-none">
                    <ArrowRight className="w-5 h-5 animate-pulse" />
                  </div>
                )}

                {/* Content */}
                <h3 className="text-lg font-bold font-display text-slate-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-xs">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Guarantee Box */}
        <div className="mt-16 bg-slate-50 dark:bg-slate-900/50 rounded-3xl p-6 border border-slate-100 dark:border-slate-800 text-center max-w-2xl mx-auto">
          <p className="text-sm text-slate-600 dark:text-slate-300">
            💡 <strong>Pro Host Tip:</strong> You can link our scheduling system with your Guesty, Hospitable, or Airbnb account so cleaners are automatically scheduled upon guest reservation check-out!
          </p>
        </div>

      </div>
    </section>
  );
}
