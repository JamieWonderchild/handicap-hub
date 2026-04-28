export default function FinalCTA() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-900 via-green-800 to-green-700 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-yellow-400/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-green-500/20 blur-2xl" />
      </div>

      <div className="relative max-w-3xl mx-auto text-center">
        <div className="text-5xl mb-6">⛳</div>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-5 leading-tight">
          Take control of<br />your handicap
        </h2>
        <p className="text-green-200 text-xl mb-10 max-w-xl mx-auto">
          No restrictions. No unnecessary costs. Just your game.
        </p>

        <a
          href="#hero"
          className="inline-flex items-center justify-center gap-3 bg-yellow-400 hover:bg-yellow-300 text-green-900 font-black text-xl px-10 py-5 rounded-full transition-all shadow-2xl hover:shadow-yellow-400/30 hover:-translate-y-1"
        >
          Get Started Today
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>

        <p className="text-green-300 text-sm mt-6">
          No credit card required to get started
        </p>
      </div>
    </section>
  );
}
