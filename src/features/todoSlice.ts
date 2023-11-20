import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
    todo: [],
};

const todoSlice = createSlice({
    name: "todo",
    initialState: initialState,
    reducers: {
        
        addTodo: (state, { payload }: any) => {
            state?.todo?.push(payload);
        },
        deleteTodo: (state, { payload }) => {
            state.todo = state.todo.filter((item: any) => item.id !== payload);
        },
        editTodo: (state, { payload }: any) => {
            state.todo = state.todo.map((item: any) => {
                if (item.id === payload.id) {
                    console.log("payload", payload);
                    return (state.todo = payload);
                } else {
                    return item;
                }
            });
        },
    },
});

export default todoSlice.reducer;
export const { addTodo, deleteTodo, editTodo } = todoSlice.actions;
