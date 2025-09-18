import React from 'react';

const CTA = () => {
  return (
    <section id="cta" className="bg-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Have more questions? We can help!</h2>
        <button className="mt-6 bg-blue-900 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-800 transition-colors">
          Request a Callback
        </button>
      </div>
    </section>
  );
};

export default CTA;