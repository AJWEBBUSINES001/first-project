import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: 'How do I book a ride with EAZIE-GO?',
    answer:
      'You can book a ride through our website or by contacting us directly via phone or email. We’ll confirm your trip details and assign a driver to you immediately.',
  },
  {
    question: 'What areas do you operate in?',
    answer:
      'We operate within Ontario, offering services like airport pickups, package delivery, and city rides.',
  },
  {
    question: 'Do you charge extra during peak hours?',
    answer:
      'No, EAZIE-GO maintains consistent pricing with no surge charges during peak times.',
  },
  {
    question: 'Can I schedule a ride in advance?',
    answer:
      'Yes, we encourage scheduling in advance to guarantee availability, especially for airport and shopping trips.',
  },
  {
    question: 'What is your cancellation policy?',
    answer:
      'Cancellations are free up to 1 hour before your scheduled ride. For same-day cancellations, a small fee may apply.',
  },
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div id="faq" className="bg-white border-t pt-10 pb-20 px-6 text-black min-h-screen">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold">Frequently Asked Questions</h2>
        <p className="mt-3 text-gray-600">
          Need help? Here are some answers to common questions about our service.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-md p-4 transition-all duration-300"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center text-left font-semibold text-lg"
            >
              {faq.question}
              {activeIndex === index ? (
                <ChevronUp className="text-yellow-500" />
              ) : (
                <ChevronDown className="text-yellow-500" />
              )}
            </button>
            {activeIndex === index && (
              <p className="mt-3 text-gray-700">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
