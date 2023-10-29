'use client';
import { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert('This needs to implemented');

    // try {
    //   await fetch(
    //     'https://docs.google.com/forms/d/e/1FAIpQLSd7dPB0VXxnEqf6NxXEv0l8EdTwMDn7mLm_kwJZrrcnenIVzQ/',
    //     {
    //       method: 'POST',
    //       mode: 'no-cors',
    //       body: formData,
    //     }
    //   );

    //   alert('Form submitted successfully!');
    // } catch (error) {
    //   console.error('Error submitting form:', error);
    // }
  };
  return (
    <div className="bg-[#CDC6E9] flex flex-col gap-y-10 items-center w-full h-full p-10">
      <h1 className="text-3xl">
        Get in <b> Touch</b>
      </h1>
      <div className="w-full h-full">
        <form
          className="flex flex-col justify-center items-center h-full w-full gap-5"
          onSubmit={handleSubmit}
        >
          <div className="flex justify-between gap-5 w-1/2">
            <div className="w-full">
              <label
                className="block text-gray-700 text-sm mb-1"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Enter Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="w-full">
              <label
                className="block text-gray-700 text-sm mb-1"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="w-1/2">
            <label className="block text-gray-700 text-sm mb-1" htmlFor="email">
              Email
            </label>
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              className="resize-none border rounded-md p-2 w-full h-40"
              placeholder="Enter description"
            ></textarea>
          </div>
          <button
            className="bg-[#CDC6E9] border-2 border-black hover:bg-blue-700 hover:text-white text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="flex justify-center items-center">
        <p>Made with ❤️ by Top Crew</p>
      </div>
    </div>
  );
}
