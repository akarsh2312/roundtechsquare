import React from 'react';
import { Bed, Bath } from 'lucide-react';

const PropertyCard = ({ image, title, price, description, beds, baths }: {
  image: string;
  title: string;
  price: string;
  description: string;
  beds: number;
  baths: number;
}) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
    <img src={image} alt={title} className="w-full h-44 object-cover" />
    <div className="p-6">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-xl font-bold text-[#096CC9] mb-2">{price}</p>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <div className="flex gap-4 text-sm text-gray-600">
        <div className="flex items-center">
          <Bed className="w-4 h-4 mr-1" />
          {beds} Beds
        </div>
        <div className="flex items-center">
          <Bath className="w-4 h-4 mr-1" />
          {baths} Baths
        </div>
      </div>
    </div>
  </div>
);

const Properties = () => {
  const properties = [
    {
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3",
      title: "Villa with Amazing View",
      price: "$600,000",
      description: "Beautiful, updated, ground level Co-op apartment in the desirable Bay...",
      beds: 4,
      baths: 3
    },
    {
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3",
      title: "Modern Family Home",
      price: "$750,000",
      description: "Beautiful, updated, ground level Co-op apartment in the desirable Bay...",
      beds: 4,
      baths: 3
    },
    {
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3",
      title: "Luxury Penthouse",
      price: "$1,200,000",
      description: "Beautiful, updated, ground level Co-op apartment in the desirable Bay...",
      beds: 4,
      baths: 3
    }
  ];

  return (
    <div className="container mx-auto py-24">
      <div className="flex items-start gap-4 mb-16">
        <div className="w-6 h-[181px] bg-[#8665F6] rounded" />
        <div>
          <h2 className="text-3xl font-bold">EXPLORE THE LATEST PROPERTIES</h2>
          <h2 className="text-3xl font-bold mt-4">AND SELECT YOUR HOME</h2>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((property, index) => (
          <PropertyCard key={index} {...property} />
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <button className="bg-[#096CC9] text-white px-8 py-3 rounded font-semibold hover:bg-[#0857a0] transition">
          LOAD MORE LISTINGS
        </button>
      </div>
    </div>
  );
};

export default Properties;