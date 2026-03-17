export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a
            href="#domov"
            className="font-serif text-xl font-bold text-white hover:text-blue-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
          >
            Zuzana<span className="text-blue-500">.</span>
          </a>

          <nav aria-label="Pätičková navigácia">
            <ul className="flex gap-6">
              {[
                { href: '#domov', label: 'Domov' },
                { href: '#sluzby', label: 'Služby' },
                { href: '#kontakt', label: 'Kontakt' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <p className="text-gray-500 text-sm">
            &copy; 2026 Zuzana Kováčová. Všetky práva vyhradené.
          </p>
        </div>
      </div>
    </footer>
  )
}
