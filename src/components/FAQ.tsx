import React, { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is turnover cleaning?",
      answer: "Turnover cleaning is a specialized commercial cleaning service tailored strictly to vacation rentals and short-term properties (like Airbnb or VRBO). It goes far beyond standard home cleaning to include immediate sanitation, full linen stripping and replacement, essential guest amenity restocking, staging/styling properties according to landlord directives, and detailed damage and compliance reporting.",
    },
    {
      question: "Do you bring cleaning supplies?",
      answer: "Yes, our professional cleaners arrive fully equipped with premium commercial-grade vacuums, microfibers, dusting tools, and non-toxic eco-friendly disinfectants. If you have specific surfaces requiring specialized cleaning products (such as unique hardwood or marble cleaners), you can note this in your booking and leave those products on site.",
    },
    {
      question: "Can I schedule recurring cleanings?",
      answer: "Absolutely! Most of our professional hosts configure bulk recurring schedules. You can select your desired days or synchronize your direct calendar feed (Hospitable, Guesty, Airbnb etc.) with our API to automate bookings upon every single checkout.",
    },
    {
      question: "Do you clean same-day bookings?",
      answer: "Yes, same-day turnover windows (typically between 11:00 AM check-out and 4:00 PM check-in) are our specialty. We schedule and deploy teams rapidly to ensure properties are perfectly reset and guest-ready inside that tight five-hour window.",
    },
    {
      question: "Are you insured?",
      answer: "Yes, Green Clean is fully licensed and carries $5M in commercial general liability insurance, comprehensive commercial auto coverages, and complete Workers' Compensation insurance (state equivalent) for all active staff, protecting you and your property.",
    },
    {
      question: "Which areas do you serve?",
      answer: "We provide high-end turnover cleaning services across the US's most active short-term rental hubs, including New York City, Seattle, Chicago, Denver, Boston, Los Angeles, and surrounding tourism corridors (e.g. Hamptons, Lake Tahoe, and Orlando). See our interactive coverage map below for details!",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-slate-50 dark:bg-slate-900/40 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-400 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
            Clear Answers, Zero Doubts
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-500 dark:text-slate-400">
            Have questions about keys, checklists, or timing? Find rapid answers to the most common inquiries from our property owners.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700/50 shadow-sm overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none cursor-pointer"
                >
                  <span className="flex items-center gap-3 text-base font-bold font-display text-slate-900 dark:text-white">
                    <HelpCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                    {faq.question}
                  </span>
                  <span className="text-slate-400 bg-slate-50 dark:bg-slate-900 p-1.5 rounded-lg border border-slate-100 dark:border-slate-700">
                    {isOpen ? <ChevronUp className="w-4 h-4 text-emerald-600" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </button>

                {/* Answer block with transition */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-96 border-t border-slate-100 dark:border-slate-700/50" : "max-h-0"
                  }`}
                >
                  <div className="p-6 text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-normal bg-slate-50/50 dark:bg-slate-900/10">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
