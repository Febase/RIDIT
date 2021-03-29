import React from "react";
import Card from "../Card/Card";
import "@src/styles/tailwind.css"

const CardWrap = ({tab}) => {
	useEffect(()=>{
    chrome.bookmarks.getTree(result => {
      console.log(result)
    })
  },[])

	return (
		<>
			<Card title="1" />
		</>
	)
}

export default Card;