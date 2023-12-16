import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', '499d305926mshb48eb9d16bf4680p1d8ccfjsn6adce8316e37');

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => '/charts/track' }),
    getTopChartsCountry: builder.query({ query: () => '/charts/track?locale=ru-RU&listId=ip-city-chart-498677' }),
    getSongDetails: builder.query({ query: ({songid}) => `/shazam-songs/get-details?id=${songid}` }),
    getSongRelated: builder.query({ query: ({songid}) => `/shazam-songs/list-similarities?id=track-similarities-id-${songid}` }),
    getArtistDetails: builder.query({ query: ({artistId}) => `/artists/get-top-songs?id=${artistId}` }),
    getArtistDetailsPhoto:builder.query({ query: ({artistId}) => `/artists/get-details?id=${artistId}` }),
  }),
});

export const {
  useGetTopChartsQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
  useGetArtistDetailsQuery,
  useGetTopChartsCountryQuery,
  useGetArtistDetailsPhotoQuery
} = shazamCoreApi;
