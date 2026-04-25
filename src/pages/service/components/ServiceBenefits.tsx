const benefits = [
  {
    icon: 'ri-star-fill',
    title: 'Local Service Focus',
    desc: 'Customers can request moving support for the Florida service areas listed on the website and confirm exact availability with the team.',
  },
  {
    icon: 'ri-shield-check-line',
    title: 'Clear Move Planning',
    desc: 'Move details, access notes, large items, and packing needs can be shared in advance so the team understands the scope.',
  },
  {
    icon: 'ri-time-line',
    title: 'On-Time, Every Time',
    desc: 'We show up when we say we will. Our crews are scheduled, confirmed, and on-site at the agreed time — no waiting, no guessing.',
  },
  {
    icon: 'ri-money-dollar-circle-line',
    title: 'Transparent Pricing',
    desc: 'Your quote is your price. No hidden stair fees, fuel charges, or last-minute add-ons. Know exactly what you\'re paying before the truck arrives.',
  },
];

export default function ServiceBenefits() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-14">
          <p className="text-[#70DC28] font-bebas tracking-[0.3em] text-sm mb-2">WHY CHOOSE US</p>
          <h2 className="font-bebas text-5xl lg:text-6xl text-[#0f0f0f] leading-tight">
            THE BEAST MODE<br />
            <span className="text-[#70DC28]">DIFFERENCE</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b) => (
            <div key={b.title} className="bg-neutral-50 rounded-lg p-7 border border-neutral-200">
              <div className="w-10 h-10 flex items-center justify-center mb-4">
                <i className={`${b.icon} text-[#70DC28] text-2xl`}></i>
              </div>
              <h3 className="font-bebas text-2xl text-[#0f0f0f] mb-3">{b.title}</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
