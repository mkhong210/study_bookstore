// 25.05.23 - 1
// 컴포넌트 라이프 사이클

// 클래스형 컴포넌트
// import { Component, ReactNode } from "react";

// interface LifeCycleExampleState {
//   count: number;
// }

// class DetailPage2 extends Component<{}, LifeCycleExampleState> {
//   constructor(props: {}) {
//     // super - props를 부모에게 전달한다
//     super(props);
//     this.state = { count: 0 };
//   }

//   componentDidMount(): void {
//     console.log("마운트");
//   }

//   componentDidUpdate(): void {
//     console.log("업데이트");
//   }

//   componentWillUnmount(): void {
//     console.log("언마운트");
//   }

//   // 클래스형 컴포넌트는 return을 render안에서 해야함
//   render(): ReactNode {
//     return (
//       <div>
//         <p>Count : {this.state.count}</p>
//         {/* setState - state값을 변경하는 함수수 */}
//         <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//           증가
//         </button>
//       </div>
//     );
//   }
// }

// 함수형 컴포넌트
// import React, { useEffect, useState } from "react";

// const DetailPage2: React.FC = () => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     // 마운트될 떄 실행
//     console.log("마운트 ");

//     return () => {
//       console.log("언마운트");
//     };
//     // count가 업데이트 될때마다 실행
//   }, [count]);

//   return (
//     <div>
//       <p>Count : {count}</p>
//       {/* setState - state값을 변경하는 함수수 */}
//       <button onClick={() => setCount(count + 1)}>증가</button>
//     </div>
//   );
// };

// 타이머
import React, { useEffect, useState } from "react";

const DetailPage2: React.FC = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timerid = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => {
      // console.log("언마운트");
      clearInterval(timerid);
    };
  }, []);

  return (
    <div>
      <h1>타이머 : {seconds}초</h1>
    </div>
  );
};

export default DetailPage2;
