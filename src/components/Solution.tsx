const benefits = [
  "No club membership required",
  "Lower annual cost",
  "Fully digital & easy to use",
  "Built around official handicap standards",
  "Play any course, anytime",
  "Track your progress over time",
];

export default function Solution() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-green-700 font-semibold text-sm uppercase tracking-widest mb-3">The Solution</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-5">
              Meet Handicap Hub
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              A modern, independent way to get and maintain your golf handicap.
              No affiliation required. No unnecessary costs. Just your game.
            </p>

            <ul className="space-y-3 mb-10">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-3 text-gray-700">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-green-700" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-medium">{b}</span>
                </li>
              ))}
            </ul>

            <a
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-xl"
            >
              Create Your Profile in Minutes
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>

          {/* Visual card */}
          <div className="relative">
            <div className="bg-gradient-to-br from-green-900 to-green-700 rounded-3xl p-8 shadow-2xl text-white">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">⛳</span>
                <div>
                  <p className="font-bold text-lg">Handicap Hub</p>
                  <p className="text-green-300 text-sm">Your playing profile</p>
                </div>
              </div>

              <div className="bg-white/10 rounded-2xl p-5 mb-5">
                <p className="text-green-300 text-xs uppercase tracking-widest mb-1">Current Handicap Index</p>
                <p className="text-5xl font-black text-yellow-400">14.2</p>
                <p className="text-green-300 text-sm mt-1">↓ Improved from 15.8</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-xl p-4">
                  <p className="text-green-300 text-xs mb-1">Rounds played</p>
                  <p className="text-2xl font-bold">24</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4">
                  <p className="text-green-300 text-xs mb-1">Best score</p>
                  <p className="text-2xl font-bold">+2</p>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-2 bg-yellow-400/20 border border-yellow-400/30 rounded-xl p-3">
                <svg className="w-4 h-4 text-yellow-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <p className="text-yellow-300 text-xs font-medium">WHS-aligned calculation</p>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-yellow-400/20 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
