import React from 'react';

const Addons = () => {
  return (
    <section id="addons" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Add-on Card 1 */}
          <div className="border border-gray-200 rounded-xl p-8 shadow-lg">
            <p className="font-semibold text-gray-500">ADD ON</p>
            <h3 className="text-xl font-bold text-gray-900 mt-2">Ask your research queries directly on <span className="text-green-500">Whatsapp</span></h3>
            <p className="text-gray-600 mt-2">Get instant, accurate answers to your legal questions from our AI-powered assistant, right within your favorite messaging app.</p>
            <ul className="text-sm text-gray-600 mt-4 space-y-2">
              <li className="flex items-start"><span className="text-green-500 mr-2 mt-1">✓</span><span>Quick and convenient legal help</span></li>
              <li className="flex items-start"><span className="text-green-500 mr-2 mt-1">✓</span><span>Powered by advanced AI technology</span></li>
              <li className="flex items-start"><span className="text-green-500 mr-2 mt-1">✓</span><span>Affordable pricing plans</span></li>
            </ul>
            <div className="mt-6 flex justify-between items-center">
              <div>
                <p className="text-4xl font-bold">₹49<span className="text-lg font-medium text-gray-500">/Query</span></p>
                <p className="text-xs text-gray-500">Inclusive of GST, T&C apply</p>
              </div>
              <button className="bg-green-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-green-600 transition-colors">
                Ask on Whatsapp
              </button>
            </div>
          </div>

          {/* Add-on Card 2 */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-blue-900">Want custom pricing?</h3>
            <p className="text-gray-600 mt-2">We offer tailored plans for law firms, educational institutions, and large teams. Contact us to get a personalized quote.</p>
            <button className="mt-6 bg-blue-900 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-800 transition-colors">
              Request a Call Back
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Addons;