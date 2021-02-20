import React from "react";
import "@src/styles/tailwind.css"

const Card = ({ title, paragraph, url }) => (
  <a href={url} target="_blank" className="w-64 h-48 bg-white hover:bg-gray-200 rounded-2xl overflow-hidden mx-2 mt-4 shadow-lg text-left dark:bg-gray-900">
    <h2 className="py-2 px-8">{title}</h2>
    <div className="flex ">
      <p className="py-2 px-8">{paragraph}</p>
    </div>
  </a>
);

export default Card;
