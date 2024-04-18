'use client';
import React, { useState } from 'react';
import { Spin as Hamburger } from 'hamburger-react';
import '../main.css'
export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-800">
      <div className="container mx-auto px-4 py-2 relative">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="text-white text-2xl font-bold">
              Weaver's Way
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-4">
                <a href="/about" className="text-white hover:text-gray-300">
                    About Us
                </a>
                <a href="/how-it-works" className="text-white hover:text-gray-300">
                    How it Works
                </a>
                <select 
                    style={{ width: "80px" }}
                    className="text-white hover:text-gray-300 bg-transparent border-none"
                    defaultValue=""
                    onChange={(e) => {
                        const selected = e.target.value;
                        if (selected) {
                          window.location.href = selected;
                        }
                      }}
                 >
                    <option value="" disabled selected>
                    Explore
                    </option>
                    <option value="/destinations" className='text-gray-800 hover:text-gray-600'>Destinations</option>
                    <option value="/homestays" className='text-gray-800 hover:text-gray-600'>Homestays</option>
                    <option value="/#artisans" className='text-gray-800 hover:text-gray-600'>Artisans and Crafts</option>
                </select>
                <a href="/#community" className="text-white hover:text-gray-300">
                    Community
                </a>
                <a href="/#testimonials" className="text-white hover:text-gray-300">
                    Testimonials
                </a>
          </div>
          <div className="md:hidden relative">
            <button onClick={toggleMobileMenu} className="text-white">
              <Hamburger />
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
              <div className="bg-gray-800 relative top-full left-0 w-full py-2 z-10">
                <a
                  href="/about"
                  className="block text-white hover:text-gray-300 py-2 px-4"
                >
                  About
                </a>
                <a
                  href="/how-it-works"
                  className="block text-white hover:text-gray-300 py-2 px-4"
                >
                  How it Works
                </a>
                <a
                  href="/destinations"
                  className="block text-white hover:text-gray-300 py-2 px-4"
                >
                  Destinations
                </a>
                <a
                  href="/homestays"
                  className="block text-white hover:text-gray-300 py-2 px-4"
                >
                  Homestays
                </a>
                <a
                  href="/#artisans"
                  className="block text-white hover:text-gray-300 py-2 px-4"
                >
                  Artisans and Crafts
                </a>
                <a
                  href="/#community"
                  className="block text-white hover:text-gray-300 py-2 px-4"
                >
                  Community
                </a>
                <a
                  href="/#testimonials"
                  className="block text-white hover:text-gray-300 py-2 px-4"
                >
                  Testimonials
                </a>
              </div>
            )}
      </div>
    </nav>
  );
}
