import { Link } from 'react-router-dom';

const localServices = [
  { icon: 'ri-map-2-line', title: 'Local Moving', desc: 'Hourly-rate moves within Melbourne and surrounding Brevard cities. Full equipment, same-day availability.' },
  { icon: 'ri-home-2-line', title: 'Residential Moving', desc: 'Complete home relocations in Melbourne handled with care — from studio apartments to 4-bedroom homes.' },
  { icon: 'ri-building-2-line', title: 'Commercial Moving', desc: 'Office and business moves in Melbourne scheduled around your hours. Zero-downtime planning.' },
  { icon: 'ri-road-map-line', title: 'Long Distance Moving', desc: 'Moving out of Melbourne or relocating to Melbourne from across Florida. Flat-rate pricing, insured transport.' },
  { icon: 'ri-archive-2-line', title: 'Packing Services', desc: 'Full-service packing in Melbourne. We bring all materials, pack everything, label it — you just supervise.' },
  { icon: 'ri-music-2-line', title: 'Specialty Moves', desc: 'Piano moving, hot tub relocation, and oversized items in the Melbourne area. Specialist crew and equipment.' },
];

export default function LocationServices() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-14">
          <p className="text-[#70DC28] font-bebas tracking-[0.3em] text-sm mb-2">WHAT WE OFFER</p>
          <h2 className="font-bebas text-5xl lg:text-6xl text-[#0f0f0f] leading-tight">
            MOVING SERVICES IN<br />
            <span className="text-[#70DC28]">MELBOURNE, FLORIDA</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {localServices.map((svc) => (
            <div key={svc.title} className="bg-neutral-50 rounded-lg p-7 border border-neutral-200 hover:border-[#70DC28]/50 transition-colors group cursor-pointer">
              <div className="w-10 h-10 flex items-center justify-center bg-[#70DC28]/10 rounded-md mb-5 group-hover:bg-[#70DC28]/20 transition-colors">
                <i className={`${svc.icon} text-[#70DC28] text-xl`}></i>
              </div>
              <h3 className="font-bebas text-2xl text-[#0f0f0f] mb-3">{svc.title}</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">{svc.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 bg-[#0f0f0f] rounded-lg px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <p className="text-white font-bold text-base mb-0.5">Need a quote for your Melbourne move?</p>
            <p className="text-white/45 text-sm">Free estimate — same-day response for Melbourne area moves.</p>
          </div>
          <Link to="/#contact" className="bg-[#70DC28] text-[#0f0f0f] px-8 py-3.5 rounded-md font-black text-sm whitespace-nowrap hover:bg-[#58C016] transition-colors cursor-pointer flex-shrink-0">
            Get Melbourne Quote →
          </Link>
        </div>
      </div>
    </section>
  );
}
