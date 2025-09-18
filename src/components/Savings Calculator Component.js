"use client";
import React, { useState } from 'react';

const SavingsCalculator = () => {
    const [cases, setCases] = useState(10);
    const savings = cases * 150; // Example calculation: ₹150 saved per case

    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900">Your Potential Savings</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        See how much you could save on research costs by switching to Judix. Adjust the slider to match your weekly case load.
                    </p>
                </div>
                <div className="mt-10 bg-white border border-gray-200 rounded-xl shadow-lg p-8">
                    <div className="flex justify-between items-center mb-2 font-semibold">
                        <label htmlFor="cases-slider" className="text-gray-700">Number of cases per week</label>
                        <span className="text-blue-900 text-lg font-bold">{cases}</span>
                    </div>
                    <input
                        id="cases-slider"
                        type="range"
                        min="1"
                        max="50"
                        value={cases}
                        onChange={(e) => setCases(e.target.value)}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-900"
                    />
                    <div className="mt-8 text-center bg-teal-50 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
                        <p className="text-lg">Estimated monthly savings</p>
                        <p className="text-5xl font-extrabold text-teal-600 mt-2">₹{savings.toLocaleString('en-IN')}</p>
                    </div>
                     <p className="text-xs text-gray-500 text-center mt-4">
                        *Calculation based on average time saved per case and standard hourly rates for legal professionals.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default SavingsCalculator;