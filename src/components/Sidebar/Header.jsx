import React from 'react';

function Header() {
  return (
    <div className="flex items-center p-4">
      <img
        className="bg-no-repeat bg-contain h-8"
        style={{ backgroundImage: 'url(/img/logo_main.png)' }}
        width="90%"
      />
      <img
        className="bg-no-repeat h-8"
        style={{ backgroundImage: 'url(/img/left_arrow.png)' }}
        width="10%"
      />
    </div>
  );
}

export default Header;
