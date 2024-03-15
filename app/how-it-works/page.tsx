import React from 'react'
import Header from '../header/page';
import Footer from '../footer'
const page = () => {
  return (
    <>
    <Header/>
    <section className="py-16 bg-white">
        <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">How it Works</h2>
            <p className="text-lg text-gray-700 mb-8">Discover how Weaver's Way benefits tourists, homestay owners, and artisans.</p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                {/* Tourists Section */}
                <div className="flex-1 max-w-md">
                    <div className="bg-blue-100 rounded-lg p-6 mb-4">
                        <h3 className="text-xl font-semibold text-blue-800 mb-2">For Tourists</h3>
                        <p className="text-gray-700">Explore diverse destinations, book homestays, and purchase authentic artisan crafts.</p>
                        <img src="https://picsum.photos/seed/tourist/400/300" alt="Tourists" className="mt-4 rounded-lg shadow-md" />
                    </div>
                </div>
                {/* Homestay Owners Section */}
                <div className="flex-1 max-w-md">
                    <div className="bg-green-100 rounded-lg p-6 mb-4">
                        <h3 className="text-xl font-semibold text-green-800 mb-2">For Homestay Owners</h3>
                        <p className="text-gray-700">List your property, manage bookings, and connect with travelers from around the world.</p>
                        <img src="https://picsum.photos/seed/homestay/400/300" alt="Homestay Owners" className="mt-4 rounded-lg shadow-md" />
                    </div>
                </div>
                {/* Artisans Section */}
                <div className="flex-1 max-w-md">
                    <div className="bg-yellow-100 rounded-lg p-6 mb-4">
                        <h3 className="text-xl font-semibold text-yellow-800 mb-2">For Artisans</h3>
                        <p className="text-gray-700">Showcase your craftsmanship, sell your products, and engage with a global audience.</p>
                        <img src="https://picsum.photos/seed/artisan/400/300" alt="Artisans" className="mt-4 rounded-lg shadow-md" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Footer/>
</>

  )
}

export default page