function MouseEvents() {
  const handleMouseEnter = () => {
    console.log('마우스가 요소 위에 있습니다.');
  };

  const handleMouseLeave = () => {
    console.log('마우스가 요소를 떠났습니다.');
  };

  return (
    <div>
      <h1>Mouse Events</h1>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ padding: '20px', border: '1px solid black', margin: '10px' }}
      >
        마우스를 이곳에 올려보세요!
      </div>
    </div>
  );
}

export default MouseEvents;