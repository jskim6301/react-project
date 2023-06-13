import {rest} from "msw";


export interface TodosType {
    id: string;
    title: string;
}
const todos: TodosType[] = [
    {
        id: `1`,
        title: `jimmy 1`,
    },
    {
        id: `2`,
        title: `jimmy 2`,
    },
    {
        id: `3`,
        title: `jimmy 3`,
    },
    {
        id: `4`,
        title: `jimmy 4`,
    },
    {
        id: `5`,
        title: `jimmy 5`,
    },
]

export const handlers = [
    rest.get("http://localhost:3000/api/todos", async (req,res,ctx) => {
        return res(ctx.json(todos))
    }),
];