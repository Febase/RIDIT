import React from 'react';

function Header() {
  return (
    <header className="flex items-center p-4">
      <div
        className="bg-no-repeat bg-contain w-36 h-8 flex-1"
        style={{ backgroundImage: 'url(/img/logo_main.png)' }}
      />
      <div
        className="bg-no-repeat w-6 h-6"
        style={{ backgroundImage: 'url(/img/left_arrow.png)' }}
      />
    </header>
  );
}

export default Header;
