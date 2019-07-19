
export interface Tracking {
    name: string
}

// This type is basically shorthand for `{ [key: string]: any }`. Feel free to replace `any` with
// the expected return type of your API response.
export type ApiResponse = Record<string, any>

// Use `enum`s for better autocompletion of action type names. These will
// be compiled away leaving only the final value in your compiled code.
//
// Define however naming conventions you'd like for your action types, but
// personally, I use the `@@context/ACTION_TYPE` convention, to follow the convention
// of Redux's `@@INIT` action.
export enum TrackingActionTypes {
    ARTIST_SEARCHED = '@@tracking/ARTIST_SEARCHED',
    ARTIST_CLICKED = '@@tracking/ARTIST_CLICKED',
    ALBUM_CLICKED = '@@tracking/ALBUM_CLICKED',
    RELATED_ARTIST_CLICKED = '@@tracking/RELATED_ARTIST_CLICKED',
    TRACK_CLICKED = '@@tracking/TRACK_CLICKED',
    PLAYER_CLICKED = '@@tracking/PLAYER_CLICKED',
}

// Declare state types with `readonly` modifier to get compile time immutability.
// https://github.com/piotrwitek/react-redux-typescript-guide#state-with-type-level-immutability
export interface TrackingState {
    readonly loading: boolean
    readonly data: Tracking[]
    readonly errors?: string
}