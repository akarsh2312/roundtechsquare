import React from 'react';
import AboutAgent from './components/AboutAgent';
import Properties from './components/Properties';
import Services from './components/Services';
import Contact from './components/Contact';
import Blogs from './components/Blogs';
import Footer from './components/Footer';
import PageWrapper from './components/PageWrapper';
function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative">
        <PageWrapper/>
        <AboutAgent />
        <Properties />
        <Services />
        <Contact />
        <Blogs />
        <Footer />
      </div>
    </div>
  );
}

export default App;