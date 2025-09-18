"use client";
import React, { useState } from 'react';

// --- INLINE SVG ICONS ---
const PlusIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
);
const MinusIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 12H6" /></svg>
);
const WhatsAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="inline-block text-green-500 w-5 h-5" fill="currentColor"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.8 0-67.6-9.5-97.8-26.7l-7-4.1-72.5 19.1 19.4-70.5-4.5-7.3C51.9 358.3 48 311.4 48 267.3 48 176.5 124.8 100 223.9 100c46.2 0 89.3 18.1 122.2 51.1 32.8 33 50.1 75.8 50.1 122.5.1 91-76.7 166.8-168.2 166.8zm105.2-124.5c-3.8-1.9-22.1-10.9-25.6-12.1-3.4-1.2-5.9-1.9-8.4 1.9-2.5 3.8-9.7 12.1-11.9 14.6-2.2 2.5-4.5 2.8-8.3 1-3.8-1.9-16.1-5.9-30.7-19-11.3-10.3-19-23-21.2-27.1-2.2-4.1-.2-6.3 1.7-8.2 1.6-1.6 3.8-4.2 5.7-6.2 1.9-2 2.5-3.8 3.8-6.3 1.2-2.5.6-4.9-.3-6.8-1-1.9-8.4-20.1-11.5-27.5-3.1-7.4-6.2-6.3-8.5-6.3-2.2 0-4.9-.3-7.4-.3-2.5 0-6.5.9-9.9 4.4-3.4 3.5-13.1 12.8-13.1 31.1 0 18.3 13.4 36.1 15.3 38.6 1.9 2.5 26.1 40 63.1 55.7 8.8 3.6 15.7 5.8 21 7.6 10.7 3.3 20.4 2.9 28 1.8 8.1-1.1 22.1-9.1 25.2-17.6 3.1-8.5 3.1-15.7 2.2-17.6-.9-1.9-3.4-3.1-7.2-5.1z"/></svg>
);
const TwitterIcon = () => (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
);
const InstagramIcon = () => (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.644-.069 4.85-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98C23.986 15.667 24 15.259 24 12s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98C15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"/></svg>
);
const LinkedinIcon = () => (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
);
const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="inline-block ml-2 h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.518.759a11.03 11.03 0 006.257 6.257l.759-1.518a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
);

// Header Component
const Header = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <img src="/Logotype.png" alt="Judix Logo" className="h-8 w-auto" />
                    </div>
                    <div className="flex items-center space-x-8">
                        <nav className="hidden md:flex md:space-x-8">
                            <button onClick={() => scrollToSection('pricing')} className="text-gray-600 hover:text-gray-900">Pricing</button>
                            <button onClick={() => scrollToSection('faq')} className="text-gray-600 hover:text-gray-900">Customers</button>
                            <button onClick={() => scrollToSection('faq')} className="text-gray-600 hover:text-gray-900">About</button>
                        </nav>
                        <div className="hidden md:block">
                            <a href="#" className="px-4 py-2 text-sm font-medium text-white bg-blue-900 rounded-md hover:bg-blue-800">
                                Request a Call Back
                            </a>
                        </div>
                    </div>
                    <div className="md:hidden">
                        <button className="text-gray-600 hover:text-gray-900">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};


// Hero Component
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

// PricingCard Component
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

// Pricing Component
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

// Addons Component
const Addons = () => (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-gray-200 rounded-lg p-8">
                <h3 className="text-lg font-semibold text-gray-800">Ask your research queries directly on <WhatsAppIcon /> WhatsApp</h3>
                <p className="mt-2 text-gray-600">Get legal research assistance on the go. Whether you're in court or on the move, our team is ready to assist you with your queries.</p>
                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                    <li className="flex items-start"><svg className="w-4 h-4 mr-2 text-teal-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>On-demand research</li>
                    <li className="flex items-start"><svg className="w-4 h-4 mr-2 text-teal-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>Expert legal analysis</li>
                </ul>
                <div className="mt-6 flex items-center justify-between">
                    <p className="text-2xl font-bold">₹49 <span className="text-sm font-normal text-gray-500">/ query</span></p>
                    <button className="bg-teal-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-teal-600">Activate Plan</button>
                </div>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
                <h3 className="text-lg font-semibold text-gray-800">Want custom pricing?</h3>
                <p className="mt-2 text-gray-600">We offer custom plans for teams and law firms. Get in touch with us to discuss your specific needs.</p>
                <button className="mt-6 bg-blue-900 text-white font-semibold py-2 px-6 rounded-md hover:bg-blue-800">Request a Callback</button>
            </div>
        </div>
      </div>
    </section>
  );

