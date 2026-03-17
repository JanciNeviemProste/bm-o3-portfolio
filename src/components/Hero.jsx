export default function Hero() {
  return (
    <section
      id="domov"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 overflow-hidden"
    >
      {/* Decorative background shapes */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-blue-600/8 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-500/5 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="text-center lg:text-left">
            <p className="text-blue-400 font-medium text-sm tracking-widest uppercase mb-4 animate-fade-in-up">
              Grafická dizajnérka &amp; kreatívna vizionárka
            </p>
            <h1 className="font-serif text-5xl md:text-6xl font-bold leading-tight text-white mb-6 animate-fade-in-up animate-delay-100">
              Ahoj, som{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                Zuzana
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto lg:mx-0 mb-8 animate-fade-in-up animate-delay-200">
              Premieňam myšlienky na vizuálne príbehy. Navrhujem logá, budujem firemné identity
              a tvorím dizajn, ktorý zaujme na prvý pohľad a zostane v pamäti.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up animate-delay-300">
              <a
                href="#sluzby"
                className="bg-blue-500 hover:bg-blue-400 text-white font-semibold px-8 py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-950"
              >
                Pozrite si moje služby
              </a>
              <a
                href="#kontakt"
                className="border border-blue-500/50 text-blue-400 hover:bg-blue-500/10 font-semibold px-8 py-3.5 rounded-lg transition-all duration-300 text-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-950"
              >
                Kontaktujte ma
              </a>
            </div>
          </div>

          {/* Hero image */}
          <div className="hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden aspect-square max-w-md mx-auto shadow-2xl shadow-blue-500/10">
              <img
                src="https://loremflickr.com/800/800/design,graphic?random=1"
                alt="Grafický dizajn — ukážka tvorivej práce Zuzany"
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
