import React, { useState } from "react";

export const NameForm = () => {
  const [name, setName] = useState("");

  const handleChange = e => {
    setName(e.target.value.toUpperCase());
  };
  const handleSubmit = () => {
    alert(name);
    console.log("name:", name);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        Name: <input type="text" value={name} onChange={handleChange} />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
export default NameForm;
