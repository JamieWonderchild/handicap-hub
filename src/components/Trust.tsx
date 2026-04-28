const points = [
  {
    icon: "🌍",
    title: "WHS-aligned principles",
    desc: "Our handicap calculations are built around World Handicap System methodology — the same global standard used across 100+ countries.",
  },
  {
    icon: "📊",
    title: "Consistent score tracking",
    desc: "Score submission follows accepted golf standards, ensuring your index reflects genuine performance over time.",
  },
  {
    icon: "⚖️",
    title: "Fair & transparent",
    desc: "Every adjustment to your handicap index is traceable. No surprises, no black boxes.",
  },
];

export default function Trust() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-900 to-green-800">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-yellow-400 font-semibold text-sm uppercase tracking-widest mb-3">Credibility</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Built for credibility
          </h2>
          <p className="text-green-200 text-lg max-w-xl mx-auto">
            Built in line with global handicap standards — so your number means something.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {points.map((p) => (
            <div
              key={p.title}
              className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/15 transition-colors"
            >
              <div className="text-4xl mb-4">{p.icon}</div>
              <h3 className="text-white font-bold text-lg mb-2">{p.title}</h3>
              <p className="text-green-200 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-3 bg-white/10 border border-white/20 rounded-full px-6 py-3">
            <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <p className="text-white/90 text-sm font-medium">
              Built in line with global handicap standards
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
