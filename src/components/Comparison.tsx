const rows = [
  { label: "Club membership required", traditional: "Required", hub: "Not required" },
  { label: "Annual cost", traditional: "R3,000–R8,000+", hub: "Fraction of the cost" },
  { label: "Flexibility", traditional: "Tied to one club", hub: "Play anywhere" },
  { label: "Submission method", traditional: "Paper / manual", hub: "Fully digital" },
  { label: "Handicap updates", traditional: "Monthly (club admin)", hub: "After every round" },
  { label: "Access", traditional: "In-person or clunky portal", hub: "Mobile app, always on" },
];

export default function Comparison() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-green-700 font-semibold text-sm uppercase tracking-widest mb-3">Comparison</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Traditional vs Handicap Hub
          </h2>
          <p className="text-gray-500 text-lg">Same purpose. Smarter system.</p>
        </div>

        <div className="overflow-x-auto rounded-2xl shadow-sm border border-gray-100">
          <table className="w-full text-sm">
            <thead>
              <tr>
                <th className="bg-gray-50 text-left px-6 py-4 text-gray-500 font-medium w-1/3"></th>
                <th className="bg-gray-50 text-center px-6 py-4 text-gray-600 font-semibold">Traditional Systems</th>
                <th className="bg-green-700 text-center px-6 py-4 text-white font-bold">Handicap Hub</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={row.label} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                  <td className="px-6 py-4 text-gray-700 font-medium">{row.label}</td>
                  <td className="px-6 py-4 text-center">
                    <span className="flex items-center justify-center gap-2 text-gray-500">
                      <svg className="w-4 h-4 text-red-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      {row.traditional}
                    </span>
                  </td>
                  <td className="px-6 py-4 bg-green-50/30 text-center">
                    <span className="flex items-center justify-center gap-2 text-green-800 font-semibold">
                      <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {row.hub}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
