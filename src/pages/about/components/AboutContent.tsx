import { Link } from 'react-router-dom';

const values = [
  {
    icon: 'ri-heart-line',
    title: 'Care',
    desc: 'We treat every client&apos;s belongings as if they were our own. Careful handling isn&apos;t optional — it&apos;s our standard.',
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
    desc: 'We don&apos;t just move boxes — we deliver a stress-free experience from the first call to the final box placed.',
  },
];

const trustStats = [
  { num: '500+', label: 'Moves Completed' },
  { num: '5★', label: 'Average Rating' },
  { num: '100%', label: 'Licensed & Insured' },
  { num: '6+', label: 'Years Serving Brevard' },
];

const teamMembers = [
  {
    name: 'Lead Crew Team',
    role: 'Residential & Commercial Moves',
    desc: 'Our primary move crews handle everything from studio apartments to full home relocations. Trained in furniture protection, safe loading, and customer communication.',
    img: 'https://readdy.ai/api/search-image?query=Two%20professional%20movers%20in%20matching%20dark%20work%20shirts%20smiling%20confidently%2C%20standing%20in%20front%20of%20a%20clean%20white%20moving%20truck%20in%20Florida%20sunshine%2C%20professional%20headshot%20style%20photo%2C%20no%20logos%20no%20branding%20on%20clothing%20or%20vehicle%2C%20plain%20dark%20shirts%2C%20friendly%20and%20trustworthy%20appearance%2C%20high%20resolution%20commercial%20photography&width=600&height=500&seq=team-lead-v1&orientation=portrait',
  },
  {
    name: 'Specialty Crew',
    role: 'Piano, Hot Tub & Oversized Items',
    desc: 'Our specialty team is trained and equipped for piano moves, hot tub relocations, and oversized items. Specialized equipment, zero damage track record.',
    img: 'https://readdy.ai/api/search-image?query=Professional%20moving%20crew%20wearing%20dark%20work%20uniforms%20carefully%20using%20straps%20and%20equipment%20to%20move%20large%20piano%20or%20heavy%20furniture%2C%20detailed%20professional%20action%20shot%2C%20outdoor%20Florida%20setting%2C%20no%20logos%20no%20text%20on%20clothing%2C%20strong%20professional%20workers%2C%20high%20resolution%20commercial%20photography&width=600&height=500&seq=team-specialty-v1&orientation=portrait',
  },
  {
    name: 'Office Move Team',
    role: 'Commercial & Office Relocations',
    desc: 'Specialized in commercial moves scheduled around business hours. Evenings, weekends, minimal downtime. Office furniture, IT equipment, and full office builds handled.',
    img: 'https://readdy.ai/api/search-image?query=Professional%20office%20mover%20in%20dark%20uniform%20carefully%20packing%20and%20moving%20office%20furniture%20and%20boxes%20in%20a%20modern%20Florida%20office%20environment%2C%20organized%20commercial%20moving%20service%2C%20no%20logos%20no%20branding%20on%20clothing%2C%20high%20resolution%20professional%20photography%2C%20clean%20minimal%20office%20setting&width=600&height=500&seq=team-office-v1&orientation=portrait',
  },
];

const whyItems = [
  { icon: 'ri-map-pin-2-line', title: 'Locally Rooted', desc: 'We live and work in Brevard County. We know the roads, communities, and neighborhoods we serve.' },
  { icon: 'ri-award-line', title: 'Proven Track Record', desc: 'Hundreds of successful moves across Melbourne, Titusville, Rockledge, and beyond. Our reviews speak for themselves.' },
  { icon: 'ri-group-line', title: 'Dedicated Crews', desc: 'Every crew is assigned to your move, not split between jobs. You get our full focus, start to finish.' },
  { icon: 'ri-tools-line', title: 'Fully Equipped', desc: 'We bring every tool, blanket, strap, and dolly needed. You don\'t need to supply a single thing.' },
];

