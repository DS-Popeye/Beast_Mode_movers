const teamMembers = [
  {
    name: 'Lead Crew Team',
    role: 'Residential & Commercial Moves',
    desc: 'Our primary move crews handle everything from studio apartments to full home relocations. Trained in furniture protection, safe loading, and customer communication.',
    img: 'https://readdy.ai/api/search-image?query=Two%20professional%20movers%20in%20matching%20dark%20work%20shirts%20smiling%20confidently%2C%20standing%20in%20front%20of%20a%20clean%20white%20moving%20truck%20in%20Florida%20sunshine%2C%20professional%20headshot%20style%20photo%2C%20no%20logos%20no%20branding%20on%20clothing%20or%20vehicle%2C%20plain%20dark%20shirts%2C%20friendly%20and%20trustworthy%20appearance%2C%20high%20resolution%20commercial%20photography&width=600&height=500&seq=team-lead-v1&orientation=portrait',
  },
  {
    name: 'Specialty Crew',
    role: 'Piano, Hot Tub & Oversized Items',
    desc: 'Our specialty team is trained and equipped for piano moves, hot tub relocations, and oversized items. Specialized equipment, zero damage track record.',
    img: 'https://readdy.ai/api/search-image?query=Professional%20moving%20crew%20wearing%20dark%20work%20uniforms%20carefully%20using%20straps%20and%20equipment%20to%20move%20large%20piano%20or%20heavy%20furniture%2C%20detailed%20professional%20action%20shot%2C%20outdoor%20Florida%20setting%2C%20no%20logos%20no%20text%20on%20clothing%2C%20strong%20professional%20workers%2C%20high%20resolution%20commercial%20photography&width=600&height=500&seq=team-specialty-v1&orientation=portrait',
  },
  {
    name: 'Office Move Team',
    role: 'Commercial & Office Relocations',
    desc: 'Specialized in commercial moves scheduled around business hours. Evenings, weekends, minimal downtime. Office furniture, IT equipment, and full office builds handled.',
    img: 'https://readdy.ai/api/search-image?query=Professional%20office%20mover%20in%20dark%20uniform%20carefully%20packing%20and%20moving%20office%20furniture%20and%20boxes%20in%20a%20modern%20Florida%20office%20environment%2C%20organized%20commercial%20moving%20service%2C%20no%20logos%20no%20branding%20on%20clothing%2C%20high%20resolution%20professional%20photography%2C%20clean%20minimal%20office%20setting&width=600&height=500&seq=team-office-v1&orientation=portrait',
  },
];

export default function AboutTeam() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-14">
          <p className="text-[#70DC28] font-bebas tracking-[0.3em] text-sm mb-2">OUR CREWS</p>
          <h2 className="font-bebas text-5xl lg:text-6xl text-[#0f0f0f] leading-tight">
            EXPERIENCED TEAMS<br />
            <span className="text-[#70DC28]">FOR EVERY MOVE</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {teamMembers.map((member) => (
            <div key={member.name} className="border border-neutral-200 rounded-lg overflow-hidden">
              <div className="w-full h-52 overflow-hidden">
                <img src={member.img} alt={member.name} loading="lazy" decoding="async" className="w-full h-full object-cover object-top" />
              </div>
              <div className="p-6">
                <p className="text-[#70DC28] text-xs font-bold tracking-widest uppercase mb-1">{member.role}</p>
                <h3 className="font-bebas text-2xl text-[#0f0f0f] mb-3">{member.name}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{member.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
