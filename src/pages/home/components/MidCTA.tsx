export default function MidCTA() {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background image with heavy dark overlay */}
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=Aerial%20overhead%20drone%20view%20of%20a%20professional%20moving%20truck%20parked%20on%20a%20sunny%20Florida%20suburban%20street%20surrounded%20by%20green%20lawns%20and%20palm%20trees%2C%20movers%20working%20below%2C%20bright%20blue%20sky%2C%20warm%20colors%2C%20photorealistic%20high%20resolution%20aerial%20photography&width=1920&height=800&seq=midcta-bg-01&orientation=landscape"
          alt="Professional movers in Florida"
          className="w-full h-full object-cover object-center brightness-50"
        />
        <div className="absolute inset-0 bg-[#0f0f0f]/80" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center">
        {/* Urgency badge */}
        <div className="inline-flex items-center gap-2 bg-[#70DC28]/15 border border-[#70DC28]/40 px-5 py-2 rounded-full mb-6">
          <div className="w-2 h-2 bg-[#70DC28] rounded-full animate-pulse"></div>
          <span className="text-[#70DC28] font-black text-xs tracking-widest uppercase">Fast Quotes — Same-Day Response Available</span>
        </div>

        <p className="font-bebas tracking-[0.2em] text-white/50 text-sm mb-3">FREE, NO OBLIGATION ESTIMATE</p>
        <h2 className="font-bebas text-5xl lg:text-8xl text-white leading-[0.88] mb-6">
          READY TO MOVE?
          <br />
          <span className="text-[#70DC28]">GET YOUR FREE QUOTE</span>
        </h2>
        <p className="text-white/70 text-base mb-10 max-w-xl mx-auto leading-relaxed">
          Serving Melbourne, Titusville, Rockledge &amp; all of Brevard County. Local movers, long
          distance movers, residential movers, commercial movers — all under one roof.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-[#70DC28] text-[#0f0f0f] px-12 py-4 rounded-md font-black text-base whitespace-nowrap hover:bg-[#58C016] transition-all cursor-pointer"
          >
            Get a Free Moving Quote →
          </a>
          <a
            href="#services"
            className="border-2 border-white text-white px-12 py-4 rounded-md font-black text-base whitespace-nowrap hover:bg-white hover:text-[#0f0f0f] transition-all cursor-pointer"
          >
            View All Services
          </a>
        </div>
      </div>
    </section>
  );
}