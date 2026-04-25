const services = [
  { label: 'Local Moving', href: '#services' },
  { label: 'Long Distance Moving', href: '#services' },
  { label: 'Residential Moving', href: '#services' },
  { label: 'Commercial Moving', href: '#services' },
  { label: 'Packing Services', href: '#services' },
  { label: 'Piano Moving', href: '#services' },
  { label: 'Hot Tub & Spa Moves', href: '#services' },
];

const quickLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Service Areas', href: '#areas' },
  { label: 'Moving Process', href: '#process' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
  { label: 'Gallery', href: '#gallery' },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-neutral-200">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-4 cursor-pointer">
              <img
                src="https://static.readdy.ai/image/81164d3ba0f00c2a7e247a9f180c9b75/c0aef1825a99ab99fe6cdac8109d7888.png"
                alt="Beast Mode Movers"
                loading="lazy"
                decoding="async"
                className="h-16 w-auto object-contain"
              />
            </a>
            <p className="text-neutral-500 text-sm leading-relaxed mb-6">
              Florida&apos;s trusted moving company serving Melbourne, Titusville, Rockledge &amp;
              all of Brevard County. Licensed, insured &amp; built to move.
            </p>
            <div className="flex gap-3">
              {['ri-facebook-fill', 'ri-instagram-line', 'ri-google-fill'].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  rel="nofollow noopener"
                  className="w-9 h-9 border border-neutral-200 rounded-full flex items-center justify-center text-neutral-500 hover:border-[#70DC28] hover:text-[#58C016] transition-colors cursor-pointer"
                >
                  <i className={`${icon} text-sm`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 id="footer-services">
              <a href="#services" className="font-bebas text-lg tracking-wider text-[#58C016] mb-5 block">
                OUR SERVICES
              </a>
            </h4>
            <ul className="flex flex-col gap-3">
              {services.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="text-neutral-500 hover:text-[#58C016] text-sm transition-colors cursor-pointer"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 id="footer-links">
              <a href="#" className="font-bebas text-lg tracking-wider text-[#58C016] mb-5 block">
                QUICK LINKS
              </a>
            </h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-neutral-500 hover:text-[#58C016] text-sm transition-colors cursor-pointer"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 id="footer-contact">
              <a href="#contact" className="font-bebas text-lg tracking-wider text-[#58C016] mb-5 block">
                CONTACT US
              </a>
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <i className="ri-map-pin-2-line text-[#58C016] text-base"></i>
                </div>
                <span className="text-neutral-600 text-sm">
                  Melbourne, FL
                  <br />
                  Brevard County, Florida
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <i className="ri-global-line text-[#58C016] text-base"></i>
                </div>
                <a
                  href="https://beast-mode-movers.netlify.app/"
                  rel="nofollow"
                  className="text-neutral-500 hover:text-[#58C016] text-sm transition-colors cursor-pointer"
                >
                  beast-mode-movers.netlify.app
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <i className="ri-mail-line text-[#58C016] text-base"></i>
                </div>
                <a
                  href="#contact"
                  className="text-neutral-500 hover:text-[#58C016] text-sm transition-colors cursor-pointer"
                >
                  Send Us a Message
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <a
                href="#contact"
                className="block bg-[#70DC28] text-[#0f0f0f] px-5 py-3 rounded-md font-bold text-sm text-center whitespace-nowrap hover:bg-[#58C016] transition-colors cursor-pointer"
              >
                Get Free Quote
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Green divider */}
      <div className="h-px bg-[#70DC28]/40 mx-6 lg:mx-12" />

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <p className="text-neutral-400 text-xs">
            &copy; 2026 Beast Mode Movers. All rights reserved.
          </p>
          <span className="hidden sm:flex items-center gap-1 bg-neutral-100 px-3 py-1 rounded-full">
            <i className="ri-shield-check-line text-[#58C016] text-xs"></i>
            <span className="text-neutral-500 text-xs">Licensed &amp; Insured</span>
          </span>
        </div>
        <div className="flex gap-5">
          <a href="#" rel="nofollow" className="text-neutral-400 hover:text-neutral-700 text-xs transition-colors cursor-pointer">
            Privacy Policy
          </a>
          <a href="#" rel="nofollow" className="text-neutral-400 hover:text-neutral-700 text-xs transition-colors cursor-pointer">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
