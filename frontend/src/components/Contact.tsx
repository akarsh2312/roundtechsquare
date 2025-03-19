import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({
          name: '',
          phone: '',
          email: '',
          message: '',
        });
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="container mx-auto py-24">
      <div className="bg-[#EDF7FA] rounded-2xl p-12 relative">
        <div className="flex gap-16">
          {/* Contact Form */}
          <div className="w-1/3">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-lg font-semibold mb-6">Send a message today</h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm mb-1">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-2 border rounded"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Phone number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (234) 567-890"
                    className="w-full px-4 py-2 border rounded"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="johndoe@example.com"
                    className="w-full px-4 py-2 border rounded"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message in 100-150 words"
                    rows={4}
                    className="w-full px-4 py-2 border rounded"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#096CC9] text-white py-2 rounded font-semibold"
                >
                  SEND EMAIL
                </button>
              </form>
            </div>
          </div>

          {/* Contact Content */}
          <div className="w-2/3">
            <span className="text-[#096CC9] font-bold">LET'S GRAB COFFEE</span>
            <h2 className="text-3xl font-bold mt-4 mb-8">
              GET IN TOUCH WITH ME TO PLAN YOUR NEXT REAL ESTATE
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our experts and developers would love to contribute their expertise and insights 
              and help you today. Contact us to help you plan your next transaction, either 
              buying or selling a home.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;