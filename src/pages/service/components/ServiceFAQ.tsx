import { useState } from 'react';
import { Link } from 'react-router-dom';

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

export default function ServiceFAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
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
  );
}
