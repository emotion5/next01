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
}; // NameExample 컴포넌트 끝

export default NameExample; // 컴포넌트 내보내기

/* 파일 구조 설명
1. import { useState } from 'react';  -> React의 useState 훅 불러오기
2. const NameExample = () => { ... }  -> 함수형 컴포넌트 선언 시작
   ㄴ const [name, setName] = useState('');  -> 상태 선언 (빈 문자열로 초기화)
   ㄴ return ( ... );  -> JSX 반환 시작
      ㄴ <div> ... </div>  -> 최상위 부모 요소
         ㄴ <input />  -> 입력 필드
            - value={name}  -> name 상태를 입력값으로 바인딩
            - onChange  -> 입력 값 변경 시 name 상태 업데이트
         ㄴ <p> ... </p>  -> name 상태를 화면에 표시
3. export default NameExample;  -> 다른 파일에서 임포트 할 수 있도록 내보내기
*/