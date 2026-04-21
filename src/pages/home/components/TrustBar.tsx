const items = [
  { icon: 'ri-shield-check-line', label: 'Licensed & Insured' },
  { icon: 'ri-home-2-line', label: 'Residential Movers' },
  { icon: 'ri-building-2-line', label: 'Commercial Movers' },
  { icon: 'ri-road-map-line', label: 'Local & Long Distance' },
  { icon: 'ri-music-2-line', label: 'Piano Specialists' },
  { icon: 'ri-drop-line', label: 'Hot Tub & Spa Moves' },
  { icon: 'ri-map-pin-2-line', label: 'Serving Brevard County FL' },
  { icon: 'ri-archive-2-line', label: 'Full Packing Services' },
  { icon: 'ri-star-fill', label: '5-Star Rated' },
  { icon: 'ri-truck-line', label: 'Professional Fleet' },
];

export default function TrustBar() {
  return (
    <section className="bg-[#70DC28] py-4 overflow-hidden relative">
      <style>{`
        @keyframes trust-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .trust-track {
          animation: trust-scroll 28s linear infinite;
          display: flex;
          width: max-content;
        }
        .trust-track:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div className="trust-track">
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-3 whitespace-nowrap px-8">
            <div className="w-4 h-4 flex items-center justify-center">
              <i className={`${item.icon} text-[#0f0f0f] text-base`}></i>
            </div>
            <span className="font-black text-[#0f0f0f] text-sm tracking-wide">{item.label}</span>
            <span className="text-[#0f0f0f]/40 font-bold text-lg ml-4">✦</span>
          </div>
        ))}
      </div>
    </section>
  );
}
