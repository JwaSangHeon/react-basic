import React, { useReducer, useState } from 'react';

//reducer 는 현재 상태와 액션 객체를 파라미터로 받아와서 새로운 상태를 반환해주는 함수
// function reducer(state, action) {
//   새로운 상태를 만드는 로직
//   const nextState = ...
//   return nextState;
// }
// useReducer 사용법
// const [state, dispatch] = useReducer(reducer, initialState);

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

const Counter = () => {
  // const [number, setNumber] = useState(0);

  // const onIncrease = () => {
  //   setNumber((prev) => prev + 1);
  // };

  // const onDecrese = () => {
  //   setNumber((prev) => prev - 1);
  // };

  //   여기서 number는 우리가 앞으로 컴포넌트에서 사용 할 수 있는 상태를 가르키게 되고, dispatch는 액션을 발생시키는 함수라고 이해하시면 됩니다. 이 함수는 다음과 같이 사용합니다: dispatch({ type: 'INCREMENT' }).

  // 그리고 useReducer 에 넣는 첫번째 파라미터는 reducer 함수이고, 두번째 파라미터는 초기 상태입니다.
  const [number, dispatch] = useReducer(reducer, 0);

  const onIncrease = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const onDecrease = () => {
    dispatch({ type: 'DECREMENT' });
  };
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
};

export default Counter;
