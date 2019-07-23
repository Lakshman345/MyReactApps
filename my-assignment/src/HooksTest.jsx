import React, { useState, useEffect } from "react";
import Test from "./Test";
const HooksTest = () => {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);
  const [val, setVal] = useState("");

  // const [state, setState] = useState({ count: 0, show: false, val: "" });
  const handleClick = () => {
    setCount(count + 1);
  };
  const handleShow = () => {
    setShow(!show);
  };

  const handleChange = e => {
    setVal(e.target.value);
  };

  // const handleClick = (e) => {
  //   setState(state => {count:state.count + 1, show:!state.show, val: e.target.value});
  // }

  // const useEffect = () => {
  //   document.title = `you clicked ${count} times`;
  // };
  return (
    <div>
      <p>count:{count}</p>
      <button onClick={handleClick}>Click</button>
      <br />
      <br />
      <div>
        {!show ? <Test /> : <p>Hello Lakshman</p>}
        <button onClick={handleShow}>show</button>
      </div>
      <br />
      <br />
      {/* <div>
        <button onClick={handleTest}>Test</button>
      </div> */}
      <div>
        <input type="text" onChange={handleChange} />
      </div>
      Entered value: <span>{val}</span>
    </div>
  );
};
export default HooksTest;
