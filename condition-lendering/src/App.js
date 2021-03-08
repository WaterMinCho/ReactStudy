import React, { useState, useEffect } from "react";

function App() {
  const [condition, setCondition] = useState(false); // useState초깃값 false.
  const toggle = () => setCondition(!condition); // condition의 반댓값으로 변수 업데이트

  useEffect(() => {
    console.log(condition);
  }, [condition]);

  const renderCondition = condition ? "True" : "False";
  // condition이 true면 renderCondition에 True라는 String값 대입.
  //condition이 False면 renderCondition에 False라는 String값 대입

  return (
    <div className="App">
      <h1>Minsu</h1>
      <div>{renderCondition}</div>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}

export default App;
