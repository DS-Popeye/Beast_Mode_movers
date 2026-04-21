export default function AboutTestimonials() {
  return (
    <section className="py-20 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#70DC28] font-bebas tracking-[0.3em] text-sm mb-3">TRUST &amp; CREDENTIALS</p>
            <h2 className="font-bebas text-5xl lg:text-6xl text-white leading-tight mb-8">
              LICENSED, INSURED &amp;<br />
              <span className="text-[#70DC28]">BACKGROUND CHECKED</span>
            </h2>
            <ul className="flex flex-col gap-5">
              {[
                { icon: 'ri-government-line', title: 'Florida DOT Licensed', desc: 'Fully registered and licensed with the Florida Department of Transportation as a professional moving company.' },
                { icon: 'ri-shield-check-line', title: 'Fully Insured', desc: 'Comprehensive liability insurance on every move. Your belongings are protected from pickup to delivery.' },
                { icon: 'ri-user-search-line', title: 'Background-Checked Crew', desc: 'Every team member is background-checked and professionally trained before their first move.' },
                { icon: 'ri-customer-service-2-line', title: 'Responsive & Accountable', desc: 'Direct line to ownership. We answer calls, respond to messages, and stand behind every job we do.' },
              ].map((item) => (
                <li key={item.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-[#70DC28]/10 rounded-md flex-shrink-0">
                    <i className={`${item.icon} text-[#70DC28] text-lg`}></i>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm mb-1">{item.title}</p>
                    <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-lg p-8">
            <p className="text-[#70DC28] font-bebas tracking-[0.2em] text-sm mb-5">WHAT CUSTOMERS SAY</p>
            <div className="flex flex-col gap-5">
              {[
                { name: 'Sarah M.', loc: 'Melbourne, FL', text: 'Beast Mode Movers showed up exactly on time, handled everything with care, and finished faster than expected. Absolutely the best movers in Brevard County.' },
                { name: 'James K.', loc: 'Titusville, FL', text: 'Used them for a commercial office move. They worked overnight to avoid disrupting business hours. Unbelievably professional. Will use again.' },
                { name: 'Linda R.', loc: 'Rockledge, FL', text: 'Moved our piano and a hot tub in the same day. No damage. On time. Exactly what they quoted. These guys are the real deal.' },
              ].map((r) => (
                <div key={r.name} className="border-b border-white/10 pb-5 last:border-0 last:pb-0">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-3 h-3 flex items-center justify-center">
                        <i className="ri-star-fill text-[#70DC28] text-xs"></i>
                      </div>
                    ))}
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed mb-2 italic">&ldquo;{r.text}&rdquo;</p>
                  <p className="text-white/40 text-xs font-semibold">{r.name} · {r.loc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
