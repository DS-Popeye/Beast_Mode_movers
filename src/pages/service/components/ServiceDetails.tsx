import { useState } from 'react';
import { Link } from 'react-router-dom';

const benefits = [
  {
    icon: 'ri-star-fill',
    title: '5-Star Local Reputation',
    desc: 'Hundreds of five-star reviews from homeowners and businesses across Brevard County. Our reputation is built on results, not promises.',
  },
  {
    icon: 'ri-shield-check-line',
    title: 'Fully Licensed & Insured',
    desc: 'We are a Florida DOT licensed moving company with full liability insurance. Every move is covered — your belongings are protected.',
  },
  {
    icon: 'ri-time-line',
    title: 'On-Time, Every Time',
    desc: 'We show up when we say we will. Our crews are scheduled, confirmed, and on-site at the agreed time — no waiting, no guessing.',
  },
  {
    icon: 'ri-money-dollar-circle-line',
    title: 'Transparent Pricing',
    desc: 'Your quote is your price. No hidden stair fees, fuel charges, or last-minute add-ons. Know exactly what you&apos;re paying before the truck arrives.',
  },
];

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
    title: 'You&apos;re All Set',
    desc: 'Move complete. We do a final walkthrough with you, collect payment, and make sure you&apos;re 100% satisfied before we leave.',
  },
];

const faqs = [
  {
    q: 'How much does local moving cost in Melbourne FL?',
    a: 'Local moving in Melbourne, FL typically ranges from $150–$250 per hour for a 2-mover team with a truck. Final cost depends on home size, access, and move complexity. We provide free estimates with transparent hourly rates — no hidden fees.',
  },
  {
    q: 'Do you offer same-day moving services in Brevard County?',
    a: 'Yes. Beast Mode Movers offers same-day and next-day local moving in Melbourne, Titusville, Rockledge, and surrounding Brevard County cities. Call us directly for urgent availability.',
  },
  {
    q: 'Are your movers licensed and insured in Florida?',
    a: 'Absolutely. We are a fully licensed Florida DOT moving company and carry full liability insurance. Every move is covered and our crew is background-checked and professionally trained.',
  },
  {
    q: 'What is included in a local moving service?',
    a: 'Our local moving service includes the moving truck, moving blankets, stretch wrap, dollies, hand trucks, and labor. Packing services are available as an add-on. No surprise charges on move day.',
  },
  {
    q: 'How far in advance should I book a local move?',
    a: 'For weekend moves, 2–4 weeks in advance is ideal. For weekday moves, we can often accommodate 1–2 days notice. Same-day moves are available depending on crew availability.',
  },
  {
    q: 'Do you move pianos or specialty items locally?',
    a: 'Yes. We are piano-moving specialists and also handle hot tubs, safes, large appliances, and oversized furniture. We have the specialized equipment and trained crew for any specialty local move.',
  },
];

