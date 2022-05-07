import React, { useContext } from 'react';
import { UserDispatch } from './AppVer2';
import useInputs from './useInputs';

function CreateUser({ username, email, onChange, onCreate }) {
  return (
    <>
      <input
        name="username"
        onChange={onChange}
        value={username}
        placeholder="계정명"
      />
      <input
        name="email"
        onChange={onChange}
        value={email}
        placeholder="이메일"
      />
      <button onClick={onCreate}>등록</button>
    </>
  );
}

export default React.memo(CreateUser);
