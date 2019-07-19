import gql from 'graphql-tag';
export const SEARCH_ARTISTS_QUERY = gql `
query artistSearch($query: String!) {
    artistSearch(query: $query) {
    id
    name
    followers
    popularity
    images {
      height
      url
      width
    }
  }
}
`;
//"3RGLhK1IP9jnYFH4BRFJBS"
export const GET_ARTIST_QUERY = gql `
    query artist($id: String!){
    artist(id: $id) {
            id
            name
            followers
            popularity
            images {
            height
            url
            width
            }
            relatedArtists {
                id
                name
                images {
                    url
                }
            }
            albums(limit: 50) {
                id
                name
                images {
                    height
                    width
                    url
                }
            }
        }
    }
`;
export const GET_TRACKS_QUERY = gql `
    query GetIt($id: String!) {
        tracks(id: $id) {
            id
            name
            discNumber
            durationMs
            isPlayable
            isExplicit
        }
    }
`;
export const NEW_RELEASES_QUERY = gql `
{
    newReleases {
    id
    name
    images {
      width
      height
      url
    }
  }
}`;
