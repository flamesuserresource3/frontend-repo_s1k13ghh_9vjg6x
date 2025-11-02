import React from 'react';

const stats = [
  { label: 'Projects shipped', value: '120+' },
  { label: 'Avg. time to MVP', value: '6–10 weeks' },
  { label: 'Client NPS', value: '72' },
  { label: 'Uptime on managed apps', value: '99.95%' },
];

const Stats = () => {
  return (
    <section className="relative w-full bg-slate-950 py-12 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 text-center sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-2xl font-semibold">{s.value}</div>
              <div className="mt-1 text-xs text-white/70">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
