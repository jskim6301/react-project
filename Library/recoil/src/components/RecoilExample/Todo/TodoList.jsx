// import React, {useEffect} from 'react'
import { useRecoilValue } from 'recoil'
import TodoItem from './TodoItem';
import TodoItemCreator from './TodoListCreator';
import { TodoListFilters } from './TodoListFilters';
import TodoListState from './TodoListState';
import { filteredTodoListState } from './TodoStore'

export default function TodoList() {
    // const todoList = useRecoilValue(todoListState);
    const todoList = useRecoilValue(filteredTodoListState);

    // useEffect(() => {
    //     console.log(`todoList: ${JSON.stringify(todoList)}`);
    // },[todoList]);


  return (
    <div>
    <TodoListState/>
    <TodoListFilters/>

    <TodoItemCreator />

    {todoList.map((todoItem) => (
    <TodoItem key={todoItem.id} item={todoItem} />
    ))}      

    </div>
  )
}
