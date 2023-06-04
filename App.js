import React from "react";
import ReactDOM from "react-dom/client";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
// const heading = React.createElement("h1", {}, "Hi from react");
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
// if I am changing something isndie my file it automatically refreshing the browser(HMR), it is done by browser
//HMR-HOT MODULE REPLACEMENT

//React.createElement ==> Object ==>HTML ELEMENT(render)
// when we render this element on the DOM then it becomes an HTML element
// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "This is a react element"
// );
// console.log("heading ", heading);

//const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(heading);

//JSX- Javascript syntax by which it is easier to create React element
//JSX is not html in js
//JSx- html-LIKE OR XML-like syntax
//JSX (transpiled before it reaches the JS Engine)

//React.createElement ==> React Element(JS object) ==> HTML Element(render)
//JSX ===>babel transpiles it to  React.createElement ==>React Element(JS object) ==>HTML Element(render)

// const jsxHeading = <h1 id="heading">Namaste React using JSX</h1>;
// console.log(jsxHeading);

//Nested header using React.createElement
const heading = React.createElement("div", { className: "title" }, [
  React.createElement("h1", {}, "I am h1 tag"),
  React.createElement("h2", {}, "I am h2 tag"),
  React.createElement("h3", {}, "I am h3 tag"),
]);
//Same element using JSX
// const jsxHeading = (
//   <>
//     <h1>I am h1 tag-form jsx</h1>
//     <h2>I am h2 tag</h2>
//     <h3>I am h3 tag</h3>
//   </>
// );
// console.log(jsxHeading);
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);
//Functional component
const Title = () => {
  return <h1>hello from title component</h1>;
};
//Composition of component
//{Title} vs {<Title/>} vs {<Title></Title>}
//passing attribute into tag in JSX
// const HeaderComponent = () => (
//   <>
//     {Title()}
//     <Title />
//     <Title></Title>
//     <h1 className="heading">I am h1 tag from FC</h1>
//     <h2>I am h2 tag from FC</h2>
//     <h3>I am h3 tag from FC</h3>
//   </>
// );
// console.log(HeaderComponent);

//Header Component from stratch using FC with JSX

const HeaderComponent = () => {
  return (
    <div className="header">
      <img
        src="https://www.logolynx.com/images/logolynx/31/316a6849ec9e5c9e7e14a5995c85f9d0.jpeg"
        width="10%"
        height="10%"
      />
      <div className="searchBox">
        <input type="text" value="searchBox" />
        <span>
          <AiOutlineSearch />
        </span>
      </div>
      <div className="user">
        <AiOutlineUser size="50" />
      </div>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);
