import React, { useState } from "react";

const MinFooter = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is VIP Membership?",
      answer:
        "VIP Membership provides exclusive access to premium features like , mentoring other community members , early access to updates, priority support, and more.",
    },
    {
      question: "How can I cancel my subscription?",
      answer:
        "You can cancel your subscription anytime through your account settings under the subscriptions tab. No refunds will be provided for the current period.",
    },
    {
      question: "What are the benefits of the Higher VIPs",
      answer:
        "The higher VIPs provide some extra-additional features than the normal users and should have more priviledges that those others ",
    },
    {
      question: "Is my payment information secure?",
      answer:
        "Yes, all payments are processed through secure payment via our security proffessional team specialized in transactions security and our middlewares.",
    },
  ];

  const toggleAnswer = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null); // Close if the same question is clicked
    } else {
      setActiveIndex(index); // Open the clicked question
    }
  };

  return (
    <footer className="bg-white text-gray-900 py-12 px-6 shadow-lg">
      <div className="max-w-6xl mx-auto">
        {/* FAQ Section */}
        <h2 className="text-3xl font-semibold mb-8 text-center text-gray-900">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300 pb-4">
              <div
                className="flex justify-between items-center cursor-pointer hover:text-blue-500 transition-colors duration-300"
                onClick={() => toggleAnswer(index)}
              >
                <h3 className="text-xl font-semibold text-gray-900">
                  {faq.question}
                </h3>
                <svg
                  className={`w-6 h-6 transition-transform duration-300 ${
                    activeIndex === index ? "transform rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>

              {/* Toggled Answer */}
              {activeIndex === index && (
                <div className="mt-4 text-lg text-gray-700">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default MinFooter;
