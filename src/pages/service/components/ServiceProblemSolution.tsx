export default function ServiceProblemSolution() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Problem */}
          <div className="bg-neutral-50 rounded-lg p-10 border-l-4 border-neutral-300">
            <p className="text-neutral-400 font-bebas tracking-[0.25em] text-sm mb-4">THE PROBLEM</p>
            <h2 className="font-bebas text-4xl lg:text-5xl text-[#0f0f0f] leading-tight mb-5">
              MOVING IS STRESSFUL WHEN YOU CAN&apos;T TRUST YOUR MOVERS
            </h2>
            <ul className="flex flex-col gap-4">
              {[
                'Hidden fees discovered only on moving day',
                'Movers who show up late — or not at all',
                'Damaged furniture and broken belongings',
                'Unclear crews with limited move details',
                'Vague quotes with no real transparency',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i className="ri-close-circle-line text-red-400 text-base"></i>
                  </div>
                  <span className="text-neutral-600 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solution */}
          <div className="bg-[#0f0f0f] rounded-lg p-10 border-l-4 border-[#70DC28]">
            <p className="text-[#70DC28] font-bebas tracking-[0.25em] text-sm mb-4">OUR SOLUTION</p>
            <h2 className="font-bebas text-4xl lg:text-5xl text-white leading-tight mb-5">
              BEAST MODE MOVERS — BUILT ON TRUST &amp; RESULTS
            </h2>
            <ul className="flex flex-col gap-4">
              {[
                'Flat, transparent quotes — no surprises on move day',
                'On-time arrival guaranteed or we make it right',
                'Every item padded, wrapped, and fully protected',
                'Move scope reviewed before scheduling',
                'Same-day availability for urgent local moves',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i className="ri-checkbox-circle-line text-[#70DC28] text-base"></i>
                  </div>
                  <span className="text-white/80 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
