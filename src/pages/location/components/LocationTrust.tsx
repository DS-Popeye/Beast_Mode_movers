const trustItems = [
  { icon: 'ri-star-fill', label: '5-Star Rated in Melbourne', desc: 'Consistently top-rated by Melbourne, FL homeowners and businesses across Google.' },
  { icon: 'ri-shield-check-line', label: 'Florida DOT Licensed', desc: 'Fully licensed and insured to operate as a professional moving company in Florida.' },
  { icon: 'ri-map-pin-2-line', label: 'Locally Based in Brevard', desc: 'We operate out of Brevard County — we know Melbourne streets, neighborhoods, and access points.' },
  { icon: 'ri-time-line', label: 'On-Time Guarantee', desc: 'We confirm your move 24 hours in advance and arrive within your scheduled window — every time.' },
];

export default function LocationTrust() {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-14">
          <p className="text-[#70DC28] font-bebas tracking-[0.3em] text-sm mb-3">WHY MELBOURNE TRUSTS US</p>
          <h2 className="font-bebas text-5xl lg:text-6xl text-[#0f0f0f] leading-tight">
            LOCALLY KNOWN &amp;<br />
            <span className="text-[#70DC28]">LOCALLY TRUSTED</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item) => (
            <div key={item.label} className="bg-white rounded-lg p-7 border border-neutral-200">
              <div className="w-10 h-10 flex items-center justify-center bg-[#70DC28]/10 rounded-md mb-5">
                <i className={`${item.icon} text-[#70DC28] text-xl`}></i>
              </div>
              <h3 className="font-bebas text-xl text-[#0f0f0f] mb-2">{item.label}</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
