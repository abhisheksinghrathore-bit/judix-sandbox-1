"use client";
import React, { useState } from 'react';

const PricingCard = ({ plan, popular, price, features, buttonText, isHighlighted }) => (
  <div className={`border rounded-xl p-6 flex flex-col bg-white transition-transform duration-300 ${isHighlighted ? 'transform scale-105 shadow-2xl border-teal-500 border-2' : 'border-gray-200 shadow-lg'}`}>
    {popular && <span className="text-xs font-semibold bg-teal-100 text-teal-800 py-1 px-3 rounded-full self-start mb-4">Most Popular</span>}
    <h3 className="text-lg font-semibold text-gray-800">{plan}</h3>
    <p className="text-5xl font-bold text-gray-900 mt-2">{price}<span className="text-xl font-medium text-gray-500">/-</span></p>
    <p className="text-gray-500 text-sm mt-1">For one day access</p>
    
    <button className={`mt-6 w-full py-3 rounded-lg font-semibold transition-colors ${popular ? 'bg-blue-900 text-white hover:bg-blue-800' : 'border border-blue-900 text-blue-900 hover:bg-blue-50'}`}>
      {buttonText}
    </button>
    
    <ul className="mt-6 space-y-4 text-gray-600 text-sm flex-grow">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <svg className="w-4 h-4 mr-3 text-teal-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('yearly');

  const plans = {
    monthly: [
      { plan: 'Daily', price: '₹149', features: ['Unlimited searches', '10 document downloads', 'Access to all case laws', 'Email support'], popular: false },
      { plan: 'Monthly', price: '₹1499', features: ['Unlimited searches', '100 document downloads', 'Access to all case laws', 'Priority email support', 'Access to legislations', 'Advanced search filters'], popular: true },
      { plan: 'Quarterly', price: '₹4199', features: ['All Monthly features', 'Phone support', 'Personalized alerts'], popular: false },
    ],
    yearly: [
      { plan: 'Daily', price: '₹149', features: ['Unlimited searches', '10 document downloads', 'Access to all case laws', 'Email support'], popular: false },
      { plan: 'Monthly', price: '₹1249', features: ['Unlimited searches', '100 document downloads', 'Access to all case laws', 'Priority email support', 'Access to legislations', 'Advanced search filters'], popular: true },
      { plan: 'Quarterly', price: '₹3499', features: ['All Monthly features', 'Phone support', 'Personalized alerts'], popular: false },
    ]
  };
  
  const currentPlans = plans[billingCycle];

  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center space-x-4 mb-12">
          <span className={`cursor-pointer font-medium ${billingCycle === 'monthly' ? 'text-gray-800' : 'text-gray-500'}`} onClick={() => setBillingCycle('monthly')}>Monthly</span>
          <label htmlFor="toggle" className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" id="toggle" className="sr-only peer" checked={billingCycle === 'yearly'} onChange={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')} />
            <div className="w-14 h-8 bg-gray-200 rounded-full peer peer-checked:bg-teal-100 transition-colors"></div>
            <div className="absolute top-1 left-1 bg-white w-6 h-6 rounded-full transition-transform peer-checked:translate-x-6"></div>
          </label>
          <span className={`cursor-pointer font-medium ${billingCycle === 'yearly' ? 'text-teal-600' : 'text-gray-500'}`} onClick={() => setBillingCycle('yearly')}>Yearly</span>
          <span className="bg-orange-100 text-orange-600 text-xs font-semibold px-2.5 py-1 rounded-full">-15%</span>
        </div>

        <div className="grid gap-10 lg:grid-cols-3 items-center">
          {currentPlans.map((p, index) => (
            <PricingCard 
              key={index}
              plan={p.plan}
              price={p.price}
              features={p.features}
              popular={p.popular}
              buttonText="Start Free Trial"
              isHighlighted={p.popular}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;