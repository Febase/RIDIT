import React, {useEffect} from "react";
import "@src/styles/tailwind.css"
import Header from "../components/Header/Header";
import Contents from "../components/Contents/Contents";
import Sidebar from "../components/Sidebar/Sidebar";

const WindowPage = () => {

  return (
    <div className="h-screen">
      {/* <Sidebar /> */}
      <Header />
      <Contents />
    </div>
  );
};

export default WindowPage;
