import React from 'react';

const AboutPage = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold tracking-wider mb-8 text-center">ABOUT US</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-400 text-lg leading-relaxed">
              Welcome to Moonsoon Bar & Co., where sophistication meets innovation in the heart of Seattle. 
              Our establishment was founded on the principle of creating extraordinary experiences through 
              masterfully crafted cocktails and an ambiance that captivates.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              Our team of expert mixologists combines traditional techniques with modern creativity, 
              resulting in a unique selection of signature drinks that tell their own stories. Each 
              cocktail is carefully designed to take you on a journey of flavors and sensations.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src="/1.jpg"
              alt="Moonsoon Bar Interior"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;