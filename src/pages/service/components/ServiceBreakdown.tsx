const breakdown = [
  {
    icon: 'ri-truck-line',
    title: 'Equipment & Trucks',
    items: [
      'Large commercial moving trucks',
      'Moving dollies, hand trucks, appliance straps',
      'Furniture blankets and stretch wrap — all included',
      'Floor runners and door frame protectors',
    ],
  },
  {
    icon: 'ri-team-line',
    title: 'Crew & Labor',
    items: [
      'Minimum 2-mover professional teams',
      'Experienced, background-checked staff',
      'Uniformed, punctual, and communicative',
      'Available for load-only or unload-only jobs',
    ],
  },
  {
    icon: 'ri-archive-2-line',
    title: 'Packing Support',
    items: [
      'Full or partial packing services available',
      'All packing materials supplied on request',
      'Fragile and artwork specialty wrapping',
      'Labeled, organized boxes for easy unpacking',
    ],
  },
  {
    icon: 'ri-shield-check-line',
    title: 'Protection & Insurance',
    items: [
      'Licensed mover under Florida DOT',
      'Full liability insurance coverage',
      'Item-level damage protection',
      'Transparent claims process if needed',
    ],
  },
  {
    icon: 'ri-calendar-check-line',
    title: 'Scheduling & Flexibility',
    items: [
      'Same-day and next-day availability',
      'Weekend and evening moves',
      'Short-notice moves handled',
      'Flexible start times to fit your schedule',
    ],
  },
  {
    icon: 'ri-price-tag-3-line',
    title: 'Pricing & Quotes',
    items: [
      'Free, no-obligation estimates',
      'Transparent hourly rates — no hidden charges',
      'Flat-rate options for predictable billing',
      'No fuel surcharges or extra stair fees',
    ],
  },
];

export default function ServiceBreakdown() {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-14">
          <p className="text-[#70DC28] font-bebas tracking-[0.3em] text-sm mb-2">WHAT&apos;S INCLUDED</p>
          <h2 className="font-bebas text-5xl lg:text-6xl text-[#0f0f0f] leading-tight">
            EVERYTHING COVERED IN<br />
            <span className="text-[#70DC28]">YOUR LOCAL MOVE</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {breakdown.map((block) => (
            <div key={block.title} className="bg-white rounded-lg p-7 border border-neutral-200">
              <div className="w-10 h-10 flex items-center justify-center bg-[#70DC28]/10 rounded-md mb-5">
                <i className={`${block.icon} text-[#70DC28] text-xl`}></i>
              </div>
              <h3 className="font-bebas text-2xl text-[#0f0f0f] mb-4">{block.title}</h3>
              <ul className="flex flex-col gap-3">
                {block.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <div className="w-4 h-4 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <i className="ri-check-line text-[#70DC28] text-sm"></i>
                    </div>
                    <span className="text-neutral-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
