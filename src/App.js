import { useRef, useState } from 'react';
import CreateUser from './CreateUser';
import './styles.css';
import UserList from './UserList'


function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });
  const {username, email} = inputs;

  const onChange = e => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value
    })
  }

  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'Heon',
      email: 'Heon@naver.com',
      active: true
    },
    {
      id: 2,
      username: 'Joon',
      email: 'Joon@naver.com',
      active: false
    },
    {
      id: 3,
      username: 'Miky',
      email: 'Miky@naver.com',
      active: false
    }
  ]);
  const nextId = useRef(4);

  const onCreate = () =>{
    const user = {
      id: nextId.current,
      username,
      email
    };
    setUsers([...users, user]);

    // concat 사용시
    // const user = {
    //   id: nextId.current,
    //   username,
    //   email
    // };
    // setUsers(users.concat(user));

    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
  }

  const onRemove = id => {
    // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듦
    // = user.id 가 id 인것을 제거함
    setUsers(users.filter(user => user.id !== id));
  }
  const onToggle = id => {
    setUsers(
      users.map(user => user.id === id ? {...user, active: !user.active} : user)
    )
  }
  return (
    <div className="App">
      <CreateUser 
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}/>
      <UserList 
        users={users}
        onRemove={onRemove}
        onToggle={onToggle}/>
    </div>
  );
}

export default App;
