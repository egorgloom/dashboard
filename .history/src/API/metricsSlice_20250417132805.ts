import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IMetrics } from '../interfaces/interface'


export const metricsSlice = createApi({
    reducerPath: 'metricsSlice',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://server-shop-co.onrender.com/'}),
    tagTypes: ['metrics'],
    endpoints: (builder) => ({
        getMetrics: builder.query<IMetrics[], void>({
            query: () => 'metrics',
            providesTags: ['metrics'],
        }),
        getItemMetric: builder.query<IMetrics, number>({
            query: (id) => `metrics/${id}`,
            providesTags: ['metrics'],

        })

})
})

export const {useGetMetricsQuery, useGetItemMetricQuery} = metricsSlice;