import React from 'react';

export default function Card(props) {
  const { sup, main, secondary } = props;
  return (
    <div className="card-container flex flex-col border-t border-black p-5">
      <sup className="text-xl">{sup}</sup>
      <div className="ml-5 w-2/3">
        <h1 className="text-2xl font-medium">{main}</h1>
        <h2 className="text-sm ">{secondary}</h2>
      </div>
    </div>
  );
}
