import { ActionTypes, TypeKeys } from "../types/player-types";

const initState: any = {
}

export const PlayerReducer = (state = initState, action: ActionTypes) => {

    switch (action.type) {

        case TypeKeys.CLEAR_Player:
        return null;

        case TypeKeys.SET_Player:
            return {...state, ...action.payload};

        default:
            return state;
    }
}