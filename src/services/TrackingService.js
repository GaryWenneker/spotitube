import { trackingApi } from "@sitecore-jss/sitecore-jss-tracking";
import { dataFetcher } from "./../utils/dataFetcher";
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
        sc_apikey: config.sitecoreApiKey
    },
    fetcher: dataFetcher
};
export function trackEventSubscribe(eventId) {
    return trackGoal("Subscribe to Event");
}
export function trackEventUnsubscription(eventId) {
    return trackGoal("Unsubscribe to Event");
}
export function trackEventFavorite(eventId) {
    return trackGoal("Favorite Event");
}
export function trackEventUnfavorite(eventId) {
    return trackGoal("Unfavorite Event");
}
export function trackCompleteRegistration() {
    return trackGoal("Complete Registration");
}
export function trackCompleteFavoriteSports() {
    return trackGoal("Complete Favorite Sports");
}
export function trackCompleteDemographics() {
    return trackGoal("Complete Demographics");
}
export function trackGoal(goalId) {
    return trackingApi
        .trackEvent([{ goalId }], trackingApiOptions)
        .then(() => console.log("Goal pushed to JSS tracker API"))
        .catch(error => console.error(error));
}
