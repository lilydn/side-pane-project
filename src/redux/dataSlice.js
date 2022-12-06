import { createSlice } from '@reduxjs/toolkit';
import { agent_description, event_description } from '../utils/dummyData';

export const dataSlice = createSlice({
	name: 'data',
	initialState: {
		agent_description: null,
		event_description: null,
	},
	reducers: {
		setAgentDescription: (state, action) => {
			state.agent_description = action.payload;
		},
		setEventDescription: (state, action) => {},
	},
});

export const fetchAgentDescription = () => async (dispatch) => {
	try {
		let response = agent_description;
		response = {
			...response,
			associated_alerts: {
				...response.associated_alerts,
				total_alerts: Math.floor(Math.random() * 100),
			},
		};
		dispatch(setAgentDescription(response));
	} catch (err) {}
};

export const { setAgentDescription, setEventDescription } = dataSlice.actions;

export default dataSlice.reducer;
