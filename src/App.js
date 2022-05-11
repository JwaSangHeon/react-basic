import './App.css';
import { Component } from 'react';
import Counter from './Counter';
import MyComponent from './MyComponent';
import Say from './Say';
import EventPractice from './EventPractice';
import ValidationSample from './ValidationSample';
import ScrollBox from './ScrollBox';
import IterationSample from './IterationSample';
import LifeCycleSample from './LifeCycleSample';
import ErrorBoundary from './ErrorBoundary';

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

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

// class형 component
class App extends Component {
  state = {
    color: '#000000',
  };
  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };
  render() {
    return (
      // <ValidationSample />
      <>
        {/* <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          맨 밑으로
        </button> */}
        {/* <IterationSample /> */}
        <button onClick={this.handleClick}>랜덤색상</button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color} />
        </ErrorBoundary>
      </>
    );
  }
}

export default App;
