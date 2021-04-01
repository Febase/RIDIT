import React from 'react';

function Input() {
  return (
    <div className="flex items-center px-4 py-2">
      <input
        className="w-64 mr-2 bg-gray-200 rounded-md outline-none h-8 text-base p-2"
        placeholder="keywords..."
      />
      <div 
        id="btn-search" 
        className="h-8 w-8 rounded-lg bg-purple-light bg-center bg-no-repeat bg-16px"
        style={{ backgroundImage: 'url(/img/icon_search@2x.png)' }}
      />
    </div>
  );
}

export default Input;
