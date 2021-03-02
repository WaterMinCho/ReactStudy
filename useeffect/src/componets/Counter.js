import React, { useState } from "react";

const Counter = (props) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const clickString = props.click || "Click"; // props.click값 안에 값이 들어있으면 props.click쓰고 없으면 'Click'써라
  return (
    <button onClick={increment}>
      {clickString}
      {count}
    </button>
  );
};

export default Counter;
