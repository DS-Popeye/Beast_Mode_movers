import { useEffect, useMemo, useState } from 'react';
import testimonialsContent from '../../../content/testimonials.json';

type Testimonial = {
  id: string;
  name: string;
  location: string;
  role?: string;
  rating?: number;
  quote: string;
  initials?: string;
  featured?: boolean;
  image?: string;
};

const testimonials = testimonialsContent.testimonials as Testimonial[];
const carouselInterval = 6500;

export default function Testimonials() {
  const staticTestimonials = testimonials.slice(0, 3);
  const carouselTestimonials = testimonials.slice(3);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const maxSlide = Math.max(carouselTestimonials.length - 1, 0);

  useEffect(() => {
    if (isPaused || carouselTestimonials.length <= 1) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current >= maxSlide ? 0 : current + 1));
    }, carouselInterval);

    return () => window.clearInterval(timer);
  }, [carouselTestimonials.length, isPaused, maxSlide]);

  const trackStyle = useMemo(() => ({
    transform: `translateX(-${activeSlide * 100}%)`,
  }), [activeSlide]);

  const goToPrevious = () => {
    setActiveSlide((current) => (current <= 0 ? maxSlide : current - 1));
  };

  const goToNext = () => {
    setActiveSlide((current) => (current >= maxSlide ? 0 : current + 1));
  };

  return (
    <section id="reviews" className="py-24 bg-[#0f0f0f] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-[#70DC28] font-bebas tracking-[0.25em] text-sm mb-2">TESTIMONIALS</p>
            <h2 className="font-bebas text-5xl lg:text-7xl text-white leading-[0.9]">
              CUSTOMER
              <br />
              <span className="text-[#70DC28]">FEEDBACK</span>
            </h2>
          </div>
          <div className="max-w-sm lg:text-right">
            <p className="text-white/60 text-sm font-semibold">Moving experiences shared by customers</p>
            <p className="text-white/35 text-xs mt-2 leading-relaxed">
              Feedback is shown as customer-provided content. Exact ratings should be confirmed by the business before using review schema.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-8">
          {staticTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id || testimonial.name} testimonial={testimonial} />
          ))}
        </div>

        {carouselTestimonials.length > 0 && (
          <div
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocus={() => setIsPaused(true)}
            onBlur={() => setIsPaused(false)}
          >
            <div className="overflow-hidden">
              <div className="flex transition-transform duration-700 ease-out" style={trackStyle}>
                {carouselTestimonials.map((testimonial, idx) => (
                  <div key={testimonial.id || testimonial.name} className="min-w-full pr-0 md:pr-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <TestimonialCard testimonial={testimonial} />
                      <div className="hidden md:block">
                        <TestimonialCard testimonial={carouselTestimonials[(idx + 1) % carouselTestimonials.length]} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {carouselTestimonials.length > 1 && (
              <div className="mt-6 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  {carouselTestimonials.map((testimonial, idx) => (
                    <button
                      key={testimonial.id || testimonial.name}
                      type="button"
                      aria-label={`Show testimonial slide ${idx + 1}`}
                      aria-current={activeSlide === idx}
                      onClick={() => setActiveSlide(idx)}
                      className={`h-2.5 rounded-full transition-all cursor-pointer ${
                        activeSlide === idx ? 'w-8 bg-[#70DC28]' : 'w-2.5 bg-white/20 hover:bg-white/40'
                      }`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    aria-label="Show previous testimonial"
                    onClick={goToPrevious}
                    className="w-10 h-10 rounded-full border border-white/15 text-white/70 hover:text-[#0f0f0f] hover:bg-[#70DC28] hover:border-[#70DC28] transition-colors cursor-pointer flex items-center justify-center"
                  >
                    <i className="ri-arrow-left-line text-lg"></i>
                  </button>
                  <button
                    type="button"
                    aria-label="Show next testimonial"
                    onClick={goToNext}
                    className="w-10 h-10 rounded-full border border-white/15 text-white/70 hover:text-[#0f0f0f] hover:bg-[#70DC28] hover:border-[#70DC28] transition-colors cursor-pointer flex items-center justify-center"
                  >
                    <i className="ri-arrow-right-line text-lg"></i>
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        <div className="mt-12 border border-[#70DC28]/20 rounded-xl p-7 flex flex-col sm:flex-row items-center justify-between gap-6 bg-[#70DC28]/5">
          <div>
            <p className="text-white font-bold text-lg mb-1">Planning a move?</p>
            <p className="text-white/45 text-sm">Share your moving details and request a no-obligation estimate.</p>
          </div>
          <a
            href="#contact"
            className="bg-[#70DC28] text-[#0f0f0f] px-8 py-3.5 rounded-md font-black text-sm whitespace-nowrap hover:bg-[#58C016] transition-colors cursor-pointer flex-shrink-0"
          >
            Request a Moving Quote →
          </a>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const initials = testimonial.initials || testimonial.name.split(' ').map((part) => part[0]).join('').slice(0, 2);
  const decorativeStars = Math.max(0, Math.min(testimonial.rating || 0, 5));

  return (
    <article className="h-full min-h-[260px] p-7 rounded-xl border border-white/8 bg-white/4 hover:border-white/20 hover:bg-white/6 transition-all flex flex-col">
      <div className="flex gap-1 mb-5" aria-hidden="true">
        {Array.from({ length: decorativeStars }).map((_, index) => (
          <div key={index} className="w-4 h-4 flex items-center justify-center">
            <i className="ri-star-fill text-sm text-[#70DC28]"></i>
          </div>
        ))}
      </div>

      <div className="w-6 h-6 flex items-center justify-center mb-3" aria-hidden="true">
        <i className="ri-double-quotes-l text-2xl text-[#70DC28]/30"></i>
      </div>

      <p className="text-sm leading-relaxed mb-6 text-white/70 flex-1">
        {testimonial.quote}
      </p>

      <div className="flex items-center gap-3 mt-auto">
        <div className="w-10 h-10 rounded-full flex items-center justify-center font-black text-sm flex-shrink-0 overflow-hidden bg-white/10 text-white">
          {testimonial.image ? (
            <img src={testimonial.image} alt={testimonial.name} loading="lazy" decoding="async" className="w-full h-full rounded-full object-cover" />
          ) : (
            initials
          )}
        </div>
        <div>
          <p className="font-bold text-sm text-white">{testimonial.name}</p>
          <p className="text-xs text-white/35">
            {testimonial.location}{testimonial.role ? <>{' '}&middot;{' '}{testimonial.role}</> : ''}
          </p>
        </div>
      </div>
    </article>
  );
}
