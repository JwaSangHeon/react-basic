import './App.css';
import { Component } from 'react';
import Counter from './Counter';
import MyComponent from './MyComponent';
import Say from './Say';
import EventPractice from './EventPractice';
import ValidationSample from './ValidationSample';
import ScrollBox from './ScrollBox';
import IterationSample from './IterationSample';

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
    return (
      // <ValidationSample />
      <>
        {/* <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          맨 밑으로
        </button> */}
        <IterationSample />
      </>
    );
  }
}

export default App;
