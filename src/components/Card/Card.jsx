import React from "react";
import "@src/styles/tailwind.css"

const Card = ({ title, source, paragraph, url }) => (
  <div  target="_blank" className="w-64 h-48 py-2.5 px-3 relative bg-white rounded-2xl overflow-hidden mx-2 mt-4 shadow-lg text-left dark:bg-gray-900">
    <div className="flex justify-between items-center">
      <span className="text-xs text-gray-200 ">📂 Programming/.../Next</span>
      <div className="w-6 h-6 rounded cursor-pointer flex items-center justify-center hover:bg-gray-100">
        <div style={{ backgroundImage: 'url(/img/icon_details@2x.png)' }} className="w-4 h-4 bg-contain bg-no-repeat bg-center "></div>
      </div>
    </div>
    <h2 style={{display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical'}} className="font-medium overflow-ellipsis overflow-hidden break-words dark:text-white" href={url}>제목임{title}</h2>
    <div>
      <div className="rounded bg-center bg-cover"></div>
      <p className="text-gray-300 text-xs">Medium{source}</p>
    </div>
    <div className="w-full h-24 rounded-lg bg-center bg-cover absolute bottom-0 left-0  py-2.5 px-3">
    </div>
  </div>
);

export default Card;
