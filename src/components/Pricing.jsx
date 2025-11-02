import React from 'react';
import { CheckCircle } from 'lucide-react';

const tiers = [
  {
    name: 'Sprint Starter',
    price: '$8k',
    desc: '2-week focused sprint to validate a concept or deliver a critical feature.',
    features: ['Discovery workshop', 'Design prototype', 'Dev sprint', 'Test & handoff'],
    highlight: false,
  },
  {
    name: 'Product Launch',
    price: '$35k+',
    desc: 'End-to-end MVP for web or mobile with analytics and deploys.',
    features: ['UX/UI design', 'Full-stack build', 'CI/CD & monitoring', 'Launch support'],
    highlight: true,
  },
  {
    name: 'Scale Partner',
    price: 'Custom',
    desc: 'Ongoing roadmap delivery with dedicated team and SLAs.',
    features: ['Dedicated squad', 'Backlog shaping', 'Weekly releases', 'Security reviews'],
    highlight: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Flexible engagements</h2>
          <p className="mt-2 text-white/70">Start small, launch fast, or scale with a long-term partner.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative rounded-2xl border border-white/10 p-6 ${
                t.highlight ? 'bg-gradient-to-b from-emerald-500/20 to-emerald-500/5' : 'bg-white/5'
              }`}
            >
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-semibold">{t.name}</h3>
                <div className="text-2xl font-bold">{t.price}</div>
              </div>
              <p className="mt-2 text-sm text-white/70">{t.desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-400" /> {f}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="mt-6 inline-block rounded-lg bg-emerald-500 px-4 py-2 font-medium text-emerald-950 hover:bg-emerald-400">
                Choose {t.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
