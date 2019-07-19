
import { Action, ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { ApolloClient, QueryOptions } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { TypeKeys } from '../types/artist-types';
import { TypeKeys as AlbumTypeKeys } from '../types/album-types';
import { TypeKeys as TrackTypeKeys } from '../types/track-types';
import { GET_ARTIST_QUERY, SEARCH_ARTISTS_QUERY } from './queries';


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

const clearAlbum = () => {
    return {
        type: AlbumTypeKeys.CLEAR_Album,
        payload: null,
    }
}

const clearTracks = () => {
    return {
        type: TrackTypeKeys.CLEAR_Tracks,
        payload: null,
    }
}

const getsearchSingleArtist = (query: string) => {
    return function (dispatch, getState) {
        var variables = {query: query};
        return client.query({ query: SEARCH_ARTISTS_QUERY, variables: variables }).then(function (response) {
            let data = (response.data as any).artistSearch;
            if(data && data[0]) {                
                dispatch(getArtistData(data[0].id));
            }            
        }).catch(function (error) {
            //console.log(error)
        })
    }
}

const getArtistData = (id: string) => {
    return function (dispatch, getState) {
        var variables = {id: id};
        return client.query({ query: GET_ARTIST_QUERY, variables: variables }).then(function (response) {
            dispatch(clearAlbum())
            dispatch(clearTracks())
            dispatch(success(response))
        }).catch(function (error) {
            //console.log(error)
        })
    }
}
const success = (ArtistData: any) => {
    return {
        type: TypeKeys.GET_Artist,
        payload: ArtistData,
        ArtistData
    }
}

export {
    getArtistData, getsearchSingleArtist, IAction
}