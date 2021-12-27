import axios from "axios";

//Create axios base url
const baseApi = axios.create({
    baseURL: "https://rickandmortyapi.com/api/",
});

//Get data from api;
export const apiCall = {
    async getCharacters(index, value){
        return await baseApi.get(`character?page=${index}&name=${value}`)
    },
    async getLocations(index, value){
        return await baseApi.get(`location?page=${index}&name=${value}`)
    },
    async getEpisodes(index, value){
        return await baseApi.get(`episode?page=${index}&name=${value}`)
    }
}