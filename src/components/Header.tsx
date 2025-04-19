import React, { useEffect, useState } from 'react';
import { Phone, Mail, Menu, X } from 'lucide-react';
import logoWhite from '../assets/logowhite.png';
import { Link } from 'react-router-dom';

function Header({logocolor}:any) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className='fixed flex flex-col top-0 left-0 z-20 w-screen'>
      {/* Top contact info */}
      <div className="w-full bg-white p-3 flex justify-center items-center gap-6 md:gap-10">
            <a
                href="tel:+14374430485"
                className="flex text-sm sm:text-xl gap-1 sm:gap-3 items-center text-black hover:text-yellow-500 transition-colors"
            >
                <Phone size={18} /> +1(437)-443-0485
            </a>
            <a
                href="mailto:appiahernest3677@gmail.com"
                className="flex text-sm sm:text-xl gap-1 sm:gap-3 items-center text-black hover:text-yellow-500 transition-colors"
            >
                <Mail size={18} /> appiahernest3677@gmail.com
            </a>
      </div>


      {/* Main nav */}
      <div
        className={`w-full p-4 transition-all duration-500 ${
          scrolled ? 'bg-black' : 'bg-transparent'
        }`}
      >
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          {/* Logo */}
          <a href='#home'><Link to={'/'}><img className='w-[150px] md:w-[200px]' src={logoWhite} alt="eaziego" /></Link></a>

          {/* Desktop links */}
          <div className="hidden md:flex gap-6 text-white items-center">
            <a href='#services'>Services</a>
            <a href='#about'>About Us</a>
            <a href='#faq'>FAQs</a>
            <Link to={'book-driver'} className='p-2 px-5 rounded text-base border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black transition duration-300'>
              Book a Ride
            </Link>
            <Link to={'book-driver'} className='p-2 px-5 rounded text-base border border-yellow-500 bg-yellow-500 text-black hover:bg-yellow-500/50 transition duration-300'>
              Learn More
            </Link>
          </div>

          {/* Mobile menu icon */}
          <div className="md:hidden text-white">
            {menuOpen ? (
              <X size={30} onClick={() => setMenuOpen(false)} className="cursor-pointer" />
            ) : (
              <Menu size={30} onClick={() => setMenuOpen(true)} className="cursor-pointer" />
            )}
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {menuOpen && (
          <div className="md:hidden flex flex-col items-center bg-black text-white gap-4 mt-4 py-4 transition-all animate-slideDown">
            <a href='#services' onClick={() => setMenuOpen(false)}>Services</a>
            <a href='#about' onClick={() => setMenuOpen(false)}>About Us</a>
            <a href='#faq' onClick={() => setMenuOpen(false)}>FAQs</a>
            <button className='p-2 px-6 rounded border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black transition duration-300'>
              Book a Ride
            </button>
            <button className='p-2 px-6 rounded border border-yellow-500 bg-yellow-500 text-black hover:bg-yellow-500/50 transition duration-300'>
              Learn More
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
