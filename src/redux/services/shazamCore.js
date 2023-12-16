import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', '522594afa5msh4745ef8a5e641b5p16257cjsn521a4d444763');

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => '/charts/track' }),
    getTopChartsCountry: builder.query({ query: () => '/charts/track?locale=ru-RU&listId=ip-country-chart-RU' }),
    getSongDetails: builder.query({ query: ({songid}) => `/shazam-songs/get-details?id=${songid}` }),
    getSongRelated: builder.query({ query: ({songid}) => `/shazam-songs/list-similarities?id=track-similarities-id-${songid}` }),
    getArtistDetails: builder.query({ query: ({artistId}) => `/artists/get-top-songs?id=${artistId}` }),
    getArtistDetailsPhoto:builder.query({ query: ({artistId}) => `/artists/get-details?id=${artistId}` }),
    getSongsBySearch:builder.query({ query: (searchTerm) => `/search?term=${searchTerm}&locale=en-US&offset=0&limit=5` }),
    getSongsBySearchReturn:builder.query({ query: (searchTerm) => `/search?term=${searchTerm}&locale=ru-RUS&offset=2&limit=7` }),
  }),
});

export const {
  useGetTopChartsQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
  useGetArtistDetailsQuery,
  useGetTopChartsCountryQuery,
  useGetArtistDetailsPhotoQuery,
  useGetSongsBySearchQuery,
  useGetSongsBySearchReturnQuery
} = shazamCoreApi;
