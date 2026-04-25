import { Link } from 'react-router-dom';

const localServices = [
  { icon: 'ri-map-2-line', title: 'Local Moving', desc: 'Local moving support in listed Florida service areas. Contact the team to confirm availability for your exact pickup and delivery addresses.' },
  { icon: 'ri-home-2-line', title: 'Residential Moving', desc: 'Home and household moving support for customers planning a local move, apartment move, or move into a new residence.' },
  { icon: 'ri-building-2-line', title: 'Commercial Moving', desc: 'Business moving support for office furniture, boxed supplies, workstations, and other commercial moving needs.' },
  { icon: 'ri-road-map-line', title: 'Apartment Moving', desc: 'Apartment moving help for customers dealing with stairs, elevators, loading zones, parking rules, and building access windows.' },
  { icon: 'ri-archive-2-line', title: 'Packing and Loading', desc: 'Packing, loading, unloading, and partial moving support can be discussed during the quote process.' },
  { icon: 'ri-tools-line', title: 'Furniture and Equipment Moving', desc: 'Moving help for bulky furniture, office items, appliances, exercise equipment, and other heavy or awkward belongings.' },
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
            <p className="text-white font-bold text-base mb-0.5">Need to confirm service in your area?</p>
            <p className="text-white/45 text-sm">Review moving services or request availability for your exact pickup and delivery addresses.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link to="/services" className="bg-white text-[#0f0f0f] px-8 py-3.5 rounded-md font-black text-sm whitespace-nowrap hover:bg-neutral-100 transition-colors cursor-pointer flex-shrink-0">
              View Moving Services →
            </Link>
            <Link to="/#contact" className="bg-[#70DC28] text-[#0f0f0f] px-8 py-3.5 rounded-md font-black text-sm whitespace-nowrap hover:bg-[#58C016] transition-colors cursor-pointer flex-shrink-0">
              Request Area Availability →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
