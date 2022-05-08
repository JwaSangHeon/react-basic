import React from 'react';
import { useState } from 'react';

const Say = () => {
  const [message, setMessage] = useState('');
  const [color, setColor] = useState('black');
  const onClickEnter = () => {
    setMessage('안녕하세요!!');
  };
  const onClickLeave = () => {
    setMessage('안녕히 가세요ㅠ');
  };
  const onClickRed = () => {
    setColor('red');
  };
  const onClickGreen = () => {
    setColor('green');
  };
  const onClickBlue = () => {
    setColor('blue');
  };
  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>
      <button style={{ color: 'red' }} onClick={onClickRed}>
        빨강
      </button>
      <button style={{ color: 'green' }} onClick={onClickGreen}>
        초록
      </button>
      <button style={{ color: 'blue' }} onClick={onClickBlue}>
        파랑
      </button>
    </div>
  );
};

export default Say;
