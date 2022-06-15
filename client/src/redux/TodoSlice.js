import { createSlice , createAsyncThunk } from "@reduxjs/toolkit" ;
import { apiUrl } from "../components/constants";
import axios from "axios" ;

const initialState = {
    posts: [],
    post: null,
    showModalCreate: false,
    showModalUpdate: false,
};


// Action call API

export const getPostAction = createAsyncThunk( 
    'post/getPostAction',
    async () => {
        try {
            const response = await axios.get(`${apiUrl}`) ;
            return response.data.posts ;    
        } 
        catch (error) {
            console.log(error) ;
        }
    }
)

export const createPostAction = createAsyncThunk(
    'post/createPostAction',
    async ({author,title,desciption}) => {
        const body = {
            author,title,desciption
        }
        try {
            const response = await axios.post(`${apiUrl}`,body) ;
            return response.data.post ;    
        } 
        catch (error) {
            console.log(error) ;
        }
    }
)

export const deletePostAction = createAsyncThunk(
    'post/deletePostAction',
    async (id) => {
        try {
            const response = await axios.delete(`${apiUrl}/${id}`) ;
            return response.data.post ;
        }
        catch (error) {
            console.log(error) ;
        }
    }
)

export const updatePostAction = createAsyncThunk(
    'post/updatePostAction',
    async (post) => {
        const {_id,title,desciption,author} = post ;
        const body = {
            title,author,desciption
        }
        try {
            const response = await axios.put(`${apiUrl}/${_id}`,body) ;    
            return response.data.post ;
        }
        catch (error) {
            console.log(error) ;
        }
    }
)

export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers : {
        setPostClick : (state,action) => {
            state.post = action.payload
        },
        setShowModalCreate : (state,actions) => {
            state.showModalCreate = actions.payload
        },
        setShowModalUpdate : (state,actions) => {
            state.showModalUpdate = actions.payload
        },
    },
    extraReducers: {
        [getPostAction.fulfilled] : (state,actions) => {
            state.posts = actions.payload ;
        },
        [createPostAction.fulfilled] : (state,actions) => {
            state.posts.push(actions.payload) ;
        },
        [deletePostAction.fulfilled] : (state,action) => {
            const newData = state.posts.filter( item => item._id != action.payload._id) 
            state.posts = newData ;
        },
        [updatePostAction.fulfilled] : (state,action) => {
            const newData = state.posts.map( item => item._id === action.payload._id ? action.payload : item )
            state.posts = newData ;
        }
    }
})

export const { setPostClick, setShowModalCreate, setShowModalUpdate } = postSlice.actions ;

export default postSlice.reducer;