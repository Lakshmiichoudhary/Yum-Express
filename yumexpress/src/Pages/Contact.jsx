import React from 'react'

const Contact = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="mb-4 font-bold mt-7 lg:text-3xl text-center">
        We'd love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out to us using the contact information below.
      </p>
      <div className="flex flex-wrap mt-7 mx-16">
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <h2 className="text-xl font-bold mb-2">Visit Us</h2>
          <p>
            123 Main Street,<br />
            City, State, ZIP
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-xl font-bold mb-2">Contact Information</h2>
          <p>
            Email: info@restaurant.com<br />
            Phone: 0987654321<br />
          </p>
        </div>
      </div>
      <h2 className="text-xl font-bold mt-8 mb-2 mx-16">Send us a Message</h2>
      <form className="w-full max-w-lg mx-16">
        <div className="flex flex-wrap mb-6">
          <div className="w-full">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-email">
              Email
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-email" type="email" placeholder="you@example.com" />
          </div>
        </div>
        <div className="flex flex-wrap mb-6">
          <div className="w-full">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-message">
              Message
            </label>
            <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-message" rows="6" placeholder="Your message..."></textarea>
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3">
            <button className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
              Send Message
            </button>
          </div>
          <div className="md:w-2/3"></div>
        </div>
      </form>
    </div>
  );
};

export default Contact