import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    characters: [],
    info: {},
    pageNum: 0,
    searchText: "",
    modalActive: false,
};

export const characterSlice = createSlice({
    name: "character",
    initialState,
    reducers: {
        setItems(state, action) {
            state.characters = action.payload;
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
        setModal(state, action) {
            state.modalActive = action.payload;
        },
    },
});

export default characterSlice.reducer;
