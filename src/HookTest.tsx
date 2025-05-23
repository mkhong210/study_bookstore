// 25.05.23 - 3
// 훅 실습

// import { useRef } from "react";

// const HookRef: React.FC = () => {
//   const inputRef = useRef<HTMLInputElement | null>(null);

//   const foucsInput = () => {
//     inputRef.current?.focus();
//   };
//   return (
//     <div>
//       <input type="text" ref={inputRef} />
//       <button onClick={foucsInput}>포커스 설정</button>
//     </div>
//   );
// };

//
// useMemo - 불필요한 랜더링 방지

// import { useMemo, useState } from "react";

// const HookRef: React.FC = () => {
//   const [count, setCount] = useState<number>(0);
//   const [show, setShow] = useState<boolean>(true);

//   const excel = useMemo<number>(() => {
//     return count * 3; // 복잡한 계산식
//   }, [count]); // useEffect와 같이 [count]가 변경될 떄 재실행

//   return (
//     <div>
//       <p>계산 결과 : {excel}</p>
//       <button onClick={() => setCount(count + 1)}>카운트 증가</button>
//       <button onClick={() => setShow(!show)}>토글 버튼 </button>
//       {show && <p>Show is true</p>}
//     </div>
//   );
// };

//
// useCallback

// import { useCallback, useState } from "react";

const HookRef: React.FC = () => {
  //   const [count, setCount] = useState<number>(0);

  //   // const increment = () => {
  //   //   setCount((prev) => prev + 1);
  //   // };
  //   const increment = useCallback(() => {
  //     setCount((prev) => prev + 1);
  //   });

  return (
    <div></div>
    // <div>
    //   <p>Count : {count}</p>
    //   {/* 랜더링 될때마다 불필요하게 같은 함수가 호출되고 있음 */}
    //   <button onClick={increment}>증가</button>
    // </div>
  );
};

export default HookRef;
