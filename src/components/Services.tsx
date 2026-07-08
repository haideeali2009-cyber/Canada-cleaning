import React from "react";
import {
  Sparkles,
  Home,
  Layers,
  RefreshCw,
  ShoppingBag,
  Flame,
  ArrowUpRight,
  ShieldCheck,
  Zap
} from "lucide-react";

interface ServicesProps {
  onServiceSelect: (serviceName: string) => void;
}

export default function Services({ onServiceSelect }: ServicesProps) {
  const services = [
    {
      id: "airbnb",
      title: "Airbnb Turnover Cleaning",
      desc: "Complete, systematic reset after every guest departure. Includes sanitation, picture-documented inventory checks, and staging.",
      icon: <Sparkles className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
      tag: "Popular",
    },
    {
      id: "vacation",
      title: "Vacation Rental Cleaning",
      desc: "Professional deep-clean turnover services optimized for VRBO, cottages, and high-end luxury vacation home listings.",
      icon: <Home className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
      tag: "Premium",
    },
    {
      id: "prop-mgmt",
      title: "Property Management Cleaning",
      desc: "Reliable, bulk-scheduled recurring cleaning contracts for property managers holding larger portfolios across Canada.",
      icon: <Layers className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
      tag: "Business",
    },
    {
      id: "linen",
      title: "Linen Change & Service",
      desc: "Removal of dirty linens, complete replacement with clean sheets, pillowcases, duvet covers, bath towels, and hand towels.",
      icon: <RefreshCw className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
      tag: "Essential",
    },
    {
      id: "restock",
      title: "Restocking Essentials",
      desc: "Replenishment of toilet paper, coffee pods, hand soaps, shower shampoos, dish soaps, and custom guest welcoming setups.",
      icon: <ShoppingBag className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
      tag: "Essential",
    },
    {
      id: "deep",
      title: "Deep Cleaning & Sanitation",
      desc: "Monthly, seasonal, or quarterly deep-cleans. Reaching behind appliances, washing baseboards, and steaming tile grout.",
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
      tag: "Quarterly",
    },
    {
      id: "move",
      title: "Move-In / Move-Out Cleaning",
      desc: "Pristine, multi-point checklist deep turnover. Perfect for new tenants, property handovers, and real estate stagings.",
      icon: <ArrowUpRight className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
      tag: "Deep Clean",
    },
    {
      id: "emergency",
      title: "Emergency / Same-Day Cleaning",
      desc: "Last-minute booking rescue. Sudden cancellations or same-day reservations? We dispatch on short notice.",
      icon: <Zap className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
      tag: "Urgent",
    },
  ];

  return (
    <section id="services" className="py-24 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-400 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
            Our Elite Service Lineup
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Specialized Cleaning Built for Hospitality
          </h2>
          <p className="text-slate-500 dark:text-slate-400">
            Select an expert turnover service designed to increase guest satisfaction scores, prevent complaints, and earn your property more 5-star ratings.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative bg-slate-50 dark:bg-slate-900 rounded-3xl p-6 border border-slate-100 dark:border-slate-800 hover:border-emerald-600/30 dark:hover:border-emerald-500/30 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Card top decorative accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-600 via-teal-500 to-amber-500 rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div>
                {/* Header Icon & Tag */}
                <div className="flex justify-between items-start mb-6">
                  <div className="bg-white dark:bg-slate-800 p-3.5 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 group-hover:scale-110 group-hover:bg-emerald-50 dark:group-hover:bg-emerald-900/10 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <span className={`text-[10px] uppercase tracking-widest font-bold font-display px-2.5 py-1 rounded-full ${
                    service.tag === "Urgent" 
                      ? "bg-rose-50 dark:bg-rose-950/30 text-rose-700 dark:text-rose-400 border border-rose-100 dark:border-rose-900/30"
                      : service.tag === "Popular"
                      ? "bg-amber-50 dark:bg-amber-950/30 text-amber-700 dark:text-amber-400 border border-amber-100 dark:border-amber-900/30"
                      : "bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/30"
                  }`}>
                    {service.tag}
                  </span>
                </div>

                {/* Title & Desc */}
                <h3 className="text-lg font-bold font-display text-slate-900 dark:text-white mb-3 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                  {service.desc}
                </p>
              </div>

              {/* Action */}
              <button
                onClick={() => onServiceSelect(service.title)}
                className="w-full flex items-center justify-center gap-2 bg-white dark:bg-slate-800 group-hover:bg-emerald-700 text-slate-800 dark:text-slate-200 group-hover:text-white text-xs font-semibold py-3 px-4 rounded-xl border border-slate-200 dark:border-slate-700 group-hover:border-emerald-700 shadow-sm transition-all duration-300 cursor-pointer"
              >
                Book This Service
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* Dynamic Pricing Callout */}
        <div className="mt-16 bg-gradient-to-r from-emerald-900 via-slate-900 to-slate-950 text-white rounded-3xl p-8 shadow-2xl border border-emerald-500/20 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-xl font-bold font-display tracking-tight text-white mb-2">
              Need a completely custom enterprise portfolio package?
            </h3>
            <p className="text-sm text-slate-300 max-w-xl">
              We offer exclusive volume-based discounts, custom API/platform calendar sync integrations, and dedicated account managers for operators managing 5+ listings.
            </p>
          </div>
          <button
            onClick={() => onServiceSelect("Airbnb Turnover Cleaning")}
            className="flex-shrink-0 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3.5 rounded-xl text-sm transition-all shadow-lg hover:shadow-amber-500/20 active:scale-95"
          >
            Contact Portfolio Sales
          </button>
        </div>

      </div>
    </section>
  );
}
