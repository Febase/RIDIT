import React from 'react';

function Input() {
  return (
    <div className="flex items-center p-4">
      <input
        className="w-full bg-gray-200 rounded-md outline-none h-8 text-base p-2"
        placeholder="keywords..."
      />
      <img
        className="h-8 bg-no-repeat bg-purple-200"
        style={{ backgroundImage: 'url(/img/search.png)' }}
        width="10%"
      />
    </div>
  );
}

export default Input;
