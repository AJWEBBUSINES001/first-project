import { Car, HeartHandshake, Users2 } from 'lucide-react';

const About = () => {
  return (
    <div id='about' className="bg-white text-black min-h-screen py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">About EAZIE-GO</h1>
        <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
          At EAZIE-GO, we’re committed to redefining local travel with comfort, safety, and reliability. Whether it’s a quick airport run, a corporate ride, or a shopping trip, we make every journey feel first class.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto text-center">
        <div>
          <Car className="mx-auto mb-4 text-yellow-500" size={40} />
          <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
          <p className="text-gray-700">
            To provide seamless, affordable, and first-class transportation services tailored to meet the dynamic needs of our clients across Ontario.
          </p>
        </div>

        <div>
          <HeartHandshake className="mx-auto mb-4 text-yellow-500" size={40} />
          <h2 className="text-xl font-semibold mb-2">Our Promise</h2>
          <p className="text-gray-700">
            We prioritize customer satisfaction through timely service, transparent pricing, and courteous drivers who care about your experience.
          </p>
        </div>

        <div>
          <Users2 className="mx-auto mb-4 text-yellow-500" size={40} />
          <h2 className="text-xl font-semibold mb-2">Who We Serve</h2>
          <p className="text-gray-700">
            Individuals, families, tourists, and businesses across Ontario looking for trusted and convenient transportation solutions.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto mt-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Why Choose EAZIE-GO?</h2>
        <p className="text-gray-700 text-lg">
          Because we don’t just get you from point A to B — we make the journey enjoyable, professional, and stress-free. From airport transfers to business rides, every trip is handled with the highest level of care.
        </p>
      </div>
    </div>
  );
};

export default About;
