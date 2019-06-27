import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
// import Demo from "./Demo";
// //import Abc from "./Abc";
// import Xyz from "./Xyz";
// import Person from "./Person";
// import EventDemo from "./EventDemo";
// import Counter from "./StatefulComp";
import * as serviceWorker from "./serviceWorker";
//import FormsComp from "./Forms";
import Calculator from "./Calculator";
//import RoutingDemo from "./RoutingDemo";
import NavLinks from "./NavLinks";

//
// ReactDOM.render(
//   <Person name="Lakshmann" age={27} married={true} address={["pune"]} />,
//   document.getElementById("p")
// );
// ReactDOM.render(<EventDemo />, document.getElementById("e"));
// ReactDOM.render(
//   <div>
//     <Counter />
//     {/* <Xyz />
//     <Abc /> */}
//   </div>,
//   document.getElementById("count")
// );
// ReactDOM.render(<FormsComp />, document.getElementById("forms"));

// ReactDOM.render(<RoutingDemo />, document.getElementById("route"));
ReactDOM.render(<NavLinks />, document.getElementById("routes"));
ReactDOM.render(<Calculator />, document.getElementById("cal"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
