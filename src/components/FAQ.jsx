import React from 'react';
import { HelpCircle } from 'lucide-react';

const faqs = [
  {
    q: 'How quickly can we start?',
    a: 'Typically within 1–2 weeks after a discovery call and scope alignment.'
  },
  {
    q: 'Do you work with existing teams?',
    a: 'Yes. We can integrate with your designers and engineers or operate as a self-sufficient squad.'
  },
  {
    q: 'What about code ownership?',
    a: 'You own all IP and code. We hand off repositories, documentation, and credentials at launch.'
  },
  {
    q: 'How do you price projects?',
    a: 'Fixed-scope for well-defined work, and retainers for ongoing delivery. Transparent and milestone-based.'
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-10 flex items-center gap-3">
          <HelpCircle className="h-6 w-6 text-emerald-300" />
          <h2 className="text-3xl font-semibold sm:text-4xl">Frequently asked</h2>
        </div>

        <div className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/5">
          {faqs.map((f) => (
            <div key={f.q} className="p-6">
              <h3 className="text-base font-medium">{f.q}</h3>
              <p className="mt-1 text-sm text-white/70">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
