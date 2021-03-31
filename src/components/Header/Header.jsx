import React from "react";
import "@src/styles/tailwind.css"

const reloadPage = () => {
  window.location.reload()
}

const Header = () => (
  <header className="h-14 sticky flex items-center justify-center border-b border-ededed bg-white dark:bg-gray-900 dark:border-gray-800">
    <h1 id="logo-top" style={{ backgroundImage: 'url(/img/logo_main.png)' }}  className="w-36 h-8 bg-contain bg-no-repeat bg-center cursor-pointer" onClick={reloadPage}></h1>
  </header>
)

export default Header;