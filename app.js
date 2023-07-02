import React from "react";
import ReactDom from "react-dom/client";

// const heading = React.createElement(
//   "h1",
//   {
//     id: "title",
//     key: "h1", //diffing algo, recursing on children, react reconcilation
//   },
//   "Heading 1 for Parcel"
// );

// const heading2 = React.createElement(
//   "h2",
//   {
//     id: "title",
//     key: "h2",
//   },
//   "Heading 2"
// );

// const container = React.createElement(
//   "div",
//   {
//     id: "container",
//     hello: "world",
//   },
//   [heading, heading2]
// );

// JSX
// React Component
// Functional - New , Class based - Old

const title = (
  <h1 id="title" key="h2">
    Food Hub
  </h1>
);
// const Title = () => (
//  <h1 id="heading" key="h3">Hellow</h1>
// )
// const data = api.getData(); // JSX prevent hacking (sanitizes js injection by hackers)
const HeaderComponent = () => { // normal js function, composing components
  return (
    <div>
     {title}
     {
      //this is a comment
     }
      <h1>Hellow everynyan</h1>
    </div>
  );
};

const AppLayout = () => {
  return (
    {
      /** 
       * Header
       * - Logo
       * - Navbars
       * - Card
       * 
       * body
       * - search bar
       * - restraunt list
       * - food cards
       * - Images
       * - Rating
       * - Cuisines
       * Footer
       * - Links
       * - copyright
       * **/
    }
  )
}

const root = ReactDom.createRoot(document.getElementById("root"));
// root.render(container);
root.render(<HeaderComponent />);
// l4, created scripts, browserlists, babel.rc, keys(react concilation), JSX(uses React.createElement which is an Object which injects into HTML DOM), React element, functional component, paranthesis JSX, call function inside paranthesis
