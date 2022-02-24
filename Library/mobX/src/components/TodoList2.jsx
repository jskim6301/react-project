import { observer } from 'mobx-react';
import { action,runInAction } from 'mobx';


const TodoView = observer(({todo}) => {
    const onToggleCompleted = () => {
        todo.completed = !todo.completed;
    }

    const onRename = () => {
        todo.task = prompt('Task name', todo.task) || todo.task;
    }

    return (
        <li onDoubleClick={ onRename } >
            <input type="checkbox" 
            checked={ todo.completed }
            onChange={ onToggleCompleted }
            />
            { todo.task }
            { todo.assignee 
            ? <small>{ todo.assignee.name }</small>
            : null  }
        </li>
    );
})

const TodoList2 = observer(({store}) => {
    const onNewTodo = () => {
        store.addTodo(prompt('Enter a new todo:','coffee plz'));
    }


    const load = () => {
        // action(() => {
        //     store.pendingRequests++;
        // })();
        runInAction(() => {
            store.pendingRequests++;
        });
        setTimeout(action(() => {
          store.addTodo('Random Todo ' + Math.random());
          store.pendingRequests--;
        }), 2000);        
    }

    const run = () => {
        store.todos[0].completed = !store.todos[0].completed;
        store.todos[1].task = "Random todo " + Math.random();
        store.todos.push({ task: "Find a fine cheese", completed: true });
        // etc etc.. add your own statements here...        
    }    

    return (
        <div>
             { store.report }
             <ul>
                 { store.todos.map(
                     (todo,idx) => <TodoView todo={todo} key={idx} />
                 ) }
             </ul>
             
             <button onClick={onNewTodo}>New Todo</button>


             { store.pendingRequests > 0 ? <marquee>Loading...</marquee> : null }
             <button onClick={load}>load data</button>

             <button onClick={run}>run code</button>
        </div>
    );
})

export default TodoList2;