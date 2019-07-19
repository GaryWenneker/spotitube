import { TypeKeys } from '../types/player-types';

const clearPlayerState = () => {
    return {
        type: TypeKeys.CLEAR_Player,
        payload: null,
    }
}

const setPlayerState = (data: any) => {
    return {
        type: TypeKeys.SET_Player,
        payload: data,
        data
    }
}

const clearPlayer = () => {
    return function (dispatch, getState) {
        console.log('clearing state');
        dispatch(clearPlayerState())
    }
}

const setPlayer = (data: any) => {
    return function (dispatch, getState) {
        console.log('setting state', data);
        dispatch(setPlayerState(data))
    }
}

export {
    clearPlayer, setPlayer
}