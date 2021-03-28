import React, {useState, useEffect} from "react";
import "@src/styles/tailwind.css"

const PopupPage = () => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [bookmarkFolders, setBookmarkFolders] = useState([]);
  const titleRef = React.createRef("");
  const urlRef = React.createRef("");

  useEffect(()=>{
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
      setUrl(tabs[0].url);
      setTitle(tabs[0].title);
    });

    chrome.bookmarks.getTree((tree) => {
      setBookmarkFolders([
        ...tree[0].children
      ]);

      console.log([...tree[0].children]);
      console.log(bookmarkFolders);
    })
  },[])

  const SaveBookMarkClicked = () => {
    chrome.bookmarks.create(
      {'title': titleRef.current.value, 'url': urlRef.current.value},
      function(target) {
        console.log(target);
        window.close();
      },
    );
  }

  const onTitleChanged = () => setTitle(titleRef.current.value);
  const onUrlChanged = () => setUrl(urlRef.current.value);

  return (
    <div className="m-2" style={{width: "250px"}}>
      <input className="w-full border my-1 p-1" placeholder="Title" ref={titleRef} defaultValue={title} onChange={onTitleChanged}/>
      <input className="w-full border my-1 p-1" placeholder="Url" ref={urlRef} defaultValue={url} onChange={onUrlChanged}/>
      <select className="w-full border my-1 p-1" name="folders" id="bookmark-folders">
        {
          bookmarkFolders.map((value) => <option value={value.title}>{value.title}</option>)
        }
      </select>
      <button className="w-full text-purple bg-purple-light rounded mt-2 py-1" onClick={SaveBookMarkClicked}>SAVE IT</button>
    </div>
  );
};

export default PopupPage;
