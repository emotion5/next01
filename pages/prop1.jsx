import React from 'react';

// 배열 props를 사용하는 ItemList 컴포넌트
function ItemList({ items }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

// App 컴포넌트
function App() {
  const fruits = ['사과', '바나나', '오렌지'];
  return (
    <div>
      <h2>과일 목록</h2>
      <ItemList items={fruits} />
    </div>
  );
}

export default App;