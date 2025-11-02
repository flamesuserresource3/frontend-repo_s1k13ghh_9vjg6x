import React from 'react';
import { Rocket } from 'lucide-react';

const CTA = () => {
  return (
    <section id="contact" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-rose-500/5 to-transparent" />

      <div className="relative mx-auto max-w-5xl px-6">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 sm:p-12">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold sm:text-4xl">Let’s build something exceptional</h2>
              <p className="mt-3 text-white/70">
                Tell us about your idea and we’ll come back with a tailored plan, timeline, and transparent pricing.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-white/70">
                <div className="rounded-xl bg-white/5 px-4 py-3">Fixed-scope or retainer</div>
                <div className="rounded-xl bg-white/5 px-4 py-3">Design + Engineering</div>
                <div className="rounded-xl bg-white/5 px-4 py-3">Weekly updates</div>
                <div className="rounded-xl bg-white/5 px-4 py-3">Post-launch support</div>
              </div>
            </div>

            <form className="space-y-4">
              <div>
                <label className="mb-1 block text-sm text-white/70">Name</label>
                <input
                  type="text"
                  required
                  className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 outline-none placeholder:text-white/40 focus:border-emerald-400"
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-white/70">Email</label>
                <input
                  type="email"
                  required
                  className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 outline-none placeholder:text-white/40 focus:border-emerald-400"
                  placeholder="jane@company.com"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-white/70">What are you building?</label>
                <textarea
                  rows={4}
                  required
                  className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 outline-none placeholder:text-white/40 focus:border-emerald-400"
                  placeholder="Mobile app, website, custom tool, AI assistant..."
                />
              </div>
              <button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 font-medium text-emerald-950 hover:bg-emerald-400">
                <Rocket className="h-5 w-5" /> Request proposal
              </button>
              <p className="text-xs text-white/50">By submitting, you agree to our privacy policy.</p>
            </form>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-white/50">© {new Date().getFullYear()} Your IT Studio. All rights reserved.</p>
      </div>
    </section>
  );
};

export default CTA;
