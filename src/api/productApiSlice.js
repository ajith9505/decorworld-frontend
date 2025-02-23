import { apiSlice } from "./apiSlice";

export const productApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => '/product'
        }),

        createProduct: builder.mutation({
            query: (data) => ({
                url: '/product',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ["Product"]
        }),

        getProductById: builder.query({
            query: (productId) => ({
                url: '/product/' + productId,
                keepUnsedDataFor: 5
            })
        })
    })
})

export const {
    useCreateProductMutation,
    useGetAllProductsQuery,
    useGetProductByIdQuery
} = productApiSlice