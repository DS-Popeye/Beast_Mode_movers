import { Link } from 'react-router-dom';

export default function LocationHero() {
  return (
    <section className="relative pt-[76px] bg-[#0f0f0f] overflow-hidden">
      <div className="absolute left-0 top-0 h-full w-1 bg-[#70DC28]" />
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full mb-6">
              <div className="w-3 h-3 flex items-center justify-center">
                <i className="ri-map-pin-fill text-[#70DC28] text-xs"></i>
              </div>
              <span className="text-white text-xs font-bold tracking-widest uppercase">Brevard County, Florida</span>
            </div>
            <h1 className="font-bebas leading-[0.9] mb-6">
              <span className="block text-[3.5rem] lg:text-[5rem] text-white">MOVERS IN</span>
              <span className="block text-[3.5rem] lg:text-[5rem] text-[#70DC28]">MELBOURNE, FL</span>
              <span className="block text-[2.5rem] lg:text-[3.5rem] text-white/80">TRUSTED. LOCAL. 5-STAR.</span>
            </h1>
            <p className="text-white/70 text-base leading-relaxed max-w-lg mb-8">
              Beast Mode Movers provides local moving support in the listed Florida service areas. Customers can request help for residential, apartment, commercial, packing, loading, furniture, and equipment moves.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/#contact" className="bg-[#70DC28] text-[#0f0f0f] px-8 py-4 rounded-md font-black text-sm text-center whitespace-nowrap hover:bg-[#58C016] transition-colors cursor-pointer">
                Get Free Melbourne Quote →
              </Link>
              <a href="#contact" className="bg-white/10 border border-white/30 text-white px-8 py-4 rounded-md font-bold text-sm text-center whitespace-nowrap hover:bg-white/20 transition-colors cursor-pointer">
                Call Our Melbourne Team
              </a>
            </div>
            <div className="flex flex-wrap gap-5 mt-8">
              {[
                { icon: 'ri-shield-check-line', label: 'Careful Item Handling' },
                { icon: 'ri-star-fill', label: 'Customer-Focused Service' },
                { icon: 'ri-time-line', label: 'Availability by Quote' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <i className={`${item.icon} text-[#70DC28] text-sm`}></i>
                  </div>
                  <span className="text-white/70 text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="w-full h-[420px] rounded-lg overflow-hidden">
              <img
                src="https://readdy.ai/api/search-image?query=Aerial%20view%20of%20Melbourne%20Florida%20city%20skyline%20and%20residential%20neighborhoods%20near%20Indian%20River%20Lagoon%2C%20beautiful%20sunny%20Florida%20coastal%20city%2C%20palm%20trees%20lining%20streets%2C%20typical%20Florida%20suburban%20neighborhoods%20from%20above%2C%20professional%20real%20estate%20aerial%20photography%2C%20warm%20afternoon%20light%2C%20no%20text%20no%20overlays&width=800&height=600&seq=loc-melbourne-hero-v1&orientation=landscape"
                alt="Movers in Melbourne Florida — Brevard County"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-[#70DC28] text-[#0f0f0f] px-5 py-3 rounded-lg">
              <p className="font-bebas text-2xl leading-none">MELBOURNE, FL</p>
              <p className="text-[#0f0f0f]/65 text-xs font-semibold mt-0.5">Primary Service Area</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
