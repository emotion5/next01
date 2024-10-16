import { useState } from 'react';

function SubmitEvent() {
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // 페이지 리로드 방지
    alert(`제출된 이름: ${name}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="이름을 입력하세요"
        />
        <button type="submit">제출</button>
      </form>
    </div>
  );
}

export default SubmitEvent;