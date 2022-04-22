import { useCallback, useMemo, useRef, useState } from 'react';
import CreateUser from './CreateUser';
import UserList from './UserList';
import Counter from './Counter';
import './styles.css';

//useCallback - useMemo와 비슷, useMemo는 특정 결과값을 재사용 할때 사용, useCallback은 특정 함수를 새로 만들지 않고 사용하고 싶을 때, 사용.
//선언한 함수들은 컴포넌트가 리렌더링 될 때 마다 새로 만들어진다. 많은 리소스를 차지하는 작업은 아니지만 함수를 필요할때만 만들고 재사용하는 것은 중요하다.

function CountActiveUsers(users) {
  console.log('활성 사용자 수를 세는중...');
  return users.filter((user) => user.active).length;
}

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });
  const { username, email } = inputs;

  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  }, []);

  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'Heon',
      email: 'Heon@naver.com',
      active: true,
    },
    {
      id: 2,
      username: 'Joon',
      email: 'Joon@naver.com',
      active: false,
    },
    {
      id: 3,
      username: 'Miky',
      email: 'Miky@naver.com',
      active: false,
    },
  ]);
  const nextId = useRef(4);

  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      username,
      email,
    };
    setUsers([...users, user]);

    // concat 사용시
    // setUsers(users.concat(user));

    setInputs({
      username: '',
      email: '',
    });
    nextId.current += 1;
  }, [username, email]);

  const onRemove = useCallback((id) => {
    // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듦
    // = user.id 가 id 인것을 제거함
    setUsers(users.filter((user) => user.id !== id));
  }, []);
  const onToggle = useCallback((id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user,
      ),
    );
  }, []);
  const count = useMemo(() => CountActiveUsers(users), [users]);
  // users변화가 있을 때만 활성 사용자를 세야한다. 그래서 useMemo를 활용하여 이전에 계산한 값을 재사용한다(Memo => 'memoized의 준말')
  return (
    <div className="App">
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>활성사용자 수 : {count}</div>
      <Counter />
    </div>
  );
}

export default App;
