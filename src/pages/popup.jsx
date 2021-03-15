import React from "react";
import "@src/styles/tailwind.css"

const PopupPage = () => {
  let TitleRef = React.createRef();
  let UrlRef = React.createRef();

  const SaveBookMarkClicked = () => {
    chrome.bookmarks.create(
      {'title': TitleRef.current.value, 'url': UrlRef.current.value},
      function(target) {
        console.log(target);
      },
    );
  }

  return (
    <div className="m-2" style={{width: "200px"}}>
      <h1>Popup Page</h1>
      <input className="w-full border my-1" placeholder="Title" ref={TitleRef}/>
      <input className="w-full border my-1" placeholder="Url" ref={UrlRef}/>
      <button className="w-full text-purple bg-purple-light rounded mt-2" onClick={SaveBookMarkClicked}>SAVE IT</button>
    </div>
  );
};

export default PopupPage;
