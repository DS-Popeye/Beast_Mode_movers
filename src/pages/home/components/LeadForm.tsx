import { FormEvent, useState } from 'react';
import formsContent from '../../../content/forms.json';

const FORM_URL = 'https://readdy.ai/api/form/d6skihih642up23ipus0';

type FormField = {
  name: string;
  type: 'text' | 'email' | 'date' | 'select' | 'textarea' | 'checkbox';
  label: string;
  required?: boolean;
  placeholder?: string;
  options?: string[];
  value?: string;
};

type LeadFormContent = {
  eyebrow?: string;
  cta_title: string;
  cta_description: string;
  trust_points?: string[];
  footer_note?: string;
  form_title: string;
  success_title: string;
  success_message: string;
  form_fields: FormField[];
  cta_button_text: string;
  privacy_note?: string;
};

const leadForm = formsContent.lead_form as LeadFormContent;

function toOptionValue(option: string) {
  return option.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '');
}

function renderField(field: FormField) {
  const baseClass = 'w-full border border-neutral-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-[#70DC28] transition-colors';

  if (field.type === 'checkbox') {
    return (
      <div key={field.name} className="flex items-start gap-3">
        <input
          type="checkbox"
          name={field.name}
          value={field.value || 'Yes'}
          id={field.name}
          required={field.required}
          className="mt-0.5 cursor-pointer"
        />
        <label htmlFor={field.name} className="text-sm text-neutral-600 cursor-pointer">
          {field.label}
        </label>
      </div>
    );
  }

  return (
    <div key={field.name} className={field.type === 'textarea' ? 'sm:col-span-2' : undefined}>
      <label className="block text-xs font-semibold text-neutral-600 mb-1.5 uppercase tracking-wide">
        {field.label}{field.required ? ' *' : ''}
      </label>
      {field.type === 'select' ? (
        <select
          name={field.name}
          required={field.required}
          className={`${baseClass} bg-white`}
          defaultValue=""
        >
          <option value="">Select {field.label.toLowerCase()}</option>
          {(field.options || []).map((option) => (
            <option key={option} value={toOptionValue(option)}>
              {option}
            </option>
          ))}
        </select>
      ) : field.type === 'textarea' ? (
        <textarea
          name={field.name}
          required={field.required}
          rows={3}
          maxLength={500}
          placeholder={field.placeholder}
          className={`${baseClass} resize-none`}
        />
      ) : (
        <input
          type={field.type}
          name={field.name}
          required={field.required}
          placeholder={field.placeholder}
          className={baseClass}
        />
      )}
    </div>
  );
}

export default function LeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const form = e.currentTarget;
    const data = new URLSearchParams();
    const elements = form.elements as HTMLFormControlsCollection;

    Array.from(elements).forEach((el) => {
      const input = el as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
      if (input.name) {
        if (input.type === 'checkbox') {
          const cb = input as HTMLInputElement;
          if (cb.checked) data.append(input.name, cb.value);
        } else {
          data.append(input.name, input.value);
        }
      }
    });

    try {
      const res = await fetch(FORM_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: data.toString(),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-5 gap-0 rounded-lg overflow-hidden border border-white/10">
          <div className="lg:col-span-2 bg-[#70DC28] p-10 flex flex-col justify-between">
            <div>
              {leadForm.eyebrow && (
                <p className="font-bebas tracking-[0.25em] text-sm text-[#1a1a1a]/50 mb-3">
                  {leadForm.eyebrow}
                </p>
              )}
              <h2 className="font-bebas text-4xl lg:text-5xl text-[#1a1a1a] leading-tight mb-6">
                {leadForm.cta_title}
              </h2>
              <p className="text-[#1a1a1a]/70 text-sm leading-relaxed mb-8">
                {leadForm.cta_description}
              </p>

              {!!leadForm.trust_points?.length && (
                <ul className="flex flex-col gap-4 mb-8">
                  {leadForm.trust_points.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <div className="w-5 h-5 flex items-center justify-center bg-[#1a1a1a] rounded-full">
                        <i className="ri-check-line text-[#70DC28] text-xs"></i>
                      </div>
                      <span className="text-[#1a1a1a] text-sm font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {leadForm.footer_note && (
              <div className="border-t border-[#1a1a1a]/20 pt-6">
                <p className="text-[#1a1a1a]/60 text-xs whitespace-pre-line">
                  {leadForm.footer_note}
                </p>
              </div>
            )}
          </div>

          <div className="lg:col-span-3 bg-white p-10">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <div className="w-16 h-16 bg-[#70DC28] rounded-full flex items-center justify-center mb-5">
                  <i className="ri-check-line text-[#1a1a1a] text-3xl"></i>
                </div>
                <h3 className="font-bebas text-4xl text-[#1a1a1a] mb-3">{leadForm.success_title}</h3>
                <p className="text-neutral-500 text-sm max-w-sm">
                  {leadForm.success_message}
                </p>
              </div>
            ) : (
              <form
                data-readdy-form
                id="moving-quote-form"
                onSubmit={handleSubmit}
                className="flex flex-col gap-5"
              >
                <h3 className="font-bebas text-3xl text-[#1a1a1a] mb-2">
                  {leadForm.form_title}
                </h3>

                <div className="grid sm:grid-cols-2 gap-5">
                  {leadForm.form_fields.map(renderField)}
                </div>

                {error && (
                  <p className="text-red-500 text-sm">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#70DC28] text-[#1a1a1a] py-4 rounded-md font-bold text-base whitespace-nowrap hover:bg-[#58C016] transition-colors cursor-pointer disabled:opacity-60"
                >
                  {loading ? 'Sending...' : leadForm.cta_button_text}
                </button>

                {leadForm.privacy_note && (
                  <p className="text-neutral-400 text-xs text-center">
                    {leadForm.privacy_note}
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
