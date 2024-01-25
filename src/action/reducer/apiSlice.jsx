import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const countriesApi = createApi({
	reducerPath: 'countriesApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://restcountries.com/v3.1/' }),
	tagTypes: ['Countries'],
	endpoints: (builder) => ({
		getAllCountries: builder.query({
			query: () => 'all',
			providesTags: ['Countries']
		}),
		searchCountry: builder.query({
			query: (name) => ({
				url: `name/${name}`,
				method: 'GET'
			}),
			providesTags: ['Countries']
		}),
		searchRegion: builder.query({
			query: (region) => ({
				url: `region/${region}`,
				method: 'GET'
			}),
			providesTags: ['Countries']
		})
	})
});

export const {
	useGetAllCountriesQuery,
	useSearchCountryQuery,
	useSearchRegionQuery
} = countriesApi;
