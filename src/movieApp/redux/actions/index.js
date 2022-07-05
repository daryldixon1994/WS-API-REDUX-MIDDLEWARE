import { ADD_NEW_MOVIE } from "../constants";

export const getSearch = (payload) => {
    return {
        type: "GET_SEARCH",
        payload,
    };
};

export const getRate = (payload) => {
    return {
        type: "GET_RATE",
        payload,
    };
};

export const addNewMovie = (payload) => {
    console.log(payload);
    return {
        type: ADD_NEW_MOVIE,
        payload,
    };
};
