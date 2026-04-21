import { useState } from 'react';

const aiBlocks = [
  {
    q: 'What does a moving company do?',
    a: 'Professional moving companies like Beast Mode Movers handle the complete physical process of relocating your belongings — including packing, loading, transporting, and unloading. Services can include furniture disassembly and reassembly, full packing with materials, specialty item handling for pianos and hot tubs, and both local and long distance moves.',
  },
  {
    q: 'What types of moving services are available?',
    a: 'Beast Mode Movers offers local moving, long distance moving, residential moving, commercial office moving, full packing services, piano moving, hot tub and spa moving, and specialty item relocation. All moves are handled by licensed, insured professionals serving Brevard County, Florida.',
  },
];

const faqs = [
  {
    q: 'Who are the best movers near me in Florida?',
    a: 'Beast Mode Movers serves Melbourne, Titusville, Rockledge, and all of Brevard County, Florida. Our team specializes in residential, commercial, and specialty moves including pianos and hot tubs. We\'re licensed, insured, and trusted by hundreds of Florida families and businesses for local and long distance relocations.',
  },
  {
    q: 'How much does moving cost in Florida?',
    a: 'Moving costs in Florida depend on distance, home size, number of items, and services requested. Local Brevard County moves are typically priced hourly. Long distance moves may use flat-rate or weight-based pricing. Packing services can be added for an additional fee. Contact Beast Mode Movers for a free, no-obligation estimate.',
  },
  {
    q: 'How long does moving take?',
    a: 'A typical local move in Brevard County takes between 4 to 8 hours depending on your home size and distance. Long distance moves across Florida may take 1 to 2 days. Our team works efficiently to complete your move as quickly as possible without sacrificing care.',
  },
  {
    q: 'Do movers pack everything for you?',
    a: 'Yes! Beast Mode Movers offers full professional packing services. We bring all packing materials — boxes, tape, bubble wrap, furniture pads, and wardrobe boxes. Our team carefully wraps and labels every item so nothing gets lost or damaged. Packing can be added to any local or long distance move.',
  },
  {
    q: 'Do you move pianos and hot tubs?',
    a: 'Yes — we specialize in piano moves, hot tub moves, and spa moves. These specialty items require specific equipment and trained movers. Our team is fully equipped with the right tools and experience for every challenge. We serve Melbourne, Titusville, Rockledge, and surrounding Brevard County areas.',
  },
  {
    q: 'Are you licensed and insured movers in Florida?',
    a: 'Yes. Beast Mode Movers is a fully licensed and insured moving company operating in Florida. Your belongings are protected from the moment we pick them up to delivery at your new location. We carry all required Florida state licenses and liability coverage.',
  },
  {
    q: 'What is the difference between local and long distance moving?',
    a: 'Local moving refers to moves within the same city or county — such as within Brevard County, Florida. Long distance moving involves moves across county or state lines. Local moves are typically billed hourly, while long distance moves may be flat-rated. Beast Mode Movers handles both.',
  },
  {
    q: 'What Florida service areas do you cover?',
    a: 'We serve Brevard County including Melbourne, Titusville, Rockledge, Cocoa, Cocoa Beach, Palm Bay, Merritt Island, Viera, Satellite Beach, Cape Canaveral, West Melbourne, and surrounding areas. We also offer long distance moving throughout Florida. Contact us if your city isn\'t listed.',
  },
];

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
            <span className="text-[#70DC28]">QUESTIONS</span>
          </h2>
          <p className="text-neutral-500 text-sm mt-5 max-w-lg mx-auto leading-relaxed">
            Answers to the most common questions about moving with Beast Mode Movers in Florida.
          </p>
        </div>

        {/* AI Search Blocks */}
        <div className="grid md:grid-cols-2 gap-5 mb-12">
          {aiBlocks.map((block, i) => (
            <div key={i} className="bg-white rounded-xl p-6 border border-neutral-200 border-l-4 border-l-[#70DC28]">
              <p className="text-[10px] font-black text-[#70DC28] uppercase tracking-[0.2em] mb-2">Quick Answer</p>
              <p className="text-[#0f0f0f] font-bold text-sm mb-3">{block.q}</p>
              <p className="text-neutral-500 text-sm leading-relaxed">{block.a}</p>
            </div>
          ))}
        </div>

        {/* Moving Process Answer Block */}
        <div className="bg-[#0f0f0f] rounded-xl p-8 mb-12">
          <p className="text-[10px] font-black text-[#70DC28] uppercase tracking-[0.2em] mb-3">Moving Process Explained</p>
          <h3 className="font-bold text-white text-lg mb-3">How does the moving process work?</h3>
          <p className="text-white/55 text-sm leading-relaxed mb-4">
            The Beast Mode Movers process is simple: (1) Request a free quote — share your move details online or by phone. (2) Confirm your move date — we work around your schedule including evenings and weekends. (3) We pack &amp; protect — our team arrives with all materials. (4) Load &amp; transport — we drive safely to your new location. (5) Unload &amp; settle in — we place everything exactly where you want it.
          </p>
          <div className="flex gap-8">
            <div>
              <p className="font-bebas text-2xl text-[#70DC28]">4–8 hrs</p>
              <p className="text-white/35 text-xs">Typical local move</p>
            </div>
            <div>
              <p className="font-bebas text-2xl text-[#70DC28]">1–2 days</p>
              <p className="text-white/35 text-xs">Long distance move</p>
            </div>
            <div>
              <p className="font-bebas text-2xl text-[#70DC28]">100%</p>
              <p className="text-white/35 text-xs">Insured coverage</p>
            </div>
          </div>
        </div>

        {/* Accordion */}
        <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden mb-10">
          {faqs.map((faq, i) => (
            <div key={i} className={`${i > 0 ? 'border-t border-neutral-100' : ''}`}>
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

        {/* Before form CTA */}
        <div className="bg-[#70DC28] rounded-xl p-8 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <p className="font-bebas text-3xl text-[#0f0f0f] leading-tight">STILL HAVE QUESTIONS?</p>
            <p className="text-[#0f0f0f]/60 text-sm mt-1">Our team is ready to help — get your free estimate today.</p>
          </div>
          <a
            href="#contact"
            className="bg-[#0f0f0f] text-white px-8 py-3.5 rounded-md font-black text-sm whitespace-nowrap hover:bg-white hover:text-[#0f0f0f] transition-all cursor-pointer flex-shrink-0"
          >
            Get a Free Moving Quote →
          </a>
        </div>
      </div>
    </section>
  );
}
