import { useState, useEffect } from 'react';
import logo from '/logo.png';
import LocationSection from './LocationSection';
import MarketSection from './MarketSection';

const images = [
  '/1.jpg',
  '/2.jpg',
  '/3.jpg',
  '/4.jpg'
];

const LandingPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Images */}
      {images.map((img, index) => (
        <div
          key={img}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
        >
          <img
            src={img}
            alt={`Location ${index + 1}`}
            className="h-full w-full object-cover"
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-black bg-opacity-40" />



      {/* Logo and Title */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
        <img src={logo} alt="Moonsoon Bar & Co. Logo" className="w-40 h-40 mb-4 invert" />
        <h1 className="text-2xl font-light tracking-wider text-center">Moonsoon Bar & Co.</h1>
      </div>
    </div>
    <LocationSection />
    <MarketSection />
    </>
  );
};

export default LandingPage;