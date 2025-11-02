import React from 'react';
import { ArrowRight } from 'lucide-react';

const cases = [
  {
    title: 'Fintech Mobile Suite',
    tag: 'Mobile App',
    impact: 'Onboarded 50k users in 90 days',
    gradient: 'from-emerald-500/30 via-cyan-500/20 to-indigo-500/30',
  },
  {
    title: 'Headless Commerce Platform',
    tag: 'Web Platform',
    impact: '+38% conversion after launch',
    gradient: 'from-rose-500/30 via-orange-500/20 to-yellow-500/30',
  },
  {
    title: 'AI Support Copilot',
    tag: 'AI Solution',
    impact: '60% deflection in L1 tickets',
    gradient: 'from-violet-500/30 via-fuchsia-500/20 to-pink-500/30',
  },
];

const CaseStudies = () => {
  return (
    <section id="work" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">Selected work</h2>
            <p className="mt-2 max-w-xl text-white/70">A snapshot of recent launches blending thoughtful design and robust engineering.</p>
          </div>
          <a href="#contact" className="hidden items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm hover:bg-white/10 md:inline-flex">
            See how we can help <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {cases.map((c) => (
            <article key={c.title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${c.gradient} opacity-30`} />
              <div className="relative">
                <div className="mb-3 inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/80">
                  {c.tag}
                </div>
                <h3 className="text-lg font-semibold leading-snug">{c.title}</h3>
                <p className="mt-2 text-sm text-white/70">{c.impact}</p>
              </div>
              <div className="relative mt-6 flex items-center gap-2 text-sm text-emerald-300">
                Explore case study <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
