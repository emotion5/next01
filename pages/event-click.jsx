import React from 'react';

function Exam() {
  // 클릭 이벤트 핸들러
  const handleClick = () => {
    alert('버튼이 클릭되슈!');
  };

  return (
    <div>
      <h1>onClick</h1>

      <button onClick={handleClick}>클릭</button>
      
    </div>
  );
}

export default Exam;