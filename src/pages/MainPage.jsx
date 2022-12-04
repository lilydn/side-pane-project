import React from 'react';
import Panel from './Panel';
import { Grid } from '@mui/material';

function MainPage() {
	return (
		<Grid
			container
			direction="row"
			justifyContent="center"
			alignItems="center"
			columnSpacing={{ xs: 8, md: 14, lg: 20 }}
			sx={{
				height: '100vh',
			}}
		>
			<Grid item>
				<Panel type="agent_description" />
			</Grid>
			<Grid item>
				<Panel type="event_description" />
			</Grid>
		</Grid>
	);
}

export default MainPage;
