import React, {useState, useEffect} from "react";
import "@src/styles/tailwind.css"

const flat = (array) => {
  var result = [];
  array.forEach(function (a) {
      result.push(a);
      if (Array.isArray(a.children)) {
          result = result.concat(flat(a.children));
      }
  });
  return result;
}

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
        ...flat([...tree[0].children]).filter((child) => !child.hasOwnProperty("url"))
      ]);
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
          bookmarkFolders.map(({title, id}) => <option value={title} id={id}>{title}</option>)
        }
      </select>
      <button className="w-full text-purple bg-purple-light rounded mt-2 py-1" onClick={SaveBookMarkClicked}>SAVE IT</button>
    </div>
  );
};

export default PopupPage;
