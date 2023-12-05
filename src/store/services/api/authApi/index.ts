import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type Auth = {
    id: number;
    username: string;
    email: string;
};

export const authApi = createApi({
    reducerPath: 'authApi',
    refetchOnFocus: true,
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.PATH_URL_BACKEND,
    }),
    endpoints: (builder) => ({
        getUserById: builder.query<Auth, any>({
            query: () => 'auth',
        }),
    }),
});

export const { useGetUserByIdQuery } = authApi;
