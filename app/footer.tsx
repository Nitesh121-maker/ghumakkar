import React from 'react'

const footer = () => {
  return (
<footer className="bg-gray-800 text-white py-8">
    <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column 1: About */}
            <div className="col-span-1 md:col-span-1">
                <h2 className="text-lg font-bold mb-4">About Weaver's Way</h2>
                <p className="text-sm">Discover India's diverse landscapes, artisans, and cultural experiences through Weaver's Way.</p>
            </div>
            {/* Column 2: Quick Links */}
            <div className="col-span-1 md:col-span-1">
                <h2 className="text-lg font-bold mb-4">Quick Links</h2>
                <ul>
                    <li><a href="/about" className="hover:text-gray-300 transition duration-300 ease-in-out">About Us</a></li>
                    <li><a href="/how-it-works" className="hover:text-gray-300 transition duration-300 ease-in-out">How it Works</a></li>
                    <li><a href="/destinations" className="hover:text-gray-300 transition duration-300 ease-in-out">Explore Destinations</a></li>
                    <li><a href="/homestays" className="hover:text-gray-300 transition duration-300 ease-in-out">Homestays</a></li>
                    <li><a href="/artisans" className="hover:text-gray-300 transition duration-300 ease-in-out">Artisans and Crafts</a></li>
                    <li><a href="/community" className="hover:text-gray-300 transition duration-300 ease-in-out">Community and User Accounts</a></li>
                    <li><a href="/testimonials" className="hover:text-gray-300 transition duration-300 ease-in-out">Testimonials</a></li>
                </ul>
            </div>
            {/* Column 3: Contact */}
            <div className="col-span-1 md:col-span-1">
                <h2 className="text-lg font-bold mb-4">Contact Us</h2>
                <p>Email: contact@weaversway.com</p>
                <p>Phone: +91-1234567890</p>
            </div>
        </div>
    </div>
</footer>

  )
}

export default footer