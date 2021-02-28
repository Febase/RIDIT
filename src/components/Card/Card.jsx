import React from "react";
import "@src/styles/tailwind.css"

const Card = ({ title, paragraph, url }) => (
  <div  target="_blank" className="w-64 h-48 py-2.5 px-3 bg-white rounded-2xl overflow-hidden mx-2 mt-4 shadow-lg text-left dark:bg-gray-900">
    <div className="flex justify-between">
      <span className="text-xs text-c4c4c4">📂 Programming/.../Next</span>
      <div style={{ backgroundImage: 'url(/img/icon_details@2x.png)' }} className="h-4 w-4 bg-contain bg-no-repeat bg-center cursor-pointer"></div>
    </div>
    <h2 style={{display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical'}} className="pt-2 px-2 leading-5 font-medium overflow-ellipsis overflow-hidden break-words" href={url}>{title}</h2>
    <div className="flex ">
      <p className="py-2 px-8">{paragraph}</p>
    </div>
  </div>
);

export default Card;
