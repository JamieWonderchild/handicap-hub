export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-green-700 font-semibold text-sm uppercase tracking-widest mb-3">Pricing</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            A smarter price for your game
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Why pay for a full club membership if you just want a handicap?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {/* Monthly */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 hover:shadow-md transition-shadow">
            <p className="text-gray-500 text-sm font-medium mb-2">Monthly</p>
            <div className="flex items-end gap-1 mb-1">
              <span className="text-4xl font-black text-gray-900">R49</span>
              <span className="text-gray-400 mb-1">/month</span>
            </div>
            <p className="text-green-600 text-xs font-medium mb-6">Less than a sleeve of golf balls</p>

            <ul className="space-y-3 mb-8">
              {[
                "Official handicap index",
                "Unlimited round submissions",
                "Performance dashboard",
                "Mobile app access",
              ].map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                  <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>

            <a
              href="#hero"
              className="block text-center bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold px-6 py-3 rounded-full transition-colors text-sm"
            >
              Get started
            </a>
          </div>

          {/* Annual — highlighted */}
          <div className="relative bg-gradient-to-br from-green-800 to-green-700 rounded-2xl shadow-xl p-8 text-white">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-green-900 text-xs font-black px-4 py-1 rounded-full uppercase tracking-wider shadow">
              Best value
            </div>
            <p className="text-green-300 text-sm font-medium mb-2">Annual</p>
            <div className="flex items-end gap-1 mb-1">
              <span className="text-4xl font-black">R399</span>
              <span className="text-green-300 mb-1">/year</span>
            </div>
            <p className="text-yellow-400 text-xs font-medium mb-6">Save over 30% vs monthly</p>

            <ul className="space-y-3 mb-8">
              {[
                "Everything in monthly",
                "Priority support",
                "Early access to new features",
                "Handicap history export",
              ].map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-green-100">
                  <svg className="w-4 h-4 text-yellow-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>

            <a
              href="#hero"
              className="block text-center bg-yellow-400 hover:bg-yellow-300 text-green-900 font-bold px-6 py-3 rounded-full transition-colors text-sm shadow"
            >
              Start Now
            </a>
          </div>
        </div>

        <p className="text-center text-gray-400 text-sm mt-8">
          Traditional club membership? R3,000–R8,000+ per year. Just saying.
        </p>
      </div>
    </section>
  );
}
