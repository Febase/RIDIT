import React from "react";
import "@src/styles/tailwind.css"

const Card = ({ title, paragraph, url }) => (
  <a href={url} target="_blank" className="bg-white hover:bg-gray-200 rounded-md overflow-hidden mx-auto mt-4 shadow-lg w-11/12 md:w-4/5 lg:w-3/6 divide-y text-left">
    <h2 className="py-2 px-8">{title}</h2>
    <div className="flex">
      <p className="py-2 px-8">{paragraph}</p>
    </div>
  </a>
);

export default Card;
