import React from 'react';

const LocationSection = () => {
  return (
    <section className="bg-black text-white py-20">
      {/* Location Display */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 mb-20">
          <div className="relative max-w-sm mx-auto w-full">
            <h3 className="text-center text-2xl font-bold tracking-wider text-white mb-4">Location</h3>
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src="/seattle.png"
                alt="Seattle Location"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-center text-3xl mt-6 font-bold tracking-wider">SEATTLE</h2>
            <p className="text-center text-lg text-gray-400 mt-2">Seattle, WA</p>
          </div>
        </div>

        {/* Private Events Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold tracking-wider">PRIVATE EVENTS</h2>
            <p className="text-gray-400">Book your next event at Moonsoon Bar & Co.</p>
            <button className="border-2 border-white px-8 py-2 hover:bg-white hover:text-black transition-colors duration-300">
              BOOK NOW
            </button>
          </div>
          <div className="relative aspect-[4/3]">
            <img
              src="/bar.jpg"
              alt="Private Events"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;