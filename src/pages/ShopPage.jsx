import React from 'react';

const ShopPage = () => {
  const shopItems = [
    {
      name: 'Gift Card',
      price: '$50-$500',
      description: 'The perfect gift for cocktail enthusiasts',
      image: '/4.jpg'
    },
    {
      name: 'Moonsoon T-Shirt',
      price: '$28',
      description: 'Premium cotton blend with vintage design',
      image: '/2.jpg'
    },
    {
      name: 'Signature Glassware',
      price: '$35',
      description: 'Crystal cocktail glasses with Moonsoon logo',
      image: '/3.jpg'
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold tracking-wider mb-12 text-center">SHOP</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {shopItems.map((item, index) => (
            <div key={index} className="border border-gray-800 p-6 space-y-4">
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <p className="text-gray-400">{item.description}</p>
              <p className="text-accent font-bold">{item.price}</p>
              <button className="w-full bg-accent text-black font-bold py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors duration-300">
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400">
            For bulk orders or custom merchandise inquiries,
            please contact us at merchandise@moonsoonbar.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;