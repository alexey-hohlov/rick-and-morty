import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    locations: [],
    info: {},
    pageNum: 0,
    searchText: "",
};

export const locationSlice = createSlice({
    name: "location",
    initialState,
    reducers: {
        setItems(state, action) {
            state.locations = action.payload;
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

export default locationSlice.reducer;
