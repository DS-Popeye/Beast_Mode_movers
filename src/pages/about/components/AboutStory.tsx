export default function AboutStory() {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="w-full h-[420px] rounded-lg overflow-hidden">
            <img
              src="https://readdy.ai/api/search-image?query=Interior%20of%20a%20moving%20truck%20cab%20with%20professional%20organized%20moving%20equipment%20neatly%20stored%2C%20ropes%20straps%20blankets%20and%20dollies%20visible%20through%20open%20truck%20bay%20doors%2C%20Florida%20professional%20moving%20company%20operations%2C%20golden%20afternoon%20light%2C%20photorealistic%20commercial%20photography%2C%20no%20logos%20no%20branding%2C%20clean%20organized%20professional%20storage&width=800&height=600&seq=about-story-v1&orientation=landscape"
              alt="Our story — Beast Mode Movers"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div>
            <p className="text-[#70DC28] font-bebas tracking-[0.3em] text-sm mb-3">OUR STORY</p>
            <h2 className="font-bebas text-5xl lg:text-6xl text-[#0f0f0f] leading-tight mb-6">
              BUILT IN BREVARD,<br />
              <span className="text-[#70DC28]">BUILT FOR FLORIDA</span>
            </h2>
            <div className="space-y-4">
              <p className="text-neutral-600 text-sm leading-relaxed">
                Beast Mode Movers was founded right here in Brevard County by local residents who were tired of hearing the same moving horror stories — late crews, broken furniture, surprise fees. We knew we could do better.
              </p>
              <p className="text-neutral-600 text-sm leading-relaxed">
                We started with a single truck and a simple commitment: show up on time, handle everything with care, and charge exactly what we quote. That approach earned us a five-star reputation that now spans hundreds of completed moves across Melbourne, Titusville, Rockledge, and beyond.
              </p>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Today, Beast Mode Movers is one of Brevard County&apos;s most trusted moving companies. We&apos;ve expanded our fleet and crew, added specialty services including piano moving and hot tub relocation, and still maintain the same personal standards we started with.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
