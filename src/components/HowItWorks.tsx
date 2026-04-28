const steps = [
  {
    number: "01",
    title: "Register",
    desc: "Create your profile in under 2 minutes. Name, email, done.",
    icon: "👤",
  },
  {
    number: "02",
    title: "Play & Submit Scores",
    desc: "Open a round, play your game, then enter your score directly in the app.",
    icon: "📱",
  },
  {
    number: "03",
    title: "Track Your Handicap",
    desc: "Your handicap index updates automatically based on your performance.",
    icon: "📈",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-green-700 font-semibold text-sm uppercase tracking-widest mb-3">How it works</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Simple. Transparent. Reliable.
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Three steps stand between you and your handicap index.
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Connector line */}
          <div className="hidden md:block absolute top-12 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-green-200 via-green-400 to-green-200" />

          {steps.map((step, i) => (
            <div key={step.number} className="relative flex flex-col items-center text-center group">
              <div className="relative mb-6">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-700 to-green-900 flex items-center justify-center text-4xl shadow-lg group-hover:shadow-xl transition-shadow">
                  {step.icon}
                </div>
                <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-yellow-400 flex items-center justify-center text-green-900 font-black text-xs shadow">
                  {i + 1}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#pricing"
            className="inline-flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg"
          >
            Start in 2 minutes
          </a>
        </div>
      </div>
    </section>
  );
}
