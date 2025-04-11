import React, { useState } from 'react';
import MinFooter from '../components/MinFooter';

const GetVip = () => {
  const [selectedPlan, setSelectedPlan] = useState('monthly');

  const plans = {
    Freemium: {
      price: '0 FRW Freemium Plan',
      features: [
        'Access to exclusive content',
        'Priority support',
        'Early access to new features',
      ],
    },
    VIP1: {
      price: '100k - 500k',
      features: [
        'Access to exclusive content',
        'Priority support',
        'Early access to new features',
        '1 month free!',
      ],
    },
    VIP2: {
      price: '1M - 5M',
      features: [
        'Access to exclusive content',
        'Priority support',
        'Early access to new features',
        '1 month free!',
      ],
    },
    VIP3: {
      price: '10M - 20M',
      features: [
        'Access to exclusive content',
        'Priority support',
        'Early access to new features',
        '1 month free!',
      ],
    },
    VIP4: {
      price: '50M - 100M',
      features: [
        'Access to exclusive content',
        'Priority support',
        'Early access to new features',
        '1 month free!',
      ],
    },
    VIP5: {
      price: '200M - 500M',
      features: [
        'Access to exclusive content',
        'Priority support',
        'Early access to new features',
        '1 month free!',
      ],
    },
    VIPPlus: {
      price: 'Above 500M',
      features: [
        'Access to exclusive content',
        'Priority support',
        'Early access to new features',
        '1 month free!',
        'Exclusive VIP support',
      ],
    },
  };

  // Handle plan selection
  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <div className="bg-white min-h-screen py-12 px-6">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center bg-white p-8 rounded-lg shadow-lg mb-10">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Become a VIP Member</h2>
        <p className="text-lg text-gray-700 mb-6">
          Unlock premium features and exclusive benefits by becoming a VIP member today!
        </p>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300">
          Get VIP Now
        </button>
      </div>

      {/* Pricing and Plans Section */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Freemium Plan */}
        <div
          className={`bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 ${
            selectedPlan === 'Freemium' ? 'transform scale-105 shadow-xl' : 'hover:shadow-lg'
          }`}
          onClick={() => handlePlanSelect('Freemium')}
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Freemium Plan</h3>
          <p className="text-4xl font-bold text-blue-500">{plans.Freemium.price}</p>
          <ul className="text-lg text-gray-700 mt-4">
            {plans.Freemium.features.map((feature, index) => (
              <li key={index} className="flex items-center mt-2">
                <span className="text-blue-500 mr-2">✔</span>
                {feature}
              </li>
            ))}
          </ul>
          <button className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg w-full hover:bg-blue-600 transition-colors duration-300">
            Subscribe Now
          </button>
        </div>

        {/* VIP 1 Plan */}
        <div
          className={`bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 ${
            selectedPlan === 'VIP1' ? 'transform scale-105 shadow-xl' : 'hover:shadow-lg'
          }`}
          onClick={() => handlePlanSelect('VIP1')}
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">VIP1 Plan (100k - 500k)</h3>
          <p className="text-4xl font-bold text-blue-500">{plans.VIP1.price}</p>
          <ul className="text-lg text-gray-700 mt-4">
            {plans.VIP1.features.map((feature, index) => (
              <li key={index} className="flex items-center mt-2">
                <span className="text-blue-500 mr-2">✔</span>
                {feature}
              </li>
            ))}
          </ul>
          <button className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg w-full hover:bg-blue-600 transition-colors duration-300">
            Subscribe Now
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* VIP 2 Plan */}
        <div
          className={`bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 ${
            selectedPlan === 'VIP2' ? 'transform scale-105 shadow-xl' : 'hover:shadow-lg'
          }`}
          onClick={() => handlePlanSelect('VIP2')}
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">VIP2 Plan (1M - 5M)</h3>
          <p className="text-4xl font-bold text-blue-500">{plans.VIP2.price}</p>
          <ul className="text-lg text-gray-700 mt-4">
            {plans.VIP2.features.map((feature, index) => (
              <li key={index} className="flex items-center mt-2">
                <span className="text-blue-500 mr-2">✔</span>
                {feature}
              </li>
            ))}
          </ul>
          <button className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg w-full hover:bg-blue-600 transition-colors duration-300">
            Subscribe Now
          </button>
        </div>

        {/* VIP 3 Plan */}
        <div
          className={`bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 ${
            selectedPlan === 'VIP3' ? 'transform scale-105 shadow-xl' : 'hover:shadow-lg'
          }`}
          onClick={() => handlePlanSelect('VIP3')}
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">VIP3 Plan (10M - 20M)</h3>
          <p className="text-4xl font-bold text-blue-500">{plans.VIP3.price}</p>
          <ul className="text-lg text-gray-700 mt-4">
            {plans.VIP3.features.map((feature, index) => (
              <li key={index} className="flex items-center mt-2">
                <span className="text-blue-500 mr-2">✔</span>
                {feature}
              </li>
            ))}
          </ul>
          <button className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg w-full hover:bg-blue-600 transition-colors duration-300">
            Subscribe Now
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* VIP 4 Plan */}
        <div
          className={`bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 ${
            selectedPlan === 'VIP4' ? 'transform scale-105 shadow-xl' : 'hover:shadow-lg'
          }`}
          onClick={() => handlePlanSelect('VIP4')}
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">VIP4 Plan (50M - 100M)</h3>
          <p className="text-4xl font-bold text-blue-500">{plans.VIP4.price}</p>
          <ul className="text-lg text-gray-700 mt-4">
            {plans.VIP4.features.map((feature, index) => (
              <li key={index} className="flex items-center mt-2">
                <span className="text-blue-500 mr-2">✔</span>
                {feature}
              </li>
            ))}
          </ul>
          <button className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg w-full hover:bg-blue-600 transition-colors duration-300">
            Subscribe Now
          </button>
        </div>

        {/* VIP 5 Plan */}
        <div
          className={`bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 ${
            selectedPlan === 'VIP5' ? 'transform scale-105 shadow-xl' : 'hover:shadow-lg'
          }`}
          onClick={() => handlePlanSelect('VIP5')}
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">VIP5 Plan (200M - 500M)</h3>
          <p className="text-4xl font-bold text-blue-500">{plans.VIP5.price}</p>
          <ul className="text-lg text-gray-700 mt-4">
            {plans.VIP5.features.map((feature, index) => (
              <li key={index} className="flex items-center mt-2">
                <span className="text-blue-500 mr-2">✔</span>
                {feature}
              </li>
            ))}
          </ul>
          <button className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg w-full hover:bg-blue-600 transition-colors duration-300">
            Subscribe Now
          </button>
        </div>
      </div>

      {/* Footer Section */}
      <MinFooter />

      {/* Footer CTA */}
      <div className="max-w-4xl mx-auto text-center mt-12">
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300">
          Get VIP Now
        </button>
      </div>
    </div>
  );
};

export default GetVip;
