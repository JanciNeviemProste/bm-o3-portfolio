const SERVICES = [
  {
    icon: (
      <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
    title: 'Tvorba loga a vizuálnej identity',
    description:
      'Každá značka si zaslúži originálne logo, ktoré vyjadrí jej podstatu. Navrhujem logá od prvotných skíc až po finálne vektorové súbory pripravené na tlač aj web. Súčasťou je kompletný brand manuál — farby, typografia, varianty loga a pravidlá použitia, aby vaša značka pôsobila jednotne na každom médiu.',
    image: 'https://loremflickr.com/800/600/logo,branding?random=2',
    imageAlt: 'Ukážka tvorby loga a vizuálnej identity',
  },
  {
    icon: (
      <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    title: 'Webový a digitálny dizajn',
    description:
      'Navrhujem moderné webové stránky a mobilné rozhrania, ktoré sú nielen krásne, ale aj intuitívne. Pracujem vo Figme, kde vytváram interaktívne prototypy a dizajnové systémy. Každý návrh je responzívny a optimalizovaný pre rôzne zariadenia — od mobilu cez tablet až po veľkú obrazovku.',
    image: 'https://loremflickr.com/800/600/webdesign,ui?random=3',
    imageAlt: 'Ukážka webového a digitálneho dizajnu',
  },
  {
    icon: (
      <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
      </svg>
    ),
    title: 'Tlačoviny a marketingové materiály',
    description:
      'Od elegantných vizitiek cez firemné brožúry až po veľkoformátové plagáty — navrhujem tlačoviny, ktoré zanechajú dojem. Spolupracujem priamo s tlačiarňami, pripravujem súbory v CMYK s orezovými značkami a dohliadam na farebnú vernosť, aby výsledok presne zodpovedal návrhu na obrazovke.',
    image: 'https://loremflickr.com/800/600/print,brochure?random=4',
    imageAlt: 'Ukážka tlačovín a marketingových materiálov',
  },
]

export default function Features() {
  return (
    <section id="sluzby" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            Čo pre vás môžem vytvoriť
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ponúkam komplexné grafické služby — od prvého nápadu cez návrh až po finálne podklady
            pripravené na použitie v digitálnom aj tlačenom svete.
          </p>
        </div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <article
              key={index}
              className="group bg-gray-800/50 border border-gray-700/50 rounded-xl overflow-hidden hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5"
            >
              {/* Card image */}
              <div className="aspect-video overflow-hidden">
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Card content */}
              <div className="p-6">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-base text-gray-400 leading-relaxed">{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
