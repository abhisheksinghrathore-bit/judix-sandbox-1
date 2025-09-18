import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="py-24 text-center bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest">PRICING</p>
        <h1 className="mt-6 text-4xl font-extrabold sm:text-5xl lg:text-6xl leading-tight">
          <span className="text-teal-600">Smarter Legal Research</span>
          <br />
          <span className="text-gray-800">at the price of your daily coffee</span>
        </h1>
        <p className="mt-8 max-w-2xl mx-auto text-sm text-gray-500">
          Start with 14 days free trial, upgrade when you need more.
        </p>
      </div>
    </section>
  );
};

export default Hero;