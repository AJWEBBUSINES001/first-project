import React from 'react'
import Modal from '../components/Modal'
import Header from '../components/Header'
import Services from '../components/Services'
import Footer from '../components/Footer'
import Pricing from '../components/Pricing'
import About from '../components/About'
import Reviews from '../components/CustomerReview'
import FAQ from '../components/Faq'

const Home = () => {
  return (
    <div>
      <Header />
      <Modal />
      <Services />
      <Pricing />
      <About />
      <Reviews />
      <FAQ />
      <Footer />
    </div>
  )
}

export default Home;