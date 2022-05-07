import './App.css';
import MyComponent from './MyComponent';

const App = () => {
  return (
    <MyComponent name="React" myFavoriteNumber={7}>
      Hello
    </MyComponent>
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
