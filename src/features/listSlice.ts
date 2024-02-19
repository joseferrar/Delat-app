import {createSlice} from '@reduxjs/toolkit';

const initialState: any = {
  listData: [],
};

const listSlice = createSlice({
  name: 'lists',
  initialState: initialState,
  reducers: {
    addTodo: (state, {payload}: any) => {
      state.listData.push(payload);
    },
    getLists: (state, {payload}: any) => {
      state.listData = payload;
    },
  },
});

export default listSlice.reducer;
export const {addTodo, getLists} = listSlice.actions;
