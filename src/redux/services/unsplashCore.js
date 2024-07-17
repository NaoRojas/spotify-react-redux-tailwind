import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://api.unsplash.com';

export const unsplashCoreApi = createApi({
  reducerPath: 'unsplashCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: (headers) => {
      headers.set('Authorization', 'Client-ID 4kTcgBYkj6LvNP4GIxTUy2h0tao8lkCetEOMQMASDXY');
      return headers;
    },
  }),

  endpoints: (builder) => ({
    getRandomPhoto: builder.query({
      query: () => '/photos/random?count=10',
    }),
  }),
});

export const { useGetRandomPhotoQuery } = unsplashCoreApi;
