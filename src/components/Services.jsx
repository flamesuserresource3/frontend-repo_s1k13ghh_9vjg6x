import React from 'react';
import { Smartphone, Globe, Brain, Boxes, Shield } from 'lucide-react';

const services = [
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    desc: 'iOS and Android apps with native performance, offline-first data, and delightful UX.',
    points: ['React Native & native modules', 'App Store & Play Store ready', 'CI/CD & analytics']
  },
  {
    icon: Globe,
    title: 'Websites & Platforms',
    desc: 'High-performance sites, dashboards, and portals built for scale and accessibility.',
    points: ['Next.js & Vite stacks', 'SEO & a11y best practices', 'Edge-ready infrastructure']
  },
  {
    icon: Boxes,
    title: 'Custom Solutions',
    desc: 'ERP, CRM, and tailored tools that automate your unique workflows end-to-end.',
    points: ['Systems integration', 'Scalable architecture', 'Cloud-native deployments']
  },
  {
    icon: Brain,
    title: 'AI Solutions',
    desc: 'From recommendations to copilots—bring intelligence to your product with responsible AI.',
    points: ['LLM-powered features', 'RAG & vector search', 'Ethical & secure by design']
  },
];

const Services = () => {
  return (
    <section id="services" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">Services built for outcomes</h2>
            <p className="mt-2 max-w-xl text-white/70">
              We pair design thinking with robust engineering to craft solutions that move your business forward.
            </p>
          </div>
          <a href="#contact" className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium hover:bg-white/10">
            Get a quote
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc, points }) => (
            <div key={title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[.06] to-white/[.03] p-6 transition hover:border-emerald-400/40">
              <div className="mb-4 inline-flex rounded-xl bg-emerald-500/10 p-3 text-emerald-400 ring-1 ring-inset ring-emerald-400/20">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                {points.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <div className="pointer-events-none absolute -bottom-24 -right-24 h-48 w-48 rounded-full bg-emerald-400/10 blur-3xl transition duration-300 group-hover:scale-125" />
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
          <Shield className="h-5 w-5 text-emerald-400" />
          <p className="text-sm text-white/70">
            Security-first mindset: secure coding, audits, and compliance baked into our process.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
