import React from 'react';
import { Home, Search, FileCheck, Scale, Clipboard, Shield } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description }: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => (
  <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
    <div className="flex justify-center mb-4">
      <Icon className="w-16 h-16 text-[#096CC9]" />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "SELL YOUR HOME",
      description: "We do a free evaluation to be sure you want to start selling"
    },
    {
      icon: Search,
      title: "BUY A HOME",
      description: "Find your dream home with our extensive property listings"
    },
    {
      icon: FileCheck,
      title: "HOME INSPECTION",
      description: "Professional inspection services for your peace of mind"
    },
    {
      icon: Scale,
      title: "LEGAL SERVICES",
      description: "Expert legal guidance throughout your real estate journey"
    },
    {
      icon: Clipboard,
      title: "FREE EVALUATION",
      description: "Get a comprehensive evaluation of your property's worth"
    },
    {
      icon: Shield,
      title: "PROPERTY INSURANCE",
      description: "Protect your investment with comprehensive coverage"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-[#EDF7FA] to-transparent py-24">
      <div className="container mx-auto">
        <div className="flex items-start gap-4 mb-16">
          <div className="w-6 h-[162px] bg-[#8665F6] rounded" />
          <div>
            <h2 className="text-3xl font-bold">EXCLUSIVE. COMMITTED. PROFESSIONAL</h2>
            <h2 className="text-3xl font-bold mt-4">SERVICES WE CAN OFFER YOU</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;