import { combineReducers } from 'redux';
import { ArtistReducer } from './artist-reducer';
import { TracksReducer } from './tracks-reducer';
import { AlbumReducer } from './album-reducer';
import { PlayerReducer } from './player-reducer';

const rootReducer = combineReducers({
    artist: ArtistReducer,
    tracks: TracksReducer,
    album: AlbumReducer,
    player: PlayerReducer
  });
  
  export default rootReducer;