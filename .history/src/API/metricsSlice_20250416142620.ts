import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const metricsSlice = createApi({
    reducerPath: 'metricsSlice',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://server-shop-co.onrender.com/metrics'}),
    tagTypes: ['metrics'],
    endpoints: (builder) => ({
        getCard: builder.query<metrics[], string>({
            query: () => '/card',
            providesTags: ['Card'],
        }),

})
})

export const {useGetMetricsQuery} = metricsSlice