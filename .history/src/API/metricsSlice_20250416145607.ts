import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { metrics } from '../interfaces/interface'


export const metricsSlice = createApi({
    reducerPath: 'metricsSlice',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://server-shop-co.onrender.com'}),
    tagTypes: ['metrics'],
    endpoints: (builder) => ({
        getCard: builder.query<any, any>({
            query: () => '/metrics',
            providesTags: ['metrics'],
        }),

})
})

export const {useGetCardQuery} = metricsSlice;