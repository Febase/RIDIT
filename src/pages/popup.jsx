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
  const [selectedFolderID, setSelectedFolderID] = useState(1);
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
      {'title': titleRef.current.value, 'url': urlRef.current.value, 'parentId': selectedFolderID},
      function(target) {
        console.log(target);
        window.close();
      },
    );
  }

  const onTitleChanged = () => setTitle(titleRef.current.value);
  const onUrlChanged = () => setUrl(urlRef.current.value);
  const onSelectedFolderChange = ({target}) => {
    const optionElement = target.childNodes[target.selectedIndex]
    setSelectedFolderID(optionElement.getAttribute('key'));
  }

  return (
    <div className="m-2" style={{width: "300px"}}>
      <div className="w-full">
        <p className="px-2 w-1/5 inline-flex text-center">Title</p>
        <input className="w-4/5 border my-1 p-1 justify-self-end" placeholder="Title" ref={titleRef} defaultValue={title} onChange={onTitleChanged}/>
      </div>
      <div className="w-full">
        <span className="px-2 w-1/5 inline-flex text-center">Url</span>
        <input className="w-4/5 border my-1 p-1" placeholder="Url" ref={urlRef} defaultValue={url} onChange={onUrlChanged}/>
      </div>
      <div className="w-full">
        <span className="px-2 w-1/5 inline-flex text-center">Folder</span>
        <select className="w-4/5 border my-1 p-1" name="folders" id="bookmark-folders" onChange={onSelectedFolderChange}>
          {
            bookmarkFolders.map(({title, id}) => <option value={title} key={id}>{title}</option>)
          }
        </select>
      </div>
      <button className="w-full text-purple bg-purple-light rounded mt-3 py-1.5" onClick={SaveBookMarkClicked}>SAVE IT</button>
    </div>
  );
};

export default PopupPage;
