import React from 'react'
import Header from '../header/page';
import Footer from '../footer'
const about = () => {
  return (
    <>
    <Header/>
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl text-blue-800 font-bold mb-4">About Weaver's Way</h2>
        <p className="text-lg text-blue-700 mb-8">
          Weaver's Way is on a mission to showcase India's diverse landscapes, artisans, and cultural experiences. 
          Our values revolve around promoting sustainable tourism, empowering local communities, and preserving traditional crafts. 
          We believe in creating meaningful connections between travelers, homestay owners, and artisans, fostering authentic experiences 
          that leave a positive impact on both visitors and locals alike.
        </p>
        <p className="text-lg text-blue-700 mb-8">
          Through Weaver's Way, tourists have the opportunity to explore hidden gems, discover unique homestays, and connect 
          with talented artisans across India. We are committed to providing travelers with enriching experiences while supporting 
          local livelihoods and preserving India's rich cultural heritage.
        </p>
        <p className="text-lg text-blue-700 mb-8">
          Join us on our journey to celebrate India's beauty, creativity, and hospitality. Let's weave unforgettable memories together!
        </p>
      </div>
    </section>
    <Footer/>
    </>
  )
}

export default about