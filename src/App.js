import './App.css';
import Counter from './Counter';
import MyComponent from './MyComponent';
import Say from './Say';
import EventPractice from './EventPractice';

const App = () => {
  return (
    <>
      {/* <Counter /> */}
      {/* <Say /> */}
      <EventPractice />
    </>
  );
};

// class형 component
// class App extends Component {
//   render() {
//     const name = 'React';
//     return <div className="react">{name}</div>;
//   }
// }

export default App;
