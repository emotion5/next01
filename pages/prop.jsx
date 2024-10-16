// import React from 'react';

// Greeting 컴포넌트 정의
function Greeting(props) {
  return <h1>안녕하세요, {props.name}님!</h1>;
}

// App 컴포넌트 정의
function App() {
  return (
    <div>
      <Greeting name="영희" />
      <Greeting name="철수" />
    </div>
  );
}

export default App;