import servicePageContent from '../../../content/servicePages.json';

type ServiceSection = {
  id: string;
  title: string;
  summary: string;
  cta: string;
};

const sections = servicePageContent.service_sections as ServiceSection[];

export default function ServiceContentSections() {
  return (
    <section className="py-20 bg-white" id="detailed-services">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mb-14">
          <p className="text-[#70DC28] font-bebas tracking-[0.3em] text-sm mb-2">SERVICE DETAILS</p>
          <h2 className="font-bebas text-5xl lg:text-6xl text-[#0f0f0f] leading-tight">
            MOVING SERVICES FOR<br />
            <span className="text-[#70DC28]">HOMES, APARTMENTS &amp; BUSINESSES</span>
          </h2>
          <p className="text-neutral-500 text-sm leading-relaxed mt-5">
            Explore the core moving services customers can request through Beast Mode Movers. Each move is different, so exact availability and scope should be confirmed through the quote form.
          </p>
        </div>

        <div className="grid gap-6">
          {sections.map((service) => (
            <article key={service.id} id={service.id} className="border border-neutral-200 rounded-lg p-7 lg:p-9 bg-neutral-50">
              <div className="grid lg:grid-cols-[1fr_auto] gap-6 items-start">
                <div>
                  <h2 className="font-bebas text-3xl lg:text-4xl text-[#0f0f0f] leading-tight mb-4">
                    {service.title}
                  </h2>
                  <p className="text-neutral-600 text-sm lg:text-base leading-relaxed">
                    {service.summary}
                  </p>
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center bg-[#70DC28] text-[#0f0f0f] px-6 py-3 rounded-md font-black text-sm whitespace-nowrap hover:bg-[#58C016] transition-colors cursor-pointer"
                >
                  {service.cta} →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
