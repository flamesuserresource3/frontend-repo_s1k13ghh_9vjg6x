import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import Process from './components/Process';
import Tech from './components/Tech';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="font-inter antialiased bg-slate-950">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <CaseStudies />
      <Process />
      <Tech />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default App;
