import React from 'react';
import { Search } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative h-[653px] bg-black/70">
      {/* Background image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.3
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto h-full flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold text-white text-center mb-4">
          FIND YOUR DREAM HOUSE
        </h1>
        <p className="text-white text-center max-w-2xl mb-8">
          We are recognized for exceeding client expectations and delivering great results through dedication, 
          ease of process, and extraordinary services to our worldwide clients.
        </p>

        {/* Action buttons */}
        <div className="flex gap-4 mb-8">
          <button className="px-8 py-2 border-2 border-white text-white font-semibold rounded hover:bg-white hover:text-black transition">
            WHAT'S MY HOME WORTH
          </button>
          <button className="px-8 py-2 border-2 border-white text-white font-semibold rounded hover:bg-white hover:text-black transition">
            WORK WITH KRYSTELLE
          </button>
        </div>

        {/* Search box */}
        <div className="flex w-full max-w-2xl bg-white/80 p-2 rounded">
          <input
            type="text"
            placeholder="Enter an address, city or neighborhood"
            className="flex-1 px-4 py-2 rounded bg-white"
          />
          <button className="ml-2 px-6 py-2 bg-[#096CC9] text-white font-bold rounded flex items-center">
            <Search className="w-4 h-4 mr-2" />
            SEARCH LISTINGS
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;