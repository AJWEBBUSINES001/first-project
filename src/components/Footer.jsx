import { Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-white/10 pb-8">
        {/* Logo & Tagline */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-400">Eazie-Go</h2>
          <p className="text-gray-400 mt-2">
            Where Every Trip Feels First Class. Reliable, comfortable, and affordable rides across Ontario.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-yellow-400">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
            <li><Link to="/services" className="hover:text-yellow-400">Services</Link></li>
            <li><Link to="/about" className="hover:text-yellow-400">About Us</Link></li>
            <li><Link to="/faq" className="hover:text-yellow-400">FAQs</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-400">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-yellow-400">Contact</h3>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li className="flex items-center gap-2">
              <Phone size={18} />
              <a href="tel:+14374430485" className="hover:text-yellow-400">+1 437 443 0485</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} />
              <a href="mailto:appiahernest3677@gmail.com" className="hover:text-yellow-400">appiahernest3677@gmail.com</a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={18} />
              Ontario, Canada
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-yellow-400">Follow Us</h3>
          <ul className="flex gap-4 text-gray-300">
            <li><a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-yellow-400"><Facebook /></a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-yellow-400"><Instagram /></a></li>
            {/* Add Snapchat/TikTok if needed using icons or images */}
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-sm text-gray-500 mt-8">
        &copy; {new Date().getFullYear()} Eazie-Go. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
