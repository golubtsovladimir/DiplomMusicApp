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
    getSongDetails: builder.query({ query: ({songid}) => `/shazam-songs/get-details?id=${songid}` })
  }),
});

export const {
  useGetTopChartsQuery,
  useGetSongDetailsQuery,
} = shazamCoreApi;
