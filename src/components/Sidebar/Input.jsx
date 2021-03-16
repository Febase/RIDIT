import React from 'react';

function Input() {
  return (
    <div className="flex items-center p-4">
      <input
        className="w-80 bg-gray-200 rounded-md outline-none h-8 text-base p-2"
        placeholder="keywords..."
      />
      <div
        className="w-8 h-8 bg-no-repeat bg-purple-light rouded-8"
        style={{ backgroundImage: 'url(/img/search.png)' }}
      />
    </div>
  );
}

export default Input;
