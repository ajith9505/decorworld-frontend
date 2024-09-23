import { apiSlice } from "./apiSlice";

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `/user/auth`,
                method: "POST",
                body: data,
            })
        }),
        register: builder.mutation({
            query: (data) => ({
                url: `/user`,
                method: "POST",
                body: data,
            }),
        }),
        logout: builder.mutation({
            query: () => ({
                url: 'user/logout',
                method: "POST",
            }),
        }),
        updateProfile: builder.mutation({
            query: (data) => ({
                url: `user/profile`,
                method: "PUT",
                body: data,
            }),
        }),
        getUsers: builder.query({
            query: () => ({
                url: 'user',
            }),
            providesTags: ["User"],
            keepUnusedDataFor: 5,
        }),
        deleteUser: builder.mutation({
            query: (userId) => ({
                url: `user/${userId}`,
                method: "DELETE",
            }),
        }),
        getUserDetails: builder.query({
            query: (id) => ({
                url: `user/${id}`,
            }),
            keepUnusedDataFor: 5,
        }),
        updateUser: builder.mutation({
            query: (data) => ({
                url: `user/${data.userId}`,
                method: "PUT",
                body: data
        }),
            invalidatesTags: ["User"],
        }),
    })
})

export const {
    useLoginMutation,
    useLogoutMutation,
    useRegisterMutation,
    useUpdateProfileMutation,
    useGetUsersQuery,
    useDeleteUserMutation,
    useUpdateUserMutation,
    useGetUserDetailsQuery,
} = userApiSlice