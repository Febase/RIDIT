import React, {useState, useEffect} from "react";
import "@src/styles/tailwind.css"

const PopupPage = () => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  useEffect(()=>{
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
      setUrl(tabs[0].url);
      setTitle(tabs[0].title);
    });
  },[])

  const SaveBookMarkClicked = () => {
    chrome.bookmarks.create(
      {'title': title, 'url': url},
      function(target) {
        console.log(target);
      },
    );
  }

  return (
    <div className="m-2" style={{width: "200px"}}>
      <h1>Popup Page</h1>
      <input className="w-full border my-1" placeholder="Title" defaultValue={title}/>
      <input className="w-full border my-1" placeholder="Url" defaultValue={url}/>
      <button className="w-full text-purple bg-purple-light rounded mt-2" onClick={SaveBookMarkClicked}>SAVE IT</button>
    </div>
  );
};

export default PopupPage;
