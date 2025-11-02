import React from 'react';
import { Cpu, Cloud, Database, ShieldCheck, Sparkles } from 'lucide-react';

const items = [
  { icon: Cpu, title: 'Frontend', stack: 'React, Vite, Next.js, Tailwind' },
  { icon: Database, title: 'Data', stack: 'Postgres, MongoDB, Redis' },
  { icon: Cloud, title: 'Cloud', stack: 'AWS, Vercel, Fly.io, Docker' },
  { icon: ShieldCheck, title: 'Security', stack: 'Auth, OWASP, SOC2 mindset' },
];

const Tech = () => {
  return (
    <section id="stack" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">Tech that scales</h2>
            <p className="mt-2 max-w-xl text-white/70">Opinionated choices for velocity today and flexibility tomorrow.</p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm">
            <Sparkles className="h-4 w-4 text-cyan-300" /> Preferred toolkit
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, stack }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="mb-3 inline-flex rounded-xl bg-cyan-500/10 p-3 text-cyan-300 ring-1 ring-inset ring-cyan-400/20">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{stack}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tech;
