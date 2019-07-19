// Use `enum`s for better autocompletion of action type names. These will
// be compiled away leaving only the final value in your compiled code.
//
// Define however naming conventions you'd like for your action types, but
// personally, I use the `@@context/ACTION_TYPE` convention, to follow the convention
// of Redux's `@@INIT` action.
export var TrackingActionTypes;
(function (TrackingActionTypes) {
    TrackingActionTypes["ARTIST_SEARCHED"] = "@@tracking/ARTIST_SEARCHED";
    TrackingActionTypes["ARTIST_CLICKED"] = "@@tracking/ARTIST_CLICKED";
    TrackingActionTypes["ALBUM_CLICKED"] = "@@tracking/ALBUM_CLICKED";
    TrackingActionTypes["RELATED_ARTIST_CLICKED"] = "@@tracking/RELATED_ARTIST_CLICKED";
    TrackingActionTypes["TRACK_CLICKED"] = "@@tracking/TRACK_CLICKED";
    TrackingActionTypes["PLAYER_CLICKED"] = "@@tracking/PLAYER_CLICKED";
})(TrackingActionTypes || (TrackingActionTypes = {}));
