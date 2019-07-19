import { TypeKeys } from "../types/album-types";
const initState = {};
export const AlbumReducer = (state = initState, action) => {
    switch (action.type) {
        case TypeKeys.SET_Album:
            return Object.assign({}, state, action.payload);
        case TypeKeys.CLEAR_Album:
            return {};
        default:
            return state;
    }
};
