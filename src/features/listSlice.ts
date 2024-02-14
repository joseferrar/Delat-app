import {createSlice} from '@reduxjs/toolkit';

const initialState: any = {
  lists: [],
};

const todoSlice = createSlice({
  name: 'todo',
  initialState: initialState,
  reducers: {
    addTodo: (state, {payload}: any) => {
      state?.lists?.push(payload);
    },
  },
});

export default todoSlice.reducer;
export const {addTodo} = todoSlice.actions;
