import { configureStore } from "@reduxjs/toolkit";
import logger from 'redux-logger'
import todoSlice from "./todoSlice";

const store = configureStore({
    reducer: {
        todoList: todoSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(logger),

});

export default store;
