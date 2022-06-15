import { configureStore } from "@reduxjs/toolkit"
import TodoReducer from "./TodoSlice"

const store = configureStore({
    reducer : {
        post : TodoReducer
    }
}); 

export default store ;