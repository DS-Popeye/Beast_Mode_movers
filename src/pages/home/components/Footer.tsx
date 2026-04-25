import { Link } from 'react-router-dom';
import siteContent from '../../../content/site.json';

const services = [
  { label: 'Local Moving', href: '/services#local-moving-support' },
  { label: 'Long Distance Moving', href: '/services' },
  { label: 'Residential Moving', href: '/services#residential-moving' },
  { label: 'Commercial Moving', href: '/services#commercial-moving' },
  { label: 'Packing Services', href: '/services#packing-loading' },
  { label: 'Piano Moving', href: '/services' },
  { label: 'Hot Tub & Spa Moves', href: '/services' },
];

const quickLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Service Areas', href: '/locations' },
  { label: 'Moving Process', href: '/#process' },
  { label: 'Reviews', href: '/#reviews' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Contact', href: '/#contact' },
  { label: 'Gallery', href: '/#gallery' },
];

const site = siteContent as {
  contactEmail?: string;
  contactLocation?: string;
  websiteUrl?: string;
  facebookUrl?: string;
  instagramUrl?: string;
  googleUrl?: string;
};

function normalizeUrl(url?: string) {
  return (url || '').trim();
}

export default function Footer() {
  const websiteUrl = normalizeUrl(site.websiteUrl) || 'https://beast-mode-movers.netlify.app/';
  const websiteLabel = websiteUrl.replace(/^https?:\/\//, '').replace(/\/$/, '');
  const contactEmail = normalizeUrl(site.contactEmail);
  const socialLinks = [
    { label: 'Facebook', icon: 'ri-facebook-fill', href: normalizeUrl(site.facebookUrl) },
    { label: 'Instagram', icon: 'ri-instagram-line', href: normalizeUrl(site.instagramUrl) },
    { label: 'Google or Email', icon: 'ri-google-fill', href: normalizeUrl(site.googleUrl) || (contactEmail ? `mailto:${contactEmail}` : '') },
  ].filter((item) => item.href);

  return (
    <footer className="bg-white border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4 cursor-pointer">
              <img
                src="https://static.readdy.ai/image/81164d3ba0f00c2a7e247a9f180c9b75/c0aef1825a99ab99fe6cdac8109d7888.png"
                alt="Beast Mode Movers"
                loading="lazy"
                decoding="async"
                className="h-16 w-auto object-contain"
              />
            </Link>
            <p className="text-neutral-500 text-sm leading-relaxed mb-6">
              Florida&apos;s moving company serving Melbourne, Titusville, Rockledge &amp; Brevard County.
              Built to help with local moves.
            </p>
            {socialLinks.length > 0 && (
              <div className="flex gap-3">
                {socialLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={item.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                    aria-label={item.label}
                    className="w-9 h-9 border border-neutral-200 rounded-full flex items-center justify-center text-neutral-500 hover:border-[#70DC28] hover:text-[#58C016] transition-colors cursor-pointer"
                  >
                    <i className={`${item.icon} text-sm`}></i>
                  </a>
                ))}
              </div>
            )}
          </div>

          <div>
            <h4 className="font-bebas text-lg tracking-wider text-[#58C016] mb-5">
              OUR SERVICES
            </h4>
            <ul className="flex flex-col gap-3">
              {services.map((service) => (
                <li key={service.label}>
                  <Link
                    to={service.href}
                    className="text-neutral-500 hover:text-[#58C016] text-sm transition-colors cursor-pointer"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bebas text-lg tracking-wider text-[#58C016] mb-5">
              QUICK LINKS
            </h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-neutral-500 hover:text-[#58C016] text-sm transition-colors cursor-pointer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bebas text-lg tracking-wider text-[#58C016] mb-5">
              CONTACT US
            </h4>
            <ul className="flex flex-col gap-4">
              {site.contactLocation && (
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i className="ri-map-pin-2-line text-[#58C016] text-base"></i>
                  </div>
                  <span className="text-neutral-600 text-sm whitespace-pre-line">
                    {site.contactLocation}
                  </span>
                </li>
              )}
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <i className="ri-global-line text-[#58C016] text-base"></i>
                </div>
                <a
                  href={websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-500 hover:text-[#58C016] text-sm transition-colors cursor-pointer"
                >
                  {websiteLabel}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <i className="ri-mail-line text-[#58C016] text-base"></i>
                </div>
                {contactEmail ? (
                  <a
                    href={`mailto:${contactEmail}`}
                    className="text-neutral-500 hover:text-[#58C016] text-sm transition-colors cursor-pointer"
                  >
                    {contactEmail}
                  </a>
                ) : (
                  <Link
                    to="/#contact"
                    className="text-neutral-500 hover:text-[#58C016] text-sm transition-colors cursor-pointer"
                  >
                    Send Us a Message
                  </Link>
                )}
              </li>
            </ul>

            <div className="mt-6">
              <Link
                to="/#contact"
                className="block bg-[#70DC28] text-[#0f0f0f] px-5 py-3 rounded-md font-bold text-sm text-center whitespace-nowrap hover:bg-[#58C016] transition-colors cursor-pointer"
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="h-px bg-[#70DC28]/40 mx-6 lg:mx-12" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-neutral-400 text-xs">
          &copy; 2026 Beast Mode Movers. All rights reserved.
        </p>
        <div className="flex gap-5">
          <Link to="/#contact" rel="nofollow" className="text-neutral-400 hover:text-neutral-700 text-xs transition-colors cursor-pointer">
            Privacy Policy
          </Link>
          <Link to="/#contact" rel="nofollow" className="text-neutral-400 hover:text-neutral-700 text-xs transition-colors cursor-pointer">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
