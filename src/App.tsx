import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import HowItWorks from "./components/HowItWorks";
import Showcase from "./components/Showcase";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import BookingForm from "./components/BookingForm";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";
import SuccessModal from "./components/SuccessModal";
import { Sparkles, CheckCircle } from "lucide-react";
import { Booking, EmailLog } from "./types";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [selectedService, setSelectedService] = useState("Airbnb Turnover Cleaning");
  const [isLoading, setIsLoading] = useState(true);

  // Booking success states
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState<Booking | null>(null);
  const [simulatedEmails, setSimulatedEmails] = useState<{
    customer: EmailLog;
    business: EmailLog;
  } | null>(null);

  // Handle premium initial loading animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  // Sync dark mode class
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const handleBookNowScroll = () => {
    setTimeout(() => {
      document.getElementById("booking-section")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleServiceSelect = (serviceName: string) => {
    setSelectedService(serviceName);
    handleBookNowScroll();
  };

  const handleBookingSuccess = (bookingData: Booking, emailLogs: any) => {
    setConfirmedBooking(bookingData);
    setSimulatedEmails(emailLogs);
    setIsSuccessOpen(true);
  };

  if (isLoading) {
    return (
      <div id="loading-screen" className="fixed inset-0 bg-slate-950 flex flex-col items-center justify-center z-50">
        <div className="text-center space-y-6">
          {/* Logo with pulsing glow */}
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-xl animate-pulse" />
            <div className="relative bg-gradient-to-tr from-emerald-600 to-teal-500 text-white p-5 rounded-3xl shadow-2xl">
              <Sparkles className="w-10 h-10 text-yellow-300 animate-spin" />
            </div>
          </div>
          
          <div className="space-y-2">
            <h1 className="text-2xl font-extrabold font-display text-white tracking-widest uppercase">
              GREEN <span className="text-emerald-400">CLEAN</span>
            </h1>
            <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest font-display">
              Initializing Premium Turnover...
            </p>
          </div>

          {/* Luxury loading bar */}
          <div className="w-48 h-1 bg-slate-800 rounded-full overflow-hidden mx-auto">
            <div className="h-full bg-gradient-to-r from-emerald-500 to-amber-400 w-1/2 rounded-full animate-[loading_1.5s_ease-in-out_infinite]" />
          </div>
        </div>
        
        {/* Custom loading animation keyframe definition */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes loading {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(200%); }
          }
        `}} />
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 min-h-screen font-sans antialiased transition-colors duration-300">
      
      {/* Sticky Header Navbar */}
      <Navbar
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        onBookClick={handleBookNowScroll}
      />

      {/* Corporate Business Flow */}
      <main>
        {/* Hero Section */}
        <Hero
          onBookClick={handleBookNowScroll}
          onQuoteClick={handleBookNowScroll}
        />

        {/* About Company */}
        <About />

        {/* Services Offered */}
        <Services onServiceSelect={handleServiceSelect} />

        {/* Animated Features Grid */}
        <WhyChooseUs />

        {/* Staging & Check-in Timeline */}
        <HowItWorks />

        {/* Interactive Before & After comparison slider */}
        <Showcase />

        {/* Counters & Impact Metrics */}
        <Stats />

        {/* Premium Reviews */}
        <Testimonials />

        {/* Core Booking Engine & Live Coverage Map */}
        <BookingForm
          selectedService={selectedService}
          setSelectedService={setSelectedService}
          onBookingSuccess={handleBookingSuccess}
        />

        {/* Accordion FAQ */}
        <FAQ />
      </main>

      {/* Corporate Footer */}
      <Footer
        onBookClick={handleBookNowScroll}
      />

      {/* Sticky Quick-Access Helpers */}
      <FloatingButtons onBookClick={handleBookNowScroll} />

      {/* Confirmation and Dispatch Simulation Hub */}
      <SuccessModal
        isOpen={isSuccessOpen}
        onClose={() => setIsSuccessOpen(false)}
        booking={confirmedBooking}
        simulatedEmails={simulatedEmails}
      />

    </div>
  );
}
