import { useState } from 'react';
import servicePageContent from '../../../content/servicePages.json';

type FAQItem = {
  q: string;
  a: string;
};

const aiBlocks = [
  {
    q: 'What does Beast Mode Movers do?',
    a: 'Beast Mode Movers helps customers request local moving support for residential, apartment, commercial, packing, loading, furniture, and equipment moving needs.',
  },
  {
    q: 'How should customers prepare for a quote?',
    a: 'Customers should share the move date, pickup and delivery areas, address type, stairs or elevators, parking access, large items, and whether packing or loading help is needed.',
  },
];

const faqs = servicePageContent.faqs as FAQItem[];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-28 bg-neutral-50">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-14">
          <p className="text-[#70DC28] font-bebas tracking-[0.3em] text-sm mb-2">FAQ</p>
          <h2 className="font-bebas text-5xl lg:text-7xl text-[#0f0f0f] leading-[0.9]">
            FREQUENTLY ASKED
            <br />
            <span className="text-[#70DC28]">MOVING QUESTIONS</span>
          </h2>
          <p className="text-neutral-500 text-sm mt-5 max-w-lg mx-auto leading-relaxed">
            Clear answers for customers comparing local movers, apartment movers, commercial movers, packing support, and furniture moving help.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 mb-12">
          {aiBlocks.map((block) => (
            <div key={block.q} className="bg-white rounded-xl p-6 border border-neutral-200 border-l-4 border-l-[#70DC28]">
              <p className="text-[10px] font-black text-[#70DC28] uppercase tracking-[0.2em] mb-2">Quick Answer</p>
              <h3 className="text-[#0f0f0f] font-bold text-sm mb-3">{block.q}</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">{block.a}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#0f0f0f] rounded-xl p-8 mb-12">
          <p className="text-[10px] font-black text-[#70DC28] uppercase tracking-[0.2em] mb-3">Moving Process Explained</p>
          <h3 className="font-bold text-white text-lg mb-3">How does a moving request work?</h3>
          <p className="text-white/55 text-sm leading-relaxed">
            Start by submitting the quote form with your move date, pickup and delivery areas, property type, large items, and any packing or loading needs. The moving team can review the details and follow up about availability, service scope, and next steps.
          </p>
        </div>

        <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden mb-10">
          {faqs.map((faq, i) => (
            <div key={faq.q} className={`${i > 0 ? 'border-t border-neutral-100' : ''}`}>
              <button
                className="flex items-start justify-between gap-4 w-full text-left px-7 py-5 cursor-pointer group hover:bg-neutral-50 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-[#0f0f0f] text-[15px] group-hover:text-[#70DC28] transition-colors leading-snug">
                  {faq.q}
                </span>
                <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5 bg-neutral-100 rounded-full">
                  <i
                    className={`${
                      open === i ? 'ri-subtract-line text-[#70DC28]' : 'ri-add-line text-neutral-400'
                    } text-sm transition-colors`}
                  ></i>
                </div>
              </button>
              {open === i && (
                <div className="px-7 pb-6">
                  <div className="border-l-4 border-[#70DC28] pl-4">
                    <p className="text-neutral-500 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-[#70DC28] rounded-xl p-8 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <p className="font-bebas text-3xl text-[#0f0f0f] leading-tight">STILL HAVE QUESTIONS?</p>
            <p className="text-[#0f0f0f]/60 text-sm mt-1">Share your move details and request an estimate.</p>
          </div>
          <a
            href="#contact"
            className="bg-[#0f0f0f] text-white px-8 py-3.5 rounded-md font-black text-sm whitespace-nowrap hover:bg-white hover:text-[#0f0f0f] transition-all cursor-pointer flex-shrink-0"
          >
            Request a Moving Quote →
          </a>
        </div>
      </div>
    </section>
  );
}
