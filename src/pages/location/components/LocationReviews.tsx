export default function LocationReviews() {
  return (
    <section className="py-20 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-10">
          <p className="text-[#70DC28] font-bebas tracking-[0.3em] text-sm mb-2">MOVING REQUEST DETAILS</p>
          <h2 className="font-bebas text-5xl lg:text-6xl text-white leading-tight">WHAT TO SHARE FOR <span className="text-[#70DC28]">LOCAL MOVES</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Apartment Access', text: 'Include stairs, elevators, loading zones, parking rules, and any building move-in requirements.' },
            { title: 'Furniture and Equipment', text: 'List bulky furniture, appliances, office items, exercise equipment, and anything that may need extra planning.' },
            { title: 'Packing and Loading', text: 'Tell the team whether you need packing, loading-only help, unloading support, or a full moving request.' },
          ].map((item) => (
            <div key={item.title} className="bg-white/5 border border-white/10 rounded-lg p-7">
              <div className="w-10 h-10 flex items-center justify-center bg-[#70DC28]/10 rounded-md mb-4">
                <i className="ri-file-list-3-line text-[#70DC28] text-lg"></i>
              </div>
              <h3 className="font-bebas text-2xl text-white mb-3">{item.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
