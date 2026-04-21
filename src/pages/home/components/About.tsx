const stats = [
  { value: '14+', label: 'Cities Served' },
  { value: '100%', label: 'Insured Moves' },
  { value: '5★', label: 'Rated Service' },
  { value: 'FL', label: 'Licensed Movers' },
];

export default function About() {
  return (
    <section id="about" className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <p className="text-[#70DC28] font-bebas tracking-[0.3em] text-sm mb-3">ABOUT US</p>
            <h2 className="font-bebas text-5xl lg:text-7xl text-[#0f0f0f] leading-[0.9] mb-8">
              YOUR FLORIDA
              <br />
              <span className="text-[#70DC28]">MOVING TEAM</span>
            </h2>
            <p className="text-neutral-600 text-base leading-relaxed mb-5">
              Beast Mode Movers is a Florida-based moving company proudly serving Melbourne,
              Titusville, Rockledge, and the greater Brevard County area. We built this company on
              one belief: moving should be stress-free.
            </p>
            <p className="text-neutral-600 text-base leading-relaxed mb-5">
              We specialize in residential movers, commercial movers, and specialty moves — including
              piano moves, hot tub moves, and spa relocations. Our team is trained, equipped, and
              ready for every challenge.
            </p>
            <p className="text-neutral-600 text-base leading-relaxed mb-10">
              Whether you&apos;re a family relocating across town or a business moving your entire
              office, Beast Mode Movers brings the professionalism, care, and strength the job
              demands. Trusted movers in Florida — that&apos;s our standard.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-4 gap-4 border-t border-neutral-100 pt-8">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="font-bebas text-4xl text-[#70DC28] leading-none">{s.value}</p>
                  <p className="text-neutral-500 text-xs mt-1 font-medium leading-tight">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Real team photo + floating cards */}
          <div className="relative h-[520px]">
            {/* Main team photo */}
            <div className="absolute top-0 left-0 right-12 h-80 rounded-xl overflow-hidden">
              <img
                src="https://readdy.ai/api/search-image?query=Smiling%20diverse%20professional%20moving%20crew%20team%20standing%20confidently%20in%20front%20of%20a%20large%20moving%20truck%2C%20Florida%20residential%20neighborhood%20with%20palm%20trees%20in%20background%2C%20team%20wearing%20matching%20dark%20uniforms%2C%20bright%20sunny%20Florida%20day%2C%20photorealistic%20commercial%20photography%2C%20warm%20approachable%20professional%2C%20group%20portrait&width=800&height=500&seq=about-team-01&orientation=landscape"
                alt="Beast Mode Movers professional team"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Bottom floating cards */}
            <div className="absolute bottom-0 left-6 right-0 flex gap-4">
              <div className="bg-[#0f0f0f] p-6 rounded-xl flex-1">
                <div className="w-8 h-8 flex items-center justify-center mb-3">
                  <i className="ri-truck-line text-[#70DC28] text-xl"></i>
                </div>
                <p className="font-bebas text-2xl text-white leading-tight">LOCAL MOVERS IN BREVARD COUNTY</p>
              </div>
              <div className="bg-[#70DC28] p-6 rounded-xl w-36">
                <div className="w-8 h-8 flex items-center justify-center mb-3">
                  <i className="ri-music-2-line text-[#0f0f0f] text-xl"></i>
                </div>
                <p className="font-bebas text-xl text-[#0f0f0f] leading-tight">PIANO SPECIALISTS</p>
              </div>
            </div>

            {/* Offset badge top-right */}
            <div className="absolute top-4 right-0 bg-[#70DC28] p-5 rounded-xl w-28 text-center">
              <p className="font-bebas text-3xl text-[#0f0f0f] leading-none">FL</p>
              <p className="text-[#0f0f0f] font-black text-[10px] mt-1">LICENSED</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
