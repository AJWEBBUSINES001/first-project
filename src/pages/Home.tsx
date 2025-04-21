import React from 'react';
import Modal from '@/components/Modal';
import Header from '@/components/Header';
import Services from '../components/Services';
import FAQ from '@/components/Faq';
import Footer from '@/components/Footer';
import Pricing from '@/components/Pricing';
import About from '@/components/About';
import Reviews from '@/components/CustomerReview';
import eaziecar from '@/assets/eaziecar.png'

const Home: React.FC = () => {
  return (
    <div>
      <Header headcolor="bg-transparent" />
      <Modal />
      <Services />
      <Pricing />
      <About />
      <div className="w-full flex justify-center items-center">
        <img src={eaziecar} alt="Eaziecar Logo" className="w-[200px]" />
      </div>
      <Reviews />
      <div className="w-full flex justify-center items-center">
        <img src={eaziecar} alt="Eaziecar Logo" className="w-[200px]" />
      </div>
      <FAQ />
    </div>
  );
};

export default Home;
