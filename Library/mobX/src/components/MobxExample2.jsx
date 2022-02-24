import React from 'react'
import { observableTodoStore2 } from '../app/ObservableTodoStore2'
export default function MobxExample2() {
  const run = () => {

  }  
  const runObs = () => {
    observableTodoStore2.addTodo("read MobX tutorial");
    observableTodoStore2.addTodo("try MobX");
    observableTodoStore2.todos[0].completed = true;
    observableTodoStore2.todos[1].task = "try MobX in own project";
    observableTodoStore2.todos[0].task = "grok MobX tutorial";
  }
  return (
    <div>
      <button onClick={run}>run code</button>
      <button onClick={runObs}>run Obs code</button>   
    </div>
  )
}
