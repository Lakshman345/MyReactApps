import React from "react";

const ListNumbers = () => {
  const numbers = [1, 2, 3, 4, 5, 6];
  // const listNums = numbers.map(number => (
  //   <li key={number.toString()}>{number}</li>
  // ));
  // return listNums;
  return (
    <div>
      {numbers.map(number => (
        <li key={number.toString()}>{number}</li>
      ))}
    </div>
  );
};
export default ListNumbers;
