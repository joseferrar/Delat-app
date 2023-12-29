import {createSlice} from '@reduxjs/toolkit';

const initialState: any = {
  users: [],
};

const todoSlice = createSlice({
  name: 'users',
  initialState: initialState,
  reducers: {},
});

export default todoSlice.reducer;
export const {} = todoSlice.actions;
