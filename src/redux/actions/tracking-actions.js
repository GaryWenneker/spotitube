import { trackingApi } from '@sitecore-jss/sitecore-jss-tracking';
import { action } from 'typesafe-actions';
import { TrackingActionTypes } from '../types/tracking-types';
import { dataFetcher } from "./../../utils/dataFetcher";
const config = {
    "sitecoreApiKey": "{5339D3FA-E63B-4FFF-9349-CC2C76413C47}",
    "sitecoreApiHost": "http://spotify.wenneker.local",
    "jssAppName": "spotitube",
    "defaultLanguage": "en",
    "graphQLEndpointPath": "/api/spotitube",
    "graphQLEndpoint": "http://localhost:3000/api/spotitube?sc_apikey={5339D3FA-E63B-4FFF-9349-CC2C76413C47}"
};
const trackingApiOptions = {
    host: config.sitecoreApiHost,
    querystringParams: {
        sc_apikey: config.sitecoreApiKey,
    },
    fetcher: dataFetcher
};
const track = (event) => {
    return function (dispatch, getState) {
        console.log(`SEND TRACK ${event}`);
        trackingApi
            // note the events are an array - batching is supported
            .trackEvent([{ eventId: event }], trackingApiOptions)
            .then(() => {
            dispatch(artistSearchedClickedRequest);
            console.log(`Tracked ${event}`);
        })
            .catch((error) => console.error(error));
    };
};
// Here we use the `action` helper function provided by `typesafe-actions`.
// This library provides really useful helpers for writing Redux actions in a type-safe manner.
// For more info: https://github.com/piotrwitek/typesafe-actions
export const artistSearchedClickedRequest = () => action(TrackingActionTypes.ARTIST_SEARCHED);
export const artistClickedRequest = () => action(TrackingActionTypes.ARTIST_CLICKED);
export const relatedArtistClickedRequest = () => action(TrackingActionTypes.RELATED_ARTIST_CLICKED);
export const albumClickedRequest = () => action(TrackingActionTypes.ALBUM_CLICKED);
export const trackClickedRequest = () => action(TrackingActionTypes.TRACK_CLICKED);
export const playerClickedRequest = () => action(TrackingActionTypes.PLAYER_CLICKED);
export { track };
