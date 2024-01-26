import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isSelected: undefined,
	hasSearch: undefined
};

const dataSlice = createSlice({
	name: 'countries',
	initialState,
	reducers: {
		selectedRegion: (state, action) => {
			state.isSelected = action.payload;
		},
		selectCountry: (state, action) => {
			state.hasSearch = action.payload;
		}
	}
});

export const { selectedRegion, selectCountry } = dataSlice.actions;
export default dataSlice.reducer;