// SavingsCalculator Component
const SavingsCalculator = () => {
    const [searches, setSearches] = useState(50);
    const potentialSavings = searches * 12 * 50; // Example calculation
    return (
        <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
                <div className="border border-gray-200 rounded-lg p-8">
                    <h2 className="text-2xl font-bold text-center text-gray-900">Your Potential Savings</h2>
                    <p className="mt-2 text-center text-gray-600">See how much you could save on legal research with Judix.</p>
                    <div className="mt-6">
                        <label htmlFor="searches" className="block text-sm font-medium text-gray-700">Number of case searches per month</label>
                        <input type="range" id="searches" min="10" max="500" value={searches} onChange={(e) => setSearches(e.target.value)} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-2" />
                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                            <span>10</span>
                            <span>{searches}</span>
                            <span>500</span>
                        </div>
                    </div>
                    <div className="mt-6 bg-teal-50 border border-teal-200 rounded-lg p-6 text-center">
                        <p className="text-gray-600">Potential annual savings</p>
                        <p className="text-4xl font-bold text-teal-600 mt-2">₹{potentialSavings.toLocaleString('en-IN')}</p>
                    </div>
                    <p className="text-xs text-gray-500 mt-4 text-center">
                        *This is an estimate based on average time and cost savings. Actual savings may vary.
                    </p>
                </div>
            </div>
        </section>
    );
};

// CTA Component
const CTA = () => (
    <section className="py-20 text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900">Have more questions?</h2>
        <p className="mt-2 text-lg text-gray-600">Our team is here to help you.</p>
        <button className="mt-6 bg-blue-900 text-white font-semibold py-3 px-8 rounded-md hover:bg-blue-800">
            Contact Sales -{'>'}
        </button>
      </div>
    </section>
  );
  
// FAQ Component
const AccordionItem = ({ question, answer, isOpen, onClick }) => (
    <div className="border-b border-gray-200 py-4">
        <button onClick={onClick} className="w-full flex justify-between items-center text-left text-gray-800">
            <span className="font-medium">{question}</span>
            <span>{isOpen ? <MinusIcon /> : <PlusIcon />}</span>
        </button>
        {isOpen && <div className="mt-4 text-gray-600">{answer}</div>}
    </div>
);

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const faqs = [{ question: "What is Judix and how does it work?", answer: "Judix is a legal research platform designed to streamline your workflow by providing AI-powered insights and comprehensive case analysis." }, { question: "What should I do to start using Judix?", answer: "To start, simply sign up for our 14-day free trial. No credit card required. You can explore all the features and see how Judix can benefit your practice." }, { question: "Can I upgrade or downgrade my plan anytime?", answer: "Yes, you have the flexibility to upgrade, downgrade, or cancel your plan at any time through your account settings." },];
    const handleClick = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <section id="faq" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
                <h2 className="text-3xl font-bold text-center text-gray-900">Frequently Asked Questions</h2>
                <div className="mt-8">
                    {faqs.map((faq, index) => (<AccordionItem key={index} question={faq.question} answer={faq.answer} isOpen={openIndex === index} onClick={() => handleClick(index)} />))}
                </div>
            </div>
        </section>
    );
};

// Footer Component
const Footer = () => (
    <footer className="bg-[#0F1E2C] text-gray-300 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h2 className="text-4xl font-thin text-white tracking-wider">Judix</h2>
                    <p className="mt-2 text-sm">Simplifying Legal Complexity with AI</p>
                </div>
                <div>
                    <h3 className="text-white font-semibold">Product</h3>
                    <ul className="mt-4 space-y-3 text-sm">
                        <li><a href="#" className="hover:text-white">Legal Research</a></li>
                        <li><a href="#" className="hover:text-white">AI Workspace</a></li>
                        <li><a href="#" className="hover:text-white">Document Intelligence</a></li>
                        <li><a href="#" className="hover:text-white">Case Management</a></li>
                    </ul>
                </div>
                <div>
                    <a href="#" className="inline-block w-full text-center mb-6 bg-white text-gray-800 font-semibold py-2 px-4 rounded-md hover:bg-gray-200">
                        Request a callback <PhoneIcon />
                    </a>
                    <h3 className="text-white font-semibold">Follow Us</h3>
                    <div className="flex space-x-4 mt-4">
                        <a href="#" className="hover:text-white"><TwitterIcon /></a>
                        <a href="#" className="hover:text-white"><InstagramIcon /></a>
                        <a href="#" className="hover:text-white"><LinkedinIcon /></a>
                    </div>
                    <form className="mt-6">
                        <input type="email" placeholder="Email Address" className="w-full p-2 rounded-md bg-gray-800 border border-gray-600 focus:outline-none focus:border-teal-500" />
                        <button type="submit" className="mt-2 w-full bg-teal-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-teal-600">
                            Join us today !!
                        </button>
                    </form>
                </div>
            </div>
            <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm">
                <p>Judix Labs @ 2025. All rights reserved.</p>
            </div>
        </div>
    </footer>
);


// Main Home Component
export default function Home() {
    return (
        <div className="bg-white text-gray-800">
            <Header />
            <main>
                <Hero />
                <Pricing />
                <Addons />
                <SavingsCalculator />
                <CTA />
                <FAQ />
            </main>
            <Footer />
        </div>
    );
}