import { useState } from 'react';
import { Link } from 'react-router-dom';

const localFaqs = [
  { q: 'What are the best movers in Melbourne FL?', a: 'Beast Mode Movers is consistently rated one of the top moving companies in Melbourne, FL, with a 5-star average across Google reviews. We are fully licensed, insured, and locally based in Brevard County with hundreds of Melbourne area moves completed.' },
  { q: 'How much does it cost to hire movers in Melbourne Florida?', a: 'Moving costs in Melbourne, FL typically range from $150–$250 per hour for a 2-mover team with a truck. Costs depend on home size, number of items, and access factors. Beast Mode Movers provides free, upfront estimates with no hidden fees.' },
  { q: 'Do you offer same-day movers in Melbourne FL?', a: 'Yes — Beast Mode Movers offers same-day and next-day moving services in Melbourne, FL depending on crew availability. Call us directly for urgent move requests.' },
  { q: 'Are Beast Mode Movers licensed to operate in Melbourne Florida?', a: 'Yes. We are a Florida DOT licensed moving company fully authorized to operate in Melbourne and throughout Brevard County. All of our movers are insured and background-checked.' },
  { q: 'Do you move pianos in Melbourne FL?', a: 'Yes. Our specialty crew handles piano moves throughout Melbourne and Brevard County. We use professional piano dollies, straps, and padding to ensure safe transport of any size piano.' },
  { q: 'What areas do you serve near Melbourne Florida?', a: 'In addition to Melbourne, we serve Titusville, Rockledge, Palm Bay, Cocoa Beach, Merritt Island, Satellite Beach, Viera, and all of Brevard County, FL.' },
];

export default function LocationFAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-3 gap-16">
          <div>
            <p className="text-[#70DC28] font-bebas tracking-[0.3em] text-sm mb-2">MELBOURNE FAQ</p>
            <h2 className="font-bebas text-4xl lg:text-5xl text-[#0f0f0f] leading-tight mb-5">MOVING IN MELBOURNE, FL — COMMON QUESTIONS</h2>
            <p className="text-neutral-500 text-sm leading-relaxed">Answers to the most common questions from Melbourne, FL residents planning a local or long-distance move.</p>
            <Link to="/#contact" className="inline-block mt-6 bg-[#70DC28] text-[#0f0f0f] px-6 py-3 rounded-md font-bold text-sm whitespace-nowrap hover:bg-[#58C016] transition-colors cursor-pointer">Ask Us Anything →</Link>
          </div>
          <div className="lg:col-span-2 flex flex-col gap-3">
            {localFaqs.map((faq, idx) => (
              <div key={idx} className="border border-neutral-200 rounded-lg overflow-hidden">
                <button className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer hover:bg-neutral-50 transition-colors" onClick={() => setOpenFaq(openFaq === idx ? null : idx)}>
                  <span className="font-semibold text-[#0f0f0f] text-sm pr-4">{faq.q}</span>
                  <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                    <i className={`ri-${openFaq === idx ? 'subtract' : 'add'}-line text-[#70DC28] text-lg`}></i>
                  </div>
                </button>
                {openFaq === idx && <div className="px-6 pb-5"><p className="text-neutral-500 text-sm leading-relaxed">{faq.a}</p></div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
