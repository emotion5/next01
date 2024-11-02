import { useState } from 'react';

const SimpleExample = () => {
  // 상태 선언
  const [name, setName] = useState('');
  const [message, setMessage] = useState('환영합니다!');
  const [isVisible, setIsVisible] = useState(false);

  // 이벤트 핸들러
  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const handleShowMessage = () => {
    setMessage(`안녕하세요, ${name}님!`);
  };

  return (
    <div>
      <h2>{message}</h2>

      <div>
        <input 
          type="text"
          value={name}
          onChange={handleInputChange}
          placeholder="이름을 입력하세요"
        />
      </div>

      <div>
        <button onClick={handleShowMessage}>
          인사하기
        </button>
      </div>

      <div>
        <button onClick={() => setIsVisible(!isVisible)}>
          {isVisible ? '숨기기' : '보이기'}
        </button>
        {isVisible && <p>이 텍스트는 토글됩니다.</p>}
      </div>
    </div>
  );
};

export default SimpleExample;