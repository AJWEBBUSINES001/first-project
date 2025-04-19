import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Fastcar from '../assets/fastCar.jpg';
import { Parallax } from 'react-parallax';

const plans = [
  {
    title: 'Standard Ride',
    price: '$3.00 base fare + $1.50 per mile',
    description: 'Perfect for everyday rides within the city.',
    features: [
      'No surge pricing during peak hours',
      'Live tracking & in-app booking',
      '24/7 customer support',
    ],
    cta: 'Choose Standard',
    highlight: false,
  },
  {
    title: 'Airport Transfer',
    price: '$25.00',
    description: 'Flat rate to and from any airport in Ontario.',
    features: [
      '30 mins of free waiting time',
      'Free cancellation 1hr before ride',
      'Complimentary bottled water',
    ],
    cta: 'Book Airport Transfer',
    highlight: true,
  },
  {
    title: 'Corporate Package',
    price: '$200.00/month',
    description: 'Ideal for businesses with regular transport needs.',
    features: [
      'Discounted rates for frequent rides',
      'Dedicated account manager',
      'Priority booking during peak times',
    ],
    cta: 'Get Corporate Package',
    highlight: false,
  },
];

const Pricing = () => {
  return (
    <Parallax
        className="sm:h-screen flex justify-center items-center overflow-x-hidden"
        blur={10}
        bgImage={Fastcar}
        strength={600}
      >
    <div className="min-h-screen py-20 px-6 text-black">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-4xl text-white md:text-5xl font-bold">Our Pricing Plans</h1>
        <p className="mt-4 text-lg text-gray-100 max-w-xl mx-auto">
          Transparent rates that make every trip feel first class. Choose the plan that fits your travel needs.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-lg border ${
              plan.highlight ? 'bg-yellow-400 text-black border-yellow-500' : 'bg-white border-gray-200'
            } p-8 flex flex-col justify-between`}
          >
            <div>
              <h2 className="text-2xl font-semibold mb-2">{plan.title}</h2>
              <p className="text-xl font-bold mb-4">{plan.price}</p>
              <p className="mb-6 text-gray-700">{plan.description}</p>
              <ul className="space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <CheckCircle size={18} className="text-yellow-500 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <Link
              to="book-driver"
              className={`mt-8 inline-block text-center font-semibold py-3 px-5 rounded ${
                plan.highlight
                  ? 'bg-black text-yellow-400 hover:bg-gray-900'
                  : 'bg-yellow-400 text-black hover:bg-yellow-300'
              } transition-all duration-300`}
            >
              {plan.cta}
            </Link>
          </div>
        ))}
      </div>
    </div>
</Parallax>
  );
};

export default Pricing;
