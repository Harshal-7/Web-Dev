import './App.css';
import ModeToddler from './ModeToddler';
import InputComponent from './Hooks/InputComponent';
import UseRefHook from './Hooks/UseRefHook';

function App() {
  return (
    <div className="App">
      <ModeToddler/>
      <br /><br /><br />
      <InputComponent />
      <br /><br /><br />
      <UseRefHook/>
    </div>
  );
}

export default App;
