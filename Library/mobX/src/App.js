import './App.css';
// import MobxExample from './components/MobxExample';
import TodoList from './components/TodoList';
import { observableTodoStore } from './app/ObservableTodoStore';
// import TodoList2 from './components/TodoList2';
// import { observableTodoStore2 } from './app/ObservableTodoStore2';
function App() {
  return (
    <div className="App">
      {/* <MobxExample/> */}
      <TodoList store={observableTodoStore}/>
      {/* <TodoList2 store={observableTodoStore2}/> */}
    </div>
  );
}

export default App;
