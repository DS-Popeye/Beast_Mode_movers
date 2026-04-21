import { useState, FormEvent } from 'react';

const FORM_URL = 'https://readdy.ai/api/form/d6skihih642up23ipus0';

export default function LeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const form = e.currentTarget;
    const data = new URLSearchParams();
    const elements = form.elements as HTMLFormControlsCollection;

    Array.from(elements).forEach((el) => {
      const input = el as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
      if (input.name) {
        if (input.type === 'checkbox') {
          const cb = input as HTMLInputElement;
          if (cb.checked) data.append(input.name, cb.value);
        } else {
          data.append(input.name, input.value);
        }
      }
    });

    try {
      const res = await fetch(FORM_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: data.toString(),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-5 gap-0 rounded-lg overflow-hidden border border-white/10">
          {/* Left panel */}
          <div className="lg:col-span-2 bg-[#70DC28] p-10 flex flex-col justify-between">
            <div>
              <p className="font-bebas tracking-[0.25em] text-sm text-[#1a1a1a]/50 mb-3">
                FREE ESTIMATE
              </p>
              <h2 className="font-bebas text-4xl lg:text-5xl text-[#1a1a1a] leading-tight mb-6">
                GET YOUR
                <br />
                FREE MOVING
                <br />
                QUOTE
              </h2>
              <p className="text-[#1a1a1a]/70 text-sm leading-relaxed mb-8">
                Tell us about your move and we&apos;ll provide a no-obligation estimate. Serving
                Melbourne, Titusville, Rockledge &amp; all of Brevard County, FL.
              </p>

              <ul className="flex flex-col gap-4 mb-8">
                {[
                  'No hidden fees',
                  'Licensed & insured movers',
                  'Local & long distance moves',
                  'Packing services available',
                  'Piano & hot tub specialists',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 flex items-center justify-center bg-[#1a1a1a] rounded-full">
                      <i className="ri-check-line text-[#70DC28] text-xs"></i>
                    </div>
                    <span className="text-[#1a1a1a] text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-[#1a1a1a]/20 pt-6">
              <p className="text-[#1a1a1a]/60 text-xs">
                Beast Mode Movers &mdash; Florida&apos;s Premier Moving Company
                <br />
                Brevard County, FL &bull; www.beastmodemovers.com
              </p>
            </div>
          </div>

          {/* Right form */}
          <div className="lg:col-span-3 bg-white p-10">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <div className="w-16 h-16 bg-[#70DC28] rounded-full flex items-center justify-center mb-5">
                  <i className="ri-check-line text-[#1a1a1a] text-3xl"></i>
                </div>
                <h3 className="font-bebas text-4xl text-[#1a1a1a] mb-3">QUOTE REQUEST SENT!</h3>
                <p className="text-neutral-500 text-sm max-w-sm">
                  Thank you! We&apos;ve received your moving quote request and will follow up with
                  you shortly. Beast Mode Movers is ready to help you move.
                </p>
              </div>
            ) : (
              <form
                data-readdy-form
                id="moving-quote-form"
                onSubmit={handleSubmit}
                className="flex flex-col gap-5"
              >
                <h3 className="font-bebas text-3xl text-[#1a1a1a] mb-2">
                  Tell Us About Your Move
                </h3>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-600 mb-1.5 uppercase tracking-wide">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="full_name"
                      required
                      placeholder="John Smith"
                      className="w-full border border-neutral-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-[#70DC28] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-neutral-600 mb-1.5 uppercase tracking-wide">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="john@email.com"
                      className="w-full border border-neutral-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-[#70DC28] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-600 mb-1.5 uppercase tracking-wide">
                      Moving From *
                    </label>
                    <input
                      type="text"
                      name="moving_from"
                      required
                      placeholder="City, FL"
                      className="w-full border border-neutral-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-[#70DC28] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-neutral-600 mb-1.5 uppercase tracking-wide">
                      Moving To *
                    </label>
                    <input
                      type="text"
                      name="moving_to"
                      required
                      placeholder="City, FL"
                      className="w-full border border-neutral-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-[#70DC28] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-600 mb-1.5 uppercase tracking-wide">
                      Preferred Move Date
                    </label>
                    <input
                      type="date"
                      name="move_date"
                      className="w-full border border-neutral-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-[#70DC28] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-neutral-600 mb-1.5 uppercase tracking-wide">
                      Home Size
                    </label>
                    <select
                      name="home_size"
                      className="w-full border border-neutral-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-[#70DC28] transition-colors bg-white"
                    >
                      <option value="">Select size</option>
                      <option value="studio">Studio / 1 Bedroom</option>
                      <option value="2br">2 Bedrooms</option>
                      <option value="3br">3 Bedrooms</option>
                      <option value="4br">4+ Bedrooms</option>
                      <option value="office">Office / Commercial</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-600 mb-1.5 uppercase tracking-wide">
                    Service Type
                  </label>
                  <select
                    name="service_type"
                    className="w-full border border-neutral-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-[#70DC28] transition-colors bg-white"
                  >
                    <option value="">Select service</option>
                    <option value="local">Local Moving</option>
                    <option value="longdistance">Long Distance Moving</option>
                    <option value="residential">Residential Moving</option>
                    <option value="commercial">Commercial Moving</option>
                    <option value="packing">Packing Services</option>
                    <option value="piano">Piano Move</option>
                    <option value="hottub">Hot Tub / Spa Move</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-600 mb-1.5 uppercase tracking-wide">
                    Additional Details
                  </label>
                  <textarea
                    name="details"
                    rows={3}
                    maxLength={500}
                    placeholder="Tell us more about your move, any specialty items, or specific requirements..."
                    className="w-full border border-neutral-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-[#70DC28] transition-colors resize-none"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="packing_service"
                    value="Yes"
                    id="packing_check"
                    className="mt-0.5 cursor-pointer"
                  />
                  <label htmlFor="packing_check" className="text-sm text-neutral-600 cursor-pointer">
                    I&apos;m interested in packing services (we bring all materials)
                  </label>
                </div>

                {error && (
                  <p className="text-red-500 text-sm">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#70DC28] text-[#1a1a1a] py-4 rounded-md font-bold text-base whitespace-nowrap hover:bg-[#58C016] transition-colors cursor-pointer disabled:opacity-60"
                >
                  {loading ? 'Sending...' : 'Get My Free Moving Quote'}
                </button>

                <p className="text-neutral-400 text-xs text-center">
                  No spam. No obligation. We&apos;ll respond promptly with your free estimate.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
