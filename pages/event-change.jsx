import React, { useState } from 'react';
// React와 useState 훅을 임포트합니다.

function ChangeEvent() {
  const [inputValue, setInputValue] = useState('');
  // inputValue 상태와 이를 업데이트하는 setInputValue 함수를 useState 훅을 사용하여 정의합니다.

  const handleChange = (event) => {
    setInputValue(event.target.value);
    // input 요소의 값이 변경될 때마다 handleChange 함수가 호출되어 inputValue 상태를 업데이트합니다.
  };

  return (
    <div>
      <h1>Change Event</h1>
      <input type="text" value={inputValue} onChange={handleChange} placeholder="입력하세요" />
      {/* input 요소의 값은 inputValue 상태와 동기화되며, 값이 변경될 때 handleChange 함수가 호출됩니다. */}
      <p>입력한 값: {inputValue}</p>
      {/* inputValue 상태의 현재 값을 화면에 출력합니다. */}
    </div>
  );
}

export default ChangeEvent;
// ChangeEvent 컴포넌트를 기본 내보내기로 익스포트합니다.