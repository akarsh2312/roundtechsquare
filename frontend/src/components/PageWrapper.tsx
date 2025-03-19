import React from 'react';
import Header from './Header';
import Hero from './Hero';

const PageWrapper = () => {
  return (
    <div
      className="relative"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="bg-black/70">
        <Header />
        <Hero />
      </div>
    </div>
  );
};

export default PageWrapper;