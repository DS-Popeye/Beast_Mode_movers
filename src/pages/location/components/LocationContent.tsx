import { useState } from 'react';
import { Link } from 'react-router-dom';

const localServices = [
  { icon: 'ri-map-2-line', title: 'Local Moving', desc: 'Hourly-rate moves within Melbourne and surrounding Brevard cities. Full equipment, same-day availability.' },
  { icon: 'ri-home-2-line', title: 'Residential Moving', desc: 'Complete home relocations in Melbourne handled with care — from studio apartments to 4-bedroom homes.' },
  { icon: 'ri-building-2-line', title: 'Commercial Moving', desc: 'Office and business moves in Melbourne scheduled around your hours. Zero-downtime planning.' },
  { icon: 'ri-road-map-line', title: 'Long Distance Moving', desc: 'Moving out of Melbourne or relocating to Melbourne from across Florida. Flat-rate pricing, insured transport.' },
  { icon: 'ri-archive-2-line', title: 'Packing Services', desc: 'Full-service packing in Melbourne. We bring all materials, pack everything, label it — you just supervise.' },
  { icon: 'ri-music-2-line', title: 'Specialty Moves', desc: 'Piano moving, hot tub relocation, and oversized items in the Melbourne area. Specialist crew and equipment.' },
];

const trustItems = [
  { icon: 'ri-star-fill', label: '5-Star Rated in Melbourne', desc: 'Consistently top-rated by Melbourne, FL homeowners and businesses across Google.' },
  { icon: 'ri-shield-check-line', label: 'Florida DOT Licensed', desc: 'Fully licensed and insured to operate as a professional moving company in Florida.' },
  { icon: 'ri-map-pin-2-line', label: 'Locally Based in Brevard', desc: 'We operate out of Brevard County — we know Melbourne streets, neighborhoods, and access points.' },
  { icon: 'ri-time-line', label: 'On-Time Guarantee', desc: 'We confirm your move 24 hours in advance and arrive within your scheduled window — every time.' },
];

const localFaqs = [
  {
    q: 'What are the best movers in Melbourne FL?',
    a: 'Beast Mode Movers is consistently rated one of the top moving companies in Melbourne, FL, with a 5-star average across Google reviews. We are fully licensed, insured, and locally based in Brevard County with hundreds of Melbourne area moves completed.',
  },
  {
    q: 'How much does it cost to hire movers in Melbourne Florida?',
    a: 'Moving costs in Melbourne, FL typically range from $150–$250 per hour for a 2-mover team with a truck. Costs depend on home size, number of items, and access factors. Beast Mode Movers provides free, upfront estimates with no hidden fees.',
  },
  {
    q: 'Do you offer same-day movers in Melbourne FL?',
    a: 'Yes — Beast Mode Movers offers same-day and next-day moving services in Melbourne, FL depending on crew availability. Call us directly for urgent move requests.',
  },
  {
    q: 'Are Beast Mode Movers licensed to operate in Melbourne Florida?',
    a: 'Yes. We are a Florida DOT licensed moving company fully authorized to operate in Melbourne and throughout Brevard County. All of our movers are insured and background-checked.',
  },
  {
    q: 'Do you move pianos in Melbourne FL?',
    a: 'Yes. Our specialty crew handles piano moves throughout Melbourne and Brevard County. We use professional piano dollies, straps, and padding to ensure safe transport of any size piano.',
  },
  {
    q: 'What areas do you serve near Melbourne Florida?',
    a: 'In addition to Melbourne, we serve Titusville, Rockledge, Palm Bay, Cocoa Beach, Merritt Island, Satellite Beach, Viera, and all of Brevard County, FL.',
  },
];

export default function LocationContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* City Hero */}
      <section className="relative pt-[76px] bg-[#0f0f0f] overflow-hidden">
        <div className="absolute left-0 top-0 h-full w-1 bg-[#70DC28]" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full mb-6">
                <div className="w-3 h-3 flex items-center justify-center">
                  <i className="ri-map-pin-fill text-[#70DC28] text-xs"></i>
                </div>
                <span className="text-white text-xs font-bold tracking-widest uppercase">Brevard County, Florida</span>
              </div>
              <h1 className="font-bebas leading-[0.9] mb-6">
                <span className="block text-[3.5rem] lg:text-[5rem] text-white">MOVERS IN</span>
                <span className="block text-[3.5rem] lg:text-[5rem] text-[#70DC28]">MELBOURNE, FL</span>
                <span className="block text-[2.5rem] lg:text-[3.5rem] text-white/80">TRUSTED. LOCAL. 5-STAR.</span>
              </h1>
              <p className="text-white/70 text-base leading-relaxed max-w-lg mb-8">
                Beast Mode Movers is Melbourne&apos;s top-rated local moving company. Licensed, insured, and built for Brevard County — serving Melbourne and surrounding communities with 5-star moving services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/#contact"
                  className="bg-[#70DC28] text-[#0f0f0f] px-8 py-4 rounded-md font-black text-sm text-center whitespace-nowrap hover:bg-[#58C016] transition-colors cursor-pointer"
                >
                  Get Free Melbourne Quote →
                </Link>
                <a
                  href="tel:+1"
                  className="bg-white/10 border border-white/30 text-white px-8 py-4 rounded-md font-bold text-sm text-center whitespace-nowrap hover:bg-white/20 transition-colors cursor-pointer"
                >
                  Call Our Melbourne Team
                </a>
              </div>
              <div className="flex flex-wrap gap-5 mt-8">
                {[
                  { icon: 'ri-shield-check-line', label: 'Licensed & Insured' },
                  { icon: 'ri-star-fill', label: '5-Star Melbourne Rating' },
                  { icon: 'ri-time-line', label: 'Same-Day Available' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2">
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className={`${item.icon} text-[#70DC28] text-sm`}></i>
                    </div>
                    <span className="text-white/70 text-sm font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-[420px] rounded-lg overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Aerial%20view%20of%20Melbourne%20Florida%20city%20skyline%20and%20residential%20neighborhoods%20near%20Indian%20River%20Lagoon%2C%20beautiful%20sunny%20Florida%20coastal%20city%2C%20palm%20trees%20lining%20streets%2C%20typical%20Florida%20suburban%20neighborhoods%20from%20above%2C%20professional%20real%20estate%20aerial%20photography%2C%20warm%20afternoon%20light%2C%20no%20text%20no%20overlays&width=800&height=600&seq=loc-melbourne-hero-v1&orientation=landscape"
                  alt="Movers in Melbourne Florida — Brevard County"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-[#70DC28] text-[#0f0f0f] px-5 py-3 rounded-lg">
                <p className="font-bebas text-2xl leading-none">MELBOURNE, FL</p>
                <p className="text-[#0f0f0f]/65 text-xs font-semibold mt-0.5">Primary Service Area</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services in Melbourne */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-14">
            <p className="text-[#70DC28] font-bebas tracking-[0.3em] text-sm mb-2">WHAT WE OFFER</p>
            <h2 className="font-bebas text-5xl lg:text-6xl text-[#0f0f0f] leading-tight">
              MOVING SERVICES IN<br />
              <span className="text-[#70DC28]">MELBOURNE, FLORIDA</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {localServices.map((svc) => (
              <div key={svc.title} className="bg-neutral-50 rounded-lg p-7 border border-neutral-200 hover:border-[#70DC28]/50 transition-colors group cursor-pointer">
                <div className="w-10 h-10 flex items-center justify-center bg-[#70DC28]/10 rounded-md mb-5 group-hover:bg-[#70DC28]/20 transition-colors">
                  <i className={`${svc.icon} text-[#70DC28] text-xl`}></i>
                </div>
                <h3 className="font-bebas text-2xl text-[#0f0f0f] mb-3">{svc.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 bg-[#0f0f0f] rounded-lg px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-5">
            <div>
              <p className="text-white font-bold text-base mb-0.5">Need a quote for your Melbourne move?</p>
              <p className="text-white/45 text-sm">Free estimate — same-day response for Melbourne area moves.</p>
            </div>
            <Link
              to="/#contact"
              className="bg-[#70DC28] text-[#0f0f0f] px-8 py-3.5 rounded-md font-black text-sm whitespace-nowrap hover:bg-[#58C016] transition-colors cursor-pointer flex-shrink-0"
            >
              Get Melbourne Quote →
            </Link>
          </div>
        </div>
      </section>

      {/* Local Trust Signals */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#70DC28] font-bebas tracking-[0.3em] text-sm mb-3">WHY MELBOURNE TRUSTS US</p>
              <h2 className="font-bebas text-5xl lg:text-6xl text-[#0f0f0f] leading-tight mb-8">
                LOCALLY KNOWN &amp;<br />
                <span className="text-[#70DC28]">LOCALLY TRUSTED</span>
              </h2>
              <div className="flex flex-col gap-6">
                {trustItems.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center bg-[#70DC28]/10 rounded-md flex-shrink-0">
                      <i className={`${item.icon} text-[#70DC28] text-lg`}></i>
                    </div>
                    <div>
                      <p className="text-[#0f0f0f] font-semibold text-sm mb-1">{item.label}</p>
                      <p className="text-neutral-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#0f0f0f] rounded-lg p-8">
              <p className="text-[#70DC28] font-bebas tracking-[0.2em] text-sm mb-5">MELBOURNE CUSTOMER REVIEWS</p>
              <div className="flex flex-col gap-5">
                {[
                  { name: 'Carlos T.', text: 'Best movers in Melbourne bar none. Showed up on time, handled our piano like pros, and the price was exactly what they quoted. 5 stars easily.' },
                  { name: 'Maria S.', text: 'We called Beast Mode Movers on short notice for a Melbourne apartment move. They had a crew there next morning. Unreal service and great guys.' },
                  { name: 'Tom & Lisa B.', text: 'Third time using Beast Mode Movers in Melbourne. Every single time they deliver. Licensed, insured, and honest — exactly what you want in a mover.' },
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
                    <p className="text-white/40 text-xs font-semibold">{r.name} · Melbourne, FL</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-10">
            <p className="text-[#70DC28] font-bebas tracking-[0.3em] text-sm mb-2">OUR SERVICE AREA</p>
            <h2 className="font-bebas text-5xl lg:text-6xl text-[#0f0f0f] leading-tight">
              WE SERVE MELBOURNE &amp;<br />
              <span className="text-[#70DC28]">ALL OF BREVARD COUNTY</span>
            </h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2 rounded-lg overflow-hidden border border-neutral-200 h-[440px]">
              <iframe
                title="Beast Mode Movers — Melbourne, FL"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.5232867764616!2d-80.71561572403593!3d28.319275600000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88de102776341c77%3A0x6c64d9cf33106086!2sBeast%20Mode%20Movers!5e0!3m2!1sen!2sus!4v1710862400000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="flex flex-col gap-4">
              <div className="bg-neutral-50 rounded-lg p-6 border border-neutral-200">
                <h3 className="font-bebas text-2xl text-[#0f0f0f] mb-4">PRIMARY SERVICE CITIES</h3>
                <ul className="flex flex-col gap-2.5">
                  {[
                    'Melbourne, FL',
                    'Titusville, FL',
                    'Rockledge, FL',
                    'Palm Bay, FL',
                    'Cocoa Beach, FL',
                    'Merritt Island, FL',
                    'Satellite Beach, FL',
                    'Viera, FL',
                    'Cape Canaveral, FL',
                  ].map((city) => (
                    <li key={city} className="flex items-center gap-2.5">
                      <div className="w-4 h-4 flex items-center justify-center">
                        <i className="ri-map-pin-line text-[#70DC28] text-sm"></i>
                      </div>
                      <span className="text-neutral-600 text-sm">{city}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#70DC28] rounded-lg p-6">
                <p className="font-bebas text-2xl text-[#0f0f0f] mb-2">OUTSIDE OUR AREA?</p>
                <p className="text-[#0f0f0f]/65 text-sm mb-4">We also handle long distance moves from Melbourne to anywhere in Florida or beyond.</p>
                <Link
                  to="/#contact"
                  className="block bg-[#0f0f0f] text-white px-5 py-3 rounded-md font-bold text-sm text-center whitespace-nowrap hover:bg-[#1a1a1a] transition-colors cursor-pointer"
                >
                  Ask About Your City →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Answer Block — Localized */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#70DC28]/10 border border-[#70DC28]/30 px-4 py-1.5 rounded-full mb-6">
              <div className="w-4 h-4 flex items-center justify-center">
                <i className="ri-robot-line text-[#70DC28] text-sm"></i>
              </div>
              <span className="text-[#58C016] text-xs font-bold tracking-widest uppercase">Melbourne Moving Guide</span>
            </div>
            <h2 className="font-bebas text-4xl lg:text-5xl text-[#0f0f0f] leading-tight mb-8">
              MOVING TO OR FROM<br />
              <span className="text-[#70DC28]">MELBOURNE, FLORIDA?</span>
            </h2>
            <div className="bg-white rounded-lg border border-neutral-200 p-8 space-y-5">
              <div>
                <h3 className="font-bebas text-xl text-[#0f0f0f] mb-2">About Melbourne, FL</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  Melbourne is the largest city in Brevard County, Florida — located on the central east coast of Florida along the Indian River Lagoon. It&apos;s a fast-growing community popular with families, retirees, and professionals drawn to the aerospace and tech industries near Kennedy Space Center.
                </p>
              </div>
              <div className="h-px bg-neutral-100" />
              <div>
                <h3 className="font-bebas text-xl text-[#0f0f0f] mb-2">Best time to move in Melbourne</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  October through April is the ideal moving season in Melbourne, FL — cooler temperatures and lower humidity make outdoor loading and transport much more comfortable. Summer moves (June–September) can be scheduled for early morning hours to avoid peak heat.
                </p>
              </div>
              <div className="h-px bg-neutral-100" />
              <div>
                <h3 className="font-bebas text-xl text-[#0f0f0f] mb-2">What to know before moving in Brevard County</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  Many Melbourne neighborhoods have HOA regulations around moving times and truck parking. Gated communities may require advance notice. Beast Mode Movers is familiar with local requirements across Melbourne&apos;s most popular neighborhoods including Viera, Suntree, Indialantic, and downtown Melbourne.
                </p>
              </div>
              <div className="h-px bg-neutral-100" />
              <div>
                <h3 className="font-bebas text-xl text-[#0f0f0f] mb-2">Beast Mode Movers — Melbourne service summary</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  <strong>Services offered:</strong> Local moving · Residential moving · Commercial moving · Long distance moving · Packing services · Piano moving · Hot tub &amp; specialty moves<br />
                  <strong>Coverage:</strong> Melbourne, FL and all of Brevard County<br />
                  <strong>License:</strong> Florida DOT licensed and fully insured
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-16">
            <div>
              <p className="text-[#70DC28] font-bebas tracking-[0.3em] text-sm mb-2">MELBOURNE FAQ</p>
              <h2 className="font-bebas text-4xl lg:text-5xl text-[#0f0f0f] leading-tight mb-5">
                MOVING IN MELBOURNE, FL — COMMON QUESTIONS
              </h2>
              <p className="text-neutral-500 text-sm leading-relaxed">
                Answers to the most common questions from Melbourne, FL residents planning a local or long-distance move.
              </p>
              <Link
                to="/#contact"
                className="inline-block mt-6 bg-[#70DC28] text-[#0f0f0f] px-6 py-3 rounded-md font-bold text-sm whitespace-nowrap hover:bg-[#58C016] transition-colors cursor-pointer"
              >
                Ask Us Anything →
              </Link>
            </div>
            <div className="lg:col-span-2 flex flex-col gap-3">
              {localFaqs.map((faq, idx) => (
                <div key={idx} className="border border-neutral-200 rounded-lg overflow-hidden">
                  <button
                    className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer hover:bg-neutral-50 transition-colors"
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  >
                    <span className="font-semibold text-[#0f0f0f] text-sm pr-4">{faq.q}</span>
                    <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                      <i className={`ri-${openFaq === idx ? 'subtract' : 'add'}-line text-[#70DC28] text-lg`}></i>
                    </div>
                  </button>
                  {openFaq === idx && (
                    <div className="px-6 pb-5">
                      <p className="text-neutral-500 text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <p className="text-[#70DC28] font-bebas tracking-[0.3em] text-sm mb-4">MELBOURNE&apos;S TOP-RATED MOVERS</p>
          <h2 className="font-bebas text-5xl lg:text-6xl text-white mb-5 leading-tight">
            MOVING IN MELBOURNE, FL?<br />
            <span className="text-[#70DC28]">GET A FREE QUOTE TODAY</span>
          </h2>
          <p className="text-white/55 text-sm max-w-lg mx-auto mb-8">
            Same-day response. Licensed &amp; insured. Serving Melbourne and all of Brevard County, FL.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/#contact"
              className="bg-[#70DC28] text-[#0f0f0f] px-10 py-4 rounded-md font-black text-sm whitespace-nowrap hover:bg-[#58C016] transition-colors cursor-pointer"
            >
              Get Free Melbourne Quote →
            </Link>
            <a
              href="tel:+1"
              className="bg-white/10 border border-white/30 text-white px-10 py-4 rounded-md font-bold text-sm whitespace-nowrap hover:bg-white/20 transition-colors cursor-pointer"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
