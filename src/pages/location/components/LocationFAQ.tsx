import { useState } from 'react';
import { Link } from 'react-router-dom';

const localFaqs = [
  { q: 'Do you provide moving services near Melbourne, FL?', a: 'The website lists Melbourne, Titusville, Rockledge, and Brevard County as Florida service area references. Customers should contact the team to confirm availability for a specific address.' },
  { q: 'Can I request apartment moving help?', a: 'Yes. Customers can request apartment moving support and should include elevator, stair, parking, loading zone, and building access details in the quote form.' },
  { q: 'Do you help with packing and loading?', a: 'Customers can ask about packing, loading, unloading, or partial moving support. The team can confirm what is available for the requested move.' },
  { q: 'Can businesses request commercial moving support?', a: 'Yes. Businesses can request help with office furniture, boxed supplies, workstations, and other commercial moving needs.' },
  { q: 'Do you handle furniture and equipment moving?', a: 'Customers can request support for bulky furniture, appliances, office items, exercise equipment, and other large belongings. Item details help the team plan properly.' },
  { q: 'How do I confirm whether my location is covered?', a: 'Use the quote form and include pickup and delivery addresses. The moving team can follow up about service coverage and availability.' },
];

export default function LocationFAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-3 gap-16">
          <div>
            <p className="text-[#70DC28] font-bebas tracking-[0.3em] text-sm mb-2">SERVICE AREA FAQ</p>
            <h2 className="font-bebas text-4xl lg:text-5xl text-[#0f0f0f] leading-tight mb-5">MOVING IN MELBOURNE, FL - COMMON QUESTIONS</h2>
            <p className="text-neutral-500 text-sm leading-relaxed">Answers for customers checking local moving support and service availability in the listed Florida areas.</p>
            <Link to="/#contact" className="inline-block mt-6 bg-[#70DC28] text-[#0f0f0f] px-6 py-3 rounded-md font-bold text-sm whitespace-nowrap hover:bg-[#58C016] transition-colors cursor-pointer">Confirm Service Area →</Link>
          </div>
          <div className="lg:col-span-2 flex flex-col gap-3">
            {localFaqs.map((faq, idx) => (
              <div key={faq.q} className="border border-neutral-200 rounded-lg overflow-hidden">
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
