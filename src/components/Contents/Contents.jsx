import React, { useState } from "react";
import "@src/styles/tailwind.css"
import Card from "../Card/Card";

const showAlert = () => {
  alert('🚧 Under construction 🚧')
}

// const data = [
//   { title: decodeURI, tab: 1}
// ]

const Contents = ({foo}) => {
  const [activeTab, setActiveTab] = useState(1);
  
  return (
    <>
      <div className="h-14 w-full px-6 flex justify-between items-center bg-white dark:bg-gray-900">

        {/* 좌측 탭 영역 */}
        <ul className="flex list-none ">
          <li>
            <button 
              className={"h-8 leading-8 px-4 rounded-lg text-base font-medium cursor-pointer focus:outline-none " 
              + (activeTab === 1 ? "text-purple bg-purple-light" : "text-gray-300")}
              onClick={e => {
                e.preventDefault()
                setActiveTab(1)
              }}
            >Reading List</button>
          </li>
          <li>
            <button
              className={"h-8 leading-8 px-4 rounded-lg text-base font-medium cursor-pointer focus:outline-none " 
              + (activeTab === 2 ? "text-purple bg-purple-light " : "text-gray-300")}
              onClick={e => {
                e.preventDefault()
                setActiveTab(2)
              }}
            >Recently Added</button>
          </li>
          <li>
            <button
              className={"h-8 leading-8 px-4 rounded-lg text-base font-medium cursor-pointer focus:outline-none " 
              + (activeTab === 3 ? "text-purple bg-purple-light" : "text-gray-300")}
              onClick={e => {
                e.preventDefault()
                setActiveTab(3)
              }}
            >Already Read</button>
          </li>
        </ul>

        {/* 우측 버튼 영역 - 검색 / 정렬 / 설정 */}
          <ul className="flex list-none">
            <li 
              id="btn-search" 
              className="h-8 w-8 rounded-lg bg-purple-light bg-center bg-no-repeat bg-16px cursor-not-allowed"
              style={{ backgroundImage: 'url(/img/icon_search@2x.png)' }} 
              onClick={showAlert}>
            </li>
            <li 
              id="btn-sort" 
              className="h-8 w-8 ml-2.5 rounded-lg bg-purple-light bg-center bg-no-repeat bg-16px cursor-not-allowed" 
              style={{ backgroundImage: 'url(/img/icon_sort@2x.png)' }} 
              onClick={showAlert}>
            </li>
            <li 
              id="btn-setting" 
              className="h-8 w-8 ml-2.5  rounded-lg bg-purple-light bg-center bg-no-repeat bg-16px cursor-not-allowed" 
              style={{ backgroundImage: 'url(/img/icon_setting@2x.png)' }} 
              onClick={showAlert}>
            </li>
          </ul>
      </div>

      {/* 컨텐츠 영역 */}
      <div className="h-content bg-gray-100 overflow-y-auto dark:bg-gray-800">
        <div className="grid gap-4 place-items-center lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>)
}

export default Contents;