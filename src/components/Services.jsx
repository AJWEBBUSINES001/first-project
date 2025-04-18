import { CarFront, ShoppingCart, Send, PackageCheck, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AirpotPickups from '../assets/airport pickups.jpg';
import Pickups from '../assets/pickup.jpg';
import Deliveryservice from '../assets/deliveryservice.jpg';
import ShoppingTrip from '../assets/shoppingtrips.jpg';

const services = [
  {
    title: 'Airport Pickups',
    icon: <CarFront className="text-yellow-500" size={28} />,
    desc: 'Reliable and timely airport transportation service.',
    image: AirpotPickups,
  },
  {
    title: 'Deliveries Within Ontario',
    icon: <Send className="text-yellow-500" size={28} />,
    desc: 'Swift package delivery anywhere within Ontario.',
    image: Deliveryservice,
  },
  {
    title: 'Pick Up and Drop Offs',
    icon: <PackageCheck className="text-yellow-500" size={28} />,
    desc: 'Comfortable and convenient ride from point A to B.',
    image: Pickups,
  },
  {
    title: 'Shopping Trips',
    icon: <ShoppingCart className="text-yellow-500" size={28} />,
    desc: 'Let us handle your shopping transport needs.',
    image: ShoppingTrip,
  },
];

const Services = () => {
  return (
    <div id='services' className="min-h-screen bg-white text-black px-6 py-20">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold">Explore Our Services</h1>
        <p className="mt-4 text-lg text-gray-700">Comfort. Convenience. Class.</p>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="flex flex-col md:flex-row items-center border border-yellow-500/30 rounded-lg overflow-hidden hover:bg-yellow-50 transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full md:w-[15rem] h-[12rem] object-cover"
            />
            <div className="p-6 text-center md:text-left">
              <h2 className="text-2xl font-semibold flex items-center justify-center md:justify-start gap-2 mb-2">
                {service.icon}
                {service.title}
              </h2>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Booking CTA */}
      <div className="mt-24 text-center">
        <h2 className="text-3xl font-bold mb-4">Book Your Ride Now</h2>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-lg">
          <a href="tel:+14374430485" className="flex items-center gap-2 text-yellow-600 hover:underline">
            <Phone /> +1 437 443 0485
          </a>
          <a href="mailto:appiahernest3677@gmail.com" className="flex items-center gap-2 text-yellow-600 hover:underline">
            <Mail /> appiahernest3677@gmail.com
          </a>
        </div>
        <Link
          to="book-driver"
          className="mt-8 inline-block border border-yellow-500 text-yellow-700 hover:bg-yellow-500 hover:text-black font-medium px-8 py-3 rounded-full transition-all duration-300"
        >
          Book a Ride
        </Link>
      </div>
    </div>
  );
};

export default Services;
