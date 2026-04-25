export default function AboutTestimonials() {
  return (
    <section className="py-20 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#70DC28] font-bebas tracking-[0.3em] text-sm mb-3">HOW WE WORK</p>
            <h2 className="font-bebas text-5xl lg:text-6xl text-white leading-tight mb-8">
              CLEAR PLANNING FOR<br />
              <span className="text-[#70DC28]">EVERY MOVING REQUEST</span>
            </h2>
            <ul className="flex flex-col gap-5">
              {[
                { icon: 'ri-file-list-3-line', title: 'Quote-Based Move Details', desc: 'Customers can share move date, addresses, home type, business type, large items, and access notes through the quote form.' },
                { icon: 'ri-archive-2-line', title: 'Packing and Loading Options', desc: 'Packing, loading, unloading, and partial moving support can be discussed based on the needs of the move.' },
                { icon: 'ri-tools-line', title: 'Furniture and Equipment Notes', desc: 'Bulky furniture, office items, appliances, and equipment should be listed so the team can review the scope.' },
                { icon: 'ri-customer-service-2-line', title: 'Availability Follow-Up', desc: 'The moving team can follow up about service area coverage, availability, and next steps after the request is submitted.' },
              ].map((item) => (
                <li key={item.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-[#70DC28]/10 rounded-md flex-shrink-0">
                    <i className={`${item.icon} text-[#70DC28] text-lg`}></i>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm mb-1">{item.title}</p>
                    <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-lg p-8">
            <p className="text-[#70DC28] font-bebas tracking-[0.2em] text-sm mb-5">SERVICE REQUESTS</p>
            <div className="flex flex-col gap-5">
              {[
                { title: 'Residential and Apartment Moving', text: 'Share your home size, building access, stairs, elevators, parking notes, and large items.' },
                { title: 'Commercial Moving', text: 'Describe office furniture, boxed supplies, workstations, equipment, and building access requirements.' },
                { title: 'Packing, Loading, and Furniture Help', text: 'Tell the team whether you need packing, loading-only help, unloading support, or help with bulky items.' },
              ].map((item) => (
                <div key={item.title} className="border-b border-white/10 pb-5 last:border-0 last:pb-0">
                  <p className="text-white font-semibold text-sm mb-2">{item.title}</p>
                  <p className="text-white/60 text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
