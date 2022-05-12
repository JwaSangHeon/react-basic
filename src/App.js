import './App.css';
import { Component } from 'react';
import Counter from './6-day/Counter';
import MyComponent from './1-day/MyComponent';
import Say from './2-day/Say';
import EventPractice from './3-day/EventPractice';
import ValidationSample from './4-day/ValidationSample';
import ScrollBox from './4-day/ScrollBox';
import IterationSample from './5-day/IterationSample';
import LifeCycleSample from './5-day/LifeCycleSample';
import ErrorBoundary from './5-day/ErrorBoundary';
import Info from './6-day/Info';
import Average from './6-day/Average';

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

// function getRandomColor() {
//   return '#' + Math.floor(Math.random() * 16777215).toString(16);
// }

// class형 component
class App extends Component {
  // state = {
  //   color: '#000000',
  // };
  // handleClick = () => {
  //   this.setState({
  //     color: getRandomColor(),
  //   });
  // };
  render() {
    return (
      // <ValidationSample />
      <>
        {/* <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          맨 밑으로
        </button> */}

        {/* <IterationSample /> */}

        {/* <button onClick={this.handleClick}>랜덤색상</button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color} />
        </ErrorBoundary> */}

        {/* <Counter /> */}
        <Info />

        {/* <Average /> */}
      </>
    );
  }
}

export default App;
