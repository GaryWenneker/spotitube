import { Action, ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { ApolloClient, QueryOptions } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { TypeKeys } from '../types/track-types';
import { TypeKeys as AlbumTypeKeys } from '../types/album-types';
import { GET_TRACKS_QUERY } from './queries';


const link = createHttpLink({
    uri: 'http://localhost/musixmatch/v1/graphql',
    // credentials: 'same-origin'
});

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link,
});

interface IAction<Action> {
    type: string
    payload?: any
}

const setCurrentTrack = (data: any) => {
    return function (dispatch, getState) {
        console.log('setting track', data);
        dispatch(setTrack(data))
    }
}

const getTracksData = (album: any) => {
    return function (dispatch, getState) {
        var variables = {id: album.id};
        return client.query({ query: GET_TRACKS_QUERY, variables: variables }).then(function (response) {
            dispatch(setAlbum(album))
            dispatch(success(response))

        }).catch(function (error) {
            //console.log(error)
        })
    }
}
const success = (TracksData: any) => {
    return {
        type: TypeKeys.GET_Tracks,
        payload: TracksData,
        TracksData
    }
}

const setTrack = (data: any) => {
    return {
        type: TypeKeys.SET_Tracks,
        payload: data,
        data
    }
}

const setAlbum = (AlbumData: any) => {
    return {
        type: AlbumTypeKeys.SET_Album,
        payload: AlbumData,
        AlbumData
    }
}

export {
    getTracksData, IAction, setCurrentTrack
}