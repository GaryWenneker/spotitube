import { TypeKeys } from "../types/artist-types";
const initState = {};
export const ArtistReducer = (state = initState, action) => {
    switch (action.type) {
        case TypeKeys.GET_Artist:
            return Object.assign({}, state, action.payload.data.artist);
        default:
            return state;
    }
};
