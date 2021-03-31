import React, { useState, useEffect }  from "react";
import Card from "../Card/Card";
import "@src/styles/tailwind.css"

const CardWrap = ({tab}) => {
	const [random, setRandom] = useState([]);
	const [recent, setRecent] = useState([]);
	useEffect(()=>{
		chrome.bookmarks.getRecent(12, result => {
			if(tab == 1) {
				const length = result[0].id;
				console.log(length); 
			}
			if(tab == 2) {
				setRecent(result);
			}
			if(tab == 3) {

			}
		})
  },[])

	return (
		<>
			{
				recent.map((bookmark) => {
					return (
						<Card title={bookmark.title} url={bookmark.url} parentId={bookmark.parentId}/>
					)
				})
			}
		</>
	)
}

export default CardWrap;