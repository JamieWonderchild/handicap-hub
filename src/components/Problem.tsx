const painPoints = [
  {
    icon: "💸",
    title: "Expensive annual memberships",
    desc: "Traditional club memberships cost thousands of Rand per year — just for a handicap number.",
  },
  {
    icon: "🏌️",
    title: "Forced course affiliation",
    desc: "You're tied to a specific club, even if you play across many different courses.",
  },
  {
    icon: "✈️",
    title: "Limited flexibility",
    desc: "Travel, play socially, or switch courses? Your old system doesn't keep up.",
  },
  {
    icon: "📋",
    title: "Admin-heavy & outdated",
    desc: "Paper scorecards, manual submissions, and clunky portals built for a different era.",
  },
];

export default function Problem() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-green-700 font-semibold text-sm uppercase tracking-widest mb-3">The Problem</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Why golfers are moving away from<br className="hidden sm:block" /> traditional handicap systems
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {painPoints.map((p) => (
            <div
              key={p.title}
              className="flex gap-4 bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="text-3xl flex-shrink-0">{p.icon}</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-green-800 font-semibold text-lg mt-12">
          Golf has evolved. Your handicap system should too.
        </p>
      </div>
    </section>
  );
}
