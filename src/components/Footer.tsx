export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-xl">⛳</span>
          <span className="font-bold text-white">Handicap Hub</span>
        </div>

        <div className="flex gap-6 text-sm">
          <a href="#how-it-works" className="hover:text-white transition-colors">How it works</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
        </div>

        <p className="text-xs text-gray-600">
          © {new Date().getFullYear()} Handicap Hub. Built around WHS principles.
        </p>
      </div>
    </footer>
  );
}
