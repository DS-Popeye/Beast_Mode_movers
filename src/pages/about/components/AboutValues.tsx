const values = [
  {
    icon: 'ri-heart-line',
    title: 'Care',
    desc: 'We treat every client\'s belongings as if they were our own. Careful handling isn\'t optional — it\'s our standard.',
  },
  {
    icon: 'ri-shield-check-line',
    title: 'Integrity',
    desc: 'Your quote is your price. No bait-and-switch. No hidden fees. We say what we mean and do what we say.',
  },
  {
    icon: 'ri-time-line',
    title: 'Reliability',
    desc: 'On-time arrival. Confirmed scheduling. Crews that show up fully equipped and ready to work from minute one.',
  },
  {
    icon: 'ri-trophy-line',
    title: 'Excellence',
    desc: 'We don\'t just move boxes — we deliver a stress-free experience from the first call to the final box placed.',
  },
];

export default function AboutValues() {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-14">
          <p className="text-[#70DC28] font-bebas tracking-[0.3em] text-sm mb-2">WHAT DRIVES US</p>
          <h2 className="font-bebas text-5xl lg:text-6xl text-[#0f0f0f] leading-tight">
            OUR MISSION &amp; <span className="text-[#70DC28]">CORE VALUES</span>
          </h2>
          <p className="text-neutral-500 text-sm max-w-lg mx-auto mt-4">
            Our mission is simple: make every move in Brevard County stress-free, safe, and exactly as promised.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => (
            <div key={v.title} className="bg-white rounded-lg p-7 border border-neutral-200 text-center">
              <div className="w-12 h-12 flex items-center justify-center bg-[#70DC28]/10 rounded-full mx-auto mb-5">
                <i className={`${v.icon} text-[#70DC28] text-2xl`}></i>
              </div>
              <h3 className="font-bebas text-2xl text-[#0f0f0f] mb-3">{v.title}</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
