// import logo from './logo.svg';
import './App.css';
import Heading from './Heading';

function App() {
  return (
    <div className="App">
      <Heading firstName="Bob"/>
      <Heading firstName="Kevin"/>

      <h1>{Math.random() >= 0.5 ? "Over 0.5" : "Under 0.5"}</h1>

      
    </div>
  );
}

export default App;