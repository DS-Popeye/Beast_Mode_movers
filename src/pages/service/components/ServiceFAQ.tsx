import { useState } from 'react';
import { Link } from 'react-router-dom';
import servicePageContent from '../../../content/servicePages.json';

type FAQ = {
  q: string;
  a: string;
};

const faqs = servicePageContent.faqs as FAQ[];

export default function ServiceFAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section className="py-20 bg-white" id="services-faq">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-3 gap-16">
          <div>
            <p className="text-[#70DC28] font-bebas tracking-[0.3em] text-sm mb-2">COMMON QUESTIONS</p>
            <h2 className="font-bebas text-4xl lg:text-5xl text-[#0f0f0f] leading-tight mb-5">
              MOVING SERVICES FAQ
            </h2>
            <p className="text-neutral-500 text-sm leading-relaxed">
              Clear answers about residential moving, apartment moving, commercial moving, packing, loading, and local service availability.
            </p>
            <Link
              to="/#contact"
              className="inline-block mt-6 bg-[#70DC28] text-[#0f0f0f] px-6 py-3 rounded-md font-bold text-sm whitespace-nowrap hover:bg-[#58C016] transition-colors cursor-pointer"
            >
              Ask About Your Move →
            </Link>
          </div>
          <div className="lg:col-span-2 flex flex-col gap-3">
            {faqs.map((faq, idx) => (
              <div key={faq.q} className="border border-neutral-200 rounded-lg overflow-hidden">
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
