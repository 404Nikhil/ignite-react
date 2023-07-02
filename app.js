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

const Title = () => (
  <a href="#">
    <img className="logo"
     src="https://yt3.ggpht.com/a/AATXAJyrI0c-4nvIAdpJXAvtslqcuYHUHxKSKYAYAg=s900-c-k-c0xffffffff-no-rj-mo" alt="logo" />
  </a>
);
// const Title = () => (
//  <h1 id="heading" key="h3">Hellow</h1>
// )
// const data = api.getData(); // JSX prevent hacking (sanitizes js injection by hackers)
const Header = () => {
  // normal js function, composing components
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const burgerKing = {
  name: "Burger King",
  image: "https://mgmgrand.mgmresorts.com/content/dam/MGM/mgm-grand/dining/food-court/architecture/mgm-grand-restaurants-food-court-architecture-exterior-01.jpg",
  cuisines: ["Burger", "Chicken"],
  rating: "4.2"
}
//Config Driven UI(All the UI is run by config which is sent by backend)
const RestaurantCard = () => {
  return (
    <div className="card">
      <img src={burgerKing.image} alt="Food court"/>
      <h2>{burgerKing.name}</h2>
      <h3>{burgerKing.cuisines.join(",")}</h3>
      <h4>{burgerKing.rating} stars</h4>
    </div>
  )
}

const Body = () => {
  return (
    <div class="r-list">
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      
    </div>
  )
}
// <React.Fragment> = <>
// React.Fragment is a component which is exported by the react, It is like an empty tag.
const Footer = () => {
  return (
    <h4>footer</h4>
  )
}


// Inline styling in React
// <div style={{background-color: red;}or{create a styleObject}}></div>

const AppLayout = () => {
  return (
    <>
  <Header/>
  <Body/>
  <Footer/>
    </>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));
// root.render(container);
root.render(<AppLayout />);
// l4, created scripts, browserlists, babel.rc, keys(react concilation), JSX(uses React.createElement which is an Object which injects into HTML DOM), React element, functional component, paranthesis JSX, call function inside paranthesis
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