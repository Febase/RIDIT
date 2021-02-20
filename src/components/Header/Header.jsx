import React from "react";
import "@src/styles/tailwind.css"

// const headerStyle = {
//   backgroundImage: `url(${logo})`,
// }

const reloadPage = () => {
  window.location.reload()
}

const Header = () => (
  <header className="h-14 bg-white sticky text-center border-b border-ededed ">
    <h1 id="logo-top" className="h-8"onClick={reloadPage}></h1>
  </header>
)

export default Header;