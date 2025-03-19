import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Youtube, MessageCircle } from 'lucide-react';

const Header = () => {
  return (
    <header className="relative">
      {/* Top header */}
      <div className="w-full h-10 border-b border-white/30">
        <div className="container mx-auto flex justify-between items-center h-full">
          {/* Social media */}
          <div className="flex h-full">
            {[Facebook, Twitter, Linkedin, Instagram, Youtube].map((Icon, i) => (
              <a 
                key={i}
                href="#" 
                className="w-10 h-10 border-l border-white/30 flex items-center justify-center hover:bg-white/10"
              >
                <Icon className="w-4 h-4 text-white" />
              </a>
            ))}
          </div>
          
          {/* Contact */}
          <div className="flex items-center border-x border-white/30 px-4">
            <MessageCircle className="w-4 h-4 text-white mr-2" />
            <a href="mailto:contact@krystelleromy.com" className="text-white text-sm">
              contact@krystelleromy.com
            </a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="container mx-auto py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/logo.png" alt="Logo" className="w-10 h-10" />
            <div className="ml-3">
              <h1 className="text-white font-bold">KRYSTELLE ROMY</h1>
              <p className="text-white font-bold">RESIDENCE</p>
            </div>
          </div>

          {/* Nav links */}
          <div className="flex gap-8">
            {['HOME', 'SELL', 'BUY', 'ACTIVE LISTINGS', 'CONTACT', 'BLOGS'].map((item) => (
              <a 
                key={item} 
                href="#" 
                className="text-white font-bold hover:text-gray-200"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;