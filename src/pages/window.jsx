import React from "react";
import Card from "@src/components/Card/Card.jsx"
import "@src/styles/tailwind.css"

const WindowPage = () => {
  return (
    <div className="bg-yellow-100 h-screen">
      <header className="text-center p-8">
        <h1 className="text-3xl font-bold tracking-widest">RIDIT</h1>
        <p className="">Read it 👀, Get Rid of it!</p>
      </header>
      <section className="text-center">
        <h1 className="text-xl font-light pb-4">
          ✔️ Check Reminders 
          <span class="text-base text-white bg-gray-900 rounded-full px-2 ml-2 inline-block align-text-bottom ">1/3</span>
        </h1>
        <div className="flex flex-col">
          <Card title="aaa" paragraph="bbb" url="https://www.naver.com"/>
          <Card title="aaa" paragraph="bbb"/>
          <Card title="aaa" paragraph="bbb"/>
        </div>
      </section>
      
    </div>
  );
};

export default WindowPage;
