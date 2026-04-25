export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Hero background image */}
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=Close%20up%20wide%20angle%20shot%20of%20neatly%20stacked%20brown%20cardboard%20moving%20boxes%20and%20furniture%20wrapped%20in%20white%20moving%20blankets%20and%20stretch%20wrap%20inside%20a%20large%20moving%20truck%2C%20golden%20afternoon%20sunlight%20streaming%20through%20the%20open%20truck%20door%2C%20professional%20organized%20packing%20job%2C%20warm%20tones%2C%20photorealistic%20commercial%20photography%2C%20no%20people%20visible%2C%20no%20logos%2C%20no%20text%2C%20no%20branding%2C%20high%20resolution%20detailed%20texture%20of%20cardboard%20and%20bubble%20wrap%2C%20depth%20of%20field%20bokeh%20background%2C%20premium%20aspirational%20moving%20service%20scene&width=1920&height=1080&seq=hero-bmm-boxes-interior-v1&orientation=landscape"
          alt="Beast Mode Movers – Professional moving services in Florida"
          className="w-full h-full object-cover object-center brightness-75"
        />
        {/* Strong top-to-bottom dark gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-black/70" />
        {/* Left-side deeper shadow for text panel */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
      </div>

      {/* Left accent bar */}
      <div className="absolute left-0 top-0 h-full w-1 bg-[#70DC28]" />

      <div className="relative z-10 w-full px-6 lg:px-20 pt-36 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">

            {/* 1. Location */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full mb-7">
              <div className="w-3 h-3 flex items-center justify-center">
                <i className="ri-map-pin-fill text-[#70DC28] text-xs"></i>
              </div>
              <span className="text-white text-xs font-bold tracking-widest uppercase" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.8)' }}>
                Brevard County, Florida
              </span>
            </div>

            {/* 2. Main headline */}
            <h1 className="font-bebas leading-[0.9] mb-7" style={{ textShadow: '0 2px 16px rgba(0,0,0,0.9)' }}>
              <span className="block text-[4.5rem] lg:text-[6.5rem] text-white">FLORIDA&apos;S MOST</span>
              <span className="block text-[4.5rem] lg:text-[6.5rem] text-[#70DC28]">TRUSTED MOVERS</span>
              <span className="block text-[2.8rem] lg:text-[3.8rem] text-white/90 font-normal mt-1">STRESS-FREE, EVERY TIME.</span>
            </h1>

            {/* 3. Supporting text */}
            <p className="text-white text-lg leading-relaxed max-w-xl mb-8 font-medium" style={{ textShadow: '0 1px 8px rgba(0,0,0,0.9)' }}>
              Moving support for residential, apartment, commercial, packing, loading, furniture,
              and local moves across the listed Florida service areas.
            </p>

            {/* 4. CTA section — clearly separated */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="#contact"
                className="bg-[#70DC28] text-[#0f0f0f] px-10 py-4 rounded-md font-black text-base text-center whitespace-nowrap hover:bg-[#58C016] transition-all cursor-pointer shadow-lg"
              >
                Get Your Free Quote →
              </a>
              <a
                href="#services"
                className="bg-white/15 backdrop-blur-sm border-2 border-white text-white px-10 py-4 rounded-md font-bold text-base text-center whitespace-nowrap hover:bg-white hover:text-[#0f0f0f] transition-all cursor-pointer"
              >
                Explore Services
              </a>
            </div>

            {/* CTA context text block */}
            <div className="inline-block bg-black/50 backdrop-blur-sm border border-white/15 rounded-lg px-6 py-4 mb-10">
              <p className="text-white font-bold text-sm mb-0.5" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.8)' }}>
                Fast Quotes — Same-Day Response Available
              </p>
              <p className="text-[#70DC28] font-bold text-sm tracking-wide">
                FREE, NO OBLIGATION ESTIMATE
              </p>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-5">
              {[
                { icon: 'ri-shield-check-line', label: 'Careful Item Handling' },
                { icon: 'ri-star-fill', label: 'Customer-Focused Service' },
                { icon: 'ri-archive-line', label: 'Packing & Loading Help' },
                { icon: 'ri-road-map-line', label: 'Local Moving Support' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <i className={`${item.icon} text-[#70DC28] text-sm`}></i>
                  </div>
                  <span className="text-white text-sm font-semibold" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.8)' }}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 border border-white/30 rounded-full flex items-start justify-center pt-1.5">
          <div className="w-0.5 h-2 bg-[#70DC28] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
