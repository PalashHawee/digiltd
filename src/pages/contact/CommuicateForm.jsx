import React from "react";

const CommunicateForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };
  return (
    <div className="bg-white text-gray-800 p-8 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Send Us Message</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
            placeholder="Your Name"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
            placeholder="Your Email"
            required
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium">
            Mobile No. (optional)
          </label>
          <input
            type="text"
            id="phone"
            className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
            placeholder="Your Mobile Number"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium">
            Your Message
          </label>
          <textarea
            id="message"
            rows="4"
            className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
            placeholder="Your Message"
            required
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-green-400 text-white py-2 px-4 rounded-lg hover:bg-green-500 transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CommunicateForm;
