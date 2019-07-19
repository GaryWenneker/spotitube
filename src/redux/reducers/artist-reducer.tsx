import { ActionTypes, TypeKeys } from "../types/artist-types";

const initState: any = {
}

export const ArtistReducer = (state = initState, action: ActionTypes) => {

    switch (action.type) {

        case TypeKeys.GET_Artist:
            return {...state, ...action.payload.data.artist};

        default:
            return state;
    }
}