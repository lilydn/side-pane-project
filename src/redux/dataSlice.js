import { createSlice } from '@reduxjs/toolkit';
import { agent_description, event_description } from '../utils/dummyData';

export const dataSlice = createSlice({
	name: 'data',
	initialState: {
		agent_description: null,
		event_description: null,
	},
	reducers: {
		setAgentDescription: (state, action) => {},
		setEventDescription: (state, action) => {
			// state.metaData = action.payload.meta_data;
			// state.limit = action.payload.meta_data.limit;
			// state.companies = action.payload.companies;
			// state.companiesLoading = false;
		},
	},
});

export const fetchAgentDescription = () => async (dispatch) => {
	try {
		// const resolve = ;
		const fetchedData = await new Promise((resolve, reject) => setTimeout(() => agent_description, 3000));
		console.log('🚀 ~ file: dataSlice.js:27 ~ fetchAgentDescription ~ fetchedData', fetchedData);
	} catch (err) {}
	// dispatch(setColumns(colOrder));
};

export const { setAgentDescription, setEventDescription } = dataSlice.actions;

export default dataSlice.reducer;
