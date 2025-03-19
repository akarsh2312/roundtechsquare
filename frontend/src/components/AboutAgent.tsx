import React from 'react';

const AboutAgent = () => {
  return (
    <div className="container mx-auto py-24">
      <div className="flex gap-16">
        <div className="w-1/3">
          <img 
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
            alt="Krystelle Romy"
            className="w-full h-[432px] object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="w-2/3">
          <h2 className="text-3xl font-bold mb-6">MEET KRYSTELLE ROMY</h2>
          <p className="text-gray-700 mb-6">
            Helping you achieve your real estate goals is my top priority. When we work together, it is about YOU. 
            I listen to your needs, work diligently to achieve your objectives, and strive to always exceed your expectations.
          </p>
          <p className="text-gray-700">
            Krystelle's outcomes driven approach, uprightness, and genuineness have procured him top-maker status and 5-star surveys from his clients. 
            He uses the most important innovation, custom advertising methodologies, and top to bottom market information to acquire an edge over different specialists. 
            Krystelle pays attention to his clients' objectives, lays out a customized made arrangement, and imparts constantly bringing about an astounding encounter beginning to end. 
            He highly esteems his own assistance and consideration regarding everything about… that trading land are presumably probably the most close to home and huge occasions in their lives.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutAgent;