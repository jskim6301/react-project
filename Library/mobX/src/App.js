import './App.css';
import { observableTodoStore } from './app/ObserbableTodoStore';
import MobxExample from './components/MobxExample';
import TodoList from './components/TodoList';


function App() {
  return (
    <div className="App">
      {/* <MobxExample/> */}
      <TodoList store={observableTodoStore}/>
    </div>
  );
}

export default App;
