import { combineReducers, configureStore } from "@reduxjs/toolkit";
import characterReducer from "./reducers/CharacterSlice";
import locationReducer from "./reducers/LocationSlice";
import episodeReducer from "./reducers/EpisodeSlice";

const rootReducer = combineReducers({
    characterReducer,
    locationReducer,
    episodeReducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    });
};
