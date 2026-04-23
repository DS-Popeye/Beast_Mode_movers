import servicesContent from '../../../content/services.json';

type ServiceKey = keyof typeof servicesContent;

type EditableService = {
  title: string;
  subtitle?: string;
  description: string;
  image?: string;
  image_alt?: string;
  features?: string[];
  cta_button?: string;
};

type ServiceStyle = {
  id: string;
  icon: string;
  bg: string;
  textColor: string;
  descColor: string;
  iconColor: string;
  featureIconColor: string;
  featureTextColor: string;
};

const serviceStyles: Record<ServiceKey, ServiceStyle> = {
  local_moving: {
    id: 'local',
    icon: 'ri-map-2-line',
    bg: 'bg-[#0f0f0f]',
    textColor: 'text-white',
    descColor: 'text-white/55',
    iconColor: 'text-[#70DC28]',
    featureIconColor: 'text-[#70DC28]',
    featureTextColor: 'text-white/65',
  },
  long_distance_moving: {
    id: 'longdistance',
    icon: 'ri-road-map-line',
    bg: 'bg-[#70DC28]',
    textColor: 'text-[#0f0f0f]',
    descColor: 'text-[#0f0f0f]/65',
    iconColor: 'text-[#0f0f0f]',
    featureIconColor: 'text-[#0f0f0f]',
    featureTextColor: 'text-[#0f0f0f]/70',
  },
  moving_service: {
    id: 'residential',
    icon: 'ri-home-2-line',
    bg: 'bg-neutral-100',
    textColor: 'text-[#0f0f0f]',
    descColor: 'text-neutral-500',
    iconColor: 'text-[#70DC28]',
    featureIconColor: 'text-[#70DC28]',
    featureTextColor: 'text-neutral-500',
  },
  commercial_moving: {
    id: 'commercial',
    icon: 'ri-building-2-line',
    bg: 'bg-[#0f0f0f]',
    textColor: 'text-white',
    descColor: 'text-white/55',
    iconColor: 'text-[#70DC28]',
    featureIconColor: 'text-[#70DC28]',
    featureTextColor: 'text-white/65',
  },
  packing_service: {
    id: 'packing',
    icon: 'ri-archive-2-line',
    bg: 'bg-neutral-100',
    textColor: 'text-[#0f0f0f]',
    descColor: 'text-neutral-500',
    iconColor: 'text-[#70DC28]',
    featureIconColor: 'text-[#70DC28]',
    featureTextColor: 'text-neutral-500',
  },
  specialty_moves: {
    id: 'specialty',
    icon: 'ri-music-2-line',
    bg: 'bg-[#70DC28]',
    textColor: 'text-[#0f0f0f]',
    descColor: 'text-[#0f0f0f]/65',
    iconColor: 'text-[#0f0f0f]',
    featureIconColor: 'text-[#0f0f0f]',
    featureTextColor: 'text-[#0f0f0f]/70',
  },
};

const serviceOrder: ServiceKey[] = [
  'local_moving',
  'long_distance_moving',
  'moving_service',
  'commercial_moving',
  'packing_service',
  'specialty_moves',
];

const services = serviceOrder.map((key) => {
  const service = servicesContent[key] as EditableService;
  return {
    ...serviceStyles[key],
    ...service,
    features: service.features || [],
  };
});

export default function Services() {
  return (
    <section id="services" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-[#70DC28] font-bebas tracking-[0.3em] text-sm mb-2">WHAT WE DO</p>
            <h2 className="font-bebas text-5xl lg:text-7xl text-[#0f0f0f] leading-[0.9]">
              MOVING SERVICES
              <br />
              <span className="text-[#70DC28]">BUILT FOR FLORIDA</span>
            </h2>
          </div>
          <div className="max-w-sm">
            <p className="text-neutral-500 text-sm leading-relaxed">
              From local Brevard County moves to long distance relocations, residential movers,
              commercial movers, and specialty moves all under one roof.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-200">
          {services.map((service) => (
            <div
              key={service.id}
              className={`${service.bg} relative overflow-hidden group cursor-pointer flex flex-col`}
            >
              {service.image && (
                <div className="w-full h-44 overflow-hidden flex-shrink-0">
                  <img
                    src={service.image}
                    alt={service.image_alt || service.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-600"
                  />
                </div>
              )}

              <div className="p-8 flex flex-col flex-1">
                <div className="w-10 h-10 flex items-center justify-center mb-4">
                  <i className={`${service.icon} text-2xl ${service.iconColor}`}></i>
                </div>
                <p className={`text-[10px] font-bold tracking-[0.2em] uppercase mb-2 opacity-50 ${service.textColor}`}>
                  {service.subtitle}
                </p>
                <h3 className={`font-bebas text-3xl leading-tight mb-3 ${service.textColor}`}>
                  {service.title}
                </h3>
                <p className={`text-sm leading-relaxed mb-5 flex-1 ${service.descColor}`}>
                  {service.description}
                </p>
                <ul className="flex flex-col gap-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <div className="w-4 h-4 flex items-center justify-center flex-shrink-0">
                        <i className={`ri-check-line text-sm ${service.featureIconColor}`}></i>
                      </div>
                      <span className={`text-xs font-medium ${service.featureTextColor}`}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-[#0f0f0f] rounded-lg px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <p className="text-white font-bold text-base mb-0.5">Need a custom quote for your move?</p>
            <p className="text-white/45 text-sm">Residential movers, commercial movers, local and long distance, we do it all.</p>
          </div>
          <a
            href="#contact"
            className="bg-[#70DC28] text-[#0f0f0f] px-8 py-3.5 rounded-md font-black text-sm whitespace-nowrap hover:bg-[#58C016] transition-colors cursor-pointer flex-shrink-0"
          >
            Get a Free Moving Quote &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
