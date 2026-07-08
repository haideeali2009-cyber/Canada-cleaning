import React, { useState, useEffect } from "react";
import { Sparkles, Menu, X, Sun, Moon, ShieldCheck, Settings } from "lucide-react";

interface NavbarProps {
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
  onBookClick: () => void;
}

export default function Navbar({
  isDarkMode,
  setIsDarkMode,
  onBookClick,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Why Choose Us", href: "#why-choose-us" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Before & After", href: "#showcase" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 group focus:outline-none"
          >
            <div className="bg-[#50C878] text-white p-2 h-10 w-10 flex items-center justify-center rounded-xl border border-[#D4AF37] shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform duration-300">
              <Sparkles className="w-5 h-5 text-white animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold font-display tracking-wider text-slate-900 dark:text-white flex items-center gap-1">
                CANADA <span className="text-[#D4AF37]">CLEAN</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-semibold font-display">
                Premium Turnover Services
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium text-sm transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-4">
              {/* Dark mode toggle */}
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-xl text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none"
                aria-label="Toggle theme"
              >
                {isDarkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-slate-700" />}
              </button>

              {/* CTA */}
              <button
                onClick={onBookClick}
                className="bg-emerald-700 hover:bg-emerald-600 text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-lg shadow-emerald-700/15 hover:shadow-emerald-700/25 transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none"
              >
                Book Your Cleaning
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-xl text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none"
            >
              {isDarkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-slate-700" />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden fixed inset-y-0 right-0 w-full max-w-xs bg-white dark:bg-slate-900 z-50 shadow-2xl p-6 transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-8">
          <span className="font-bold text-lg font-display tracking-wider text-slate-900 dark:text-white">
            CANADA <span className="text-emerald-600">CLEAN</span>
          </span>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-xl text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => {
                setIsOpen(false);
              }}
              className="text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium text-base transition-colors"
            >
              {link.name}
            </a>
          ))}

          {/* CTA Mobile */}
          <button
            onClick={() => {
              onBookClick();
              setIsOpen(false);
            }}
            className="w-full bg-emerald-700 hover:bg-emerald-600 text-white text-center font-semibold py-3 rounded-xl shadow-lg transition-all"
          >
            Book Your Cleaning
          </button>
        </div>
      </div>
    </nav>
  );
}
