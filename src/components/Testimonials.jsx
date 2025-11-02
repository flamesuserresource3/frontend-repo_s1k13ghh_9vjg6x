import React from 'react';
import { Quote, Star, Users } from 'lucide-react';

const testimonials = [
  {
    name: 'Amelia Carter',
    role: 'Product Lead, FinEdge',
    quote:
      'They shipped our MVP in record time without sacrificing quality. Communication was stellar and the outcomes speak for themselves.',
  },
  {
    name: 'Marcus Lee',
    role: 'CTO, NovaRetail',
    quote:
      'From architecture to pixels, the team is world-class. Our conversion rates jumped and infra costs dropped.',
  },
  {
    name: 'Priya Kumar',
    role: 'Head of Ops, Helio',
    quote:
      'The AI copilot transformed support. We now resolve issues faster and our team is freed up for higher-value work.',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">Clients say nice things</h2>
            <p className="mt-2 max-w-xl text-white/70">Partnerships built on trust, delivery, and measurable impact.</p>
          </div>
          <div className="hidden items-center gap-2 text-sm text-white/70 md:flex">
            <Users className="h-4 w-4" /> 50+ happy partners
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="relative rounded-2xl border border-white/10 bg-white/5 p-6">
              <Quote className="h-6 w-6 text-emerald-300" />
              <blockquote className="mt-3 text-sm text-white/80">{t.quote}</blockquote>
              <figcaption className="mt-4 text-sm text-white/70">
                <div className="font-medium text-white">{t.name}</div>
                <div>{t.role}</div>
              </figcaption>
              <div className="mt-3 inline-flex items-center gap-1 text-amber-300">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
