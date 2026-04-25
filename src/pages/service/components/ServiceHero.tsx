import { Link } from 'react-router-dom';

export default function ServiceHero() {
  return (
    <section className="relative pt-[76px] overflow-hidden bg-[#0f0f0f]">
      <div className="absolute left-0 top-0 h-full w-1 bg-[#70DC28]" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full mb-6">
              <div className="w-3 h-3 flex items-center justify-center">
                <i className="ri-map-pin-fill text-[#70DC28] text-xs"></i>
              </div>
              <span className="text-white text-xs font-bold tracking-widest uppercase">Brevard County, Florida</span>
            </div>
            <h1 className="font-bebas leading-[0.9] mb-6">
              <span className="block text-[3.5rem] lg:text-[5rem] text-white">LOCAL MOVING</span>
              <span className="block text-[3.5rem] lg:text-[5rem] text-[#70DC28]">SERVICES IN</span>
              <span className="block text-[2.5rem] lg:text-[3.5rem] text-white/80">MELBOURNE, FL</span>
            </h1>
            <p className="text-white/70 text-base leading-relaxed max-w-lg mb-8">
              Trusted, licensed, and fully insured local movers serving Melbourne, Titusville, Rockledge, and all of Brevard County. Transparent hourly rates, same-day availability, and zero hidden fees.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/#contact"
                className="bg-[#70DC28] text-[#0f0f0f] px-8 py-4 rounded-md font-black text-sm text-center whitespace-nowrap hover:bg-[#58C016] transition-colors cursor-pointer"
              >
                Get Your Free Moving Quote →
              </Link>
              <a
                href="#contact"
                className="bg-white/10 border border-white/30 text-white px-8 py-4 rounded-md font-bold text-sm text-center whitespace-nowrap hover:bg-white/20 transition-colors cursor-pointer"
              >
                Call For Availability
              </a>
            </div>
            <div className="flex flex-wrap gap-5 mt-8">
              {[
                { icon: 'ri-shield-check-line', label: 'Licensed & Insured' },
                { icon: 'ri-time-line', label: 'Same-Day Available' },
                { icon: 'ri-money-dollar-circle-line', label: 'No Hidden Fees' },
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
                src="https://readdy.ai/api/search-image?query=Two%20professional%20movers%20in%20dark%20uniforms%20carefully%20loading%20neatly%20wrapped%20furniture%20and%20labeled%20cardboard%20boxes%20onto%20a%20large%20clean%20white%20moving%20truck%20parked%20outside%20a%20Florida%20home%2C%20sunny%20day%2C%20organized%20professional%20moving%20scene%2C%20photorealistic%20commercial%20photography%2C%20high%20resolution%2C%20warm%20natural%20lighting%2C%20no%20logos%2C%20no%20branding%2C%20no%20text%20on%20clothing%20or%20truck&width=800&height=600&seq=svc-hero-local-v1&orientation=landscape"
                alt="Professional local movers in Brevard County Florida"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-[#70DC28] text-[#0f0f0f] px-6 py-4 rounded-lg">
              <p className="font-bebas text-3xl leading-none">5-STAR</p>
              <p className="text-[#0f0f0f]/70 text-xs font-semibold mt-0.5">Rated Locally</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
