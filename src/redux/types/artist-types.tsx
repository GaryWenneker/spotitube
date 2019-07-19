

export enum TypeKeys {
    GET_Artist = 'GET_Artist',
}

export type ActionTypes =
 | IGetArtistAction;

export interface IGetArtistAction {
    type: TypeKeys.GET_Artist;
    payload: any;
}