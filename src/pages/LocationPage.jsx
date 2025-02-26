import React from 'react';

const LocationPage = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold tracking-wider mb-12 text-center">LOCATION</h1>
        
        {/* Map and Address Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src="/seattle.png"
              alt="Seattle Location"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">SEATTLE</h2>
            <div className="space-y-2">
              <p className="text-gray-400">123 Pike Street</p>
              <p className="text-gray-400">Seattle, WA 98101</p>
              <p className="text-gray-400 mt-4">Phone: (206) 555-0123</p>
            </div>
            <div className="space-y-2 mt-8">
              <h3 className="text-xl font-semibold">Hours</h3>
              <p className="text-gray-400">Monday - Thursday: 4pm - 12am</p>
              <p className="text-gray-400">Friday - Saturday: 4pm - 2am</p>
              <p className="text-gray-400">Sunday: 4pm - 11pm</p>
            </div>
          </div>
        </div>

        {/* Private Events Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 order-2 md:order-1">
            <h2 className="text-3xl font-bold">PRIVATE EVENTS</h2>
            <p className="text-gray-400">
              Host your next special occasion at Moonsoon Bar & Co. Our intimate space 
              can accommodate private parties, corporate events, and celebrations of 
              all kinds. Our team will work with you to create a custom experience 
              that meets your needs.
            </p>
            <button className="border-2 border-white px-8 py-2 hover:bg-white hover:text-black transition-colors duration-300">
              INQUIRE NOW
            </button>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden order-1 md:order-2">
            <img
              src="/bar.jpg"
              alt="Private Events"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationPage;