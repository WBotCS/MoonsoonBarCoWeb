import React from 'react';
import { FaInstagram } from 'react-icons/fa';

const MarketSection = () => {
  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative">
          {/* Left Content */}
          <div className="space-y-6 relative p-8">
            {/* Decorative Border */}
            <div className="absolute inset-0 border-2 border-gray-800"></div>
            {/* Content */}
            <div className="relative z-10">
              <h2 className="text-4xl font-bold tracking-wider mb-2">Moonsoon Bar & Co.<br />MARKET</h2>
              <div className="w-48 h-0.5 bg-white mb-6"></div>
              <p className="text-gray-400 mb-8">Shop our apparel, and gift cards.</p>
              <button className="border-2 border-white px-8 py-2 hover:bg-white hover:text-black transition-colors duration-300">
                SHOP NOW
              </button>
            </div>
          </div>

          {/* Right Content - Images */}
          <div className="grid grid-cols-1 gap-6">
            <div className="relative aspect-[16/9] overflow-hidden">
              <img
                src="/5.jpg"
                alt="Cocktail Glassware"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Instagram Section */}
        <div className="text-center mt-32">
          <h2 className="text-3xl font-bold tracking-wider mb-8">FOLLOW US ON INSTAGRAM:</h2>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="inline-block hover:text-accent transition-colors duration-300">
            <FaInstagram className="w-12 h-12" />
          </a>
        </div>

        {/* Trademark Section */}
        <div className="text-center mt-16 text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Moonsoon Bar & Co. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default MarketSection;