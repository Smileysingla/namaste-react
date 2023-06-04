// createElement just creating h1 tag inside React, so it's core React thing
//but when we have to put these h1 into DOM ,onto our browser for that we use ReactDOM.
// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello world from React!"
// );
// console.log(heading); //heading is just JS object
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

//the job of Render function is to take this object and convert into heading tag amd put it into the DOM

/**
 * <div id="parent">
 * <div id="child">
 * <h1>I am h1 tag</h1>
 * </div>
 * </div>
 *ReactElement(Object) => HTML(Browser understand)
 */

// const heading2 = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", {}, "I am h1 tag")
//   )
// );
// console.log(heading2);
// const root2 = ReactDOM.createRoot(document.getElementById("root"));

// root2.render(heading2);

/**
 * <div id="parent">
 * <div id="child">
 * <h1>I am h1 tag</h1>
 * <h2>I am h2 tag</h2>
 * </div>
 * </div>
 *ReactElement(Object) => HTML(Browser understand)
 */

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "I am h1 tag"),
//     React.createElement("h2", {}, "I am h2 tag"),
//   ])
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

/**
 * <div id="parent">
 * <div id="child1">
 * <h1>I am h1 tag</h1>
 * <h2>I am h2 tag</h2>
 * </div>
 * <div id="child2">
 * <h1>I am h1 tag</h1>
 * <h2>I am h2 tag</h2>
 * </div>
 * </div>
 *ReactElement(Object) => HTML(Browser understand)
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
