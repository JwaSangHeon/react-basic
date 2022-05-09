import './App.css';
import { Component } from 'react';
import Counter from './Counter';
import MyComponent from './MyComponent';
import Say from './Say';
import EventPractice from './EventPractice';
import ValidationSample from './ValidationSample';

// const App = () => {
//   return (
//     <>
//       {/* <Counter /> */}
//       {/* <Say /> */}
//       {/* <EventPractice /> */}
//       <ValidationSample />
//     </>
//   );
// };

// class형 component
class App extends Component {
  render() {
    return <ValidationSample />;
  }
}

export default App;
