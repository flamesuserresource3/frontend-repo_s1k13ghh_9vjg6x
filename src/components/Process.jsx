import React from 'react';
import { Rocket, Sparkles } from 'lucide-react';

const steps = [
  {
    step: '01',
    title: 'Discover',
    text: 'Workshops to align goals, define scope, and map key user journeys.'
  },
  {
    step: '02',
    title: 'Design',
    text: 'Rapid prototyping and visual design to validate ideas early.'
  },
  {
    step: '03',
    title: 'Build',
    text: 'Iterative development with automated testing and CI/CD pipelines.'
  },
  {
    step: '04',
    title: 'Launch & Grow',
    text: 'Release, monitor, and continuously improve with data-driven insights.'
  }
];

const Process = () => {
  return (
    <section className="relative w-full bg-slate-950 py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">A process that ships</h2>
            <p className="mt-2 max-w-xl text-white/70">
              Transparent, collaborative, and built to deliver value early and often.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm">
            <Sparkles className="h-4 w-4 text-indigo-300" />
            <span>Proven delivery framework</span>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.step} className="relative rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm font-mono text-white/60">{s.step}</div>
              <h3 className="mt-1 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-white/70">{s.text}</p>
              <div className="pointer-events-none absolute -bottom-10 -right-10 h-24 w-24 rounded-full bg-indigo-400/10 blur-2xl" />
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/10 bg-gradient-to-r from-indigo-500/10 to-emerald-500/10 p-6">
          <div>
            <h3 className="text-lg font-semibold">Ready to accelerate your roadmap?</h3>
            <p className="text-sm text-white/70">Sprints, milestones, and clear communication—no guesswork.</p>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-indigo-500 px-4 py-2 font-medium text-indigo-950 hover:bg-indigo-400">
            <Rocket className="h-5 w-5" /> Book a discovery call
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;
