import { ActionTypes, TypeKeys } from "../types/album-types";

const initState: any = {
}

export const AlbumReducer = (state = initState, action: ActionTypes) => {

    switch (action.type) {

        case TypeKeys.SET_Album:
            return {...state, ...action.payload};

        case TypeKeys.CLEAR_Album:
            return {};

        default:
            return state;
    }
}