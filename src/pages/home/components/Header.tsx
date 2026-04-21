import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About Us', href: '/about' },
  { label: 'Locations', href: '/locations' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 bg-white transition-all duration-300 ${scrolled ? 'shadow-md border-b border-neutral-100' : 'border-b border-neutral-200'}`}>
      <div className="px-6 lg:px-16 flex items-center justify-between h-[76px]">
        {/* Logo */}
        <Link to="/" className="cursor-pointer flex items-center flex-shrink-0">
          <img
            src="https://static.readdy.ai/image/81164d3ba0f00c2a7e247a9f180c9b75/c0aef1825a99ab99fe6cdac8109d7888.png"
            alt="Beast Mode Movers"
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="text-neutral-700 hover:text-[#58C016] text-[13px] font-semibold tracking-wide transition-colors whitespace-nowrap cursor-pointer"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+1"
            className="flex items-center gap-2 text-neutral-800 hover:text-[#58C016] px-4 py-2 rounded-md text-[13px] font-bold transition-all whitespace-nowrap cursor-pointer border border-neutral-200 hover:border-[#70DC28]"
          >
            <div className="w-4 h-4 flex items-center justify-center">
              <i className="ri-phone-fill text-[#58C016] text-sm"></i>
            </div>
            Call For Quote
          </a>
          <a
            href="#contact"
            className="bg-[#70DC28] text-[#0f0f0f] px-5 py-2.5 rounded-md font-bold text-[13px] whitespace-nowrap hover:bg-[#58C016] transition-colors cursor-pointer shadow-sm"
          >
            Get Free Quote →
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden w-10 h-10 flex items-center justify-center text-neutral-800 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className={`ri-${menuOpen ? 'close' : 'menu'}-line text-2xl`}></i>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-neutral-100 shadow-lg">
          <nav className="flex flex-col px-6 py-4 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-neutral-700 hover:text-[#58C016] text-base font-semibold py-3 border-b border-neutral-100 transition-colors cursor-pointer"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="#contact"
              className="mt-4 bg-[#70DC28] text-[#0f0f0f] px-5 py-3.5 rounded-md font-bold text-sm text-center whitespace-nowrap cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              Get Free Moving Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
