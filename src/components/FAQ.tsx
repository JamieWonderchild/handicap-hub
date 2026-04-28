"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Is this recognised for competitions?",
    a: "Handicap Hub is designed for social and recreational play. Competition eligibility depends on the organiser's requirements. For official WHS-registered competition play, check with your tournament committee.",
  },
  {
    q: "How is my handicap calculated?",
    a: "We use principles aligned with the World Handicap System — your handicap index is derived from your best recent score differentials. The calculation is transparent and updates after every submitted round.",
  },
  {
    q: "Can I switch from HNA?",
    a: "Yes. Many golfers use Handicap Hub as an alternative to or alongside traditional HNA membership. Simply register and start submitting scores to establish your index.",
  },
  {
    q: "Is this compliant with WHS?",
    a: "Our system is built around WHS principles and follows the same core methodology. We are an independent platform aligned with the global standard.",
  },
  {
    q: "What if I join a club later?",
    a: "No problem. Your score history is yours. If you later join a club, your records provide a clear baseline for any handicap transfer process.",
  },
  {
    q: "Which courses can I play?",
    a: "You can submit scores from any recognised golf course. Our app includes a large database of South African courses with official course and slope ratings.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        className="w-full text-left py-5 flex items-start justify-between gap-4 group"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold text-gray-900 group-hover:text-green-700 transition-colors">{q}</span>
        <svg
          className={`w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="pb-5 text-gray-500 text-sm leading-relaxed">{a}</div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-green-700 font-semibold text-sm uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Common questions
          </h2>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 px-6 sm:px-8">
          {faqs.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
