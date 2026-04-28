"use client";

import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <span className="text-2xl">⛳</span>
            <span className="font-bold text-xl text-green-800">Handicap Hub</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="text-sm text-gray-600 hover:text-green-700 transition-colors">How it works</a>
            <a href="#pricing" className="text-sm text-gray-600 hover:text-green-700 transition-colors">Pricing</a>
            <a href="#faq" className="text-sm text-gray-600 hover:text-green-700 transition-colors">FAQ</a>
            <a
              href="#hero"
              className="bg-green-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-green-800 transition-colors"
            >
              Get Started
            </a>
          </div>

          <button
            className="md:hidden p-2 rounded-lg text-gray-600"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-4 flex flex-col gap-4">
          <a href="#how-it-works" className="text-sm text-gray-700" onClick={() => setOpen(false)}>How it works</a>
          <a href="#pricing" className="text-sm text-gray-700" onClick={() => setOpen(false)}>Pricing</a>
          <a href="#faq" className="text-sm text-gray-700" onClick={() => setOpen(false)}>FAQ</a>
          <a
            href="#hero"
            className="bg-green-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full text-center hover:bg-green-800 transition-colors"
            onClick={() => setOpen(false)}
          >
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
}
