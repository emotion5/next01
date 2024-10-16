import React, { useState } from 'react';

function KeyDownEvent() {
  const [key, setKey] = useState('');

  const handleKeyPress = (event) => {
    setKey(event.key);
  };

  return (
    <div>
      <h1>Key Press Event</h1>
      <input
        type="text"
        onKeyDown={handleKeyPress}
        placeholder="키를 눌러보세요"
      />
      <p>눌린 키: {key}</p>
    </div>
  );
}

export default KeyDownEvent;
