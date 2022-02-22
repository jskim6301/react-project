import './App.css';
import TestMocking from './components/TestMocking';
import Counter2 from './components/Counter2';
import Counter from './features/counter/Counter';


function App() {
  return (
    <div className="App">
      <TestMocking/>
      <Counter />
      <br/>
      <Counter2/>
    </div>
  );
}

export default App;
