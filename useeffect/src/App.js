import React, { useState, useEffect } from "react"; // eslint-disable-line no-unused-vars
//리액트 훅스 -> useEffect: 컴포넌트가 렌더링 될 때마다 리액트에게 어떠한 액션을 취하게 함.
// State가 변경될 떄마다 재 렌더링됨.

function App() {
  const [count, setCount] = useState(0);
  const [minsu, setMinsu] = useState(0);
  useEffect(() => {
    console.log(count);
  }, [count, minsu]); //원하는 state를 array안에 추가하면 array데이터에 해당하는 값이 변경될 때마다 useEffect실행.

  useEffect(() => {
    console.log("first rendering");
  }, []); // Empty Array를 넣으면 한번만 실행됨.

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <h1>MinsuJJang12</h1>
      <button onClick={increment}>Click1</button>
      <button onClick={() => setMinsu(minsu + 1)}>Click2</button>
    </div>
  );
}

export default App;
