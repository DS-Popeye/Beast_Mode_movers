const services = [
  {
    id: 'local',
    title: 'Local Moving',
    subtitle: 'Movers in Florida',
    icon: 'ri-map-2-line',
    description:
      'Expert local moves within Melbourne, Titusville, Rockledge, and all surrounding Brevard County cities. Hourly rates, same-day availability, full equipment provided.',
    features: ['Same-day availability', 'Hourly transparent rates', 'Full equipment included'],
    bg: 'bg-[#0f0f0f]',
    textColor: 'text-white',
    descColor: 'text-white/55',
    iconColor: 'text-[#70DC28]',
    featureIconColor: 'text-[#70DC28]',
    featureTextColor: 'text-white/65',
    img: 'https://readdy.ai/api/search-image?query=Professional%20movers%20in%20dark%20uniforms%20carrying%20large%20sofa%20furniture%20into%20a%20bright%20Florida%20home%2C%20daytime%2C%20local%20moving%20service%2C%20suburban%20neighborhood%2C%20photorealistic%20moving%20day%20scene%2C%20high%20resolution%20commercial%20photography%2C%20warm%20lighting&width=600&height=400&seq=service-local-01&orientation=landscape',
  },
  {
    id: 'longdistance',
    title: 'Long Distance Moving',
    subtitle: 'Florida & Beyond',
    icon: 'ri-road-map-line',
    description:
      'Reliable long distance moves across Florida and beyond. Flat-rate quotes, insured transport, GPS-tracked trucks, on-time guaranteed delivery.',
    features: ['Flat-rate pricing', 'GPS-tracked trucks', 'Fully insured transport'],
    bg: 'bg-[#70DC28]',
    textColor: 'text-[#0f0f0f]',
    descColor: 'text-[#0f0f0f]/65',
    iconColor: 'text-[#0f0f0f]',
    featureIconColor: 'text-[#0f0f0f]',
    featureTextColor: 'text-[#0f0f0f]/70',
    img: null,
  },
  {
    id: 'residential',
    title: 'Residential Moving',
    subtitle: 'Home Movers',
    icon: 'ri-home-2-line',
    description:
      'Careful home moves with furniture padding, wrapping, and professional handling. Your belongings treated with the utmost care from first to last step.',
    features: ['Furniture protection wrapping', 'Fragile item specialists', 'Room-by-room placement'],
    bg: 'bg-neutral-100',
    textColor: 'text-[#0f0f0f]',
    descColor: 'text-neutral-500',
    iconColor: 'text-[#70DC28]',
    featureIconColor: 'text-[#70DC28]',
    featureTextColor: 'text-neutral-500',
    img: 'https://readdy.ai/api/search-image?query=Professional%20movers%20carefully%20carrying%20boxes%20into%20a%20bright%20clean%20residential%20home%2C%20moving%20day%20inside%20beautiful%20Florida%20house%2C%20careful%20handling%20of%20belongings%2C%20photorealistic%20commercial%20photography%2C%20warm%20natural%20light%2C%20high%20quality%20moving%20service&width=600&height=400&seq=service-res-01&orientation=landscape',
  },
  {
    id: 'commercial',
    title: 'Commercial Moving',
    subtitle: 'Office & Business',
    icon: 'ri-building-2-line',
    description:
      'Office and business relocations planned for zero downtime. We work around your schedule — evenings and weekends available across Brevard County.',
    features: ['Zero downtime planning', 'Weekend & evening moves', 'IT equipment handling'],
    bg: 'bg-[#0f0f0f]',
    textColor: 'text-white',
    descColor: 'text-white/55',
    iconColor: 'text-[#70DC28]',
    featureIconColor: 'text-[#70DC28]',
    featureTextColor: 'text-white/65',
    img: null,
  },
  {
    id: 'packing',
    title: 'Packing Services',
    subtitle: 'Full-Service Packing',
    icon: 'ri-archive-2-line',
    description:
      'We supply all packing materials — boxes, bubble wrap, tape, furniture pads — and do every bit of the packing so you can focus on what matters.',
    features: ['All materials included', 'Labeled & organized boxes', 'Fragile item wrapping'],
    bg: 'bg-neutral-100',
    textColor: 'text-[#0f0f0f]',
    descColor: 'text-neutral-500',
    iconColor: 'text-[#70DC28]',
    featureIconColor: 'text-[#70DC28]',
    featureTextColor: 'text-neutral-500',
    img: 'https://readdy.ai/api/search-image?query=Professional%20packing%20supplies%20neatly%20arranged%20including%20moving%20boxes%20of%20various%20sizes%2C%20bubble%20wrap%20rolls%2C%20packing%20tape%2C%20furniture%20blankets%2C%20organized%20packing%20materials%20for%20moving%20company%2C%20clean%20white%20background%2C%20commercial%20product%20photography%2C%20high%20resolution%20bright%20studio%20lighting&width=600&height=400&seq=service-pack-01&orientation=landscape',
  },
  {
    id: 'specialty',
    title: 'Specialty Moves',
    subtitle: 'Pianos, Hot Tubs & More',
    icon: 'ri-music-2-line',
    description:
      'Piano moves, hot tub moves, spa moves, and oversized items handled by trained specialists with the proper equipment. No challenge too big.',
    features: ['Piano move specialists', 'Hot tub & spa relocation', 'Oversized item equipment'],
    bg: 'bg-[#70DC28]',
    textColor: 'text-[#0f0f0f]',
    descColor: 'text-[#0f0f0f]/65',
    iconColor: 'text-[#0f0f0f]',
    featureIconColor: 'text-[#0f0f0f]',
    featureTextColor: 'text-[#0f0f0f]/70',
    img: null,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-[#70DC28] font-bebas tracking-[0.3em] text-sm mb-2">WHAT WE DO</p>
            <h2 className="font-bebas text-5xl lg:text-7xl text-[#0f0f0f] leading-[0.9]">
              MOVING SERVICES
              <br />
              <span className="text-[#70DC28]">BUILT FOR FLORIDA</span>
            </h2>
          </div>
          <div className="max-w-sm">
            <p className="text-neutral-500 text-sm leading-relaxed">
              From local Brevard County moves to long distance relocations — residential movers,
              commercial movers, and specialty moves all under one roof.
            </p>
          </div>
        </div>

        {/* Staggered grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-200">
          {services.map((service) => (
            <div
              key={service.id}
              className={`${service.bg} relative overflow-hidden group cursor-pointer flex flex-col`}
            >
              {/* Service image */}
              {service.img && (
                <div className="w-full h-44 overflow-hidden flex-shrink-0">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-600"
                  />
                </div>
              )}

              <div className="p-8 flex flex-col flex-1">
                <div className="w-10 h-10 flex items-center justify-center mb-4">
                  <i className={`${service.icon} text-2xl ${service.iconColor}`}></i>
                </div>
                <p className={`text-[10px] font-bold tracking-[0.2em] uppercase mb-2 opacity-50 ${service.textColor}`}>
                  {service.subtitle}
                </p>
                <h3 className={`font-bebas text-3xl leading-tight mb-3 ${service.textColor}`}>
                  {service.title}
                </h3>
                <p className={`text-sm leading-relaxed mb-5 flex-1 ${service.descColor}`}>
                  {service.description}
                </p>
                <ul className="flex flex-col gap-2">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <div className="w-4 h-4 flex items-center justify-center flex-shrink-0">
                        <i className={`ri-check-line text-sm ${service.featureIconColor}`}></i>
                      </div>
                      <span className={`text-xs font-medium ${service.featureTextColor}`}>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Below services CTA */}
        <div className="mt-12 bg-[#0f0f0f] rounded-lg px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <p className="text-white font-bold text-base mb-0.5">Need a custom quote for your move?</p>
            <p className="text-white/45 text-sm">Residential movers, commercial movers, local and long distance — we do it all.</p>
          </div>
          <a
            href="#contact"
            className="bg-[#70DC28] text-[#0f0f0f] px-8 py-3.5 rounded-md font-black text-sm whitespace-nowrap hover:bg-[#58C016] transition-colors cursor-pointer flex-shrink-0"
          >
            Get a Free Moving Quote →
          </a>
        </div>
      </div>
    </section>
  );
}
