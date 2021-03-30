import React from 'react';

function ListBtn() {
  return (
    <div className="p-4 flex">
      <button
        className="w-36 h-8 bg-purple-800 text-sm rounded-l-lg outline-none"
        style={{ backgroundColor: '#514A9D', color: '#ffffff' }}
      >
        Bookmark List
      </button>
      <button
        className="w-36 h-8 bg-transparent text-sm text-white border rounded-r-lg border-purple-900 outline-none"
        style={{ backgroundColor: "#ffffff", color: '#514A9D' }}
      >
        Reading List
      </button>
    </div>
  );
}

export default ListBtn;
