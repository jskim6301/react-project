import React from 'react';
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {getTodos,} from "../api/my-api";
import {TodosType} from '../mocks/handlers'
const Todos: React.FC = () => {
    const queryClient = useQueryClient();

    const query = useQuery({ queryKey:['todos'], queryFn: getTodos});

    // const mutation = useMutation({
    //     mutationFn: postTodo,
    //     onSuccess: () => {
    //         queryClient.invalidateQueries({ queryKey: ['todos']})
    //     },
    // })

    return (
        <div>
            <ul>
                {query.data?.map((todo: TodosType) => (
                    <li key={todo.id}>{todo.title}</li>
                ))}


            </ul>
        </div>
    );
};

export default Todos;