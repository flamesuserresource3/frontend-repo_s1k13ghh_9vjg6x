import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-slate-950 py-10 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-sm text-white/60">© {new Date().getFullYear()} StudioNova — Crafted with care.</p>
        <div className="flex items-center gap-4 text-sm text-white/60">
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#work" className="hover:text-white">Work</a>
          <a href="#contact" className="hover:text-white">Contact</a>
          <a href="#faq" className="hover:text-white">FAQ</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
