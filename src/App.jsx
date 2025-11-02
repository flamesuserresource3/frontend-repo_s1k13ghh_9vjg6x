import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import CTA from './components/CTA';

const App = () => {
  return (
    <div className="font-inter antialiased">
      <Hero />
      <Services />
      <Process />
      <CTA />
    </div>
  );
};

export default App;