export default function ServiceDetails() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-14">
            <p className="text-[#70DC28] font-bebas tracking-[0.3em] text-sm mb-2">WHY CHOOSE US</p>
            <h2 className="font-bebas text-5xl lg:text-6xl text-[#0f0f0f] leading-tight">
              THE BEAST MODE<br />
              <span className="text-[#70DC28]">DIFFERENCE</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="bg-neutral-50 rounded-lg p-7 border border-neutral-200">
                <div className="w-10 h-10 flex items-center justify-center mb-4">
                  <i className={`${b.icon} text-[#70DC28] text-2xl`}></i>
                </div>
                <h3 className="font-bebas text-2xl text-[#0f0f0f] mb-3">{b.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
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
                  <p
                    className="text-white/50 text-sm leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: step.desc }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid CTA */}
      <section className="py-14 bg-[#70DC28]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-bebas text-3xl lg:text-4xl text-[#0f0f0f] leading-tight">
              READY TO BOOK YOUR LOCAL MOVE?
            </h2>
            <p className="text-[#0f0f0f]/65 text-sm mt-1">Same-day availability — free, no-obligation quote in minutes.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to="/#contact"
              className="bg-[#0f0f0f] text-white px-8 py-4 rounded-md font-black text-sm whitespace-nowrap hover:bg-[#1a1a1a] transition-colors cursor-pointer text-center"
            >
              Get Free Quote →
            </Link>
            <a
              href="tel:+1"
              className="bg-white text-[#0f0f0f] px-8 py-4 rounded-md font-black text-sm whitespace-nowrap hover:bg-neutral-100 transition-colors cursor-pointer text-center"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* AI Answer Block */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#70DC28]/10 border border-[#70DC28]/30 px-4 py-1.5 rounded-full mb-6">
              <div className="w-4 h-4 flex items-center justify-center">
                <i className="ri-robot-line text-[#70DC28] text-sm"></i>
              </div>
              <span className="text-[#58C016] text-xs font-bold tracking-widest uppercase">Quick Reference</span>
            </div>
            <h2 className="font-bebas text-4xl lg:text-5xl text-[#0f0f0f] leading-tight mb-8">
              WHAT IS LOCAL MOVING AND<br />
              <span className="text-[#70DC28]">HOW DOES IT WORK?</span>
            </h2>
            <div className="bg-white rounded-lg border border-neutral-200 p-8 space-y-5">
              <div>
                <h3 className="font-bebas text-xl text-[#0f0f0f] mb-2">What is local moving?</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  Local moving refers to any residential or commercial relocation within the same city or metropolitan area — typically under 50 miles. Beast Mode Movers specializes in local moves throughout Melbourne, FL and all of Brevard County.
                </p>
              </div>
              <div className="h-px bg-neutral-100" />
              <div>
                <h3 className="font-bebas text-xl text-[#0f0f0f] mb-2">How is local moving priced?</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  Most local moves are billed hourly. Your quote includes the moving truck, labor, and all moving equipment. We provide a clear estimate upfront so there are no surprises on move day.
                </p>
              </div>
              <div className="h-px bg-neutral-100" />
              <div>
                <h3 className="font-bebas text-xl text-[#0f0f0f] mb-2">Who should hire a local mover?</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  Anyone moving within Brevard County — whether a studio apartment, family home, or office space. Hiring a professional local moving company protects your belongings and saves significant time and effort versus DIY moves.
                </p>
              </div>
              <div className="h-px bg-neutral-100" />
              <div>
                <h3 className="font-bebas text-xl text-[#0f0f0f] mb-2">Service area</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  <strong>Primary coverage:</strong> Melbourne, FL · Titusville, FL · Rockledge, FL · Palm Bay, FL · Cocoa Beach, FL · Merritt Island, FL · Satellite Beach, FL · Viera, FL
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-16">
            <div>
              <p className="text-[#70DC28] font-bebas tracking-[0.3em] text-sm mb-2">COMMON QUESTIONS</p>
              <h2 className="font-bebas text-4xl lg:text-5xl text-[#0f0f0f] leading-tight mb-5">
                LOCAL MOVING FAQ
              </h2>
              <p className="text-neutral-500 text-sm leading-relaxed">
                Real questions from real customers. If your question isn&apos;t here, call us directly — we&apos;re happy to help.
              </p>
              <Link
                to="/#contact"
                className="inline-block mt-6 bg-[#70DC28] text-[#0f0f0f] px-6 py-3 rounded-md font-bold text-sm whitespace-nowrap hover:bg-[#58C016] transition-colors cursor-pointer"
              >
                Ask Us Directly →
              </Link>
            </div>
            <div className="lg:col-span-2 flex flex-col gap-3">
              {faqs.map((faq, idx) => (
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
          <p className="text-[#70DC28] font-bebas tracking-[0.3em] text-sm mb-4">READY TO MOVE?</p>
          <h2 className="font-bebas text-5xl lg:text-6xl text-white mb-5 leading-tight">
            GET YOUR FREE LOCAL<br />
            <span className="text-[#70DC28]">MOVING QUOTE TODAY</span>
          </h2>
          <p className="text-white/55 text-sm max-w-lg mx-auto mb-8">
            Same-day response. No obligation. Licensed &amp; insured movers serving all of Brevard County, FL.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/#contact"
              className="bg-[#70DC28] text-[#0f0f0f] px-10 py-4 rounded-md font-black text-sm whitespace-nowrap hover:bg-[#58C016] transition-colors cursor-pointer"
            >
              Request a Free Quote →
            </Link>
            <a
              href="tel:+1"
              className="bg-white/10 border border-white/30 text-white px-10 py-4 rounded-md font-bold text-sm whitespace-nowrap hover:bg-white/20 transition-colors cursor-pointer"
            >
              Call For Immediate Help
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
