import React from 'react';

const MenuPage = () => {
  const menuItems = {
    cocktails: [
      { name: 'Moonsoon Mist', price: '$14', description: 'Gin, elderflower liqueur, fresh lime, cucumber' },
      { name: 'Midnight Manhattan', price: '$16', description: 'Bourbon, sweet vermouth, aromatic bitters' },
      { name: 'Celestial Sour', price: '$15', description: 'Japanese whisky, yuzu, egg white, star anise' },
    ],
    smallPlates: [
      { name: 'Truffle Fries', price: '$12', description: 'Hand-cut fries, parmesan, fresh herbs' },
      { name: 'Tuna Tartare', price: '$18', description: 'Sushi-grade tuna, avocado, wonton crisps' },
      { name: 'Sliders', price: '$16', description: 'Wagyu beef, caramelized onions, special sauce' },
    ]
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold tracking-wider mb-12 text-center">MENU</h1>
        
        {/* Cocktails Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Signature Cocktails</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.cocktails.map((item, index) => (
              <div key={index} className="border border-gray-800 p-6 space-y-3">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-gray-400">{item.description}</p>
                <p className="text-accent">{item.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Small Plates Section */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-center">Small Plates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.smallPlates.map((item, index) => (
              <div key={index} className="border border-gray-800 p-6 space-y-3">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-gray-400">{item.description}</p>
                <p className="text-accent">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;