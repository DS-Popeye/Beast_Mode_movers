const reasons = [
  {
    icon: 'ri-shield-star-line',
    title: 'Fully Licensed & Insured',
    desc: 'Your belongings are protected from pickup to delivery. We carry all required Florida moving licenses and complete insurance coverage.',
  },
  {
    icon: 'ri-music-2-line',
    title: 'Piano & Hot Tub Specialists',
    desc: 'One of the few Florida movers trained and equipped specifically for piano moves, hot tub relocations, and spa moves.',
  },
  {
    icon: 'ri-road-map-line',
    title: 'Local & Long Distance Moves',
    desc: "Whether moving across Melbourne or across Florida, we handle short and long-haul relocations with equal professionalism.",
  },
  {
    icon: 'ri-time-line',
    title: 'On-Time, Every Time',
    desc: 'We respect your schedule. Our team arrives precisely on time and works efficiently to deliver within the estimated window.',
  },
  {
    icon: 'ri-archive-2-line',
    title: 'Full Packing Services',
    desc: 'We provide all materials — boxes, tape, bubble wrap, furniture pads — and pack everything for you.',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="whyus" className="py-28 bg-[#0f0f0f] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Real image with overlay card */}
          <div className="relative h-[560px]">
            <div className="absolute inset-0 rounded-xl overflow-hidden">
              <img
                src="https://readdy.ai/api/search-image?query=Professional%20movers%20in%20dark%20uniforms%20carefully%20wrapping%20and%20protecting%20expensive%20furniture%20with%20moving%20blankets%20and%20bubble%20wrap%2C%20professional%20team%20working%20inside%20a%20truck%20or%20home%2C%20boxes%20neatly%20stacked%2C%20premium%20moving%20service%20quality%2C%20photorealistic%2C%20warm%20interior%20lighting%2C%20high%20contrast%20commercial%20photography&width=800&height=1000&seq=why-choose-01&orientation=portrait"
                alt="Professional movers wrapping furniture with protective blankets"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </div>

            {/* Overlay content at bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="text-[#70DC28] font-bebas tracking-[0.25em] text-xs mb-2">WHY BEAST MODE</p>
              <h2 className="font-bebas text-5xl text-white leading-tight mb-4">
                MOVING DONE RIGHT,
                <br />
                EVERY SINGLE TIME
              </h2>
              <a
                href="#contact"
                className="inline-block bg-[#70DC28] text-[#0f0f0f] px-7 py-3 rounded-md font-black text-sm whitespace-nowrap hover:bg-[#58C016] transition-colors cursor-pointer"
              >
                Get Your Free Quote →
              </a>
            </div>

            {/* Floating rating badge */}
            <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-xl">
              <p className="font-bebas text-5xl text-[#70DC28] leading-none">5★</p>
              <p className="text-white font-semibold text-sm mt-1">Rated Movers</p>
              <p className="text-white/50 text-xs">Brevard County, FL</p>
            </div>
          </div>

          {/* Right: Reasons */}
          <div className="flex flex-col gap-7">
            <div className="mb-2">
              <p className="text-[#70DC28] font-bebas tracking-[0.25em] text-sm mb-2">OUR DIFFERENCE</p>
              <h2 className="font-bebas text-4xl lg:text-5xl text-white leading-tight">
                5 REASONS FLORIDA
                <br />
                TRUSTS BEAST MODE
              </h2>
            </div>
            {reasons.map((item, i) => (
              <div key={i} className="flex gap-5 group">
                <div className="w-12 h-12 flex items-center justify-center bg-[#70DC28]/10 border border-[#70DC28]/20 rounded-lg flex-shrink-0 group-hover:bg-[#70DC28] group-hover:border-[#70DC28] transition-all">
                  <i className={`${item.icon} text-[#70DC28] text-xl group-hover:text-[#0f0f0f] transition-colors`}></i>
                </div>
                <div>
                  <h3 className="font-bold text-white text-[15px] mb-1">{item.title}</h3>
                  <p className="text-white/45 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}

            {/* CTA after why choose us */}
            <div className="border-t border-white/10 pt-6 flex items-center justify-between gap-4">
              <p className="text-white/45 text-sm">Ready to experience the Beast Mode difference?</p>
              <a
                href="#contact"
                className="bg-white/10 border border-white/20 text-white px-5 py-2.5 rounded-md font-bold text-sm whitespace-nowrap hover:bg-[#70DC28] hover:text-[#0f0f0f] hover:border-[#70DC28] transition-all cursor-pointer flex-shrink-0"
              >
                Start Your Move
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
