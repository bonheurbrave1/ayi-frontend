import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MinFooter from '../components/MinFooter';

const GetVip = () => {
  const [selectedPlan, setSelectedPlan] = useState('monthly');
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const navigate = useNavigate();

  const plans = {
    Freemium: {
      price: '0 FRW Freemium Plan',
      stakeMessage: 'No stake required for Freemium Plan.',
      features: ['Access to exclusive content', 'Priority support', 'Early access to new features'],
    },
    VIP1: {
      price: '100k - 500k',
      stakeMessage: 'You need a stake between 100,000 and 500,000 RWF to claim VIP1.',
      features: ['Access to exclusive content', 'Priority support', 'Early access to new features', '1 month free!'],
    },
    VIP2: {
      price: '1M - 5M',
      stakeMessage: 'You need a stake between 1,000,000 and 5,000,000 RWF to claim VIP2.',
      features: ['Access to exclusive content', 'Priority support', 'Early access to new features', '1 month free!'],
    },
    VIP3: {
      price: '10M - 20M',
      stakeMessage: 'You need a stake between 10,000,000 and 20,000,000 RWF to claim VIP3.',
      features: ['Access to exclusive content', 'Priority support', 'Early access to new features', '1 month free!'],
    },
    VIP4: {
      price: '50M - 100M',
      stakeMessage: 'You need a stake between 50,000,000 and 100,000,000 RWF to claim VIP4.',
      features: ['Access to exclusive content', 'Priority support', 'Early access to new features', '1 month free!'],
    },
    VIP5: {
      price: '200M - 500M',
      stakeMessage: 'You need a stake between 200,000,000 and 500,000,000 RWF to claim VIP5.',
      features: ['Access to exclusive content', 'Priority support', 'Early access to new features', '1 month free!'],
    },
    VIPPlus: {
      price: 'Above 500M',
      stakeMessage: 'You need a stake above 500,000,000 RWF to claim VIP Plus.',
      features: [
        'Access to exclusive content',
        'Priority support',
        'Early access to new features',
        '1 month free!',
        'Exclusive VIP support',
      ],
    },
  };

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  };

  const handleClaimClick = (planKey) => {
    setModalMessage(plans[planKey].stakeMessage);
    setShowModal(true);
  };

  const handleOk = () => {
    setShowModal(false);
    navigate("/ayi-wallet/wallet")  
  };

  return (
    <div className="bg-white min-h-screen py-12 px-6">
      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-md w-full">
            <p className="text-lg text-gray-800 mb-4">{modalMessage}</p>
            <button
              onClick={handleOk}
              className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
            >
              OK
            </button>
          </div>
        </div>
      )}

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

      {/* VIP Plans */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        {Object.entries(plans).map(([planKey, plan], index) => (
          <div
            key={planKey}
            className={`bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 ${
              selectedPlan === planKey ? 'transform scale-105 shadow-xl' : 'hover:shadow-lg'
            }`}
            onClick={() => handlePlanSelect(planKey)}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              {planKey} Plan {planKey !== 'Freemium' ? `(${plan.price})` : ''}
            </h3>
            <p className="text-4xl font-bold text-blue-500">{plan.price}</p>
            <ul className="text-lg text-gray-700 mt-4">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center mt-2">
                  <span className="text-blue-500 mr-2">✔</span>
                  {feature}
                </li>
              ))}
            </ul>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleClaimClick(planKey);
              }}
              className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg w-full hover:bg-blue-600 transition-colors duration-300"
            >
              Claim
            </button>
          </div>
        ))}
      </div>

      {/* Footer Section */}
      <MinFooter />

      <div className="max-w-4xl mx-auto text-center mt-12">
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300">
          Get VIP Now
        </button>
      </div>
    </div>
  );
};

export default GetVip;
