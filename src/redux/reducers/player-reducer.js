import { TypeKeys } from "../types/player-types";
const initState = {};
export const PlayerReducer = (state = initState, action) => {
    switch (action.type) {
        case TypeKeys.CLEAR_Player:
            return null;
        case TypeKeys.SET_Player:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
};
