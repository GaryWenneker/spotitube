export enum TypeKeys {
    SET_Player = 'SET_Player',
    CLEAR_Player = 'CLEAR_Player',
}

export interface ProgressState {
    playedSeconds: number,
    played: number,
    loadedSeconds: number,
    loaded: number
}

export interface PlayerState {
    url: string,
    pip: boolean,
    playing: boolean,
    volume: number,
    muted: boolean,
    played: number,
    loaded: number,
    duration: number,
    playbackRate: number,
    loop: boolean,
    progress: ProgressState
} 

export type ActionTypes =
 | ISetTrackAction
 | IClearTrackAction;


export interface ISetTrackAction {
    type: TypeKeys.SET_Player;
    payload: PlayerState;
}

export interface IClearTrackAction {
    type: TypeKeys.CLEAR_Player;
    payload: PlayerState;
}