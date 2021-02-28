import React from "react";
import "@src/styles/tailwind.css"
import Card from "../Card/Card";

const Contents = () => {
  const [activeTab, setActiveTab] = React.useState(1);
  const showAlert = () => {
    alert('준비 중입니다 :)')
  }
  return (
    <>
      <div className="h-14 w-full px-6 flex justify-between items-center bg-white dark:bg-gray-900">

        {/* 좌측 탭 영역 */}
        <ul className="flex list-none ">
          <li 
            className={"h-8 leading-8 px-4 rounded-lg text-base font-medium cursor-pointer " 
            + (activeTab === 1 ? "text-purple bg-purple-light" : "text-gray-300")}
            onClick={e => {
              e.preventDefault()
              setActiveTab(1)
            }}
          >Reading List</li>
          <li 
            className={"h-8 leading-8 px-4 rounded-lg text-base font-medium cursor-pointer " 
            + (activeTab === 2 ? "text-purple bg-purple-light " : "text-gray-300")}
            onClick={e => {
              e.preventDefault()
              setActiveTab(2)
            }}
          >recently Added</li>
          <li 
            className={"h-8 leading-8 px-4 rounded-lg text-base font-medium cursor-pointer " 
            + (activeTab === 3 ? "text-purple bg-purple-light" : "text-gray-300")}
            onClick={e => {
              e.preventDefault()
              setActiveTab(3)
            }}
          >Already Read</li>
        </ul>

        {/* 우측 버튼 영역 - 검색 / 정렬 / 설정 */}
        <ul className="flex list-none">
          <li 
            id="btn-search" 
            className="h-8 w-8 rounded-lg bg-purple-light cursor-not-allowed"
            onClick={showAlert}>
          </li>
          <li id="btn-sort" 
            className="h-8 w-8 ml-2.5 rounded-lg bg-purple-light cursor-not-allowed" 
            onClick={showAlert}>
          </li>
          <li i
            d="btn-setting" 
            className="h-8 w-8 ml-2.5  rounded-lg bg-purple-light cursor-not-allowed" 
            onClick={showAlert}>
          </li>
        </ul>
      </div>

      {/* 컨텐츠 영역 */}
      <div className="h-content bg-gray-100 dark:bg-gray-800">
        <div className="flex flex-wrap justify-center max-w-screen-2xl mx-auto">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>)
}

export default Contents;