const photos = [
  {
    src: 'https://readdy.ai/api/search-image?query=Professional%20moving%20truck%20being%20loaded%20outside%20beautiful%20Florida%20home%2C%20uniformed%20movers%20carrying%20furniture%20boxes%2C%20palm%20trees%20and%20bright%20blue%20sky%2C%20residential%20moving%20day%20scene%2C%20photorealistic%20commercial%20photography%2C%20wide%20angle%20action%20shot%2C%20sunny%20warm%20day&width=800&height=600&seq=gal-01&orientation=landscape',
    label: 'Local Moving',
    span: 'col-span-2 row-span-2',
    h: 'h-full',
  },
  {
    src: 'https://readdy.ai/api/search-image?query=Professional%20moving%20company%20team%20carrying%20and%20loading%20boxes%20into%20a%20moving%20truck%2C%20two%20movers%20in%20uniforms%2C%20Florida%20neighborhood%20background%2C%20daytime%20action%20photography%2C%20photorealistic%20moving%20day%2C%20warm%20sunlight&width=400&height=300&seq=gal-02&orientation=landscape',
    label: 'Residential Moves',
    span: 'col-span-1',
    h: 'h-full',
  },
  {
    src: 'https://readdy.ai/api/search-image?query=Two%20professional%20piano%20movers%20using%20a%20piano%20dolly%20board%20to%20carefully%20move%20an%20upright%20piano%20through%20a%20hallway%2C%20wearing%20professional%20uniforms%2C%20careful%20handling%2C%20home%20interior%2C%20photorealistic%20moving%20service%20photography&width=400&height=300&seq=gal-03&orientation=landscape',
    label: 'Piano Moving',
    span: 'col-span-1',
    h: 'h-full',
  },
  {
    src: 'https://readdy.ai/api/search-image?query=Professional%20movers%20carefully%20packing%20and%20wrapping%20household%20items%20and%20dishes%20in%20boxes%20with%20bubble%20wrap%20inside%20a%20living%20room%2C%20moving%20supplies%20and%20labeled%20boxes%20surrounding%20them%2C%20photorealistic%20moving%20day%20packing%20service&width=400&height=300&seq=gal-04&orientation=landscape',
    label: 'Packing Services',
    span: 'col-span-1',
    h: 'h-full',
  },
  {
    src: 'https://readdy.ai/api/search-image?query=Commercial%20office%20move%20with%20professional%20movers%20carrying%20office%20furniture%20and%20boxes%20through%20a%20modern%20office%20building%2C%20wheeling%20office%20chairs%20and%20desks%20on%20dollies%2C%20business%20relocation%2C%20photorealistic%2C%20professional%20moving%20service&width=400&height=300&seq=gal-05&orientation=landscape',
    label: 'Commercial Moves',
    span: 'col-span-1',
    h: 'h-full',
  },
  {
    src: 'https://readdy.ai/api/search-image?query=Large%20professional%20moving%20truck%20driving%20on%20a%20Florida%20highway%20with%20palm%20trees%20alongside%20the%20road%2C%20blue%20sky%20with%20clouds%2C%20motion%20blur%20on%20background%20suggesting%20travel%2C%20long%20distance%20moving%20truck%2C%20cinematic%20highway%20shot%2C%20photorealistic%20commercial%20photography&width=800&height=300&seq=gal-06&orientation=landscape',
    label: 'Long Distance Moving',
    span: 'col-span-2',
    h: 'h-full',
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-[#70DC28] font-bebas tracking-[0.25em] text-sm mb-2">OUR WORK</p>
            <h2 className="font-bebas text-5xl lg:text-7xl text-[#0f0f0f] leading-[0.9]">
              BEAST MODE
              <br />
              <span className="text-[#70DC28]">IN ACTION</span>
            </h2>
          </div>
          <p className="text-neutral-500 text-sm max-w-sm leading-relaxed">
            Real moves. Real results. From packing and loading to specialty moves — see the Beast
            Mode Movers difference across Brevard County, Florida.
          </p>
        </div>

        {/* Asymmetric photo grid */}
        <div className="grid grid-cols-4 grid-rows-3 gap-3 h-[640px]">
          {/* Large hero image */}
          <div className="col-span-2 row-span-2 relative overflow-hidden rounded-xl group cursor-pointer">
            <img
              src={photos[0].src}
              alt={photos[0].label}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5">
              <span className="bg-[#70DC28] text-[#0f0f0f] px-3 py-1 rounded-md text-xs font-black">
                {photos[0].label}
              </span>
            </div>
          </div>

          {/* Top right 2 cells */}
          {photos.slice(1, 3).map((p) => (
            <div key={p.label} className="col-span-1 row-span-1 relative overflow-hidden rounded-xl group cursor-pointer">
              <img
                src={p.src}
                alt={p.label}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3">
                <span className="bg-white/15 backdrop-blur-sm text-white px-2.5 py-1 rounded-md text-[10px] font-bold border border-white/20">
                  {p.label}
                </span>
              </div>
            </div>
          ))}

          {/* Middle right 2 cells */}
          {photos.slice(3, 5).map((p) => (
            <div key={p.label} className="col-span-1 row-span-1 relative overflow-hidden rounded-xl group cursor-pointer">
              <img
                src={p.src}
                alt={p.label}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3">
                <span className="bg-white/15 backdrop-blur-sm text-white px-2.5 py-1 rounded-md text-[10px] font-bold border border-white/20">
                  {p.label}
                </span>
              </div>
            </div>
          ))}

          {/* Full-width bottom banner */}
          <div className="col-span-4 row-span-1 relative overflow-hidden rounded-xl group cursor-pointer">
            <img
              src={photos[5].src}
              alt={photos[5].label}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />
            <div className="absolute left-6 top-1/2 -translate-y-1/2 flex items-center gap-4">
              <span className="bg-[#70DC28] text-[#0f0f0f] px-4 py-1.5 rounded-md text-sm font-black">
                {photos[5].label}
              </span>
              <span className="text-white/70 text-sm">Serving all of Florida &amp; beyond</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
