import React, { useState, useEffect } from "react";
import "@src/styles/tailwind.css"
import CardWrap from "../CardWrap/CardWrap";
import { Result } from "postcss";

const showAlert = () => {
  alert('🚧 Under construction 🚧')
}

const tabItems = [
  { tabIndex: 1, text: 'Reading List'},
  { tabIndex: 2, text: 'Recently Added'},
  { tabIndex: 3, text: 'Already Read'},
]

const iconButtonItems = [
  { name: 'search' },
  { name: 'sort' },
  { name: 'setting' }
]

const Contents = ({foo}) => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <>
      <div className="h-14 w-full px-6 flex justify-between items-center bg-white dark:bg-gray-900">
        {/* 좌측 탭 영역 */}
        <ul className="flex list-none ">
          {tabItems.map(item => {
            return (<li key={item.tabIndex}>
              <button 
                className={`h-8 leading-8 px-4 rounded-lg text-base font-medium cursor-pointer focus:outline-none 
                ${activeTab === item.tabIndex ? "text-purple bg-purple-light" : "text-gray-300"}`}
                onClick={e => {
                  e.preventDefault()
                  setActiveTab(item.tabIndex)
                }}
              >{item.text}</button>
            </li>)
          })}
          
        </ul>

        {/* 우측 버튼 영역 - 검색 / 정렬 / 설정 */}
          <ul className="flex list-none">
            {iconButtonItems.map((item, index) => {
              return (
                <li 
                  key={index}
                  className="h-8 w-8 ml-2.5 rounded-lg bg-purple-light bg-center bg-no-repeat bg-16px cursor-not-allowed"
                  style={{ backgroundImage: `url(/img/icon_${item.name}@2x.png)` }} 
                  onClick={showAlert}>
                </li>
              )
            })}
            
          </ul>
      </div>

      {/* 컨텐츠 영역 */}
      <div className="h-content bg-gray-100 overflow-y-auto dark:bg-gray-800">
        <div className="flex flex-none flex-wrap justify-center max-w-6xl mx-auto">
          {activeTab === 1 && <CardWrap tab={1}/>}
          {activeTab === 2 && <CardWrap tab={2}/>}
          {activeTab === 3 && <CardWrap tab={3}/>}
        </div>
      </div>
    </>)
}

export default Contents;