const whyItems = [
  { icon: 'ri-map-pin-2-line', title: 'Locally Rooted', desc: 'We live and work in Brevard County. We know the roads, communities, and neighborhoods we serve.' },
  { icon: 'ri-award-line', title: 'Proven Track Record', desc: 'Hundreds of successful moves across Melbourne, Titusville, Rockledge, and beyond. Our reviews speak for themselves.' },
  { icon: 'ri-group-line', title: 'Dedicated Crews', desc: "Every crew is assigned to your move, not split between jobs. You get our full focus, start to finish." },
  { icon: 'ri-tools-line', title: 'Fully Equipped', desc: "We bring every tool, blanket, strap, and dolly needed. You don't need to supply a single thing." },
];

export default function AboutWhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-14">
          <p className="text-[#70DC28] font-bebas tracking-[0.3em] text-sm mb-2">THE DIFFERENCE</p>
          <h2 className="font-bebas text-5xl lg:text-6xl text-[#0f0f0f] leading-tight">
            WHY CHOOSE<br />
            <span className="text-[#70DC28]">BEAST MODE MOVERS</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyItems.map((item) => (
            <div key={item.title} className="bg-neutral-50 rounded-lg p-7 border border-neutral-200">
              <div className="w-10 h-10 flex items-center justify-center bg-[#70DC28]/10 rounded-md mb-5">
                <i className={`${item.icon} text-[#70DC28] text-xl`}></i>
              </div>
              <h3 className="font-bebas text-2xl text-[#0f0f0f] mb-3">{item.title}</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
