import React from 'react';
import { Parallax } from 'react-parallax';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import modalImg from '../assets/modal.jpg'; // Works if Webpack/Vite is configured correctly

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1, ease: 'easeOut' }
  }
};

const Modal: React.FC = () => (
  <Parallax
    className="h-[calc(100vh-0px)] sm:h-screen flex justify-center items-center overflow-x-hidden"
    blur={2}
    bgImage={modalImg}
    strength={800}
  >
    <motion.div
      id="home"
      className="h-[calc(100vh-0px)] sm:h-screen w-screen mx-auto bg-black/50 backdrop-blur-sm rounded shadow-lg flex flex-col justify-center items-center gap-5 sm:gap-10 px-6 py-12 text-white text-center"
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      <motion.h1
        className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight shadow-sm"
        variants={fadeIn}
      >
        Where Every <span className="text-yellow-400 italic">Trip</span> Feels <br /> First <span className="">Class</span>
      </motion.h1>

      <motion.p
        className="max-w-2xl text-sm md:text-xl lg:text-2xl opacity-90"
        variants={fadeIn}
        transition={{ delay: 0.2 }}
      >
        Welcome to <strong>Eazie-Go</strong>, your trusted partner for fast and reliable taxi services. Enjoy a comfortable journey with our professional drivers. Book your ride now and experience exceptional service at competitive prices.
      </motion.p>

      <motion.div
        className="flex flex-wrap justify-center gap-2 sm:gap-6"
        variants={fadeIn}
        transition={{ delay: 0.4 }}
      >
        <Link
          to="book-driver"
          className="shadow p-2 sm:p-3 px-6 rounded text-lg bg-black/10 border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-500"
        >
          Book a Ride
        </Link>
        <Link
          to="book-driver"
          className="p-2 sm:p-3 px-6 rounded text-lg border border-yellow-400 bg-yellow-400 text-black hover:bg-yellow-300 transition-all duration-500"
        >
          Learn More
        </Link>
      </motion.div>
    </motion.div>
  </Parallax>
);

export default Modal;
