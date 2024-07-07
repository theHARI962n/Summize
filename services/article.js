import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;
console.log("API Key:", rapidApiKey); // Log the API key to ensure it's being loaded correctly


export const articleApi = createApi({
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({ baseUrl:'https://article-extractor-and-summarizer.p.rapidapi.com/',
    prepareHeaders: (headers) => {
        headers.set('x-rapidapi-key', rapidApiKey);
        headers.set('x-rapidapi-host', 'article-extractor-and-summarizer.p.rapidapi.com');
        console.log("Headers:", headers);
        return headers;
    } 
}),
    endpoints: (builder) => ({
        getSummary: builder.query({
            query: (params) => `/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`,
        }),
    }),
});

export const { useLazyGetSummaryQuery } = articleApi;