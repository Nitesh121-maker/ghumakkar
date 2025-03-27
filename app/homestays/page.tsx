import React from 'react';
import Header from '../header/page';
import Footer from '../footer'
const HomestaysPage = () => {
  const homestays = [
    {
      name: "Traditional Homestay in Rajasthan",
      location: "Jaipur, Rajasthan",
      image: "https://source.unsplash.com/featured/?traditional,house,rajasthan",
      rating: "4.5",
      price: "$50/night",
      amenities: ["Free Wi-Fi", "Breakfast Included", "Air Conditioning"]
    },
    {
        name: "Traditional Homestay in Uttarakhand",
        location: "Rishikesh, Uttarakhand",
        image: "https://source.unsplash.com/featured/?traditional,house,uttarakhand",
        rating: "4.5",
        price: "$50/night",
        amenities: ["Free Wi-Fi", "Breakfast Included", "Air Conditioning"]
      },
      {
        name: "Traditional Homestay in Himachal",
        location: "Shimla, Himachal",
        image: "https://source.unsplash.com/featured/?traditional,house,himachal",
        rating: "4.5",
        price: "$50/night",
        amenities: ["Free Wi-Fi", "Breakfast Included", "Air Conditioning"]
      },
      {
        name: "Traditional Homestay in Madhyapradesh",
        location: "Amarkantak, Madhyapradesh",
        image: "https://source.unsplash.com/featured/?traditional,house,madhyapradesh",
        rating: "4.5",
        price: "$50/night",
        amenities: ["Free Wi-Fi", "Breakfast Included", "Air Conditioning"]
      },
      {
        name: "Traditional Homestay in Gujrat",
        location: "Thar, Gujrat",
        image: "https://source.unsplash.com/featured/?traditional,house,gujrat",
        rating: "4.5",
        price: "$50/night",
        amenities: ["Free Wi-Fi", "Breakfast Included", "Air Conditioning"]
      },
      {
        name: "Traditional Homestay in Asam",
        location: "Dibrugadh, Asam",
        image: "https://source.unsplash.com/featured/?traditional,house,asam",
        rating: "4.5",
        price: "$50/night",
        amenities: ["Free Wi-Fi", "Breakfast Included", "Air Conditioning"]
      },
      {
        name: "Traditional Homestay in Manipur",
        location: "Imphal, Manipur",
        image: "https://source.unsplash.com/featured/?traditional,house,manipur",
        rating: "4.5",
        price: "$50/night",
        amenities: ["Free Wi-Fi", "Breakfast Included", "Air Conditioning"]
      },
      {
        name: "Traditional Homestay in Arunachal",
        location: "Gangtoke, Arunachal",
        image: "https://source.unsplash.com/featured/?traditional,house,arunachal",
        rating: "4.5",
        price: "$50/night",
        amenities: ["Free Wi-Fi", "Breakfast Included", "Air Conditioning"]
      },
      {
        name: "Traditional Homestay in Meghalaya",
        location: "Shilong, Meghalaya",
        image: "https://source.unsplash.com/featured/?traditional,house,meghalaya",
        rating: "4.5",
        price: "$50/night",
        amenities: ["Free Wi-Fi", "Breakfast Included", "Air Conditioning"]
      },
    // Add more homestays here
  ];

  return (
    <>
    <Header/>
    <section className="bg-gray-300 py-16">
      <div className="containermain mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Homestays</h2>
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
    <Footer/>
    </>
  );
};

export default HomestaysPage;
