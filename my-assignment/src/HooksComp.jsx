import React, { useEffect, useState } from "react";
function Example() {
  const [count, setCount] = useState();
  useEffect(() => {
    console.log("inside useEffect");
    document.title = `You clicked ${count} times`;
    console.log(document.title);
  });
  return (
    <div>
      <p>You clicked ${count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
export default Example;
