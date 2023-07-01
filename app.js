import React from "react";
import ReactDom from "react-dom/client";

const heading = React.createElement(
 "h1",{
  id: "title",
  key: "h1", //diffing algo, recursing on children, react reconcilation
 },
 "Heading 1 for Parcel"
);

const heading2 = React.createElement(
 "h2",
 {
  id: "title",
  key: "h2",
 },
 "Heading 2"
); 

const container = React.createElement(
 "div",{
  id: "container",
  hello: "world",
 },
 [heading, heading2]
);

// JSX

const heading3 = (<h1 id="title" key="h2">
 Namaste React
 </h1>);


console.log(heading);
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(container);