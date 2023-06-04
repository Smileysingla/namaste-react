import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", {}, "Hi from react");
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
// if I am changing something isndie my file it automatically refreshing the browser(HMR), it is done by browser
//HMR-HOT MODULE REPLACEMENT
