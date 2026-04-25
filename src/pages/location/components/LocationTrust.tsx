const trustItems = [
  { icon: 'ri-customer-service-2-line', label: 'Customer-Focused Planning', desc: 'Customers can share move details through the quote form so the team can review scope and availability.' },
  { icon: 'ri-shield-check-line', label: 'Careful Item Handling', desc: 'Furniture, boxes, and bulky belongings can be discussed before move day so the moving plan is clear.' },
  { icon: 'ri-map-pin-2-line', label: 'Listed Florida Service Areas', desc: 'The website lists Melbourne, Titusville, Rockledge, and Brevard County as service area references.' },
  { icon: 'ri-time-line', label: 'Availability by Quote', desc: 'Move dates, building access, and service details should be confirmed directly with the moving team.' },
];

export default function LocationTrust() {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-14">
          <p className="text-[#70DC28] font-bebas tracking-[0.3em] text-sm mb-3">LOCAL MOVING SUPPORT</p>
          <h2 className="font-bebas text-5xl lg:text-6xl text-[#0f0f0f] leading-tight">
            PLANNED AROUND<br />
            <span className="text-[#70DC28]">YOUR MOVE DETAILS</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item) => (
            <div key={item.label} className="bg-white rounded-lg p-7 border border-neutral-200">
              <div className="w-10 h-10 flex items-center justify-center bg-[#70DC28]/10 rounded-md mb-5">
                <i className={`${item.icon} text-[#70DC28] text-xl`}></i>
              </div>
              <h3 className="font-bebas text-xl text-[#0f0f0f] mb-2">{item.label}</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
