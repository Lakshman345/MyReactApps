import React from "react";
import logo from "./logo.svg";
import "./App.css";

// function App() {
//   return (
//     <div>
//       <h1>welcome to CTS</h1>
//       <h2>Hello Lakshman</h2>
//     </div>
//   );
// }

// export default App;
class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <h1>welcome to CTS</h1>
        <h2>Hello Lakshman</h2>
        <hr />
        <span>{10 + 20}</span>
        <hr />
        <h1>React Logo</h1>
        <img
          src={logo}
          style={{ width: "200px", height: "200px" }}
          alt="react logo"
        />
        <hr />
        <Footer />
        <hr />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return <h1>This is from Header Component</h1>;
  }
}

class Footer extends React.Component {
  render() {
    return (
      <div>
        <h1>This is from Footer Component</h1>
      </div>
    );
  }
}
export default App;
