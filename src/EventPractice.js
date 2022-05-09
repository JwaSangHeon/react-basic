import React from 'react';
import { useState } from 'react';

const EventPractice = () => {
  const [user, setUser] = useState({
    username: '',
    message: '',
  });

  const { username, message } = user;

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const onClick = () => {
    alert(username + ': ' + message);
    setUser({
      username: '',
      message: '',
    });
  };
  const onKeyPress = (e) => {
    e.key === 'Enter' && onClick();
  };
  return (
    <>
      <h1>이벤트 연습</h1>
      <input
        name="username"
        value={username}
        type="text"
        placeholder="username"
        onChange={onChange}
      />
      <input
        name="message"
        value={message}
        type="text"
        placeholder="message"
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>check!</button>
    </>
  );
};

// 클래스 형
// class EventPractice extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       message: '',
//       username: '',
//     };
//     // this.handleChange = this.handleChange.bind(this);
//     // this.handleClick = this.handleClick.bind(this);
//   }
//   handleChange = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   };
//   handleClick = () => {
//     alert(this.state.username + ': ' + this.state.message);
//     this.setState({
//       message: '',
//       username: '',
//     });
//   };
//   handleKeyPress = (e) => {
//     e.key === 'Enter' && this.handleClick();
//   };

//   render() {
//     const { message, username } = this.state;
//     return (
//       <div>
//         <h1>이벤트 연습</h1>
//         <input
//           type="text"
//           name="username"
//           value={username}
//           placeholder="username"
//           onChange={this.handleChange}
//         />
//         <input
//           type="text"
//           name="message"
//           value={message}
//           placeholder="message"
//           onChange={this.handleChange}
//           onKeyPress={this.handleKeyPress}
//         />
//         <button onClick={this.handleClick}>Check!!!</button>
//       </div>
//     );
//   }
// }

// EventPractice.propTypes = {};

export default EventPractice;
