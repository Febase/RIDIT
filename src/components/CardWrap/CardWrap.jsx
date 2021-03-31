import React, { useState, useEffect }  from "react";
import Card from "../Card/Card";
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

const CardWrap = ({tab}) => {
	const [bookmarks, setBookmarks] = useState([]);
	const [random, setRandom] = useState([]);
	const [recent, setRecent] = useState([]);
	useEffect(()=>{
		if(tab == 1) {
			chrome.bookmarks.getTree((tree) => {
				const allBookmarks = flat([...tree[0].children]).filter((child) => child.hasOwnProperty("url"));
				const selectedBookmarks = [];
				let n = 0;
				while(n < 12) {
					if(allBookmarks.length < n) {
						break;
					}
					selectedBookmarks.push(allBookmarks[Math.floor(Math.random() * allBookmarks.length)]);
					n++
				}
				setRandom(selectedBookmarks);
			})
			setBookmarks(random);
			console.log('random', random);
			console.log(bookmarks);
		}
		if(tab == 2) {
			chrome.bookmarks.getRecent(12, result => {
				setRecent(result);
			})
			setBookmarks(recent);
			console.log('recent', recent);
			console.log(bookmarks);
		}

  },[])

	return (
		<>
			
			{
				bookmarks.length > 0 &&
				bookmarks.map((bookmark) => {
					return (
						<Card title={bookmark.title} url={bookmark.url} parentId={bookmark.parentId}/>
					)
				})
			}
			{ bookmarks.length == 0 && 'There is no bookmark.' }
		</>
	)
}

export default CardWrap;