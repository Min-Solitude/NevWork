import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type Music = {
    id: number;
    name: string;
};

export const musicApi = createApi({
    reducerPath: 'musicApi',
    refetchOnFocus: true,
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/',
    }),
    endpoints: (builder) => ({
        getAllMusics: builder.query<Music[], null>({
            query: () => 'music',
        }),
    }),
});

export const { useGetAllMusicsQuery } = musicApi;
