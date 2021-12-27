import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    episodes: [],
    info: {},
    pageNum: 0,
    searchText: "",
};

export const episodeSlice = createSlice({
    name: "episode",
    initialState,
    reducers: {
        setItems(state, action) {
            state.episodes = action.payload;
        },
        setInfo(state, action) {
            state.info = action.payload;
        },
        setPage(state, action) {
            state.pageNum = action.payload;
        },
        setSearch(state, action) {
            state.searchText = action.payload;
        },
    },
});

export default episodeSlice.reducer;
