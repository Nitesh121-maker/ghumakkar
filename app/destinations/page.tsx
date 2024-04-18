import React from 'react';
import Header from '../header/page';
import Footer from '../footer'
const DestinationsPage = () => {
  // Array of destinations
  const destinations = [
    {
        name: "Andaman and Nicobar Islands",
        place: "Havelock Island",
        image: "https://source.unsplash.com/featured/?havelock,island",
        description: "Experience pristine beaches, crystal-clear waters, and thrilling water sports on Havelock Island."
    },
    {
        name: "Andhra Pradesh",
        place: "Tirupati",
        image: "https://source.unsplash.com/featured/?tirupati",
        description: "Visit the sacred Sri Venkateswara Temple, explore the beautiful Tirumala hills, and seek blessings in Tirupati."
    },
    {
        name: "Arunachal Pradesh",
        place: "Tawang",
        image: "https://source.unsplash.com/featured/?tawang",
        description: "Discover ancient monasteries, breathtaking Himalayan landscapes, and serene lakes in the scenic town of Tawang."
    },
    {
        name: "Assam",
        place: "Kaziranga National Park",
        image: "https://source.unsplash.com/featured/?kaziranga",
        description: "Embark on a thrilling wildlife safari, spot endangered one-horned rhinoceros, and explore the lush greenery of Kaziranga."
    },
    {
        name: "Bihar",
        place: "Bodh Gaya",
        image: "https://source.unsplash.com/featured/?bodh,gaya",
        description: "Visit the sacred Mahabodhi Temple, meditate under the Bodhi Tree, and explore Buddhist heritage in Bodh Gaya."
    },
    {
        name: "Chandigarh",
        place: "Rock Garden",
        image: "https://source.unsplash.com/featured/?rock,garden,chandigarh",
        description: "Marvel at the unique sculptures made from industrial and home waste at the Rock Garden, a must-visit attraction in Chandigarh."
    },
    {
        name: "Chhattisgarh",
        place: "Chitrakoot Falls",
        image: "https://source.unsplash.com/featured/?chitrakoot,falls",
        description: "Witness the breathtaking beauty of the Chitrakoot Falls, also known as the Niagara Falls of India, amidst lush green forests."
    },
    {
        name: "Dadra and Nagar Haveli",
        place: "Silvassa",
        image: "https://source.unsplash.com/featured/?silvassa",
        description: "Explore tribal culture, visit scenic gardens, and enjoy water sports at the Dudhni Lake in the capital city of Silvassa."
    },
    {
        name: "Daman and Diu",
        place: "Nagoa Beach",
        image: "https://source.unsplash.com/featured/?nagoa,beach",
        description: "Relax on the pristine shores of Nagoa Beach, indulge in water sports, and explore Portuguese colonial architecture in Daman and Diu."
    },
    {
        name: "Delhi",
        place: "Red Fort",
        image: "https://source.unsplash.com/featured/?red,fort",
        description: "Explore the grandeur of Mughal architecture, marvel at intricate designs, and learn about India's history at the iconic Red Fort."
    },
    {
        name: "Goa",
        place: "Calangute Beach",
        image: "https://source.unsplash.com/featured/?calangute,beach,goa",
        description: "Experience the vibrant beach life, enjoy water sports, and explore the buzzing nightlife at Calangute Beach, Goa's most famous beach."
    },
    {
        name: "Gujarat",
        place: "Gir National Park",
        image: "https://source.unsplash.com/featured/?gir,national,park",
        description: "Embark on a thrilling safari, spot Asiatic lions in their natural habitat, and explore the biodiversity of Gir National Park."
    },
    {
        name: "Haryana",
        place: "Sultanpur National Park",
        image: "https://source.unsplash.com/featured/?sultanpur,national,park",
        description: "Witness a diverse range of migratory birds, go birdwatching, and enjoy nature trails at Sultanpur National Park, a birdwatcher's paradise."
    },
    {
        name: "Himachal Pradesh",
        place: "Shimla",
        image: "https://source.unsplash.com/featured/?shimla",
        description: "Experience picturesque landscapes, adventure sports, and serene surroundings in the capital city of Himachal Pradesh."
    },
    {
        name: "Jammu and Kashmir",
        place: "Gulmarg",
        image: "https://source.unsplash.com/featured/?gulmarg",
        description: "Experience the beauty of snow-capped mountains, enjoy skiing and snowboarding, and take in panoramic views in the stunning town of Gulmarg."
    },
    {
        name: "Jharkhand",
        place: "Netarhat",
        image: "https://source.unsplash.com/featured/?netarhat",
        description: "Explore the 'Queen of Chotanagpur,' witness scenic landscapes, and enjoy breathtaking sunsets in the hill station of Netarhat."
    },
    {
        name: "Karnataka",
        place: "Coorg",
        image: "https://source.unsplash.com/featured/?coorg",
        description: "Experience coffee plantations, misty hills, and lush greenery in the picturesque hill station of Coorg, also known as Scotland of India."
    },
    {
        name: "Kerala",
        place: "Kochi",
        image: "https://source.unsplash.com/featured/?kochi",
        description: "Explore historical landmarks, witness Chinese fishing nets, and experience the cultural melting pot of Kochi, the Queen of the Arabian Sea."
    },
    {
        name: "Madhya Pradesh",
        place: "Bhopal",
        image: "https://source.unsplash.com/featured/?bhopal",
        description: "Discover a blend of history, culture, and modernity in the capital city of Madhya Pradesh, Bhopal, known for its lakes and architectural landmarks."
    },
    {
        name: "Maharashtra",
        place: "Mumbai",
        image: "https://source.unsplash.com/featured/?mumbai",
        description: "Experience the bustling metropolis, iconic landmarks, and vibrant culture of Mumbai, the financial capital of India."
    },
    {
        name: "Manipur",
        place: "Imphal",
        image: "https://source.unsplash.com/featured/?imphal",
        description: "Explore the scenic beauty, rich history, and vibrant culture of Imphal, the capital city of Manipur, nestled amidst hills and lush greenery."
    },
    {
        name: "Meghalaya",
        place: "Shillong",
        image: "https://source.unsplash.com/featured/?shillong",
        description: "Experience the Scotland of the East, explore cascading waterfalls, and enjoy the music scene in the charming hill station of Shillong."
    },
    {
        name: "Mizoram",
        place: "Aizawl",
        image: "https://source.unsplash.com/featured/?aizawl",
        description: "Experience the vibrant culture, visit scenic viewpoints, and explore the capital city of Mizoram, Aizawl."
    },
    {
        name: "Nagaland",
        place: "Kohima",
        image: "https://source.unsplash.com/featured/?kohima",
        description: "Explore World War II relics, witness Naga heritage, and visit the scenic capital city of Nagaland, Kohima."
    },
    {
        name: "Odisha",
        place: "Puri",
        image: "https://source.unsplash.com/featured/?puri",
        description: "Visit the sacred Jagannath Temple, relax on golden beaches, and witness the vibrant Rath Yatra festival in the coastal town of Puri."
    },
    {
        name: "Puducherry",
        place: "Pondicherry",
        image: "https://source.unsplash.com/featured/?pondicherry",
        description: "Stroll along the picturesque Promenade Beach, enjoy breathtaking sunsets, and explore French colonial architecture in Pondicherry."
    },
    {
        name: "Punjab",
        place: "Amritsar",
        image: "https://source.unsplash.com/featured/?amritsar",
        description: "Visit the iconic Golden Temple, witness the patriotic Wagah Border ceremony, and explore Sikh heritage in Amritsar."
    },
    {
        name: "Rajasthan",
        place: "Jaipur",
        image: "https://source.unsplash.com/featured/?jaipur",
        description: "Explore the Pink City, visit majestic forts and palaces, and experience the rich culture and heritage of Jaipur, the capital city of Rajasthan."
    },
    {
        name: "Sikkim",
        place: "Gangtok",
        image: "https://source.unsplash.com/featured/?gangtok",
        description: "Explore Buddhist monasteries, enjoy panoramic views of the Himalayas, and experience the charming hill station of Gangtok."
    },
    {
        name: "Tamil Nadu",
        place: "Chennai",
        image: "https://source.unsplash.com/featured/?chennai",
        description: "Experience the cultural hub of South India, explore historical landmarks, and enjoy sandy beaches in the vibrant city of Chennai."
    },
    {
        name: "Telangana",
        place: "Hyderabad",
        image: "https://source.unsplash.com/featured/?hyderabad",
        description: "Explore historical monuments, savor delicious Hyderabadi cuisine, and shop at bustling bazaars in the vibrant city of Hyderabad."
    },
    {
        name: "Tripura",
        place: "Agartala",
        image: "https://source.unsplash.com/featured/?agartala",
        description: "Explore the capital city of Tripura, visit historical landmarks, and experience the rich cultural heritage of Agartala."
    },
    {
        name: "Uttar Pradesh",
        place: "Lucknow",
        image: "https://source.unsplash.com/featured/?lucknow",
        description: "Explore historical monuments, savor traditional Awadhi cuisine, and experience the rich cultural heritage of Lucknow, the City of Nawabs."
    },
    {
        name: "Uttarakhand",
        place: "Rishikesh",
        image: "https://source.unsplash.com/featured/?rishikesh",
        description: "Experience the yoga capital of the world, go river rafting on the Ganges, and explore spiritual ashrams in the tranquil town of Rishikesh."
    },
    {
        name: "West Bengal",
        place: "Kolkata",
        image: "https://source.unsplash.com/featured/?kolkata",
        description: "Experience the cultural capital of India, explore historical landmarks, and indulge in delicious Bengali cuisine in the vibrant city of Kolkata."
    },
];

  return (
    <>
    <Header/>
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="containermain mx-auto">
        <h1 className="text-3xl text-gray-800 font-bold mb-8 text-center">Explore Destinations</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md transform transition-transform hover:scale-105">
              <img src={destination.image} alt={destination.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl text-gray-800 font-semibold mb-2">{destination.name}</h2>
                <p className="text-gray-600">{destination.description}</p>
                <div className="mt-4">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">Explore</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default DestinationsPage;
