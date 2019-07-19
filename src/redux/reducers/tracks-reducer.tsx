import { ActionTypes, TypeKeys } from "../types/track-types";

const initState: any = {
}

export const TracksReducer = (state = initState, action: ActionTypes) => {

    switch (action.type) {

        case TypeKeys.GET_Tracks:
            return {...state, ...action.payload.data};

        case TypeKeys.CLEAR_Tracks:
            return {};

        case TypeKeys.SET_Tracks:
            return {...state, currentTrack: action.payload};

        default:
            return state;
    }
}