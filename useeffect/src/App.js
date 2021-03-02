import React, { useState, useEffect } from "react"; // eslint-disable-line no-unused-vars
import Counter from "./componets/Counter";
//리액트 훅스 -> useEffect: 컴포넌트가 렌더링 될 때마다 리액트에게 어떠한 액션을 취하게 함.
// State가 변경될 떄마다 재 렌더링됨.

function App() {
  // const [count, setCount] = useState(0);
  // const [count1, setCount1] = useState(0);
  // const [count2, setCount2] = useState(0);

  // const increment1 = () => {
  //   setCount1(count1 + 1);
  // };

  // const increment = () => {
  //   setCount(count + 1);
  // };

  // const increment2 = () => {
  //   setCount2(count2 + 1);
  // };

  /* 부모컴포넌트에서 자식컴포넌트로 데이터를 전달해주는 방법
  Counter.js파일(컴포넌트)의 click컴포넌트를 지정한 후 App.js파일에서 데이터값 또는 초기값을 설정함.
  */
  const [buttonName, setButtonName] = useState("클릭");
  const clickButton = () => {
    setButtonName("click");
  };
  return (
    <div className="App">
      <h1>MinsuJJang12</h1>
      <Counter click="Click" />
      {/* 컴포넌트 사용하면 위의 주석코드가 생략됨. : click이라는 이름으로 자식컴포넌트에게 데이터 전달.*/}
      <Counter click={buttonName} />{" "}
      {/* String타입이 아닌 다른 타입을 입력하려면 {}필수. */}
      <Counter />
      <button onClick={clickButton}>Click</button>
    </div>
  );
}

export default App;
