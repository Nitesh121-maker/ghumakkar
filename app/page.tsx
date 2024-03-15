// pages/index.js
import Head from 'next/head';
import Header from './header/page';
import Footer from './footer'

export default function Home() {
  const destinations = [
    {
        name: "Jaipur",
        image: "https://source.unsplash.com/random/300x200/?jaipur",
        description: "Known as the Pink City, Jaipur is famous for its rich history, vibrant culture, and stunning architecture."
    },
    {
        name: "Goa",
        image: "https://source.unsplash.com/random/300x200/?goa",
        description: "Renowned for its beautiful beaches, lively nightlife, and Portuguese heritage, Goa is a popular tourist destination."
    },
    {
        name: "Leh-Ladakh",
        image: "https://source.unsplash.com/random/300x200/?leh",
        description: "Located in the northernmost region of India, Leh-Ladakh is known for its breathtaking landscapes, Buddhist monasteries, and adventure sports."
    },
    // Add more destinations as needed
  ];
  const homestays = [
    {
        name: "Rajasthan Heritage Homestay",
        image: "https://source.unsplash.com/random/300x200/?homestay,rajasthan",
        location: "Jaipur, Rajasthan",
        amenities: ["Free Wi-Fi", "Parking", "Garden"],
        price: "$50/night",
        rating: 4.5
    },
    {
        name: "Goan Beach Retreat",
        image: "https://source.unsplash.com/random/300x200/?homestay,goa",
        location: "Goa",
        amenities: ["Beachfront", "Swimming Pool", "Air Conditioning"],
        price: "$80/night",
        rating: 4.8
    },
    {
        name: "Himalayan Paradise Cottage",
        image: "https://source.unsplash.com/random/300x200/?homestay,himalay",
        location: "Leh-Ladakh",
        amenities: ["Mountain View", "Bonfire", "Local Cuisine"],
        price: "$100/night",
        rating: 4.9
    },
    // Add more homestays as needed
  ];
  const artisans = [
    {
        name: "Pottery Workshop",
        image: "https://source.unsplash.com/random/300x200/?pottery",
        description: "Explore the ancient art of pottery and create your own masterpiece under the guidance of skilled artisans."
    },
    {
        name: "Handloom Weaving",
        image: "https://source.unsplash.com/random/300x200/?weaving",
        description: "Discover the traditional craft of handloom weaving and witness artisans bring vibrant fabrics to life."
    },
    {
        name: "Textile Printing",
        image: "https://source.unsplash.com/random/300x200/?textile",
        description: "Experience the intricate process of textile printing and take home unique, handcrafted textiles."
    },
    // Add more artisans/crafts as needed
  ];
  
    return (
        <div>
            <Head>
                <title>Weaver's Way</title>
                <meta name="description" content="Explore India's diverse landscapes, artisans, and cultural experiences with Weaver's Way." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header/>
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-400 to-purple-600 text-white py-20">
                  <div className="container mx-auto text-center">
                      <h1 className="text-4xl font-bold mb-4">Welcome to Weaver's Way</h1>
                      <p className="text-lg mb-8">Discover India's diverse landscapes, artisans, and cultural experiences</p>
                      {/* Add eye-catching visuals */}
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {/* Visual 1 */}
                          <div className="relative">
                              <img src="https://source.unsplash.com/random/600x400/?himalay" alt="Visual 1" className="rounded-lg shadow-lg" />
                              <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50 rounded-lg"></div>
                              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-lg font-bold">Visual 1 Title</div>
                          </div>
                          {/* Visual 2 */}
                          <div className="relative">
                              <img src="https://source.unsplash.com/random/600x400/?jodhpur" alt="Visual 2" className="rounded-lg shadow-lg" />
                              <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50 rounded-lg"></div>
                              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-lg font-bold">Visual 2 Title</div>
                          </div>
                          {/* Visual 3 */}
                          <div className="relative">
                              <img src="https://source.unsplash.com/random/600x400/?kerla" alt="Visual 3" className="rounded-lg shadow-lg" />
                              <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50 rounded-lg"></div>
                              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-lg font-bold">Visual 3 Title</div>
                          </div>
                      </div>
                  </div>
              </section>

            {/* Search Bar */}
            <section className="py-16 bg-white">
              <div className="container mx-auto text-center">
                  <div className="max-w-lg mx-auto">
                      <h2 className="text-3xl font-bold text-gray-800 mb-4">Find Your Next Adventure</h2>
                      <input
                          type="text"
                          placeholder="Search destinations, artisan crafts, or experiences"
                          className="px-4 py-3 border border-gray-300 rounded-md w-full text-gray-600 focus:outline-none focus:border-blue-400 transition-colors duration-300"
                      />
                      <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-md transition-colors duration-300 focus:outline-none focus:bg-blue-600">
                          Search
                      </button>
                  </div>
              </div>
          </section>
            {/* About Us */}
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
            {/* How it Works */}
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
                          </div>
                      </div>
                      {/* Homestay Owners Section */}
                      <div className="flex-1 max-w-md">
                          <div className="bg-green-100 rounded-lg p-6 mb-4">
                              <h3 className="text-xl font-semibold text-green-800 mb-2">For Homestay Owners</h3>
                              <p className="text-gray-700">List your property, manage bookings, and connect with travelers from around the world.</p>
                          </div>
                      </div>
                      {/* Artisans Section */}
                      <div className="flex-1 max-w-md">
                          <div className="bg-yellow-100 rounded-lg p-6 mb-4">
                              <h3 className="text-xl font-semibold text-yellow-800 mb-2">For Artisans</h3>
                              <p className="text-gray-700">Showcase your craftsmanship, sell your products, and engage with a global audience.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </section>


            {/* Featured Destinations */}
            <section className="bg-gray-300 py-16">
                  <div className="container mx-autotainer mx-auto text-center">
                  <h2 className="text-3xl font-bold  mb-4">Explore Destinations</h2>
                  {/* Filter Options */}
                  <div className="flex justify-center mb-8 space-x-4">
                      {/* <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Region</button>
                      <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Type</button>
                      <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Interests</button>
                      <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Travel Style</button> */}
                  </div>
                  {/* Destination Listing */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {destinations.map((destination, index) => (
                          <div key={index} className="bg-white p-6 rounded-md shadow-md">
                              <img src={destination.image} alt={destination.name} className="w-full h-48 object-cover rounded-md mb-4" />
                              <h3 className="text-xl font-bold mb-2">{destination.name}</h3>
                              <p className="text-gray-600">{destination.description}</p>
                              <div className="mt-4">
                                  <button className="bg-blue-500 text-white px-4 py-2 rounded-md">View Details</button>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
          </section>
            {/* HomeStays */}
            <section className="bg-gray-300 py-16">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Homestays</h2>
                {/* Homestay Listings */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {homestays.map((homestay, index) => (
                        <div key={index} className="bg-white p-6 rounded-md shadow-md">
                            <img src={homestay.image} alt={homestay.name} className="w-full h-48 object-cover rounded-md mb-4" />
                            <h3 className="text-xl font-bold mb-2">{homestay.name}</h3>
                            <p className="text-gray-600 mb-2">{homestay.location}</p>
                            <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 0l2.82 7.394 7.079 1.254-5.375 5.544L15.468 20 10 16.579 4.533 20l1.943-6.808L0 8.648l7.079-1.254L10 0z" clipRule="evenodd" />
                                    </svg>
                                    <p className="text-gray-600">{homestay.rating}</p>
                                </div>
                                <p className="text-gray-600">{homestay.price}</p>
                            </div>
                            <ul className="text-sm text-gray-600 mb-4">
                                {homestay.amenities.map((amenity, index) => (
                                    <li key={index}>{amenity}</li>
                                ))}
                            </ul>
                            <div className="mt-4">
                                <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Book Now</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        {/* Artisans and Crafts */}
        <section className="bg-gray-100 py-16">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Artisans and Crafts</h2>
                {/* Artisans Listing */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {artisans.map((artisan, index) => (
                        <div key={index} className="bg-white p-6 rounded-md shadow-md">
                            <img src={artisan.image} alt={artisan.name} className="w-full h-48 object-cover rounded-md mb-4" />
                            <h3 className="text-xl font-bold mb-2">{artisan.name}</h3>
                            <p className="text-gray-600">{artisan.description}</p>
                            <div className="mt-4">
                                <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Explore</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        {/*Community and User Accounts*/}
        <section className="bg-gray-200 py-16">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Community and User Accounts</h2>
                {/* User Registration */}
                <div className="mb-8">
                    <h3 className="text-xl text-gray-800 font-semibold mb-2">User Registration</h3>
                    <p className="text-gray-700">Sign up to access exclusive features and benefits.</p>
                    <a href='/login' className="bg-blue-500 text-white px-6 py-3 rounded-md mt-4">Sign Up</a>
                </div>
                {/* User Dashboards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Tourist Dashboard */}
                    <div className="bg-white p-6 rounded-md shadow-md">
                        <h3 className="text-xl text-gray-800 font-bold mb-2">Tourist Dashboard</h3>
                        <p className="text-gray-600">Manage bookings, view past trips, and leave reviews for homestays and artisans.</p>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">View Dashboard</button>
                    </div>
                    {/* Homestay Owner Dashboard */}
                    <div className="bg-white p-6 rounded-md shadow-md">
                        <h3 className="text-xl text-gray-800 font-bold mb-2">Homestay Owner Dashboard</h3>
                        <p className="text-gray-600">Manage listings, update availability, receive booking requests, communicate with guests, and track bookings.</p>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">View Dashboard</button>
                    </div>
                    {/* Artisan Dashboard */}
                    <div className="bg-white p-6 rounded-md shadow-md">
                        <h3 className="text-xl text-gray-800 font-bold mb-2">Artisan Dashboard</h3>
                        <p className="text-gray-600">Manage profile, product listings, orders, communication with potential buyers, and access sales analytics.</p>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">View Dashboard</button>
                    </div>
                </div>
            </div>
        </section>
  
       {/* Testimonials */}
       <section className="py-16 bg-white">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Testimonials</h2>
                {/* Testimonial Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Testimonial Card 1 */}
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <p className="text-lg text-gray-800 mb-4">"Weaver's Way provided us with an unforgettable experience. The homestay was cozy, the hosts were welcoming, and the artisan workshop visit was enlightening. Highly recommended!"</p>
                        <p className="text-sm text-gray-600">- John Doe, USA</p>
                    </div>
                    {/* Testimonial Card 2 */}
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <p className="text-lg text-gray-800 mb-4">"I had the pleasure of staying at a Weaver's Way homestay during my trip to India. It was a unique and authentic experience that allowed me to immerse myself in the local culture. I can't wait to visit again!"</p>
                        <p className="text-sm text-gray-600">- Jane Smith, UK</p>
                    </div>
                    {/* Testimonial Card 3 */}
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <p className="text-lg text-gray-800 mb-4">"As an artisan partnered with Weaver's Way, I've had the opportunity to showcase my craft to a global audience. The platform has helped me connect with art enthusiasts and expand my business." </p>
                        <p className="text-sm text-gray-600">- Artisan Name, India</p>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
        </div>
    );
}
