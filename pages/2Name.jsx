import { useState } from 'react';

const NameExample = () => {
  const [name, setName] = useState('');

  return (
    <div>
      <input 
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="이름을 입력하세요"
      />
      <p>입력한 이름: {name}</p>
    </div>
  );
};

export default NameExample;