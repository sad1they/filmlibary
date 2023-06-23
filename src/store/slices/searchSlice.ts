import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
    name: 'movie',
    initialState: {
        query: '',
        bestMovies: []
    },
    reducers: {
        setSearch: (state, action) => {
            state.query = action.payload;
        },
        setBestMovies: (state, action) => {
            state.bestMovies = action.payload;
        },
    }
});

export const { setSearch, setBestMovies } = searchSlice.actions;

export default searchSlice.reducer;
