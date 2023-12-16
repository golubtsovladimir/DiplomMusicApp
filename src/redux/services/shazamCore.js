import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', '4512cc1db9msh6863f500692f3b7p1d9c36jsnebd519650961');

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
    getSongsBySearch:builder.query({ query: (searchTerm) => `/search?term=${searchTerm}&locale=ru-RU&offset=4&limit=4` }),
    getSongsBySearchReturn:builder.query({ query: (searchTerm) => `/search?term=${searchTerm}&locale=ru-RU&offset=0&limit=4` }),
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
