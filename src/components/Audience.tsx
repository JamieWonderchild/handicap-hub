const audiences = [
  { emoji: "🤝", label: "Social golfers", desc: "Play for fun with friends without the commitment." },
  { emoji: "✈️", label: "Travelling golfers", desc: "Take your handicap anywhere you go in SA and beyond." },
  { emoji: "🌅", label: "Weekend players", desc: "Don't need a full membership — just a number that works." },
  { emoji: "🏠", label: "Golfers without a home club", desc: "Play at any course, anytime, without being tied down." },
];

export default function Audience() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-green-700 font-semibold text-sm uppercase tracking-widest mb-3">Who it&apos;s for</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Built for how South Africans<br className="hidden sm:block" /> actually play golf
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((a) => (
            <div
              key={a.label}
              className="flex flex-col items-center text-center bg-gray-50 hover:bg-green-50 border border-transparent hover:border-green-100 rounded-2xl p-6 transition-all group"
            >
              <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center text-3xl mb-4 group-hover:shadow-md transition-shadow">
                {a.emoji}
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{a.label}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
