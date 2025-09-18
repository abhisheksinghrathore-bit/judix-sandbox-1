"use client";
import React, { useState } from 'react';

const AccordionItem = ({ question, answer, isOpen, onClick }) => (
  <div className="border-b border-gray-200 py-5">
    <button onClick={onClick} className="w-full flex justify-between items-center text-left text-gray-800 focus:outline-none">
      <span className="font-semibold text-lg">{question}</span>
      <span className="text-gray-500">
        {isOpen 
          ? <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" /></svg>
          : <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
        }
      </span>
    </button>
    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen mt-4' : 'max-h-0'}`}>
      <p className="text-gray-600">{answer}</p>
    </div>
  </div>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { question: "What is Judix and how does it benefit law firms?", answer: "Judix is an AI-powered legal research platform that helps law firms find relevant case laws, statutes, and other legal documents quickly and efficiently, saving valuable time and resources." },
    { question: "What should I do to start the Judix search (law name)?", answer: "To start a search, simply type the name of the law, act, or keyword into the main search bar and press enter. You can then use our advanced filters to narrow down the results." },
    { question: "Can I add more team members later on?", answer: "Yes, our 'Quarterly' and custom enterprise plans allow you to add team members. You can easily manage your team from the account dashboard." },
    { question: "What kind of customer support do you offer?", answer: "We offer email support on all plans. Our 'Monthly' and 'Quarterly' plans include priority support, and our enterprise clients receive a dedicated account manager." },
    { question: "Is my data secure with Judix?", answer: "Absolutely. We use industry-standard encryption and security protocols to ensure that all your data and research history are kept confidential and secure." },
  ];

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center">
          <p className="text-sm font-semibold text-gray-500 uppercase">HELP</p>
          <h2 className="mt-2 text-3xl font-extrabold text-gray-900">Frequently Asked Questions</h2>
        </div>
        <div className="mt-12">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;