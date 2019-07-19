import { TypeKeys } from "../types/track-types";
const initState = {};
export const TracksReducer = (state = initState, action) => {
    switch (action.type) {
        case TypeKeys.GET_Tracks:
            return Object.assign({}, state, action.payload.data);
        case TypeKeys.CLEAR_Tracks:
            return {};
        case TypeKeys.SET_Tracks:
            return Object.assign({}, state, { currentTrack: action.payload });
        default:
            return state;
    }
};
