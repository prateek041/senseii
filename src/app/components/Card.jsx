import React from 'react';

export default function Card(props) {
  const { main, secondary } = props;

  return (
    <div className="w-full max-w-md mx-auto rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
      <div className="relative">
        <img src="/l.avif" alt={main} className="w-full h-5/6 object-cover" />
        <div className="absolute top-0 left-0 w-full h-2/3 bg-black opacity-40"></div>
        <div className="absolute top-0 left-0 w-full h-2/3 flex items-center justify-center text-white text-2xl font-semibold">
          {main}
        </div>
      </div>
      <div className="px-6 py-4">
        <h2 className="text-xl font-semibold text-gray-800">{main}</h2>
        <p className="text-gray-600 text-base">{secondary}</p>
      </div>
    </div>
  );
}
