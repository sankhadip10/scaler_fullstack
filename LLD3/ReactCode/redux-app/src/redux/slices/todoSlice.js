import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const fetchAllTodos = createAsyncThunk('todos/fetchAll', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')

    const todos = await response.json();
    return todos;
})
//dispach(fetchAllTodos)
const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        data: [],
        isLoading: false,
        error: null,
    },
    reducers: {},
    extraReducers: builder => {
        //1.when API call starts
        builder.addCase(fetchAllTodos.pending, (state) => {
            state.isLoading = true;
        });
        //2.when API call starts
        builder.addCase(fetchAllTodos.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        //3.When API call Fails
        builder.addCase(fetchAllTodos.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        });
    },
});

export default todoSlice.reducer;