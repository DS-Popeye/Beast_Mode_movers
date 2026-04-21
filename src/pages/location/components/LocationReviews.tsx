export default function LocationReviews() {
  return (
    <section className="py-20 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-10">
          <p className="text-[#70DC28] font-bebas tracking-[0.3em] text-sm mb-2">MELBOURNE CUSTOMER REVIEWS</p>
          <h2 className="font-bebas text-5xl lg:text-6xl text-white leading-tight">WHAT MELBOURNE <span className="text-[#70DC28]">CUSTOMERS SAY</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: 'Carlos T.', text: 'Best movers in Melbourne bar none. Showed up on time, handled our piano like pros, and the price was exactly what they quoted. 5 stars easily.' },
            { name: 'Maria S.', text: 'We called Beast Mode Movers on short notice for a Melbourne apartment move. They had a crew there next morning. Unreal service and great guys.' },
            { name: 'Tom & Lisa B.', text: 'Third time using Beast Mode Movers in Melbourne. Every single time they deliver. Licensed, insured, and honest — exactly what you want in a mover.' },
          ].map((r) => (
            <div key={r.name} className="bg-white/5 border border-white/10 rounded-lg p-7">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-4 h-4 flex items-center justify-center">
                    <i className="ri-star-fill text-[#70DC28] text-sm"></i>
                  </div>
                ))}
              </div>
              <p className="text-white/70 text-sm leading-relaxed mb-4 italic">&ldquo;{r.text}&rdquo;</p>
              <p className="text-white/40 text-xs font-semibold">{r.name} · Melbourne, FL</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
