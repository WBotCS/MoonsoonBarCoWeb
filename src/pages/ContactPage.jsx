import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold tracking-wider mb-12 text-center">CONTACT US</h1>
        
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-gray-900 border border-gray-800 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-gray-900 border border-gray-800 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-gray-900 border border-gray-800 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full bg-gray-900 border border-gray-800 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-accent text-black font-bold py-3 px-6 rounded-md hover:bg-opacity-90 transition-colors duration-300"
            >
              Send Message
            </button>
          </form>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4">Visit Us</h2>
            <p className="text-gray-400">123 Pike Street</p>
            <p className="text-gray-400">Seattle, WA 98101</p>
            <p className="text-gray-400 mt-4">Phone: (206) 555-0123</p>
            <p className="text-gray-400">Email: info@moonsoonbar.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;