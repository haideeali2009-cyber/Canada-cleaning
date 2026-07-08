import React, { useState, useEffect } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar as CalendarIcon,
  Clock,
  FileText,
  DollarSign,
  AlertCircle,
  HelpCircle,
  ArrowRight
} from "lucide-react";

interface BookingFormProps {
  selectedService: string;
  setSelectedService: (val: string) => void;
  onBookingSuccess: (bookingData: any, emails: any) => void;
}

export default function BookingForm({
  selectedService,
  setSelectedService,
  onBookingSuccess,
}: BookingFormProps) {
  const [fullName, setFullName] = useState("Green Clean Guest");
  const [email, setEmail] = useState("operations@greenclean.com");
  const [phone, setPhone] = useState("1-800-555-TURNS");
  const [address, setAddress] = useState("");
  const [bedrooms, setBedrooms] = useState(2);
  const [bathrooms, setBathrooms] = useState(2);
  const [preferredDate, setPreferredDate] = useState("");
  const [preferredTimeSlot, setPreferredTimeSlot] = useState("11:00 AM - 2:00 PM (Turnover Window)");
  const [additionalNotes, setAdditionalNotes] = useState("");
  const [estimatedCost, setEstimatedCost] = useState(189);
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState("");

  const serviceOptions = [
    "Airbnb Turnover Cleaning",
    "Vacation Rental Cleaning",
    "Property Management Cleaning",
    "Linen Change & Service",
    "Restocking Essentials",
    "Deep Cleaning & Sanitation",
    "Move-In / Move-Out Cleaning",
    "Emergency / Same-Day Cleaning",
  ];

  const timeSlots = [
    "11:00 AM - 2:00 PM (Turnover Window)",
    "8:00 AM - 11:00 AM (Morning)",
    "2:00 PM - 5:00 PM (Afternoon)",
    "5:00 PM - 8:00 PM (Evening)",
  ];

  // Dynamically calculate price
  useEffect(() => {
    let basePrice = 129;
    if (selectedService.includes("Deep")) basePrice = 199;
    if (selectedService.includes("Move-In")) basePrice = 229;
    if (selectedService.includes("Emergency")) basePrice = 179;
    if (selectedService.includes("Linen")) basePrice = 69;
    if (selectedService.includes("Restocking")) basePrice = 49;

    const bedCost = (bedrooms - 1) * 35;
    const bathCost = (bathrooms - 1) * 25;
    const total = basePrice + Math.max(0, bedCost) + Math.max(0, bathCost);
    setEstimatedCost(total);
  }, [selectedService, bedrooms, bathrooms]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");

    if (!fullName || !email || !phone || !address || !selectedService || !preferredDate || !preferredTimeSlot) {
      setFormError("Please fill in all required fields marked with *");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          email,
          phone,
          address,
          serviceType: selectedService,
          bedrooms,
          bathrooms,
          preferredDate,
          preferredTimeSlot,
          additionalNotes,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit booking");
      }

      // Reset form
      setFullName("Green Clean Guest");
      setEmail("operations@greenclean.com");
      setPhone("1-800-555-TURNS");
      setAddress("");
      setBedrooms(2);
      setBathrooms(2);
      setPreferredDate("");
      setPreferredTimeSlot("11:00 AM - 2:00 PM (Turnover Window)");
      setAdditionalNotes("");

      onBookingSuccess(data.booking, data.simulatedEmails);
    } catch (err: any) {
      setFormError(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="booking-section" className="py-24 bg-white dark:bg-slate-950 transition-colors relative overflow-hidden">
      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-400 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
            Guest-Ready In A Few Clicks
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Book Your Turnover Cleaning
          </h2>
          <p className="text-slate-500 dark:text-slate-400">
            Fill in your property details to check instant availability and secure your professional short-term rental cleaning slot.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Form (8 cols) */}
          <div className="lg:col-span-8 bg-slate-50 dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-100 dark:border-slate-800 shadow-md">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {formError && (
                <div className="flex items-center gap-3 bg-red-50 dark:bg-red-950/20 text-red-700 dark:text-red-400 p-4 rounded-xl border border-red-100 dark:border-red-900/30 text-sm">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <span>{formError}</span>
                </div>
              )}

              {/* Property Address Info */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Property Street Address *
                </label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="123 Queen St W, Toronto, ON"
                    className="w-full pl-12 pr-4 py-3 bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 dark:text-white outline-none transition-all"
                  />
                </div>
              </div>

              {/* Service Type & Size */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2 md:col-span-1">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Service Type *
                  </label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full px-4 py-3.5 bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 dark:text-white outline-none transition-all cursor-pointer"
                  >
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Bedrooms
                  </label>
                  <select
                    value={bedrooms}
                    onChange={(e) => setBedrooms(Number(e.target.value))}
                    className="w-full px-4 py-3.5 bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 dark:text-white outline-none transition-all cursor-pointer"
                  >
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <option key={num} value={num}>
                        {num} Bed{num > 1 ? "s" : ""}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Bathrooms
                  </label>
                  <select
                    value={bathrooms}
                    onChange={(e) => setBathrooms(Number(e.target.value))}
                    className="w-full px-4 py-3.5 bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 dark:text-white outline-none transition-all cursor-pointer"
                  >
                    {[1, 1.5, 2, 2.5, 3, 3.5, 4].map((num) => (
                      <option key={num} value={num}>
                        {num} Bath{num > 1 ? "s" : ""}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Preferred Date & Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Preferred Date *
                  </label>
                  <div className="relative">
                    <CalendarIcon className="absolute left-4 top-3.5 w-5 h-5 text-slate-400 pointer-events-none" />
                    <input
                      type="date"
                      required
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 dark:text-white outline-none transition-all cursor-pointer"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Preferred Arrival Window *
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-4 top-3.5 w-5 h-5 text-slate-400 pointer-events-none" />
                    <select
                      value={preferredTimeSlot}
                      onChange={(e) => setPreferredTimeSlot(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 dark:text-white outline-none transition-all cursor-pointer"
                    >
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Notes */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Additional Notes (Key codes, specific staging directives)
                </label>
                <div className="relative">
                  <FileText className="absolute left-4 top-4.5 w-5 h-5 text-slate-400 pointer-events-none" />
                  <textarea
                    value={additionalNotes}
                    onChange={(e) => setAdditionalNotes(e.target.value)}
                    rows={4}
                    placeholder="E.g., front door lockbox code is 1234. Fresh sheets and coffee are in the hallway cabinet. Please double-check the balcony is vacuumed."
                    className="w-full pl-12 pr-4 py-3.5 bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 dark:text-white outline-none transition-all"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full group bg-emerald-700 hover:bg-emerald-600 disabled:bg-slate-400 text-white font-bold py-4 rounded-xl shadow-lg shadow-emerald-700/10 hover:shadow-emerald-600/20 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                    Processing Secure Reservation...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Confirm Turnover Booking
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                )}
              </button>

            </form>
          </div>

          {/* Right Column: Dynamic Quote Summary & Live Map Cover (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Summary Box */}
            <div className="bg-slate-900 text-white rounded-3xl p-8 border border-slate-800 shadow-xl relative overflow-hidden">
              {/* Backglow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-[40px]" />

              <h3 className="text-lg font-bold font-display text-amber-400 border-b border-white/10 pb-4 mb-6">
                Estimated Price Breakdown
              </h3>

              <div className="space-y-4 text-sm font-normal">
                <div className="flex justify-between items-center text-slate-300">
                  <span>Base Service Fee</span>
                  <span className="font-semibold text-white">
                    ${selectedService.includes("Deep") ? 199 : selectedService.includes("Move") ? 229 : selectedService.includes("Emergency") ? 179 : selectedService.includes("Linen") ? 69 : selectedService.includes("Restocking") ? 49 : 129} CAD
                  </span>
                </div>
                
                {bedrooms > 1 && (
                  <div className="flex justify-between items-center text-slate-400">
                    <span>Bedrooms ({bedrooms})</span>
                    <span className="text-white">+${(bedrooms - 1) * 35} CAD</span>
                  </div>
                )}

                {bathrooms > 1 && (
                  <div className="flex justify-between items-center text-slate-400">
                    <span>Bathrooms ({bathrooms})</span>
                    <span className="text-white">+${(bathrooms - 1) * 25} CAD</span>
                  </div>
                )}

                <div className="border-t border-white/10 pt-4 mt-6 flex justify-between items-end">
                  <div>
                    <span className="text-xs text-slate-400 uppercase tracking-widest font-bold">Estimated Cost</span>
                    <p className="text-[10px] text-slate-500">Taxes calculated upon billing</p>
                  </div>
                  <div className="text-right">
                    <span className="text-3xl font-extrabold font-display text-emerald-400">
                      ${estimatedCost}
                    </span>
                    <span className="text-xs font-semibold text-slate-400 ml-1">CAD</span>
                  </div>
                </div>
              </div>

              {/* Guarantees list inside Summary */}
              <div className="mt-8 pt-6 border-t border-white/10 space-y-3.5 text-xs text-slate-400">
                <p className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  No Hidden Fees or Surcharges
                </p>
                <p className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Free Damage/Stain Reporting
                </p>
                <p className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  100% Satisfaction Checked
                </p>
              </div>
            </div>

            {/* High-Fidelity coverage map */}
            <div className="bg-slate-50 dark:bg-slate-900 rounded-3xl p-6 border border-slate-100 dark:border-slate-800 shadow-md">
              <h3 className="text-sm font-bold font-display text-slate-900 dark:text-white uppercase tracking-wider mb-4">
                Service Hubs & Coverage
              </h3>
              
              {/* Custom interactive SVG map representing major cities across the US */}
              <div className="bg-white dark:bg-slate-950 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center justify-center relative overflow-hidden">
                <svg viewBox="0 0 400 240" className="w-full h-auto text-slate-300 dark:text-slate-800">
                  {/* Highly stylized outline of the US */}
                  <path 
                    d="M 50 80 Q 150 70 250 80 T 350 90 T 360 160 Q 320 200 220 180 T 120 190 Q 60 180 50 80 Z" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeDasharray="4 4"
                  />
                  {/* Interactive Nodes for Cities */}
                  {/* Seattle */}
                  <g className="group cursor-help">
                    <circle cx="70" cy="90" r="5" className="fill-emerald-500 animate-ping" />
                    <circle cx="70" cy="90" r="4" className="fill-emerald-600" />
                    <text x="75" y="85" className="text-[10px] font-bold font-display fill-slate-800 dark:fill-slate-200">Seattle</text>
                  </g>
                  {/* Denver */}
                  <g className="group cursor-help">
                    <circle cx="160" cy="130" r="4" className="fill-emerald-600" />
                    <text x="165" y="125" className="text-[10px] font-bold font-display fill-slate-800 dark:fill-slate-200">Denver</text>
                  </g>
                  {/* Chicago */}
                  <g className="group cursor-help">
                    <circle cx="250" cy="120" r="5" className="fill-emerald-500 animate-ping" />
                    <circle cx="250" cy="120" r="4" className="fill-emerald-600" />
                    <text x="255" y="115" className="text-[10px] font-bold font-display fill-slate-800 dark:fill-slate-200">Chicago</text>
                  </g>
                  {/* New York */}
                  <g className="group cursor-help">
                    <circle cx="320" cy="110" r="5" className="fill-emerald-500 animate-ping" />
                    <circle cx="320" cy="110" r="4" className="fill-emerald-600" />
                    <text x="325" y="105" className="text-[10px] font-bold font-display fill-slate-800 dark:fill-slate-200">New York (NYC)</text>
                  </g>
                  {/* Los Angeles */}
                  <g className="group cursor-help">
                    <circle cx="80" cy="170" r="5" className="fill-emerald-500 animate-ping" />
                    <circle cx="80" cy="170" r="4" className="fill-emerald-600" />
                    <text x="85" y="165" className="text-[10px] font-bold font-display fill-slate-800 dark:fill-slate-200">Los Angeles</text>
                  </g>
                </svg>
              </div>

              <p className="text-[11px] text-slate-400 mt-4 text-center leading-relaxed">
                🟢 Green indicators show 24/7 turnaround availability. We currently support New York, California, Illinois, Colorado, and Washington listings.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
