import { apiSlice } from "./apiSlice";

export const paymentApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        order: builder.mutation({
            query: (data) => ({
                url: '/order',
                method: 'POST',
                body: data
            })
        }),

        confirmOrder: builder.mutation({
            query: (data) => ({
                url: 'order/validate',
                method: 'POST',
                body: data
            })
        }),

        getOrders: builder.query({
            query: () => '/getOrders'
        })
    })
})

export const {
    useOrderMutation,
    useConfirmOrderMutation,
    useGetOrdersQuery
} = paymentApiSlice