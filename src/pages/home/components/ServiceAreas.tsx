const cities = [
  'Melbourne', 'Titusville', 'Rockledge', 'Cocoa', 'Cocoa Beach',
  'Palm Bay', 'Merritt Island', 'Viera', 'Satellite Beach',
  'Cape Canaveral', 'West Melbourne', 'Mims', 'Indian Harbour Beach',
  'Grant-Valkaria', 'Brevard County',
];

export default function ServiceAreas() {
  return (
    <section id="areas" className="py-28 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-[#70DC28] font-bebas tracking-[0.3em] text-sm mb-2">WE COME TO YOU</p>
          <h2 className="font-bebas text-5xl lg:text-7xl text-[#0f0f0f] leading-[0.9]">
            MOVERS IN FLORIDA
            <br />
            <span className="text-[#70DC28]">SERVICE AREAS</span>
          </h2>
          <p className="text-neutral-500 text-base mt-5 max-w-xl mx-auto leading-relaxed">
            Beast Mode Movers proudly serves Melbourne, Titusville, Rockledge, and the greater
            Brevard County area. If your city isn&apos;t listed, contact us — we likely cover it.
          </p>
        </div>

        {/* Map - full width, large */}
        <div className="mb-12">
          <div className="text-center mb-6">
            <h3 className="font-bebas text-3xl lg:text-4xl text-[#0f0f0f]">
              Proudly Serving <span className="text-[#70DC28]">Brevard County, Florida</span>
            </h3>
          </div>
          <div className="relative rounded-2xl overflow-hidden border border-neutral-200 h-[520px] w-full">
            <iframe
              title="Beast Mode Movers Location - Brevard County Florida"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.5232867764616!2d-80.71561572403593!3d28.319275600000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88de102776341c77%3A0x6c64d9cf33106086!2sBeast%20Mode%20Movers!5e0!3m2!1sen!2sus!4v1710862400000!5m2!1sen!2sus"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            {/* Overlay badge */}
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-[#0f0f0f] px-4 py-2.5 rounded-lg border border-neutral-200">
              <p className="font-bebas text-base text-[#58C016] leading-none">BEAST MODE MOVERS</p>
              <p className="text-neutral-500 text-xs mt-0.5">Melbourne, FL — Brevard County</p>
            </div>
            <div className="absolute bottom-4 right-4 bg-[#70DC28] text-[#0f0f0f] px-4 py-2.5 rounded-lg">
              <p className="font-black text-sm leading-none">15+ Cities</p>
              <p className="text-[#0f0f0f]/60 text-[10px] mt-0.5">Across Brevard County</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left: City pills */}
          <div>
            <h4 className="font-bebas text-2xl text-[#0f0f0f] mb-5">CITIES WE SERVE</h4>
            <div className="flex flex-wrap gap-2.5 mb-8">
              {cities.map((city) => (
                <span
                  key={city}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer whitespace-nowrap border ${
                    city === 'Brevard County'
                      ? 'bg-[#70DC28] border-[#70DC28] text-[#0f0f0f]'
                      : 'border-neutral-200 text-neutral-600 hover:bg-[#70DC28] hover:border-[#70DC28] hover:text-[#0f0f0f]'
                  }`}
                >
                  {city}
                </span>
              ))}
            </div>
            <div className="border-l-4 border-[#70DC28] pl-5 py-2 mb-6">
              <p className="text-neutral-500 text-sm">
                <strong className="text-[#0f0f0f]">Don&apos;t see your city?</strong>
                <br />
                Contact us — we cover a wide range of Florida locations beyond this list.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#0f0f0f] text-white px-7 py-3.5 rounded-md font-bold text-sm whitespace-nowrap hover:bg-[#70DC28] hover:text-[#0f0f0f] transition-all cursor-pointer"
            >
              <div className="w-4 h-4 flex items-center justify-center">
                <i className="ri-map-pin-2-line text-sm"></i>
              </div>
              Check If We Cover Your Area →
            </a>
          </div>

          {/* Right: AI Search Block */}
          <div className="flex flex-col gap-5">
            <div className="bg-white border border-neutral-200 rounded-xl p-6">
              <p className="text-[10px] font-black text-[#70DC28] uppercase tracking-[0.2em] mb-2">Service Coverage</p>
              <h3 className="font-bold text-[#0f0f0f] text-base mb-3">What areas do Beast Mode Movers serve in Florida?</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                Beast Mode Movers primarily serves Brevard County, Florida, including Melbourne, Titusville, Rockledge, Cocoa, Cocoa Beach, Palm Bay, Merritt Island, Viera, and surrounding cities. We also offer long distance moving services throughout the state of Florida and beyond.
              </p>
            </div>
            <div className="bg-[#0f0f0f] rounded-xl p-6 text-white">
              <p className="text-[10px] font-black text-[#70DC28] uppercase tracking-[0.2em] mb-2">Local Movers Near You</p>
              <h3 className="font-bold text-white text-base mb-3">Why choose local movers in Florida?</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Local movers in Brevard County know the area, the roads, and the community. Beast Mode Movers offers faster response times, competitive local pricing, and genuine care for your belongings — because this is our home too.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
