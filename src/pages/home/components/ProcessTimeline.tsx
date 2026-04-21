const steps = [
  {
    num: '01',
    title: 'Request a Free Quote',
    desc: 'Contact us online. Describe your move — location, home size, special items — and we\'ll provide a no-obligation estimate, fast.',
    icon: 'ri-file-list-3-line',
    align: 'left',
  },
  {
    num: '02',
    title: 'Confirm Your Move Date',
    desc: 'We schedule your move at your convenience — including evenings and weekends. Flexible booking that fits your timeline.',
    icon: 'ri-calendar-check-line',
    align: 'right',
  },
  {
    num: '03',
    title: 'We Pack & Protect',
    desc: 'Our team arrives with all packing materials. We wrap, pad, and secure every item — from fragile glassware to heavy furniture.',
    icon: 'ri-archive-2-line',
    align: 'left',
  },
  {
    num: '04',
    title: 'Load & Transport',
    desc: 'Everything is loaded efficiently and secured in our trucks. We drive safely and directly to your destination — local or long distance.',
    icon: 'ri-truck-line',
    align: 'right',
  },
  {
    num: '05',
    title: 'Unload & Settle In',
    desc: 'We unload everything at your new home or office, place furniture exactly where you want it, and make sure you\'re completely settled.',
    icon: 'ri-home-smile-line',
    align: 'left',
  },
];

export default function ProcessTimeline() {
  return (
    <section id="process" className="py-28 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <p className="text-[#70DC28] font-bebas tracking-[0.3em] text-sm mb-2">HOW IT WORKS</p>
          <h2 className="font-bebas text-5xl lg:text-7xl text-[#0f0f0f] leading-[0.9]">
            THE MOVING PROCESS
            <br />
            <span className="text-[#70DC28]">SIMPLE & CLEAR</span>
          </h2>
          <p className="text-neutral-500 text-sm mt-5 max-w-lg mx-auto">
            From your first quote request to your final box placed — here's exactly what happens when you move with Beast Mode Movers.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-neutral-100 -translate-x-1/2 hidden lg:block" />

          <div className="flex flex-col gap-14">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className={`relative grid lg:grid-cols-2 gap-8 lg:gap-20 items-center`}
              >
                {/* Content side */}
                <div className={step.align === 'right' ? 'lg:order-2' : 'lg:order-1'}>
                  <div className={`flex items-start gap-5 ${step.align === 'right' ? 'lg:flex-row-reverse' : ''}`}>
                    <div className="flex-shrink-0 bg-[#70DC28] w-12 h-12 rounded-xl flex items-center justify-center">
                      <i className={`${step.icon} text-[#0f0f0f] text-xl`}></i>
                    </div>
                    <div className={step.align === 'right' ? 'lg:text-right' : ''}>
                      <p className="font-bebas text-6xl text-neutral-100 leading-none -mb-2">{step.num}</p>
                      <h3 className="font-black text-[#0f0f0f] text-lg mb-2">{step.title}</h3>
                      <p className="text-neutral-500 text-sm leading-relaxed max-w-sm">{step.desc}</p>
                    </div>
                  </div>
                </div>

                {/* Center dot */}
                <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-[#70DC28] rounded-full border-4 border-white items-center justify-center z-10" />

                {/* Visual side */}
                <div className={`hidden lg:flex ${step.align === 'right' ? 'lg:order-1 justify-end' : 'lg:order-2'}`}>
                  <div className={`flex items-center gap-3 ${step.align === 'right' ? 'flex-row-reverse' : ''}`}>
                    <div className="bg-neutral-50 border border-neutral-100 rounded-xl px-5 py-3">
                      <p className="text-neutral-300 font-bebas text-4xl">{step.num}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <p className="text-neutral-500 text-sm mb-6">
            Ready to experience a smooth, stress-free move across Florida?
          </p>
          <a
            href="#contact"
            className="inline-block bg-[#0f0f0f] text-white px-12 py-4 rounded-md font-black text-sm whitespace-nowrap hover:bg-[#70DC28] hover:text-[#0f0f0f] transition-all cursor-pointer"
          >
            Start Your Move Today →
          </a>
        </div>
      </div>
    </section>
  );
}
