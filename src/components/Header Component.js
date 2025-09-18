"use client";
import React from 'react';

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
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <img src="/Logotype.png" alt="Judix Logo" className="h-10 w-auto" />
          </div>
          
          <div className="flex items-center space-x-8">
            <nav className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('hero')} className="text-gray-600 hover:text-blue-900 font-medium">Product</button>
              <button onClick={() => scrollToSection('pricing')} className="text-gray-600 hover:text-blue-900 font-medium">Pricing</button>
              <button onClick={() => scrollToSection('cta')} className="text-gray-600 hover:text-blue-900 font-medium">Customers</button>
              <button onClick={() => scrollToSection('faq')} className="text-gray-600 hover:text-blue-900 font-medium">About</button>
            </nav>
            
            <div className="hidden md:block">
              <a href="#" className="px-5 py-2.5 text-sm font-semibold text-white bg-blue-900 rounded-lg hover:bg-blue-800 transition-colors">
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

export default Header;