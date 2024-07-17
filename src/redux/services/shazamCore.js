import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = 'https://shazam-core7.p.rapidapi.com';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: (headers) => {
      headers.set('x-rapidapi-key', '512abd6e6bmshde9e8639c369ed4p1aaa29jsnf054160c5c1e')
      return headers
    },
  }


  ),

  endpoints: (builder) => ({
    getTopCharts: builder.query({
      query: () => '/charts/get-top-songs-in-world'
    })
  })

})

export const { useGetTopChartsQuery } = shazamCoreApi
