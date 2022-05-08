import './App.css';
import Counter from './Counter';
import MyComponent from './MyComponent';
import Say from './Say';

const App = () => {
  return (
    <>
      <Counter />
      <Say />
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
