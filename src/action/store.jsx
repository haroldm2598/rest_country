import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from './reducer/countrySlice';
import { countriesApi } from './reducer/apiSlice';

export const store = configureStore({
	reducer: {
		[countriesApi.reducerPath]: countriesApi.reducer,
		dataTemplate: countriesReducer
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(countriesApi.middleware)
});
