import { useState } from 'react';

export default function FloatingCTA() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {expanded && (
        <div className="bg-[#0f0f0f] border border-white/15 rounded-xl p-5 mb-1 w-56 shadow-2xl">
          <div className="flex items-center gap-2 mb-3">
            <img
              src="https://static.readdy.ai/image/81164d3ba0f00c2a7e247a9f180c9b75/c0aef1825a99ab99fe6cdac8109d7888.png"
              alt="Beast Mode Movers"
              loading="lazy"
              decoding="async"
              className="h-7 w-auto object-contain"
            />
          </div>
          <p className="text-white/50 text-xs mb-4 leading-relaxed">
            Serving Brevard County, FL — local &amp; long distance moves.
          </p>
          <a
            href="#contact"
            onClick={() => setExpanded(false)}
            className="block bg-[#70DC28] text-[#0f0f0f] py-3 px-4 rounded-lg font-black text-sm text-center whitespace-nowrap hover:bg-[#58C016] transition-colors cursor-pointer"
          >
            Get Free Quote →
          </a>
          <a
            href="#contact"
            onClick={() => setExpanded(false)}
            className="block mt-2.5 border border-white/15 text-white/70 py-2.5 px-4 rounded-lg font-semibold text-xs text-center whitespace-nowrap hover:border-white/30 hover:text-white transition-all cursor-pointer"
          >
            <div className="w-full flex items-center justify-center gap-1.5">
              <i className="ri-phone-line text-xs"></i>
              Call For Quote
            </div>
          </a>
        </div>
      )}

      <button
        onClick={() => setExpanded(!expanded)}
        className="w-14 h-14 bg-[#70DC28] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#58C016] transition-all shadow-lg hover:scale-105"
        aria-label="Get a free moving quote"
      >
        <div className="w-6 h-6 flex items-center justify-center">
          <i className={`${expanded ? 'ri-close-line' : 'ri-chat-quote-line'} text-[#0f0f0f] text-xl`}></i>
        </div>
      </button>

      {/* Pulsing ring when closed */}
      {!expanded && (
        <div className="absolute inset-0 rounded-full border-2 border-[#70DC28]/30 animate-ping pointer-events-none" />
      )}
    </div>
  );
}
