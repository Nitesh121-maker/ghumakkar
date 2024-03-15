import React from 'react'

const footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4">
            <div className="flex justify-between items-center">
                <div className="w-full md:w-1/3">
                    <p className="text-lg font-bold">Weaver's Way</p>
                    <p className="text-sm">Discover India's diverse landscapes, artisans, and cultural experiences</p>
                </div>
                <div className="w-full md:w-1/3 mt-4 md:mt-0">
                    <p className="text-lg font-bold mb-2">Quick Links</p>
                    <ul>
                        <li><a href="#about" className="block hover:text-gray-300">About Us</a></li>
                        <li><a href="#how-it-works" className="block hover:text-gray-300">How it Works</a></li>
                        <li><a href="#destinations" className="block hover:text-gray-300">Explore Destinations</a></li>
                        <li><a href="#homestays" className="block hover:text-gray-300">Homestays</a></li>
                        <li><a href="#artisans" className="block hover:text-gray-300">Artisans and Crafts</a></li>
                        <li><a href="#community" className="block hover:text-gray-300">Community and User Accounts</a></li>
                        <li><a href="#testimonials" className="block hover:text-gray-300">Testimonials</a></li>
                    </ul>
                </div>
                <div className="w-full md:w-1/3 mt-4 md:mt-0">
                    <p className="text-lg font-bold mb-2">Contact Us</p>
                    <p>Email: contact@weaversway.com</p>
                    <p>Phone: +91-1234567890</p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default footer