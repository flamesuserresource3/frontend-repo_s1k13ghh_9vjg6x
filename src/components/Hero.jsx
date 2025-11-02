import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Subtle gradient & vignette to improve text readability without blocking the 3D scene */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/20 to-slate-950/80" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-center px-6 pt-28 sm:pt-32 md:pt-40 lg:pt-48">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
          <Sparkles className="h-4 w-4 text-amber-300" />
          <span className="text-sm text-white/80">Modern IT, crafted with care</span>
        </div>

        <h1 className="mt-6 text-center text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          Creative IT Services for Apps, Web, and AI
        </h1>
        <p className="mt-4 max-w-2xl text-center text-white/80 md:text-lg">
          We design and ship high-impact mobile apps, websites, custom systems, and AI solutions—fast, reliable, and beautifully engineered.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 font-medium text-emerald-950 transition hover:bg-emerald-400"
          >
            <Rocket className="h-5 w-5" /> Start a project
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 font-medium text-white transition hover:bg-white/10"
          >
            View capabilities
          </a>
        </div>

        <div className="pointer-events-none relative mt-14 w-full max-w-5xl rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
          <div className="grid grid-cols-2 gap-3 text-center text-xs text-white/70 sm:grid-cols-4">
            <div className="rounded-lg bg-white/5 px-3 py-2">Mobile Apps</div>
            <div className="rounded-lg bg-white/5 px-3 py-2">Web Platforms</div>
            <div className="rounded-lg bg-white/5 px-3 py-2">Custom Systems</div>
            <div className="rounded-lg bg-white/5 px-3 py-2">AI & Automation</div>
          </div>
        </div>

        <div className="h-24" />
      </div>
    </section>
  );
};

export default Hero;
