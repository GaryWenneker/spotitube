export enum TypeKeys {
    SET_Album = 'SET_Album',
    CLEAR_Album = 'CLEAR_Album'
}

export type ActionTypes =
 | ISETAlbumAction
 | ICLEARAlbumAction;

export interface ISETAlbumAction {
    type: TypeKeys.SET_Album;
    payload: any;
}

export interface ICLEARAlbumAction {
    type: TypeKeys.CLEAR_Album;
    payload: any;
}