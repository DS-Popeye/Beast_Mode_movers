import { useState } from 'react';

const reviews = [
  {
    name: 'James F.',
    location: 'Melbourne, FL',
    stars: 5,
    text: 'Incredible team. They moved my piano and a hot tub on the same day. No damage, no delays. These guys are the real deal. Beast Mode Movers earned every single star.',
    role: 'Homeowner',
    initials: 'JF',
  },
  {
    name: 'Maria L.',
    location: 'Titusville, FL',
    stars: 5,
    text: "Fast, careful, and professional. My family's move from Titusville to Rockledge went completely smoothly. They wrapped everything beautifully and nothing was scratched.",
    role: 'Residential Client',
    initials: 'ML',
  },
  {
    name: 'Derek R.',
    location: 'Rockledge, FL',
    stars: 5,
    text: 'I was skeptical at first, but Beast Mode Movers exceeded every expectation. Our entire office in Rockledge was fully moved and set up in a single day. Unreal.',
    role: 'Business Owner',
    initials: 'DR',
  },
  {
    name: 'Amy T.',
    location: 'Palm Bay, FL',
    stars: 5,
    text: 'They packed everything themselves and not one item was damaged. The care and efficiency they brought to our residential move was outstanding. Highly recommend.',
    role: 'Homeowner',
    initials: 'AT',
  },
  {
    name: 'Carlos M.',
    location: 'Cocoa Beach, FL',
    stars: 5,
    text: 'Best movers in Brevard County, period. On time, professional, and incredibly strong. They handled our oversized furniture like it was nothing. Will use again.',
    role: 'Repeat Client',
    initials: 'CM',
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section id="reviews" className="py-28 bg-[#0f0f0f] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-[#70DC28] font-bebas tracking-[0.25em] text-sm mb-2">TESTIMONIALS</p>
            <h2 className="font-bebas text-5xl lg:text-7xl text-white leading-[0.9]">
              WHAT FLORIDA SAYS
              <br />
              <span className="text-[#70DC28]">ABOUT US</span>
            </h2>
          </div>
          <div className="flex flex-col items-start lg:items-end gap-3">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-star-fill text-[#70DC28] text-base"></i>
                </div>
              ))}
              <span className="text-white/60 text-sm ml-2">5.0 average rating</span>
            </div>
            <p className="text-white/35 text-xs">Trusted by families & businesses across Brevard County, FL</p>
          </div>
        </div>

        {/* Cards — all 5 displayed */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
          {reviews.slice(0, 3).map((r, i) => (
            <TestimonialCard key={r.name} r={r} isActive={i === active % 3} onClick={() => setActive(i)} />
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {reviews.slice(3, 5).map((r, i) => (
            <TestimonialCard key={r.name} r={r} isActive={false} onClick={() => {}} />
          ))}
        </div>

        {/* Near testimonials CTA */}
        <div className="mt-14 border border-[#70DC28]/20 rounded-xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6 bg-[#70DC28]/5">
          <div>
            <p className="text-white font-bold text-lg mb-1">Join hundreds of satisfied Florida customers</p>
            <p className="text-white/45 text-sm">Get your free no-obligation moving quote today — fast response, zero pressure.</p>
          </div>
          <a
            href="#contact"
            className="bg-[#70DC28] text-[#0f0f0f] px-8 py-3.5 rounded-md font-black text-sm whitespace-nowrap hover:bg-[#58C016] transition-colors cursor-pointer flex-shrink-0"
          >
            Get a Free Quote →
          </a>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ r, isActive, onClick }: { r: typeof reviews[0]; isActive: boolean; onClick: () => void }) {
  return (
    <div
      className={`p-7 rounded-xl border transition-all cursor-pointer ${
        isActive
          ? 'bg-[#70DC28] border-[#70DC28]'
          : 'bg-white/4 border-white/8 hover:border-white/20 hover:bg-white/6'
      }`}
      onClick={onClick}
    >
      {/* Stars */}
      <div className="flex gap-1 mb-5">
        {Array.from({ length: r.stars }).map((_, si) => (
          <div key={si} className="w-4 h-4 flex items-center justify-center">
            <i className={`ri-star-fill text-sm ${isActive ? 'text-[#0f0f0f]' : 'text-[#70DC28]'}`}></i>
          </div>
        ))}
      </div>

      {/* Quote mark */}
      <div className="w-6 h-6 flex items-center justify-center mb-3">
        <i className={`ri-double-quotes-l text-2xl ${isActive ? 'text-[#0f0f0f]/30' : 'text-[#70DC28]/30'}`}></i>
      </div>

      <p className={`text-sm leading-relaxed mb-6 ${isActive ? 'text-[#0f0f0f]' : 'text-white/70'}`}>
        {r.text}
      </p>

      <div className="flex items-center gap-3">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-sm flex-shrink-0 ${
            isActive ? 'bg-[#0f0f0f] text-[#70DC28]' : 'bg-white/10 text-white'
          }`}
        >
          {r.initials}
        </div>
        <div>
          <p className={`font-bold text-sm ${isActive ? 'text-[#0f0f0f]' : 'text-white'}`}>{r.name}</p>
          <p className={`text-xs ${isActive ? 'text-[#0f0f0f]/55' : 'text-white/35'}`}>{r.location} · {r.role}</p>
        </div>
      </div>
    </div>
  );
}
