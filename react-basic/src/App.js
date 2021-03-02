import React, { useState } from 'react';


function App() {
  const[text, setText] = useState('Minsu');

  const onSubmit = () =>{
    alert('submitted');
  }

  const onKeyUp = (event) =>{
    if (event.keyCode === 13){ //enter의 inegercode 13을 입력했을 때 onSubmit함수 실행하도록. 
      //--> javascript 이벤트함수 사용법 숙지가 필요할 것으로 보임.
      onSubmit();
    }
  }

  // let text ='Minsu';

  const updateText = () => {
    // text ='genius';
    setText('genius');
    console.log(text);
  }
  
  console.log(text);

  return (
    <div className="App">
      <input onKeyUp ={onKeyUp}/>
      <button onClick={onSubmit}>Submit</button>

      <br /> <br />
      <span>{text}</span>
      <button onClick={updateText}>Update</button>
    </div>
  );
}

export default App;
