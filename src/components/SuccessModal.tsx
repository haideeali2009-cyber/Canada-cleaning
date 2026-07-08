import React, { useState } from "react";
import { Check, Mail, Sparkles, X, ChevronRight, Inbox, Clock } from "lucide-react";
import { Booking, EmailLog } from "../types";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  booking: Booking | null;
  simulatedEmails: {
    customer: EmailLog;
    business: EmailLog;
  } | null;
}

export default function SuccessModal({
  isOpen,
  onClose,
  booking,
  simulatedEmails,
}: SuccessModalProps) {
  if (!isOpen || !booking || !simulatedEmails) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity" 
      />

      {/* Modal Container */}
      <div className="relative bg-white dark:bg-slate-900 rounded-3xl max-w-2xl w-full border border-slate-100 dark:border-slate-800 shadow-2xl p-6 sm:p-10 z-10 overflow-hidden transform transition-all">
        {/* Top Gold & Emerald decorative beam */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-600 via-teal-500 to-amber-500" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-600 focus:outline-none transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center space-y-6">
          {/* Animated Green Check Icon */}
          <div className="mx-auto w-16 h-16 rounded-full bg-emerald-50 dark:bg-emerald-950/30 flex items-center justify-center border-2 border-emerald-500 shadow-lg shadow-emerald-500/10 animate-bounce">
            <Check className="w-8 h-8 text-emerald-600 dark:text-emerald-400 stroke-[3px]" />
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white">
              Booking Confirmed!
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto">
              We've received your turnover request. Our scheduling team will review the slot and contact you shortly.
            </p>
          </div>

          {/* Quick Details Card */}
          <div className="bg-slate-50 dark:bg-slate-950 p-5 rounded-2xl border border-slate-100 dark:border-slate-800 text-left space-y-3 text-xs">
            <div className="flex justify-between border-b border-slate-200/50 dark:border-slate-800/50 pb-2.5">
              <span className="text-slate-400 font-bold uppercase tracking-wider text-[9px]">Booking ID</span>
              <span className="font-mono font-bold text-slate-900 dark:text-white">#{booking.id}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-400 font-bold uppercase tracking-wider text-[9px]">Property Address</span>
              <span className="font-semibold text-slate-800 dark:text-slate-200 text-right max-w-[280px] truncate">{booking.address}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-400 font-bold uppercase tracking-wider text-[9px]">Schedule Window</span>
              <span className="font-semibold text-slate-800 dark:text-slate-200">
                {booking.preferredDate} @ {booking.preferredTimeSlot.split(" ")[0]}
              </span>
            </div>

            <div className="flex justify-between border-t border-slate-200/50 dark:border-slate-800/50 pt-2.5">
              <span className="text-slate-400 font-bold uppercase tracking-wider text-[9px]">Calculated Cost</span>
              <span className="text-sm font-extrabold text-emerald-600 dark:text-emerald-400">${booking.totalCost} CAD</span>
            </div>
          </div>

          {/* Automated Email Simulator Frame */}
          <div className="text-left border border-slate-100 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm">
            <div className="bg-slate-100 dark:bg-slate-850 p-3 flex justify-between items-center border-b border-slate-200/50 dark:border-slate-800/50">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-purple-600" />
                Simulated Automated Email Dispatch
              </span>
              <span className="text-[9px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/30 px-2 py-0.5 rounded-full uppercase">
                Success
              </span>
            </div>

            {/* Email Title Bar */}
            <div className="flex border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-xs px-4 py-3 font-semibold text-emerald-600 dark:text-emerald-400">
              💼 Dispatch Copy to Operations
            </div>

            {/* Email Details Viewer */}
            <div className="p-4 space-y-2 text-xs font-normal">
              <p className="font-bold text-slate-800 dark:text-slate-200">
                To: <span className="text-slate-500 dark:text-slate-400 font-normal">{simulatedEmails.business.to}</span>
              </p>
              <p className="font-bold text-slate-800 dark:text-slate-200">
                Subject: <span className="text-slate-500 dark:text-slate-400 font-normal">{simulatedEmails.business.subject}</span>
              </p>
              <div className="bg-slate-50 dark:bg-slate-950 p-3.5 rounded-xl border border-slate-100 dark:border-slate-850 font-mono text-[10px] text-slate-500 whitespace-pre-wrap leading-relaxed max-h-40 overflow-y-auto">
                {simulatedEmails.business.body}
              </div>
            </div>
          </div>

          {/* Close Modal CTA */}
          <button
            onClick={onClose}
            className="w-full bg-slate-900 hover:bg-slate-850 text-white font-bold py-3.5 rounded-xl text-sm transition-colors shadow-md"
          >
            Great, Thank You!
          </button>
        </div>

      </div>
    </div>
  );
}
