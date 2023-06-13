import React from 'react';
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {getTodos, postTodo,} from "../api/my-api";
import {TodosType} from '../mocks/handlers'
const Todos: React.FC = () => {
    const queryClient = useQueryClient();

    const query = useQuery({ queryKey:['todos'], queryFn: getTodos});

    const mutation = useMutation({
        mutationFn: postTodo,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['todos']})
        },
    })

    return (
        <div>
            <ul>
                {query.data?.map((todo: TodosType) => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
            <button
                onClick={() => {
                    mutation.mutate({
                        id: Date.now(),
                        title: 'Do Laundry',
                    })
                }}
            >
                Add Todo
            </button>
        </div>
    );
};

export default Todos;