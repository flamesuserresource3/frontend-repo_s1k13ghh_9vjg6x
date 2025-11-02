import React from 'react';
import { Rocket } from 'lucide-react';

const links = [
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Work' },
  { href: '#process', label: 'Process' },
  { href: '#stack', label: 'Tech' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#faq', label: 'FAQ' },
];

const Navbar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-slate-950/70 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-white">
        <a href="#" className="inline-flex items-center gap-2 font-semibold">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500 text-emerald-950">
            <Rocket className="h-4 w-4" />
          </span>
          <span>StudioNova</span>
        </a>
        <ul className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm text-white/80 hover:text-white">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-emerald-950 hover:bg-emerald-400">
          Start a project
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
