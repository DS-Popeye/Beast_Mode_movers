import { Link } from 'react-router-dom';

export default function LocationMap() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-10">
          <p className="text-[#70DC28] font-bebas tracking-[0.3em] text-sm mb-2">OUR SERVICE AREA</p>
          <h2 className="font-bebas text-5xl lg:text-6xl text-[#0f0f0f] leading-tight">WE SERVE MELBOURNE &amp;<br /><span className="text-[#70DC28]">ALL OF BREVARD COUNTY</span></h2>
        </div>
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 rounded-lg overflow-hidden border border-neutral-200 h-[440px]">
            <iframe title="Beast Mode Movers — Melbourne, FL" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.5232867764616!2d-80.71561572403593!3d28.319275600000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88de102776341c77%3A0x6c64d9cf33106086!2sBeast%20Mode%20Movers!5e0!3m2!1sen!2sus!4v1710862400000!5m2!1sen!2sus" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
          <div className="flex flex-col gap-4">
            <div className="bg-neutral-50 rounded-lg p-6 border border-neutral-200">
              <h3 className="font-bebas text-2xl text-[#0f0f0f] mb-4">PRIMARY SERVICE CITIES</h3>
              <ul className="flex flex-col gap-2.5">
                {['Melbourne, FL','Titusville, FL','Rockledge, FL','Palm Bay, FL','Cocoa Beach, FL','Merritt Island, FL','Satellite Beach, FL','Viera, FL','Cape Canaveral, FL'].map((city) => (
                  <li key={city} className="flex items-center gap-2.5">
                    <div className="w-4 h-4 flex items-center justify-center"><i className="ri-map-pin-line text-[#70DC28] text-sm"></i></div>
                    <span className="text-neutral-600 text-sm">{city}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#70DC28] rounded-lg p-6">
              <p className="font-bebas text-2xl text-[#0f0f0f] mb-2">OUTSIDE OUR AREA?</p>
              <p className="text-[#0f0f0f]/65 text-sm mb-4">We also handle long distance moves from Melbourne to anywhere in Florida or beyond.</p>
              <Link to="/#contact" className="block bg-[#0f0f0f] text-white px-5 py-3 rounded-md font-bold text-sm text-center whitespace-nowrap hover:bg-[#1a1a1a] transition-colors cursor-pointer">Ask About Your City →</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
