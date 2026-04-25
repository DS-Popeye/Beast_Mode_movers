const trustStats = [
  { num: '500+', label: 'Moves Completed' },
  { num: '5★', label: 'Average Rating' },
  { num: '6', label: 'Core Services' },
  { num: '6+', label: 'Years Serving Brevard' },
];

export default function AboutStats() {
  return (
    <section className="py-12 bg-[#70DC28]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {trustStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-bebas text-5xl text-[#0f0f0f] leading-none">{stat.num}</p>
              <p className="text-[#0f0f0f]/65 text-sm font-semibold mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
