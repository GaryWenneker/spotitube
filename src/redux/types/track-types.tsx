

export enum TypeKeys {
    GET_Tracks = 'GET_Tracks',
    CLEAR_Tracks = 'CLEAR_Tracks',
    SET_Tracks = 'SET_Tracks',
}

export type ActionTypes =
 | IGetTrackAction
 | IClearTrackAction
 | ISetTrackAction;

export interface IGetTrackAction {
    type: TypeKeys.GET_Tracks;
    payload: any;
}

export interface IClearTrackAction {
    type: TypeKeys.CLEAR_Tracks;
    payload: any;
}

export interface ISetTrackAction {
    type: TypeKeys.SET_Tracks;
    payload: any;
}