export default function AboutContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-[76px] bg-[#0f0f0f] overflow-hidden">
        <div className="absolute left-0 top-0 h-full w-1 bg-[#70DC28]" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full mb-6">
                <div className="w-3 h-3 flex items-center justify-center">
                  <i className="ri-map-pin-fill text-[#70DC28] text-xs"></i>
                </div>
                <span className="text-white text-xs font-bold tracking-widest uppercase">Melbourne, FL · Brevard County</span>
              </div>
              <h1 className="font-bebas leading-[0.9] mb-6">
                <span className="block text-[3.5rem] lg:text-[5rem] text-white">FLORIDA&apos;S MOST</span>
                <span className="block text-[3.5rem] lg:text-[5rem] text-[#70DC28]">TRUSTED MOVING</span>
                <span className="block text-[2.5rem] lg:text-[3.5rem] text-white/80">COMPANY</span>
              </h1>
              <p className="text-white/70 text-base leading-relaxed max-w-lg mb-8">
                Beast Mode Movers was built on one simple belief: moving should be stress-free. We&apos;re a locally owned, fully licensed and insured moving company serving all of Brevard County, FL.
              </p>
              <Link
                to="/#contact"
                className="inline-block bg-[#70DC28] text-[#0f0f0f] px-8 py-4 rounded-md font-black text-sm whitespace-nowrap hover:bg-[#58C016] transition-colors cursor-pointer"
              >
                Get a Free Quote →
              </Link>
            </div>
            <div className="w-full h-[420px] rounded-lg overflow-hidden">
              <img
                src="https://readdy.ai/api/search-image?query=Exterior%20view%20of%20a%20clean%20professional%20moving%20company%20warehouse%20or%20office%20building%20in%20Florida%20with%20organized%20moving%20trucks%20parked%20outside%2C%20sunny%20day%2C%20professional%20commercial%20property%2C%20no%20visible%20logos%20or%20text%20on%20building%2C%20clean%20and%20trustworthy%20business%20appearance%2C%20high%20resolution%20photography%2C%20commercial%20real%20estate%20photography%20style&width=800&height=600&seq=about-hero-v1&orientation=landscape"
                alt="Beast Mode Movers — About Our Moving Company"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats Bar */}
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

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="w-full h-[420px] rounded-lg overflow-hidden">
              <img
                src="https://readdy.ai/api/search-image?query=Interior%20of%20a%20moving%20truck%20cab%20with%20professional%20organized%20moving%20equipment%20neatly%20stored%2C%20ropes%20straps%20blankets%20and%20dollies%20visible%20through%20open%20truck%20bay%20doors%2C%20Florida%20professional%20moving%20company%20operations%2C%20golden%20afternoon%20light%2C%20photorealistic%20commercial%20photography%2C%20no%20logos%20no%20branding%2C%20clean%20organized%20professional%20storage&width=800&height=600&seq=about-story-v1&orientation=landscape"
                alt="Our story — Beast Mode Movers"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <p className="text-[#70DC28] font-bebas tracking-[0.3em] text-sm mb-3">OUR STORY</p>
              <h2 className="font-bebas text-5xl lg:text-6xl text-[#0f0f0f] leading-tight mb-6">
                BUILT IN BREVARD,<br />
                <span className="text-[#70DC28]">BUILT FOR FLORIDA</span>
              </h2>
              <div className="space-y-4">
                <p className="text-neutral-600 text-sm leading-relaxed">
                  Beast Mode Movers was founded right here in Brevard County by local residents who were tired of hearing the same moving horror stories — late crews, broken furniture, surprise fees. We knew we could do better.
                </p>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  We started with a single truck and a simple commitment: show up on time, handle everything with care, and charge exactly what we quote. That approach earned us a five-star reputation that now spans hundreds of completed moves across Melbourne, Titusville, Rockledge, and beyond.
                </p>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  Today, Beast Mode Movers is one of Brevard County&apos;s most trusted moving companies. We&apos;ve expanded our fleet and crew, added specialty services including piano moving and hot tub relocation, and still maintain the same personal standards we started with.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
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
                <p className="text-neutral-500 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: v.desc }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Credibility */}
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

      {/* Team / Experience */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-14">
            <p className="text-[#70DC28] font-bebas tracking-[0.3em] text-sm mb-2">OUR CREWS</p>
            <h2 className="font-bebas text-5xl lg:text-6xl text-[#0f0f0f] leading-tight">
              EXPERIENCED TEAMS<br />
              <span className="text-[#70DC28]">FOR EVERY MOVE</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {teamMembers.map((member) => (
              <div key={member.name} className="border border-neutral-200 rounded-lg overflow-hidden">
                <div className="w-full h-52 overflow-hidden">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-6">
                  <p className="text-[#70DC28] text-xs font-bold tracking-widest uppercase mb-1">{member.role}</p>
                  <h3 className="font-bebas text-2xl text-[#0f0f0f] mb-3">{member.name}</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">{member.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-neutral-50">
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
              <div key={item.title} className="bg-white rounded-lg p-7 border border-neutral-200">
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

      {/* CTA */}
      <section className="py-20 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <p className="text-[#70DC28] font-bebas tracking-[0.3em] text-sm mb-4">LET&apos;S MOVE TOGETHER</p>
          <h2 className="font-bebas text-5xl lg:text-6xl text-white mb-5 leading-tight">
            READY TO WORK WITH<br />
            <span className="text-[#70DC28]">FLORIDA&apos;S BEST MOVERS?</span>
          </h2>
          <p className="text-white/55 text-sm max-w-lg mx-auto mb-8">
            Get a free, no-obligation moving quote today. Same-day response. Licensed, insured &amp; trusted across Brevard County.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/#contact"
              className="bg-[#70DC28] text-[#0f0f0f] px-10 py-4 rounded-md font-black text-sm whitespace-nowrap hover:bg-[#58C016] transition-colors cursor-pointer"
            >
              Get a Free Quote →
            </Link>
            <Link
              to="/services"
              className="bg-white/10 border border-white/30 text-white px-10 py-4 rounded-md font-bold text-sm whitespace-nowrap hover:bg-white/20 transition-colors cursor-pointer"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
