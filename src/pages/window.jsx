import React from "react";
import "@src/styles/tailwind.css"
import Header from "../components/Header/Header";
import Contents from "../components/Contents/Contents";

const WindowPage = () => {
  return (
    <div className="h-screen">
      <Header />
      <Contents />
    </div>
  );
};

export default WindowPage;
