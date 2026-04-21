import { Link } from 'react-router-dom';

export default function AboutHero() {
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
              <span className="text-white text-xs font-bold tracking-widest uppercase">Melbourne, FL · Brevard County</span>
            </div>
            <h1 className="font-bebas leading-[0.9] mb-6">
              <span className="block text-[3.5rem] lg:text-[5rem] text-white">FLORIDA&apos;S MOST</span>
              <span className="block text-[3.5rem] lg:text-[5rem] text-[#70DC28]">TRUSTED MOVING</span>
              <span className="block text-[2.5rem] lg:text-[3.5rem] text-white/80">COMPANY</span>
            </h1>
            <p className="text-white/70 text-base leading-relaxed max-w-lg mb-8">
              Beast Mode Movers was built on one simple belief: moving should be stress-free. We&apos;re a locally owned, fully licensed and insured moving company serving all of Brevard County, FL.
            </p>
            <Link
              to="/#contact"
              className="inline-block bg-[#70DC28] text-[#0f0f0f] px-8 py-4 rounded-md font-black text-sm whitespace-nowrap hover:bg-[#58C016] transition-colors cursor-pointer"
            >
              Get a Free Quote →
            </Link>
          </div>
          <div className="w-full h-[420px] rounded-lg overflow-hidden">
            <img
              src="https://readdy.ai/api/search-image?query=Exterior%20view%20of%20a%20clean%20professional%20moving%20company%20warehouse%20or%20office%20building%20in%20Florida%20with%20organized%20moving%20trucks%20parked%20outside%2C%20sunny%20day%2C%20professional%20commercial%20property%2C%20no%20visible%20logos%20or%20text%20on%20building%2C%20clean%20and%20trustworthy%20business%20appearance%2C%20high%20resolution%20photography%2C%20commercial%20real%20estate%20photography%20style&width=800&height=600&seq=about-hero-v1&orientation=landscape"
              alt="Beast Mode Movers — About Our Moving Company"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
