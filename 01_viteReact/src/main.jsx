import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

function MyComp() {
  return <h1>Hello Chirag | Chai</h1>;
}
// const reactElement = {
//   type: "a",
//   props: {
//     href: "https://www.google.com/",
//     target: "_blank",
//   },
//   children: "Click to visit google",
// };
// const reactElement2 = (
//   <a href="https://www.google.com/" target="_blank">
//     Click me
//   </a>
// );
// const username = "Chirag";
// const customElement = React.createElement(
//   "a",
//   { href: "http://www.google.com", target: "_blank" },
//   "Please hit me",
//   username
// );

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
