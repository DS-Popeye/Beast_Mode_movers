const steps = [
  {
    num: '01',
    title: 'Request a Free Quote',
    desc: 'Fill out our online form or call us directly. Tell us your move date, origin, destination, and home size. We respond same day.',
  },
  {
    num: '02',
    title: 'Confirm Your Move',
    desc: 'We send a confirmed quote and lock in your move date. No deposit required for most local moves. Simple, fast, done.',
  },
  {
    num: '03',
    title: 'Crew Arrives On Time',
    desc: 'Our uniformed team arrives at the scheduled window, fully equipped with everything needed for your move.',
  },
  {
    num: '04',
    title: 'Load, Transport & Deliver',
    desc: 'Every item is padded, wrapped, and secured. We drive directly to your new home and place items exactly where you want them.',
  },
  {
    num: '05',
    title: "You're All Set",
    desc: 'Move complete. We do a final walkthrough with you, collect payment, and make sure you\'re 100% satisfied before we leave.',
  },
];

export default function ServiceProcess() {
  return (
    <section className="py-20 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-14">
          <p className="text-[#70DC28] font-bebas tracking-[0.3em] text-sm mb-2">HOW IT WORKS</p>
          <h2 className="font-bebas text-5xl lg:text-6xl text-white leading-tight">
            YOUR MOVE IN<br />
            <span className="text-[#70DC28]">5 SIMPLE STEPS</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
          {steps.map((step, idx) => (
            <div key={step.num} className="relative flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 flex items-center justify-center bg-[#70DC28] rounded-full flex-shrink-0">
                  <span className="font-bebas text-[#0f0f0f] text-lg leading-none">{step.num}</span>
                </div>
                {idx < steps.length - 1 && (
                  <div className="hidden md:block flex-1 h-px bg-[#70DC28]/30 mt-0" />
                )}
              </div>
              <div className="pr-6">
                <h3 className="font-bebas text-xl text-white mb-2">{step.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
