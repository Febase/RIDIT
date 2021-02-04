import React from "react";
import ReactDOM from "react-dom";
import Content from "@src/pages/content";

const Body = document.querySelector("body");
const App = document.createElement("div");
App.id = "content-root";

if (Body) Body.appendChild(App);

ReactDOM.render(<Content />, document.getElementById("content-root"));
